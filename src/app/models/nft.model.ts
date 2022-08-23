import { Dict } from '../services/load.service';
import { erc721Merchant, thredInfra } from 'config';
import { ethers } from 'ethers';

export class NFT {
  name: string;
  description: string;
  url: string;
  img: string;
  assetUrl: string;
  skybox: string;
  tokenId: number;
  info: Dict<any>;
  uid: string;
  address: string;
  royalty: number = 0;
  price: number;
  status?: number = 0;
  docID: string;
  utility: number[] = [];
  ios_model?: string;
  tokenURL?: string;
  minted: boolean = false;
  tgUrls: Dict<string>;

  get hashedAddress() {
    let contractId = this.address.substring(2, this.address.length);
    let zero = ethers.constants.HashZero;
    return (
      zero.substring(0, zero.length - contractId.length) + contractId
    ).toLowerCase();
  }

  hashedTokenId() {
    let strTokenId = String(this.tokenId);
    let zero = ethers.constants.HashZero;

    return zero.substring(0, zero.length - strTokenId.length) + strTokenId;
  }

  constructor(
    name?: string,
    description?: string,
    url?: string,
    img?: string,
    assetUrl?: string,
    skybox?: string,
    tokenId?: number,
    info?: Dict<any>[],
    uid?: string,
    address?: string,
    royalty?: number,
    price?: number,
    status?: number,
    docID?: string,
    utility?: number[],
    ios_model?: string,
    tokenURL?: string,
    tgUrls?: Dict<string>,
    minted: boolean = false
  ) {
    this.name = name ?? 'NFT';
    this.description = description ?? ''; // ?? erc721Merchant;
    this.royalty = royalty ?? 0;
    this.url = url ?? '';
    this.img = img ?? '';
    this.skybox = skybox ?? '';
    this.assetUrl = assetUrl ?? '';
    this.tokenId = tokenId ?? 0;
    this.info = info ?? {};
    this.tgUrls = tgUrls ?? {}
    this.uid = uid ?? '';
    this.address = address ?? '';
    this.price = price ?? 0;
    this.status = status ?? 0;
    this.docID = docID ?? '';
    this.utility = utility ?? [];
    this.ios_model = ios_model;
    this.tokenURL = tokenURL;
    this.minted = minted;
  }
}
