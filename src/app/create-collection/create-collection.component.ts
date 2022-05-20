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

      var signer: ethers.Signer | undefined = undefined;

      var domain = name.replace(/\s/g, '').toUpperCase();

      if (window.ethereum && typeof window.ethereum == 'object') {
        Globals.provider = new ethers.providers.Web3Provider(
          window.ethereum,
          'any'
        );
      }
      if (Globals.provider) {
        signer = Globals.provider.getSigner();
      } else {
      }

      if (!signer) {
        try {
          await Globals.checkProvider();
          signer = Globals.provider?.getSigner();
        } catch (error) {
          this.err = 'No Wallet Connected. Please try again';
          return;
        }
      }
      if (!(await (this.loadService.networkCheck() ?? false))) {
        this.err = 'Please switch your Network to the Polygon Mainnet';
        return;
      }

      if (signer) {
        let wallet = await signer.getAddress();

        console.log(wallet)
        console.log(Globals.storeInfo?.walletAddress?.toLowerCase())

        if (
          wallet.toLowerCase() != Globals.storeInfo?.walletAddress?.toLowerCase()
        ) {
          this.err = 'Wrong Wallet';
          this.spinner.hide('loader')
          return;
        }

        var abi: any = ERC721_MERCHANT.abi;
        var bytecode: any = ERC721_MERCHANT.bytecode;

        let factory = new ethers.ContractFactory(abi, bytecode, signer);

        let admins = [thredMarketplace] as string[];
        let minters = [wallet, thredMarketplace] as string[];

        let customToken =
          token.contract != 'default'
            ? token.contract
            : ethers.constants.AddressZero;

        var deployedCollection: Collection | undefined = undefined;

        try {
          if (!deployedCollection) {
            let deployed = await factory.deploy(
              name,
              symbol,
              customToken,
              minters,
              admins
            );
            await deployed.deployed();

            let address = deployed.address;

            let collection = new Collection(
              name,
              symbol,
              {},
              address,
              token.name,
              0,
              wallet,
              true,
              Globals.storeInfo?.uid!,
              new Date(),
              domain,
              token.contract != 'default' ? token.contract : undefined,
              true,
              abi,
            );

            deployedCollection = collection;

            await this.loadService.saveCollectionInfo(
              collection,
              Globals.storeInfo?.uid
            );
          }

          try {
            let contract2 = new ethers.Contract(
              deployedCollection.contract,
              abi,
              signer
            );
            let t2 = await contract2.setApprovalForAll(thredMarketplace, true);
            await t2.wait();
            this.dialogRef.close(deployedCollection);
          } catch (error) {
            console.log(error);
            this.spinner.hide('loader');
            let data = (error as any).data;
            if (data && data.code == -32000) {
              this.err = 'Not enough MATIC' + ' in wallet!';
            } else {
              this.err = 'Something went wrong, please try again.';
            }
          }
        } catch (error) {
          console.log(error);
          this.spinner.hide('loader');
          let data = (error as any).data;
          if (data && data.code == -32000) {
            this.err = 'Not enough MATIC' + ' in wallet!';
          } else {
            this.err = 'Something went wrong, please try again.';
          }
        }
      } else {
      }
    } else {
    }
    this.spinner.hide('loader');
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
