import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ethers } from 'ethers';
import { Globals } from '../globals';
import { Collection } from '../models/collection.model';
import { NFT } from '../models/nft.model';
import { LoadService } from '../services/load.service';
import { Dict } from '../services/load.service';

@Component({
  selector: 'app-token-gate-menu',
  templateUrl: './token-gate-menu.component.html',
  styleUrls: ['./token-gate-menu.component.css'],
})
export class TokenGateMenuComponent implements OnInit {
  loadingInfo = false;
  loading?: boolean = false;
  success?: boolean = undefined;
  pageInfo: any;
  ids: string[] = [];
  items?:
    | Dict<{
        nft: NFT;
        collection: Collection;
      }>
    | undefined;

  constructor(
    private router: ActivatedRoute,
    private loadService: LoadService,
    private fb: FormBuilder
  ) {}

  codeForm = this.fb.group({
    code: ['', Validators.required],
  });

  ngOnInit(): void {
    this.loadingInfo = true;
    this.router.queryParams.subscribe((params) => {
      try {
        this.pageInfo = JSON.parse(params.i as string);
      } catch (error) {}

      let ids = this.pageInfo.items.map((j: any) => `${j.contract}${j.token}`);
      this.ids = ids;
      console.log(this.pageInfo);

      this.loadService.getNFTsById(
        ids,
        (
          items: Dict<{
            nft: NFT;
            collection: Collection;
          }>
        ) => {
          this.items = items;
          this.loadingInfo = false;
        }
      );
    });
  }

  provider?: ethers.providers.Web3Provider;
  address?: string;

  disconnectWallet() {
    this.provider = undefined;
  }

  mode = 0;

  useAuthCode() {
    this.mode = 1;
  }

  submitAuthCode() {
    this.loading = true;
    const verified = Object.freeze({
      url: this.pageInfo.url,
      access: true,
    });

    setTimeout(() => {
      this.loading = false
      this.success = true;
      setTimeout(() => {
        

        if (!this.success) {
          this.success = undefined;
          return;
        }
        window.parent.postMessage(verified, '*');
      }, 1500);
    }, 500);
  }

  code?: any = '';

  async connectWallet() {
    if (!this.provider) {
      try {
        let provider = await Globals.initializeProvider();
        this.provider = provider;
        this.address = await provider?.getSigner().getAddress();
      } catch (error) {
        console.log(error);
      }
    }
    this.loading = true;

    try {
      const verified = Object.freeze({
        url: this.pageInfo.url,
        access: await this.loadService.checkTokenGate(
          this.items!,
          this.provider
        ),
      });
      this.loading = false;
      this.success = verified.access;

      setTimeout(() => {
        if (!verified.access) {
          this.success = undefined;
          return;
        }
        window.parent.postMessage(verified, '*');
      }, 1500);
    } catch (error) {
      this.loading = false;
      this.success = false;

      setTimeout(() => {
        this.success = undefined;
      }, 1500);
    }
  }
}
