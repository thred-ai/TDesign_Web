import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { NFT } from '../models/nft.model';
import { Collection } from '../models/collection.model';
import { ethers, BigNumber } from 'ethers';
import { Globals } from '../globals';
import { Dict, LoadService } from '../services/load.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { Store } from '../models/store.model';
import { FormBuilder, Validators } from '@angular/forms';
import { CurrencyMaskInputMode } from 'ngx-currency';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { LazyMinter } from 'LazyMinter';
import { thredMarketplace } from 'config';
const THRED_MARKET = require('artifacts/contracts/ThredMarketplace/ThredMarketplace.sol/ThredMarketplace.json');

@Component({
  selector: 'app-nft-update',
  templateUrl: './nft-update.component.html',
  styleUrls: ['./nft-update.component.css'],
})
export class NftUpdateComponent implements OnInit {
  storeInfo?: Store;

  collection?: Collection;
  nft?: NFT;

  selectedTheme() {
    let co = Globals.storeInfo?.colorStyle?.btn_color;
    let bco = Globals.storeInfo?.colorStyle?.bg_color;
    let name = Globals.storeInfo?.colorStyle?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    var theme: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return theme;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NftUpdateComponent>,
    private cdr: ChangeDetectorRef,
    private laodService: LoadService,
    private spinner: NgxSpinnerService
  ) {
    this.storeInfo = Globals.storeInfo;

    this.collection = data.collection;
    this.customCurrencyMaskConfig.suffix = ` ${
      this.collection?.currency ?? 'MATIC'
    }`;
    this.nft = this.data.nft;
    if (this.nft?.price) {
      this.nftForm.controls.price.setValue(
        Number(ethers.utils.formatEther(this.nft?.price))
      );
    }
    this.nftForm.controls.isListed.setValue(this.nft?.forSale ?? false);
  }

  provider?: ethers.providers.Web3Provider;

  customCurrencyMaskConfig = {
    align: 'left',
    allowNegative: false,
    allowZero: true,
    decimal: '.',
    precision: 3,
    prefix: '',
    suffix: ' MATIC',
    thousands: ',',
    min: 0,
    inputMode: CurrencyMaskInputMode.NATURAL,
  };

  nftForm = this.fb.group({
    price: [null, Validators.required],
    isListed: [null, Validators.required],
  });

  fileName?: string;

  async ngOnInit() {
    this.provider = this.data.provider;
    // if (this.admin.selected)
  }

  set isLoading(isLoading: boolean) {
    if (isLoading) {
      this.spinner.show('loader');
    } else {
      this.spinner.hide('loader');
    }
  }

  admin?: AdminViewComponent;

  private convertBase64ToBlob(base64Image: string) {
    // Split into two parts
    const parts = base64Image.split(';base64,');

    // Hold the content type
    const imageType = parts[0].split(':')[1];

    // Decode Base64 string
    const decodedData = window.atob(parts[1]);

    // Create UNIT8ARRAY of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);

    // Insert all character code into uInt8Array
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }

    // Return BLOB image after conversion
    return new Blob([uInt8Array], { type: imageType });
  }

  err = '';

  async save() {
    if (this.nftForm.valid) {
      if (window.ethereum && typeof window.ethereum == 'object') {
        this.provider = new ethers.providers.Web3Provider(
          window.ethereum,
          'any'
        );
        Globals.provider = this.provider;
      }
      if (!Globals.provider?.getSigner()) {
        try {
          await Globals.checkProvider();
        } catch (error) {
          this.err = 'No Wallet Connected. Please try again';
          return;
        }
        return;
      }
      if (!(await (this.laodService.networkCheck() ?? false))) {
        this.err = 'Please switch your Network to the Polygon Mainnet';
        return;
      }

      let cost = this.nftForm.controls.price.value as number;
      let forSale = this.nftForm.controls.isListed.value as boolean;

      this.isLoading = true;

      const price = ethers.utils.parseUnits(cost.toString(), 'ether');

      let signer = this.provider?.getSigner();

      let address = (await signer?.getAddress()) ?? '';
      if (address?.toLowerCase() != this.nft?.seller?.toLowerCase()) {
        this.err = 'Wrong Wallet';
        return;
      }

      try {
        if (
          this.collection == undefined ||
          this.nft == undefined ||
          this.nft.tokenID == undefined ||
          this.nft.metadata == undefined ||
          this.nft.royalty == undefined
        ) {
          this.isLoading = false;
          return;
        }
        let contract = new ethers.Contract(
          thredMarketplace,
          THRED_MARKET.abi,
          signer
        );
        let contract2 = new ethers.Contract(
          this.nft.contractID,
          this.collection.ABI,
          signer
        );

        let isApproved = await contract2.isApprovedForAll(
          address,
          thredMarketplace
        );

        if (!isApproved) {
          try {
            let t2 = await contract2.setApprovalForAll(
              thredMarketplace,
              forSale
            );
            await t2.wait();
          } catch (error) {
            let data = (error as any).data;
            this.isLoading = false;
            if (data && data.code == -32000) {
              this.err = 'Not enough MATIC' + ' in wallet!';
            } else {
              this.err = 'Something went wrong, please try again.';
            }
          }
        }

        if (this.nft?.lazyMint && this.nft.lazyHash) {
          const lazyMinter = new LazyMinter(contract, signer!, 'THRED-NFT');

          const voucher = await lazyMinter.createVoucher(
            this.nft.tokenID,
            this.nft.metadata,
            this.nft.royalty,
            price,
            this.collection.customTokenCheck() == undefined
          );

          if (!voucher){
            this.isLoading = false;
            this.err = "Creation Cancelled"
            return
          }


          this.nft.lazyHash = voucher;
          this.nft.forSale = forSale;

          await this.laodService.updateNFT(
            this.nft,
            Globals.storeInfo?.uid,
            this.nft.docID
          );
        } else {
          // updateItem(
          //   MarketItem memory item,
          //   bool forSale,
          //   uint256 price
          let t = await contract.updateItem(this.nft.itemId, 0, forSale, price);
          await t.wait();
        }
        this.nft.price = price;
        this.nft.forSale = forSale;
        this.dialogRef.close(this.nft);
      } catch (error) {
        let data = (error as any).data;
        this.isLoading = false;
        console.log(error)
        if (data && data.code == -32000) {
          this.err = 'Not enough MATIC' + ' in wallet!';
        } else {
          this.err = 'Something went wrong, please try again.';
        }
      }
      this.isLoading = false;
    } else {
    }
  }

  async setProvider() {
    this.provider = await Globals.initializeProvider();
  }

  selectedIndicator() {
    if (!Globals.storeInfo) {
      return {
        name: '',
        color: '',
        bg_color: '',
      };
    }
    let co = Globals.storeInfo?.loading?.color;
    let bco = Globals.storeInfo?.loading?.bg_color;
    let name = Globals.storeInfo?.loading?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    var indicator: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return indicator;
  }

  async mintNFT(
    price: ethers.BigNumber,
    contract: ethers.Contract,
    contract2: ethers.Contract
  ) {
    // router.push('/')

    let gas = await contract.estimateGas;
  }

  radioChange(event: any) {
    let val = event.value;

    this.cdr.detectChanges();
  }

  closeDialog() {
    // this.interval = undefined;
    this.dialogRef.close();
  }

  acceptedFiles = '.png,.jpeg,.mp4,.mov,.mp3,.wav,.quicktime';

  public dropped(files: NgxFileDropEntry[]) {
    // this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file(async (file: File) => {
          // Here you can access the real file

          let arrs = this.acceptedFiles.replace(/\./g, '').split(',');
          let match = arrs.find((j) => {
            return file.type.indexOf(j) > -1;
          });
          if (!match) {
            return;
          }

          // You could upload it like this:
          // const formData = new FormData()
          // formData.append('logo', file, file.)

          // console.log(formData)
          // // Headers
          // const headers = new HttpHeaders({
          //   'security-token': 'mytoken'
          // })

          // this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          // .subscribe(data => {
          //   // Sanitized logo returned from backend
          // })

          let buffer = await file.arrayBuffer();

          var blob = new Blob([buffer]);
          this.nftForm.controls.format.setValue(null);
          this.nftForm.controls.file.setValue(null);

          var reader = new FileReader();
          reader.onload = (event: any) => {
            var base64 = event.target.result;
            this.nftForm.controls.file.setValue(base64);
            var format = 'none';
            if (file.type.indexOf('image') > -1) {
              format = 'image';
            } else if (file.type.indexOf('video') > -1) {
              format = 'video';
            }
            this.nftForm.controls.format.setValue(format);
            this.fileName = file.name;
            this.cdr.detectChanges();
          };

          reader.readAsDataURL(blob);
        });
      }
    }
  }

  public fileOver(event: any) {}

  public fileLeave(event: any) {}
}
