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
  customToken?: string;
  currency?: string;
  collectionCount?: number;
  owner?: string;
  domain?: string;
  isPublic?: boolean;
  uid?: string;
  timestamp?: Date;
  available?: boolean;
  rpcEndpoint?: string;
  volume?: ethers.BigNumber;
  floor?: ethers.BigNumber;
  holders?: ethers.BigNumber;

  getRarity(nft: NFT): string;

  getCurrencyIcon(): string;

  loadCurrency(
    token: string,
    provider: ethers.providers.Provider
  ): Promise<any>;

  loadName(token: string, provider: ethers.providers.Provider): Promise<any>;
}

export class Collection implements ICollection {
  name: string;
  symbol: string;

  NFTs: Dict<NFT> = {};
  contract: string;
  customToken?: string;
  currency?: string;
  collectionCount?: number;
  owner?: string;
  domain?: string;
  isPublic?: boolean;
  uid?: string;
  timestamp?: Date;
  available?: boolean;
  ABI: string;
  rpcEndpoint?: string;
  volume?: ethers.BigNumber = ethers.BigNumber.from(0);
  floor?: ethers.BigNumber = ethers.BigNumber.from(0);
  holders?: ethers.BigNumber = ethers.BigNumber.from(0);

  customTokenCheck(){
    return (this.customToken && this.customToken != ethers.constants.AddressZero) ? this.customToken : undefined
  }

  getRarity(nft: NFT) {
    var totalRarity = 0;
    let arr = Object.values(this.NFTs);

    (nft.traits ?? []).forEach((trait: any) => {
      let same = arr.filter((n) =>
        n.traits?.find(
          (t) => t.trait_type == trait.trait_type && t.value == trait.value
        )
      );
      totalRarity += (same.length ?? 0) / arr.length;
    });
    return (totalRarity * 100).toFixed(2);
  }




  getCurrencyIcon() {
    let token = this.customToken ?? 'default';
    let symbol =
      Globals.storeInfo?.tokens
        .find((t) =>
          t.variations.find(
            (s) => s.contract.toLowerCase() == token.toLowerCase()
          )
        )
        ?.variations.find(
          (s) => s.contract.toLowerCase() == token.toLowerCase()
        )?.symbol ?? 'polygon_icon';

    return symbol;
  }

  getApiName() {
    let token = this.customToken ?? 'default';
    let api_name =
      Globals.storeInfo?.tokens
        .find((t) =>
          t.variations.find(
            (s) => s.contract.toLowerCase() == token.toLowerCase()
          )
        )
        ?.variations.find(
          (s) => s.contract.toLowerCase() == token.toLowerCase()
        )?.api_name ?? 'matic-network';
    return api_name;
  }

  async loadCurrency(token: string, provider: ethers.providers.Provider) {
    let contract = new ethers.Contract(token, abi, provider);
    let symbol = await contract.symbol();
    return symbol;
  }

  get owners() {
    let arr = Object.values(this.NFTs);

    return arr.filter((n) => !n.forSale).length ?? 0;
  }

  async loadName(token: string, provider: ethers.providers.Provider) {
    let contract = new ethers.Contract(token, abi, provider);
    let symbol = await contract.name();
    return symbol;
  }

  async ownerOf(
    tokenId: number,
    provider: ethers.providers.Provider = new ethers.providers.JsonRpcProvider(
      this.rpcEndpoint
    )
  ) {
    let contract = new ethers.Contract(this.contract, this.ABI, provider);
    let owner = await contract.ownerOf(tokenId);
    return owner;
  }

  


  constructor(
    name: string,
    symbol: string,
    NFTs: Dict<NFT> = {},
    contract: string,
    currency: string,
    collectionCount: number,
    owner: string,
    isPublic: boolean,
    uid: string,
    timestamp: Date,
    domain: string = 'THRED-NFT',
    customToken?: string,
    available?: boolean,
    ABI?: string,
  ) {
    if (environment.rpc) {
      this.rpcEndpoint = environment.rpc;
    } else {
      console.log(process.env);
    }

    this.name = name ?? '';
    this.symbol = symbol ?? '';
    this.collectionCount = collectionCount ?? 0;


    this.contract = contract;

    this.NFTs = this.nftCount(collectionCount, contract);

    this.customToken = customToken;

    this.domain = domain;
    this.currency = currency;
    this.isPublic = isPublic;
    this.uid = uid;
    this.timestamp = timestamp;
    this.available = available;
    this.ABI = ABI ?? ERC721_MERCHANT.abi;    
  }

  nftCount(collectionCount: number, contract: string){
    let nfts: Dict<NFT> = {}

    for (let i = 0; i < (collectionCount ?? 0); i++) {
      nfts[`${contract}${i + 1}`] = new NFT(
        i + 1,
        '',
        contract,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        ''
      )
    }
    return nfts
  }
}