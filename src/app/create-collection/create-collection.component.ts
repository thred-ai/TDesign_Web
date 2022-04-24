import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ethers } from 'ethers';
import { Globals } from '../globals';
import { Collection } from '../models/collection.model';
import { LoadService, Dict } from '../services/load.service';
import { Store } from '../models/store.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { thredMarketplace } from 'config';
const ERC721_MERCHANT = require('artifacts/contracts/ERC721Merchant/ERC721Merchant.sol/ERC721Merchant.json');
const THRED_MARKET = require('artifacts/contracts/ThredMarketplace/ThredMarketplace.sol/ThredMarketplace.json');

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css'],
})
export class CreateCollectionComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateCollectionComponent>,
    private cdr: ChangeDetectorRef,
    private loadService: LoadService,
    private spinner: NgxSpinnerService
  ) {}

  selectedTheme: Dict<any> = {};

  storeInfo?: Store;

  selectedThemeFn() {
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

  ngOnInit(): void {
    this.selectedTheme = this.selectedThemeFn();
    this.nftForm.controls.currency.setValue(
      Globals.storeInfo?.tokens[0].variations[0]
    );
    this.storeInfo = Globals.storeInfo;
  }

  err = '';

  async save() {
    if (this.nftForm.valid) {
      this.spinner.show('loader');

      let name = (this.nftForm.controls.title.value as string) ?? '';
      let symbol =
        (this.nftForm.controls.symbol.value as string) ?? ''.toUpperCase();

      let token = this.nftForm.controls.currency.value as Dict<any>;

      let customToken =
        token.contract != 'default' ? token.contract : undefined;
      let tokenName = token.name;

      var domain = name.replace(/\s/g, '').toUpperCase();

      var currency = {
        name: tokenName,
        token: customToken ?? null,
      };

      // this.loadService.getWalletInfo((signer?: ethers.Wallet) => {

      //   this.loadService.estimateGas(
      //     true,
      //     currency,
      //     symbol,
      //     name,
      //     ERC721_MERCHANT.abi,
      //     ERC721_MERCHANT.bytecode,
      //     signer!
      //   );

      //   this.spinner.hide('loader');
      // });

      this.loadService.deployCollection(
        name,
        symbol,
        ERC721_MERCHANT.abi,
        ERC721_MERCHANT.bytecode,
        currency,
        domain,
        (collection?: any) => {
          this.spinner.hide('loader');

          if (collection) {
            let col = new Collection(
              collection.name,
              collection.symbol,
              collection.NFTs,
              collection.contract,
              collection.currency,
              collection.collectionCount,
              collection.owner,
              collection.isPublic,
              collection.uid,
              collection.timestamp,
              collection.domain,
              collection.customToken,
              collection.available,
              collection.ABI,
              collection.volume
            );
            this.dialogRef.close(col);
          } else {
            this.err = 'Deployment Stalled. Please Try Again';
          }
        }
      );
    }
  }

  closeDialog() {
    // this.interval = undefined;
    this.dialogRef.close();
  }

  nftForm = this.fb.group({
    title: [null, Validators.required],
    symbol: [null, Validators.required],
    currency: [null, Validators.required],
  });
}
