import { NFT } from './nft.model';
import { ethers } from 'ethers';
import { Dict } from '../services/load.service';
import { Globals } from '../globals';
import { environment } from 'src/environments/environment';
import { A } from '@angular/cdk/keycodes';
var abi = require('human-standard-token-abi');
const ERC721_MERCHANT = require('artifacts/contracts/ERC721Merchant/ERC721Merchant.sol/ERC721Merchant.json');
const THRED_MARKET = require('artifacts/contracts/ThredMarketplace/ThredMarketplace.sol/ThredMarketplace.json');

export interface ICollection {
  name: string;
  symbol: string;

  NFTs: Dict<NFT>;
  ABI: string;
  contract: string;
  royalty?: string;
  currency?: string;
  collectionCount?: number;
  owner?: string;
  domain?: string;
  isPublic?: boolean;
  uid?: string;
  timestamp?: Date;
  available?: boolean;

  getRarity(nft: NFT): string;

}

export class Collection implements ICollection {
  name: string;
  symbol: string;

  NFTs: Dict<NFT> = {};
  contract: string;
  royalty?: string | undefined
  currency?: string;
  collectionCount?: number;
  owner?: string;
  domain?: string;
  isPublic?: boolean;
  uid?: string;
  timestamp?: Date;
  available?: boolean;
  ABI: string;


  getRarity(nft: NFT) {
    // var totalRarity = 0;
    // let arr = Object.values(this.NFTs);

    // (nft.traits ?? []).forEach((trait: any) => {
    //   let same = arr.filter((n) =>
    //     n.traits?.find(
    //       (t) => t.trait_type == trait.trait_type && t.value == trait.value
    //     )
    //   );
    //   totalRarity += (same.length ?? 0) / arr.length;
    // });
    // return (totalRarity * 100).toFixed(2);
    return '2';
  }

  async loadCurrency(token: string, provider: ethers.providers.Provider) {
    let contract = new ethers.Contract(token, abi, provider);
    let symbol = await contract.symbol();
    return symbol;
  }

  get owners() {
    // let arr = Object.values(this.NFTs);

    // return arr.filter((n) => !n.forSale).length ?? 0;
    return 0;
  }

  async loadName(token: string, provider: ethers.providers.Provider) {
    let contract = new ethers.Contract(token, abi, provider);
    let symbol = await contract.name();
    return symbol;
  }



  constructor(
    name?: string,
    symbol?: string,
    contract?: string,
    currency?: string,
    collectionCount: number = 0,
    isPublic?: boolean,
    uid?: string,
    timestamp?: Date,
    domain: string = 'THRED-NFT',
    royalty?: string,
    available?: boolean,
    ABI?: string
  ) {

    this.name = name ?? '';
    this.symbol = symbol ?? '';
    this.collectionCount = collectionCount ?? 0;

    this.contract = contract ?? '';

    this.NFTs = this.nftCount(collectionCount, contract ?? "");

    this.royalty = royalty

    this.domain = domain;
    this.currency = currency;
    this.isPublic = isPublic;
    this.uid = uid;
    this.timestamp = timestamp;
    this.available = available;
    this.ABI = ABI ?? ERC721_MERCHANT.abi;
  }

  nftCount(collectionCount: number, contract: string) {
    let nfts: Dict<NFT> = {};

    for (let i = 0; i < (collectionCount ?? 0); i++) {
      nfts[`${contract}${i + 1}`] = new NFT(
        '',
        '',
        '',
        '',
        '',
        '',
        i + 1,
        undefined,
        undefined,
        contract,
        0,
        0,
        0,
        `${contract}${i + 1}`
      );
    }
    return nfts;
  }
}
