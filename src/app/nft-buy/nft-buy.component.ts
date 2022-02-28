import { Component, OnInit, Inject } from '@angular/core';
import { Globals } from '../globals';
import { Dict, LoadService } from '../services/load.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { NFT } from '../models/nft.model';
import { Collection } from '../models/collection.model';
import { ethers, BigNumber } from 'ethers';
import { BehaviorSubject, from } from 'rxjs';
import detectEthereumProvider from '@metamask/detect-provider';
var abi = require('human-standard-token-abi');

@Component({
  selector: 'app-nft-buy',
  templateUrl: './nft-buy.component.html',
  styleUrls: ['./nft-buy.component.css'],
})
export class NftBuyComponent implements OnInit {
  nft: NFT;
  collection: Collection;

  storeInfo() {
    return Globals.storeInfo;
  }

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

  selectedIndicator() {
    let co = Globals.storeInfo?.loading?.color;
    let bco = Globals.storeInfo?.loading?.bg_color;
    let name = Globals.storeInfo?.loading?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    let indicator: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return indicator;
  }

  adding = false;
  shake = false;



  async purchase() {
    this.err = ''
    if (!Globals.provider?.getSigner()){
      this.err = 'No Wallet Connected. Please try again'
      return
    }
    if (this.nft.contractID && this.collection?.ABI) {
      this.adding = true;
      this.shake = true;
      this.spinner.show('purchase');
      // setTimeout(() => {
      //   this.shake = false;
      // }, 100);

      setTimeout(() => {
        this.adding = false;
      }, 1500);

      try {
        let val = Globals.provider.getSigner()

        if (typeof val == 'string'){ 
          this.err = 'No Wallet Connected. Please try again'
          throw('No Signer')
        }
        let contract = new ethers.Contract(
          this.nft.contractID,
          this.collection?.ABI,
          val as ethers.providers.JsonRpcSigner
        );
        
        var transaction: any = undefined;

        if (this.nft.lazyHash?.minPrice as BigNumber) {
          console.log('yes')
          console.log(this.nft.lazyHash)
          if (this.nft.lazyHash?.token && !this.nft.lazyHash.isNative) {
            console.log('wes')

            let contract3 = new ethers.Contract(
              this.nft.lazyHash?.token,
              abi,
              val as ethers.providers.JsonRpcSigner
            );
            let transaction2 = await contract3.approve(
              this.nft.contractID,
              this.nft.lazyHash.minPrice
            );
            await transaction2.wait();
            transaction = await contract.mintAndTransferCustom(
              this.nft.lazyHash
            );
          } else {
            console.log(this.nft.lazyHash)

            transaction = await contract.mintAndTransfer(this.nft.lazyHash, {
              value: this.nft.price,
            });
          }
        } else {
          console.log('no')

          let marketItem = {
            itemId: this.nft.itemId,
            nftContract: this.nft.contractID,
            tokenId: this.nft.tokenID,
            seller: this.nft.seller,
            owner: this.nft.owner,
            price: this.nft.price,
            forSale: this.nft.isAvailable,
            royalty: this.nft.royalty,
            tokenContract:
              this.nft.token ?? '0x0000000000000000000000000000000000000000',
            isNative: !(this.nft.token ?? false),
            minted: true
          };
          if (marketItem.isNative) {
            transaction = await contract.createSale(marketItem, {
              value: this.nft.price,
            });
          } else {
            transaction = await contract.createSaleCustom(marketItem, {
              value: this.nft.price,
            });
          }
        }
        console.log(transaction)
        if (transaction) {
          await transaction.wait();
          console.log(transaction);
        }
        if (this.nft?.tokenID) {
          this.nft.seller = await this.collection.ownerOf(
            this.nft.tokenID,
            Globals.provider
          );
        }
        this.shake = false;
        this.spinner.hide('purchase');
        this.dialogRef.close(this.nft)
      } catch (error) {
        console.log(error);
        if ((error as any).data.code == -32000){
          this.err = ('Not enough ' + this.collection.currency ?? 'MATIC') + ' in wallet!'
        }
        this.shake = false;
        this.spinner.hide('purchase');
      }
    }
  }

  err = ''

  closeDialog() {
    this.dialogRef.close();
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NftBuyComponent>,
    private loadService: LoadService,
    private spinner: NgxSpinnerService
  ) {
    this.nft = this.data.nft;
    this.collection = this.data.collection;
  }

  setProvider(){
    Globals.checkProvider()
  }

  get signer(){
    try {
      return Globals.provider
    } catch (error) {
      return false
    }
  }

  async ngOnInit() {

    // let address = await 
    //   let condition = address.toLowerCase() == this.nft.seller.toLowerCase()

    //   if (condition){
    //     this.dialogRef.close()
    //   }

  }
}
