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
  selector: 'app-nft-admin-update',
  templateUrl: './nft-admin-update.component.html',
  styleUrls: ['./nft-admin-update.component.css'],
})
export class NftAdminUpdateComponent implements OnInit {
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
    public dialogRef: MatDialogRef<NftAdminUpdateComponent>,
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

    console.log(this.nft);
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
    // this.provider = this.data.provider;
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
        this.laodService.getWalletInfo(async (signer?: ethers.Wallet) => {
          let cost = this.nftForm.controls.price.value as number;
          let forSale = this.nftForm.controls.isListed.value as boolean;

          this.isLoading = true;

          const price = ethers.utils.parseUnits(cost.toString(), 'ether');

          const gasPrice = await signer?.provider.getGasPrice();

          const options = {
            gasPrice: gasPrice,
            gasLimit: 500000,
          };

          try {
            if (
              this.collection == undefined ||
              this.nft == undefined ||
              this.nft?.tokenID == undefined ||
              this.nft?.metadata == undefined ||
              this.nft?.royalty == undefined
            ) {
              this.isLoading = false;
              return;
            }
            let contract = new ethers.Contract(
              thredMarketplace,
              THRED_MARKET.abi,
              signer
            );
            let condition = this.nft?.lazyMint && this.nft?.lazyHash;

            switch (condition) {
              // @ts-ignore
              case false:
                let t = await contract.updateItem(
                  this.nft?.itemId,
                  0,
                  forSale,
                  price,
                  options
                );
                await t.wait();
              default:
                const lazyMinter = new LazyMinter(
                  contract,
                  signer!,
                  'THRED-NFT'
                );
                const voucher = await lazyMinter.createVoucher(
                  this.nft?.tokenID,
                  this.nft?.metadata,
                  this.nft?.royalty,
                  price,
                  this.collection.customTokenCheck() == undefined
                );
                this.nft.lazyHash = voucher;
                this.nft.forSale = forSale;
                this.nft.price = price;

                await this.laodService.updateNFT(
                  this.nft,
                  Globals.storeInfo?.uid,
                  this.nft?.docID
                );
            }
            this.dialogRef.close(this.nft);
          } catch (error) {
            let data = (error as any).data;
            console.log(error);
            if (data && data.code == -32000) {
              this.err = 'Not enough MATIC' + ' in wallet!';
            } else {
              this.err = 'Something went wrong, please try again.';
            }
          }
          this.isLoading = false;
        });
    } else {
    }
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

  radioChange(event: any) {
    let val = event.value;

    this.cdr.detectChanges();
  }

  closeDialog() {
    // this.interval = undefined;
    this.dialogRef.close();
  }

  public fileOver(event: any) {}

  public fileLeave(event: any) {}
}
