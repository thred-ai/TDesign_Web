import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ethers } from 'ethers';
import { Globals } from '../globals';
import { Collection } from '../models/collection.model';
import { LoadService, Dict } from '../services/load.service';
import { Store } from '../models/store.model';
import { NgxSpinnerService } from 'ngx-spinner';
const ERC721_MERCHANT = require('artifacts/contracts/ERC721Merchant/ERC721Merchant.sol/ERC721Merchant.json');

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
  saving = false;

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

    this.storeInfo = Globals.storeInfo;
  }

  err = '';

  async save() {

    if (this.nftForm.valid) {
      this.saving = true;

      let name = (this.nftForm.controls.title.value as string) ?? '';
      let symbol =
        (this.nftForm.controls.symbol.value as string) ?? ''.toUpperCase();
      let royaltyAddress =
        (this.nftForm.controls.royaltyAddress.value as string) ??
        ethers.constants.AddressZero;
      let generate = (this.nftForm.controls.generatePage.value as boolean) ?? false

      var domain = name.replace(/\s/g, '').toUpperCase();

      var abi: any = ERC721_MERCHANT.abi;
      var bytecode: any = ERC721_MERCHANT.bytecode;

      // let customToken =
      //   token.contract != 'default'
      //     ? token.contract
      //     : ethers.constants.AddressZero;

      var deployedCollection: Collection | undefined = undefined;

      try {
        if (!deployedCollection) {
          this.loadService.deployCollection(
            name,
            symbol,
            abi,
            bytecode,
            domain,
            royaltyAddress != '' ? royaltyAddress : ethers.constants.AddressZero,
            generate,
            (col?: Collection) => {
              this.saving = false;
              if (col as Collection) {
                this.dialogRef.close({collection: col, generate});
              } else {
                throw 'Invalid';
              }
            }
          );
        }
      } catch (error) {
        console.log(error);
        this.saving = false;
        let data = (error as any).data;
        if (data && data.code == -32000) {
          this.err = 'Not enough MATIC' + ' in wallet!';
        } else {
          this.err = 'Something went wrong, please try again.';
        }
      }
    } else {
    }
  }

  closeDialog() {
    // this.interval = undefined;
    this.dialogRef.close();
  }

  nftForm = this.fb.group({
    title: [null, Validators.required],
    symbol: [null, Validators.required],
    royaltyAddress: [null],
    generatePage: [true]
  });

  radioChange(event: any) {
    let val = event.value;
    this.nftForm.controls.generatePage.setValue(val);
    this.cdr.detectChanges();
  }
}
