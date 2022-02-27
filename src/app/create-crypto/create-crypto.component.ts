import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { create } from 'ipfs-http-client';
import { FormBuilder, Validators } from '@angular/forms';
// import { Options } from 'ipfs-core/src/types';
import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from 'ngx-file-drop';
import { CurrencyMaskInputMode } from 'ngx-currency';
import { nftaddress } from 'config';
import { NFT } from '../models/nft.model';
import { Globals } from '../globals';
import { ethers, BigNumber } from 'ethers';
const NFTS = require('artifacts/contracts/Market.sol/NFT.json');

const client = create('https://ipfs.infura.io:5001/api/v0' as any); // eslint-disable-line no-use-before-define
import { LazyMinter, NFTVoucher } from 'LazyMinter';
import { Dict, LoadService } from '../services/load.service';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { Collection } from '../models/collection.model';
import { Store } from '../models/store.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-crypto',
  templateUrl: './create-crypto.component.html',
  styleUrls: ['./create-crypto.component.css'],
})
export class CreateCryptoComponent implements OnInit {

  storeInfo?: Store



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateCryptoComponent>,
    private cdr: ChangeDetectorRef,
    private laodService: LoadService,
    private spinner: NgxSpinnerService
  ) {
    console.log(client);
    this.nftContract = data.contract;
    this.storeInfo = Globals.storeInfo
  }

  nftContract: Collection;
  provider?: ethers.providers.Web3Provider;

  customCurrencyMaskConfig = {
    align: 'left',
    allowNegative: false,
    allowZero: false,
    decimal: '.',
    precision: 3,
    prefix: '',
    suffix: ' MATIC',
    thousands: ',',
    min: 0,
    inputMode: CurrencyMaskInputMode.NATURAL,
  };

  customCurrencyMaskConfig2 = {
    align: 'left',
    allowNegative: false,
    allowZero: false,
    precision: 0,
    prefix: '',
    suffix: ' %',
    max: 100,
    min: 1,
    inputMode: CurrencyMaskInputMode.NATURAL,
  };

  contracts = [
    {
      name: 'Public Contracts',
      contracts: [
        {
          name: 'Thred Main ERC721 Contract ' + '(' + nftaddress + ')',
          value: nftaddress,
        },
      ],
    },
  ];

  nftForm = this.fb.group({
    title: [null, Validators.required],
    description: [null],
    price: [null, Validators.required],
    file: [null, Validators.required],

    format: [null],
    lazyMint: [null],
    url: [null],
    royalty: [null],
    external_url: [null],
  });

  fileName?: string;

  ngOnInit(): void {
    this.provider = this.data.provider;
    // if (this.admin.selected)
    this.nftForm.controls.lazyMint.setValue(true);
  }

  traits = new Array<any>()

  addTrait(){
    
    let trait = {
      trait_type: '',
      value: ''
    }
    this.traits.push(trait)
  }

  removeTrait(i: number){
    this.traits.splice(i, 1)
  }

  set isLoading(isLoading: boolean){
    if (isLoading){
      this.spinner.show('loader')
    }
    else{
      this.spinner.hide('loader')
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

  async save() {
    if (this.nftForm.valid) {
      let name = this.nftForm.controls.title.value as string;
      let description = this.nftForm.controls.description.value as string;
      let cost = this.nftForm.controls.price.value as number;
      let contractNFT = this.nftContract.contract;
      let file = this.nftForm.controls.file.value as string;
      let format = this.nftForm.controls.format.value as string;
      let lazyMint = this.nftForm.controls.lazyMint.value as boolean;
      let royalty = (this.nftForm.controls.royalty.value as number) ?? 0.0;

      let traits =
        (this.traits as Array<Dict<any>>) ?? [];
      let external = (this.nftForm.controls.external_url.value as string) ?? '';

      this.isLoading = true

      try {
        if (file) {
          var uploadFile = this.convertBase64ToBlob(file);
          const added = await client.add(uploadFile, {
            progress: (prog) => console.log(`received: ${prog}`),
          });
          const url = `https://ipfs.infura.io/ipfs/${added.path}`;
          this.nftForm.controls.url.setValue(url);
        }
      } catch (error) {
        console.log('Error uploading file: ', error);
      }

      let url = this.nftForm.controls.url.value as string;

      var data1 = {
        name,
        description,
        image: url,
        traits: traits != [] ? traits : undefined,
        external_link: external != '' ? external : undefined,
      };

      const data = JSON.stringify(data1);

      try {
        const added = await client.add(data);
        const url2 = `https://ipfs.infura.io/ipfs/${added.path}`;
        /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
        const price = ethers.utils.parseUnits(cost.toString(), 'ether');
        const r = ethers.utils.parseUnits(royalty.toString(), 'ether');

        let signer = this.provider?.getSigner();

        console.log(contractNFT);

        let contract2 = new ethers.Contract(contractNFT, NFTS.abi, signer);

        const lazyMinter = new LazyMinter(
          contract2,
          signer!,
          this.nftContract.domain ?? 'THRED-NFT'
        );

        //tokenid 0x3C68CE8504087f89c640D02d133646d98e64ddd9

        this.laodService.getCollection(
          this.nftContract.contract,
          async (cl) => {
            if (!cl) {
              return;
            }
            let tokenId = (cl.collectionCount ?? 0) + 1
            const voucher = await lazyMinter.createVoucher(tokenId, url2, r, price);
            let nft = new NFT(
              tokenId,
              contractNFT,
              await signer?.getAddress(),
              false,
              lazyMint,
              format,
              royalty,
              voucher,
              url2
            );

            nft.format = format
            var x = ethers.utils.parseUnits('0.02', 'ether');
            if (voucher) {
              x = voucher['minPrice'] as ethers.BigNumber;
            }
            nft.price = x;
            nft.name = name;
            nft.description = description;
            nft.traits = traits;
            nft.external_url = external;
            nft.token = undefined;
            nft.isAvailable = true;
            
            // if (!lazyMint) {
            //   await this.mintNFT(voucher, price, contract2, contract3);
            // }
            // else{
            // console.log(voucher)
            // const transaction = await contract2.mintAndTransfer(voucher, { value: x });
            // await transaction.wait()

            let docID = await this.laodService.saveNFT(
              nft,
              Globals.storeInfo.uid
            );
            nft.docID = docID;
            nft.url = url;
            this.dialogRef.close(nft);
          }
        );
        // }
      } catch (error) {
        console.log('Error uploading file: ', error);
      }
      this.isLoading = false
    } else {
      console.log(this.nftForm.controls.title.invalid);
      console.log(this.nftForm.controls.price.invalid);
      console.log(this.nftForm.controls.file.invalid);
    }
  }

  

  selectedIndicator() {
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
    voucher: NFTVoucher,
    price: ethers.BigNumber,
    contract: ethers.Contract,
    contract2: ethers.Contract
  ) {
    // router.push('/')

    

    let gas = await contract.estimateGas;

    console.log(gas);

    
  }

  radioChange(event: any) {
    let val = event.value;

    this.nftForm.controls.lazyMint.setValue(val);
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
          console.log(droppedFile.relativePath, file);

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
            console.log(match);
            console.log(format);
            this.nftForm.controls.format.setValue(format);
            this.fileName = file.name;
            this.cdr.detectChanges();
          };

          reader.readAsDataURL(blob);
        });
      }
    }
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }
}
