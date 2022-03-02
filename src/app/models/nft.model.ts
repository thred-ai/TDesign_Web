import { Dict } from '../services/load.service';
import { nftaddress } from 'config';
import { ethers } from 'ethers';
import axios from 'axios';

export class NFT {
  tokenID?: number
  contractID: string
  owner: string
  seller: string
  sold: boolean
  lazyMint?: boolean
  format?: string
  royalty?: number = 0
  lazyHash?: Dict<any>
  metadata?: string
  url?: string
  linkUrl?: string
  price: ethers.BigNumber = ethers.utils.parseUnits('0', 'ether');

  storeImg?: string = ''


  get priceNum(){
    let x = ethers.utils.formatUnits(this.price, 'ether')
    return Number(x)
  }


  name?: string
  description?: string
  traits?: Array<Dict<any>> = []
  forSale?: boolean = true

  external_url?: string
  token?: string
  isAvailable?: boolean
  docID?: string
  isNFT?: boolean
  itemId?: number
  isLoaded?: boolean

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
    seller?: string
  ) {
    this.tokenID = tokenID
    this.contractID = contractID ?? nftaddress
    this.owner = owner ?? ''
    this.sold = sold ?? false
    this.lazyMint = lazyMint ?? true
    this.format = format = 'image/jpeg'
    this.royalty = royalty ?? 0
    this.lazyHash = lazyHash
    this.metadata = metadata
    this.seller = seller ?? ''

    this.isNFT = metadata != undefined

  }
}
