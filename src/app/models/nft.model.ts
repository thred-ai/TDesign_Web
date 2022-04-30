import { Dict } from '../services/load.service';
import { erc721Merchant, thredMarketplace } from 'config';
import { ethers } from 'ethers';

export class NFT {
  tokenID?: number;
  contractID: string;
  owner: string;
  seller: string;
  sold: boolean;
  lazyMint?: boolean;
  format?: string;
  royalty?: number = 0;
  lazyHash?: Dict<any>;
  metadata?: string;
  url?: string;
  linkUrl?: string = ''
  price: ethers.BigNumber = ethers.utils.parseUnits('0', 'ether');
  marketAddress?: string
  storeImg?: string = '';

  get priceNum() {
    let x = ethers.utils.formatUnits(this.price, 'ether');
    return Number(x);
  }

  get hashedAddress() {
    let contractId = this.contractID.substring(2, this.contractID.length)
    let zero = ethers.constants.HashZero;
    return (zero.substring(0, zero.length - contractId.length) + contractId).toLowerCase();
  }

  get hashedTokenId() {
    let strTokenId = String(this.tokenID);
    let zero = ethers.constants.HashZero;

    return zero.substring(0, zero.length - strTokenId.length) + strTokenId;
  }

  name?: string;
  description?: string;
  traits?: Array<Dict<any>> = [];
  forSale?: boolean = true;

  external_url?: string;
  isAvailable?: boolean;
  docID?: string;
  isNFT?: boolean;
  itemId?: number;
  isLoaded?: boolean;

  constructor(
    tokenID?: number,
    contractID?: string,
    owner?: string,
    sold?: boolean,
    lazyMint?: boolean,
    format?: string,
    royalty: number = 0,
    lazyHash?: Dict<any>,
    metadata?: string,
    seller?: string,
    marketAddress?: string
  ) {
    this.tokenID = tokenID;
    this.contractID = contractID ?? erc721Merchant;
    this.owner = owner ?? '';
    this.sold = sold ?? false;
    this.lazyMint = lazyMint ?? true;
    this.format = format = 'image/jpeg';
    this.royalty = royalty ?? 0;
    this.lazyHash = lazyHash;
    this.metadata = metadata;
    this.seller = seller ?? '';

    this.isNFT = metadata != undefined;

    this.marketAddress = marketAddress ?? thredMarketplace

    
  }
}
