import { NFT } from './nft.model';
import { ethers } from 'ethers';
import { Dict } from '../services/load.service';
import { Globals } from '../globals';
import { environment } from 'src/environments/environment';
var abi = require('human-standard-token-abi');
const ERC721_MERCHANT = require('artifacts/contracts/ERC721Merchant.sol/ERC721Merchant.json');

export interface ICollection {
  name: string;
  symbol: string;

  NFTs: Array<NFT>;
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

  getRarity(nft: NFT): string;

  getTraitRarity(trait: Dict<any>): string;

  getFloor(): ethers.BigNumber;

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

  NFTs: Array<NFT> = [];
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

  getRarity(nft: NFT) {
    var totalRarity = 0;

    (nft.traits ?? []).forEach((trait: any) => {
      let same = this.NFTs.filter((n) =>
        n.traits?.find(
          (t) => t.trait_type == trait.trait_type && t.value == trait.value
        )
      );
      totalRarity += (same.length ?? 0) / this.NFTs.length;
    });
    return (totalRarity * 100).toFixed(2);
  }

  getTraitRarity(trait: Dict<any>) {
    let same = this.NFTs.filter((n) =>
      n.traits?.find(
        (t) => t.trait_type == trait.trait_type && t.value == trait.value
      )
    );
    return (((same.length ?? 0) / this.NFTs.length) * 100).toFixed(2);
  }

  getFloor() {
    return (
      this.NFTs.sort(function (a, b) {
        let x = a.priceNum;
        let y = b.priceNum;
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      })[0]?.price ?? 0
    );
  }

  getCurrencyIcon() {
    let token = this.customToken ?? 'default';
    let symbol = Globals.storeInfo?.tokens
    .find((t) => t.variations.find((s) => s.contract.toLowerCase() == token.toLowerCase()))
    ?.variations.find((s) => s.contract.toLowerCase() == token.toLowerCase())?.symbol ?? 'polygon_icon'

    return (
      symbol
    );
  }

  getApiName() {
    let token = this.customToken ?? 'default';
    let api_name = Globals.storeInfo?.tokens
    .find((t) => t.variations.find((s) => s.contract.toLowerCase() == token.toLowerCase()))
    ?.variations.find((s) => s.contract.toLowerCase() == token.toLowerCase())?.api_name ?? 'matic-network'
    return (
      api_name
    );
  }

  async loadCurrency(token: string, provider: ethers.providers.Provider) {
    let contract = new ethers.Contract(token, abi, provider);
    let symbol = await contract.symbol();
    return symbol;
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


  hashedTokenId(tokenId: number) {
    let strTokenId = String(tokenId);
    let zero = ethers.constants.HashZero;

    return zero.substr(0, zero.length - strTokenId.length) + strTokenId;
  }

  constructor(
    name: string,
    symbol: string,
    NFTs: Array<NFT> = [],
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
    ABI?: string
  ) {
    if (environment.rpc) {
      this.rpcEndpoint = environment.rpc;
    } else {
      console.log(process.env);
    }

    this.name = name ?? '';
    this.symbol = symbol ?? '';
    this.NFTs = NFTs = [];
    this.contract = contract;
    this.customToken = customToken;
    this.collectionCount = collectionCount;
    this.domain = domain;
    this.currency = currency;
    this.isPublic = isPublic;
    this.uid = uid;
    this.timestamp = timestamp;
    this.available = available;
    this.ABI = ABI ?? ERC721_MERCHANT.abi;
  }
}
