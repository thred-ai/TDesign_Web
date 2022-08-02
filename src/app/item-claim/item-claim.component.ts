import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { id } from '@swimlane/ngx-charts';
import { ethers } from 'ethers';
import { Globals } from '../globals';
import { Collection } from '../models/collection.model';
import { NFT } from '../models/nft.model';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'app-item-claim',
  templateUrl: './item-claim.component.html',
  styleUrls: ['./item-claim.component.css'],
})
export class ItemClaimComponent implements OnInit {
  productToBuy?: NFT;

  collection?: Collection;
  claimed = false;
  loadingInfo = false;

  constructor(
    private loadService: LoadService,
    private router: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    let id = this.getProductID().full;
    this.loadingInfo = true;
    this.loadService.getPost(
      id,
      async (product?: NFT, collection?: Collection) => {
        setTimeout(async () => {
          this.productToBuy = Object.assign(new NFT(), product);
          this.collection = Object.assign(new Collection(), collection);
          console.log(this.productToBuy);

          setTimeout(async () => {
            try {
              let owner =
                (await this.loadService.getItemOwner(
                  this.productToBuy!,
                  this.collection!
                )) ?? '';
              this.claimed =
                owner.toLowerCase() !=
                '0xd31c54efd3a4b5e6a993aaa4618d3700a12ff752'.toLowerCase();
              if (this.claimed) {
                this.address = owner;
              }
              this.loadingInfo = false;
  
            } catch (error) {
              console.log(error)
              this.claimed = false;
              this.loadingInfo = false;
            }
          }, 500);
        }, 250);
      }
    );
  }

  provider?: ethers.providers.Web3Provider;
  address?: string;
  loading?: boolean = false;

  disconnectWallet() {
    this.provider = undefined;
  }

  authForm = this.fb.group({
    code: [null, Validators.required],
  });

  async connectWallet() {
    if (!this.provider) {
      try {
        let provider = await Globals.initializeProvider();
        this.provider = provider;
        this.address = await provider?.getSigner().getAddress();
      } catch (error) {
        console.log(error);
      }
    } else if (
      this.provider &&
      ((this.authForm.controls.code.value as string) ?? '').trim() != '' &&
      this.productToBuy
    ) {
      this.loading = true;
      let code = (
        (this.authForm.controls.code.value as string) ?? ''
      ).toUpperCase();
      let signer = this.provider.getSigner();
      console.log(signer);
      // setTimeout(() => {
      //   this.claimed = true;
      //   this.loading = false;
      // }, 3000);
      this.loadService.transferNFT(
        signer,
        this.productToBuy,
        code,
        (transferred) => {
          if (transferred){
            this.claimed = true
          }
          this.loading = false;
        }
      );
    }
  }

  getProductID() {
    const routeParams = this.router.snapshot.paramMap;
    const id = routeParams.get('product') as string;

    const contractAddress = id.slice(0, 40);

    const token = id.replace(contractAddress, '');
    // Find the product that correspond with the id provided in route.
    return {
      contract: contractAddress,
      token: token,
      full: id,
    };
  }
}
