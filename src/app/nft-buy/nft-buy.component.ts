import { Component, OnInit, Inject } from '@angular/core';
import { Globals } from '../globals';
import { Dict, LoadService } from '../services/load.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { NFT } from '../models/nft.model';
import { Collection } from '../models/collection.model';
import { ethers, BigNumber } from 'ethers';
import { thredMarketplace } from 'config';
var abi = require('human-standard-token-abi');
const THRED_MARKET = require('artifacts/contracts/ThredMarketplace/ThredMarketplace.sol/ThredMarketplace.json');

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
    if (!Globals.storeInfo) { return {
      name: '',
      color: '',
      bg_color: '',
    }}
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
    this.err = '';

    if (!Globals.provider?.getSigner()) {
      try {
        await Globals.checkProvider();
      } catch (error) {
        this.err = 'No Wallet Connected. Please try again';
        return;
      }
      return;
    }
    if (!(await (this.loadService.networkCheck() ?? false))) {
      this.err = 'Please switch your Network to the Polygon Mainnet';
      return;
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

      if (window.ethereum && typeof window.ethereum == 'object'){
        Globals.provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      }
      try {
        let val = Globals.provider.getSigner();

        if (typeof val == 'string') {
          this.err = 'No Wallet Connected. Please try again';
          throw 'No Signer';
        }
        let address = (await val?.getAddress()) ?? '';

        if (address?.toLowerCase() == this.nft?.seller?.toLowerCase()) {
          this.err = 'Same Account';
          throw 'No Signer';
        }

        console.log(THRED_MARKET)

        let contract = new ethers.Contract(
          thredMarketplace,
          THRED_MARKET.abi,
          val as ethers.providers.JsonRpcSigner
        );

        var transaction: any = undefined;

        if (this.nft.lazyHash?.minPrice as BigNumber) {
          console.log('man')

          if (this.nft?.lazyHash && this.collection.customTokenCheck() && !this.nft.lazyHash.isNative) {
            console.log("approving")
            let contract3 = new ethers.Contract(
              this.collection.customTokenCheck()!,
              abi,
              val as ethers.providers.JsonRpcSigner
            );
            let transaction2 = await contract3.approve(
              thredMarketplace,
              this.nft.lazyHash.minPrice
            );
            await transaction2.wait();
            console.log("custom")
            transaction = await contract.mintAndTransferCustom(this.nft.lazyHash, this.nft.contractID);
          }
          else{
            console.log("transfer")
            transaction = await contract.mintAndTransfer(this.nft.lazyHash, this.nft.contractID, {
              value: this.nft.price,
            });
          }
        } else {
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
            this.collection.customTokenCheck() ?? ethers.constants.AddressZero,
            isNative: !(this.collection.customTokenCheck() ?? false),
            minted: true,
          };

          console.log(marketItem)

          if (!marketItem.isNative){
            console.log('nam')
            let contract3 = new ethers.Contract(
              marketItem.tokenContract,
              abi,
              val as ethers.providers.JsonRpcSigner
            );
            let transaction2 = await contract3.approve(
              thredMarketplace,
              marketItem.price
            );
            await transaction2.wait();
            transaction = await contract.createSaleCustom(marketItem.itemId, 1);
          }
          else{
            console.log('mom')
            transaction = await contract.createSale(marketItem.itemId, 1, {
              value: this.nft.price,
            });
          }
        }
        if (transaction) {
          await transaction.wait();
        }
        
        this.shake = false;
        this.spinner.hide('purchase');
        console.log(transaction)

        this.dialogRef.close({nft: this.nft, tx: transaction});
      } catch (error) {
        let data = (error as any).data
        console.log(error)
        if ((data && data.code == -32000) || ((error as any) && (error as any).code == -32603)) {
          this.err =
            ('Not enough ' + this.collection.currency ?? 'MATIC') +
            ' in wallet!';
        }
        else{
          this.err = 'Something went wrong, please try again.'
        }
        this.shake = false;
        this.spinner.hide('purchase');
      }
    }
  }

  err = '';

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

  setProvider() {
    Globals.checkProvider();
  }

  get signer() {
    try {
      return Globals.provider;
    } catch (error) {
      return false;
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
