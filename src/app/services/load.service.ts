import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Product } from '../models/product.model';
import { NFT } from '../models/nft.model';

import { Template } from '../models/template.model';
import { TemplateSide } from '../models/template-side.model';
import { Color } from '../models/color.model';
import { Country } from '../models/shipping-country.model';
import { Globals } from '../globals';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Blog } from '../models/blog.model';
import { first, skip, map, switchMap } from 'rxjs/operators';
import { ProductInCart } from '../models/product-in-cart.model';
import { ShippingInfo } from '../models/shipping-address.model';
import { BillingInfo } from '../models/billing-address.model';
import { Inventory } from '../models/inventory.model';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { v4 as uuid } from 'uuid';
import { StripeService, StripeCardComponent } from 'ngx-stripe';

import { Order } from '../models/order.model';
import { Store } from '../models/store.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { StoreTheme } from '../models/theme.model';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
import { StoreDomain } from '../models/store-domain.model';
import { PixelService } from 'ngx-pixel';
import { Coupon } from '../models/coupon.model';
import { Banner } from '../models/banner.model';
import { Popup } from '../models/popup.model';
import { Row } from '../models/row.model';
import { Page } from '../models/page.model';
import { HttpClient } from '@angular/common/http';
import { nftaddress, thredInfra } from 'config';
import axios from 'axios';
import { ethers } from 'ethers';
import { environment } from 'src/environments/environment';
import { Collection } from '../models/collection.model';
import { NftLog } from '../models/nft-log.model';
import { WalletLog } from '../models/wallet-log.model';
import detectEthereumProvider from '@metamask/detect-provider';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NetworkCheckPipe } from '../network-check.pipe';
import { Plan } from '../models/plan.model';

const THRED_CONTRACT = require('artifacts/contracts/ThredInfra/ThredInfra.sol/ThredInfra.json');

export interface Dict<T> {
  [key: string]: T;
}

@Injectable({
  providedIn: 'root',
})
export class LoadService {
  constructor(
    @Inject(PLATFORM_ID)
    private platformID: Object,
    private db: AngularFirestore,
    private auth: AngularFireAuth,
    private functions: AngularFireFunctions,
    private storage: AngularFireStorage,
    private stripeService: StripeService,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    if (environment.rpc) {
      this.rpcEndpoint = environment.rpc;
    } else {
      console.log(process.env);
    }
  }

  rpcEndpoint?: string = undefined;

  rootComponent?: AppComponent;

  isShop = false;
  hideCart = false;
  shouldShowCurrency = false;

  defaultCoords = {
    address: {
      city: 'Los Angeles',
      country: 'United States',
      country_code: 'US',
      region: 'California',
      region_code: 'CA',
    },
    coords: {
      LONGITUDE: -118.243683,
      LATITUDE: 34.052235,
    },
  };

  async logView(productId: string | null = null) {
    if (Globals.storeInfo?.uid && isPlatformBrowser(this.platformID)) {
      let coords = (await this.getCoords()) ?? this.defaultCoords;
      this.functions
        .httpsCallable('updateView')({
          storeUID: Globals.storeInfo?.uid!,
          location: coords,
          productId: productId,
        })
        .pipe(first())
        .subscribe(
          async (resp) => {
            if (resp as string) {
            } else {
            }
          },
          (err) => {
            console.error({ err });
          }
        );
    }
  }

  beginBankAdd(callback: (link: string) => any) {
    this.functions
      .httpsCallable('getExpressCreateLink')({})
      .pipe(first())
      .subscribe(
        async (resp) => {
          if (resp as string) {
            callback(resp);
          }
        },
        (err) => {
          console.error({ err });
        }
      );
  }

  async getWalletInfo(callback: (wallet?: ethers.Wallet) => any) {
    let uid = (await this.isLoggedIn())?.uid;
    let sub = this.db
      .collection('Users/' + uid + '/Payment_Info')
      .doc('Wallet')
      .valueChanges()
      .subscribe((doc) => {
        let docData = doc as DocumentData;

        if (docData) {
          let provider = new ethers.providers.JsonRpcProvider(this.rpcEndpoint);
          const holder = new ethers.Wallet(docData.priv_key, provider);
          callback(holder.connect(provider));
        } else {
          callback(undefined);
        }
      });
  }

  async getBankInfo(callback: (bankInfo: any) => any) {
    let uid = (await this.isLoggedIn())?.uid;
    let sub = this.db
      .collection('Users/' + uid + '/Payment_Info')
      .doc('Identifiers')
      .valueChanges()
      .subscribe((doc) => {
        let docData = doc as DocumentData;

        if (docData) {
          let activeMerchant = docData.activeMerchant as boolean;
          let merchantID = docData.merchant_id as string;

          if (activeMerchant && merchantID) {
            this.functions
              .httpsCallable('getBankInfo')({})
              .pipe(first())
              .subscribe(
                (resp) => {
                  callback(resp);
                },
                (err) => {
                  callback(undefined);
                  console.error({ err });
                }
              );
          } else {
            callback(undefined);
          }
        } else {
          callback(undefined);
        }
        if (isPlatformBrowser(this.platformID)) sub.unsubscribe();
      });
  }

  async getWalletBalances(callback: (tokens?: Dict<any>[]) => any) {
    let tokens = Globals.storeInfo.tokens ?? [];
    this.functions
      .httpsCallable('getWalletBalances')({ tokens })
      .pipe(first())
      .subscribe(
        (resp) => {
          callback(resp ?? []);
        },
        (err) => {
          callback([]);
          console.error({ err });
        }
      );
  }

  async getSubInfo(callback: (subInfo: any, canTrial?: boolean) => any) {
    let uid = (await this.isLoggedIn())?.uid;
    let sub = this.db
      .collection('Users/' + uid + '/Payment_Info')
      .doc('Identifiers')
      .valueChanges()
      .subscribe((doc) => {
        let docData = doc as DocumentData;

        if (docData) {
          let plan_id = docData.plan_id as string;
          let can_trial = (docData.canTrial as boolean) ?? true;
          if (plan_id && plan_id != '') {
            this.functions
              .httpsCallable('getSubInfo')({})
              .pipe(first())
              .subscribe(
                (resp) => {
                  callback(resp);
                },
                (err) => {
                  callback(undefined, can_trial);
                  console.error({ err });
                }
              );
          } else {
            callback(undefined, can_trial);
          }
        } else {
          callback(undefined, true);
        }
        if (isPlatformBrowser(this.platformID)) sub.unsubscribe();
      });
  }

  isLoading = true;

  registerTokens(tokens: Dict<any>[] = [], store: Store = Globals.storeInfo) {
    tokens.forEach((t) => {
      if (!t.contract || !t.name || !t.url || !t.symbol) {
        return;
      }
      store.tokens[1].variations.push({
        name: t.name,
        symbol: `${t.name ?? ''}_token`,
        contract: t.contract,
        api_name: t.api_name,
      });
      this.matIconRegistry.addSvgIcon(
        `${t.name ?? ''}_token`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(t.url)
      );
    });
  }

  async getUser(
    username?: string,
    uid?: string,
    isCustom = false,
    callback?: (storeInfo: Store) => any
  ) {
    this.isLoading = true;
    var query = this.db.collection('Users', (ref) =>
      ref.where('Username', '==', username)
    );

    if (uid) {
      query = this.db.collection('Users', (ref) =>
        ref.where(firebase.firestore.FieldPath.documentId(), '==', uid)
      );
    }
    if (isCustom) {
      query = this.db.collection('Users', (ref) =>
        ref
          .where('Custom_URL.host', '==', username?.replace('www.', ''))
          .where('Custom_URL.status', '==', 2)
      );
    }

    let sub = query.valueChanges({ idField: 'UID' }).subscribe((doc) => {
      let docData = doc[0] as DocumentData;

      if (docData) {
        let uid = docData.UID; //UID OF COMMENT IMAGE
        let dpUID = docData['ProfilePicID'] as string; //UID OF COMMENT IMAGE
        let username = docData['Username'] as string; //COMMENTER'S USERNAME
        let fullName = docData['Full_Name'] as string;
        let bio = docData['Bio'] as string;
        let notifID = docData['Notification_ID'] as string;
        let userFollowing = (docData['Following_List'] as Array<string>) ?? [];
        let usersBlocking = (docData['Users_Blocking'] as Array<string>) ?? [];
        let followerCount = (docData['Followers_Count'] as number) ?? 0;
        let followingCount = (docData['Following_Count'] as number) ?? 0;
        let postCount = (docData['Posts_Count'] as number) ?? 0;
        let verified = (docData['Verified'] as boolean) ?? false;
        let postNotifs = (docData['Post_Notifications'] as Array<string>) ?? [];
        let isPublic = (docData['Public'] as boolean) ?? true;
        let slogan = docData['Slogan'] as string;
        let loading = docData['indicator'] as Dict<any>;
        let style = docData['store_style'] as Dict<any>;
        let pixelID = docData['fb_pixel'] as string;
        let font = docData['font'] as string;

        let socials = docData['Socials'] as Array<{
          name: string;
          link: string;
        }>;
        let custom_url = (docData['Custom_URL'] as Dict<any>) ?? {};
        let active = docData['Active'] as boolean;
        let discounts = (docData['Coupons'] as Array<Dict<any>>) ?? [];
        let bannerFields = (docData['banners'] as Array<Dict<any>>) ?? [];
        let bannerStyle = (docData['banner_style'] as number) ?? 0;
        let popups = (docData['Popups'] as Array<Popup>) ?? [];
        let homeRows = docData['rows'] as Array<Row>;

        var pages = docData['pages'] as Array<Page>;

        var header = docData['header_links'] as Array<string>;
        var footer = docData['footer_links'] as Array<Dict<string>>;

        let orders = (docData['Orders'] as number) ?? 0;
        let wallet = (docData['Address'] as string) ?? '';
        let tokens = docData['Custom_Tokens'] as Dict<any>[];

        this.registerTokens(tokens);

        var coupons = new Array<Coupon>();
        discounts.forEach((discount) => {
          coupons.push(
            new Coupon(
              discount.code ?? 'CODE1',
              discount.amt ?? 0,
              discount.products ?? [],
              discount.auto,
              discount.type,
              discount.threshold,
              discount.style
            )
          );
        });

        var banners = new Array<Banner>();
        bannerFields.forEach((banner) => {
          banners.push(
            new Banner(
              banner.text,
              banner.icon,
              this.parseColor(banner.bg_color),
              this.parseColor(banner.color)
            )
          );
        });

        let host = custom_url.host as string;
        let protocol = custom_url.protocol as string;
        let status = custom_url.status as number;
        let txt = custom_url.txt as string;

        let finalURL = new StoreDomain(host, protocol, status, txt);

        Globals.storeInfo = new Store(
          uid,
          dpUID,
          username,
          fullName,
          bio,
          notifID,
          userFollowing,
          [],
          followerCount,
          postCount,
          followingCount,
          usersBlocking,
          undefined,
          verified,
          isPublic,
          postNotifs,
          slogan,
          undefined,
          this.getDefaultURL(),
          this.getDefaultURL(),
          this.getDefaultURL(),
          undefined,
          undefined,
          new StoreTheme(
            style?.name,
            style?.back_code,
            style?.text_code,
            style?.nav_code,
            style?.class,
            this.parseColor(style?.bg_color),
            this.parseColor(style?.btn_color)
          ),
          font,
          socials,
          finalURL,
          pixelID,
          active,
          coupons,
          banners,
          bannerStyle,
          popups,
          homeRows,
          pages,
          orders,
          header,
          footer,
          wallet
        );

        if (banners.length > 0) {
          this.rootComponent?.setInterval();
        }

        let homePopup = popups.find((popup) => {
          return popup.trigger == 0;
        });

        this.rootComponent?.initializePixel(pixelID);

        if (loading?.name) {
          Globals.storeInfo.loading!.name = loading?.name;
        }
        if (loading?.color) {
          Globals.storeInfo.loading!.color = this.parseColor(loading.color);
        }
        if (loading?.bg_color) {
          Globals.storeInfo.loading!.bg_color = this.parseColor(
            loading.bg_color
          );
        }
      } else {
        Globals.storeInfo.uid = '';
      }

      Globals.sInfo.next(Globals.storeInfo);

      this.isLoading = false;

      if (callback) {
        callback(Globals.storeInfo);
      }
      if (isPlatformBrowser(this.platformID)) sub.unsubscribe();

      // if (isPlatformBrowser(this.platformID)) {
      //   this.getPosts(
      //     (products) => {
      //       Globals.storeInfo!.collections = products;
      //       this.isLoading = false;
      //       if (callback) {
      //         callback(Globals.storeInfo);
      //       }
      //       if (isPlatformBrowser(this.platformID)) sub.unsubscribe();
      //     },
      //     undefined,
      //     Globals.provider
      //   );
      //   this.rootComponent?.getCart();
      //   sub.unsubscribe();
      // }
    });
  }

  getContractEvents(callback: (transactions: Array<WalletLog>) => any) {
    this.functions
      .httpsCallable('getContractHistory')({})
      .pipe(first())
      .subscribe(
        async (resp) => {
          let hashes = resp as any[];
          if (hashes) {
            var logs = new Array<WalletLog>();
            await Promise.all(
              hashes.map(async (t) => {
                var type = '';
                if (
                  t.value != '0' &&
                  t.from != '' &&
                  t.to != '' &&
                  (t.contractAddress == '' || t.tokenSymbol != undefined)
                ) {
                  type = 'transfer';
                } else if (t.to == '' && t.contractAddress != '') {
                  type = 'deploy';
                } else {
                  type = 'interaction';
                }

                let log = new WalletLog(
                  type,
                  t.from,
                  t.to,
                  Number(t.blockNumber),
                  undefined,
                  t.hash,
                  t.contractAddress != '' ? t.contractAddress : 'default',
                  ethers.BigNumber.from(t.gasUsed),
                  ethers.BigNumber.from(t.gasPrice),
                  t.value != '0' ? ethers.BigNumber.from(t.value) : undefined,
                  Number(t.timeStamp)
                );
                logs.push(log);
              })
            );
            callback(logs);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getEvents(nft: NFT, callback: (transactions: Array<NftLog>) => any) {
    const data = {
      contract: ethers.utils.getAddress(nft.address),
      tokenId: nft.hashedTokenId(),
      test: false,
    };
    this.functions
      .httpsCallable('getTransactionHistory')(data)
      .pipe(first())
      .subscribe(
        async (resp) => {
          let hashes = resp.result as any[];
          if (hashes) {
            var logs = new Array<NftLog>();
            await Promise.all(
              hashes.map(async (t) => {
                var type = '';

                if (
                  t.topics[0] ==
                  '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
                ) {
                  if (
                    t.topics[1] ==
                    '0x0000000000000000000000000000000000000000000000000000000000000000'
                  ) {
                    type = 'mint';
                  } else {
                    type = 'transfer';
                  }
                } else if (t.topics[0] == nft.hashedAddress) {
                  type = 'list';
                } else if (
                  t.topics[0] !=
                  '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
                ) {
                  type = 'sale';
                } else {
                  return;
                }

                let log = new NftLog(
                  type,
                  type == 'list' ? t.topics[2] : t.topics[1],
                  type == 'list' ? '' : t.topics[2],
                  t.blockNumber,
                  type == 'list'
                    ? t.topics[1]
                    : type == 'sale'
                    ? t.topics[0]
                    : undefined,
                  undefined,
                  t.transactionHash
                );
                logs.push(log);
              })
            );
            callback(logs);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  async providerCheck() {
    let address = await Globals.provider?.getSigner().getAddress();
    return address;
  }

  async networkCheck() {
    if (isPlatformServer(this.platformID)) {
      return false;
    }
    var network = await Globals.provider?.getNetwork();

    if (network?.chainId == 0 && window.ethereum) {
      let provider = (await detectEthereumProvider()) as any;
      network = await provider.request({ method: 'eth_chainId' });
    }
    if (network?.name == 'unspecified') {
      return true;
    }
    return network?.chainId == 137;
  }

  async getCryptoRates(callback: (arr: Array<Dict<any>>) => any) {
    var query = this.db.doc('Crypto_Rates/THRED_COINS');
    let sub = query.get().subscribe((doc) => {
      let coins = (doc.data() as any).coins ?? [];
      callback(coins);
      if (isPlatformBrowser(this.platformID)) {
        sub.unsubscribe();
      }
    });
  }

  parseColor(color?: string) {
    var finalArr = new Array<number>();

    color?.split(',').forEach((color) => {
      finalArr.push(Number(color.trim()));
    });
    return finalArr;
  }

  getThemes() {
    Globals.themes = [];

    var query = this.db.collection('Store_Themes', (ref) =>
      ref.orderBy('index', 'asc')
    );

    let sub = query.valueChanges().subscribe((docDatas) => {
      docDatas.forEach((doc) => {
        let docData = doc as DocumentData;

        if (docData) {
          let name = docData.name as string;
          let btn_color = docData.btn_color as string;
          let bg_color = docData.bg_color as string;
          let back_code = docData.back_code as string;
          let text_code = docData.text_code as string;
          let nav_code = docData.nav_code as string;
          let style = docData.class as string;
          let img = docData.img as string;

          let theme = new StoreTheme(
            name,
            back_code,
            text_code,
            nav_code,
            style,
            this.parseColor(bg_color),
            this.parseColor(btn_color),
            img
          );

          let same = Globals.themes?.find((t) => {
            return t.name == style;
          });
          if (same) {
            same.themes.push(theme);
          } else {
            Globals.themes?.push({ name: style, themes: [theme] });
          }
        }
      });
      if (isPlatformBrowser(this.platformID)) sub.unsubscribe();
    });
  }

  async signIntoAccount(
    payload: any,
    callback: (uid?: string, error?: string) => any
  ) {
    let uid = (await this.isLoggedIn())?.uid;

    if (uid) {
      callback(uid, undefined);
      return;
    }

    this.functions
      .httpsCallable('signInWithBigCommerce')(payload)
      .pipe(first())
      .subscribe(
        async (resp) => {
          if (resp) {
            let user = await this.auth.signInWithCustomToken(resp.token);
            callback(user.user?.uid, undefined);
          } else {
            callback('Something went wrong. Please try again.');
          }
        },
        (err) => {
          console.log(err);
          callback('Something went wrong. Please try again.');
        }
      );
  }

  async createAccount(
    payload: any,
    callback: (uid?: string, error?: string) => any
  ) {
    this.functions
      .httpsCallable('signUpWithBigCommerce')(payload)
      .pipe(first())
      .subscribe(
        async (resp) => {
          if (resp) {
            if (resp as string) {
              let uid = (await this.isLoggedIn())?.uid;
              if (uid) {
                callback(uid, undefined);
                return;
              } else {
                console.log(resp);
                let user = await this.auth.signInWithCustomToken(resp);
                callback(user.user?.uid, undefined);
              }
            } else {
              callback('Something went wrong. Please try again.');
            }
          } else {
            callback('Something went wrong. Please try again.');
          }
        },
        (err) => {
          console.log(err);
          callback('Something went wrong. Please try again.');
        }
      );
  }

  async checkProviderChain(provider: ethers.providers.Provider) {
    var properNetwork = false;
    if (isPlatformServer(this.platformID)) {
      return undefined;
    }
    if (provider as ethers.providers.Web3Provider) {
      const pipe = new NetworkCheckPipe();
      properNetwork =
        (await pipe.networkCheck(provider as ethers.providers.Web3Provider))
          .chainId == 137;
    }
    return properNetwork
      ? provider
      : new ethers.providers.JsonRpcProvider(this.rpcEndpoint);
  }

  async getPosts(
    callback: (products: Array<Collection>) => any,
    filterID?: string,
    provider: ethers.providers.Provider = new ethers.providers.JsonRpcProvider(
      this.rpcEndpoint
    ),
    uid = Globals.storeInfo?.uid
  ) {
    // uid = '3APimNNdA0X7yJiEKMoH4ULgnYz1';
    let provider2 = await this.checkProviderChain(provider);

    var col = new Array<Collection>();

    this.getCollections(uid, async (c) => {
      if (c) {
        col = col?.concat(c);
      }
      var counter = 0;
      await Promise.all(
        col.map((collection: Collection) => {
          // let info = await this.getCollectionInfo(collection.contract);

          // collection.volume = info.volume;
          // collection.floor = info.floor;
          // collection.holders = info.holders;

          var query = this.db.collection('Users/' + uid + '/Products', (ref) =>
            ref.where('address', '==', collection.contract).orderBy('tokenId')
          );

          if (filterID) {
            query = this.db.collection('Users/' + uid + '/Products', (ref) =>
              ref.where('address', '==', collection.contract).orderBy('tokenId')
            );
          }

          let sub = query.get().subscribe(async (docDatas) => {
            sub.unsubscribe();

            let products: Dict<NFT> = {};

            let nfts = docDatas.docs.map((doc) => doc.data()) as NFT[];

            nfts.forEach((n) => {
              products[`${n.address}${n.tokenId}`] = n;
            });

            collection.NFTs = products;
            counter += 1;

            if (counter == col.length) {
              callback(col);
              return;
            }
          });
        })
      );

      if (col.length == 0) {
        callback([]);
        return;
      }
    });
  }

  rand(length: number, current?: number | string): string | number {
    current = current ? current : '';
    return length
      ? this.rand(
          --length,
          '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.charAt(
            Math.floor(Math.random() * 60)
          ) + current
        )
      : current;
  }

  async getCollections(
    uid = Globals.storeInfo?.uid,
    callback: (data?: Array<Collection>) => any
  ) {
    let query = this.db.collection('Collections', (ref) =>
      ref
        .where('available', '==', true)
        .where('uid', '==', uid)
        .orderBy('timestamp', 'desc')
    );
    let sub = query.get().subscribe(async (docDatas) => {
      sub.unsubscribe();

      let data = docDatas.docs;
      if (data) {
        var collections = new Array<Collection>();

        data.forEach((c) => {
          let d = c.data() as any;

          collections.push(
            new Collection(
              d.name,
              d.symbol,
              d.contract,
              d.currency ?? 'USD',
              d.collectionCount ?? 0,
              d.isPublic ?? true,
              d.uid ?? '',
              d.timestamp ?? new Date(),
              d.domain,
              d.royalty,
              d.available,
              d.ABI
            )
          );
        });
        callback(collections);
      } else {
        callback(undefined);
      }
    });
  }

  async getCollection(contract: string, callback: (data?: Collection) => any) {
    let query = this.db.collection('Collections', (ref) =>
      ref
        .where('contract', '==', contract)
        .where('available', '==', true)
        .orderBy('timestamp', 'desc')
    );
    let sub = query.get().subscribe(async (docDatas) => {
      sub.unsubscribe();

      let data = docDatas.docs[0];
      if (data) {
        let d = <Collection>data.data();
        let c = new Collection(
          d.name,
          d.symbol,
          d.contract,
          d.currency ?? 'USD',
          d.collectionCount ?? 0,
          d.isPublic ?? true,
          d.uid ?? '',
          d.timestamp ?? new Date(),
          d.domain,
          d.royalty,
          d.available,
          d.ABI
        );
        callback(c);
      } else {
        callback(undefined);
      }
    });
  }

  async checkTokenGate(
    assets: Dict<{
      nft: NFT;
      collection: Collection;
    }>,
    provider?: ethers.providers.Web3Provider
  ) {
    let items: readonly {
      contractAddress: string;
      ownerAddress: string;
      tokenId: number;
    }[] = Object.freeze(
      Object.values(assets).map((a) => {
        return {
          contractAddress: ethers.utils.getAddress(a.collection.contract),
          ownerAddress: ethers.utils.getAddress(ethers.constants.AddressZero),
          tokenId: a.nft.tokenId,
        };
      })
    );

    let signer = Object.freeze(provider?.getSigner());

    const contract = Object.freeze(
      new ethers.Contract(thredInfra, THRED_CONTRACT.abi, signer)
    );

    return contract.checkTokenGate(items, await signer?.getAddress());
  }

  async getItemOwner(item: NFT, collection: Collection) {
    let provider = new ethers.providers.JsonRpcProvider(this.rpcEndpoint);
    const contract = new ethers.Contract(
      ethers.utils.getAddress(item.address),
      collection.ABI,
      provider
    );
    let owner = await contract.ownerOf(item.tokenId);
    console.log(owner);
    return owner;
  }

  async getFormat(image: string, noLoad = false): Promise<string> {
    return new Promise(function (resolve, reject) {
      if (noLoad) {
        var format = 'none';

        if (image.indexOf('image') > -1) {
          format = 'image';
        } else if (image.indexOf('video') > -1) {
          format = 'video';
        } else {
          format = '3d';
        }
        resolve(format);
      } else {
        var xhttp = new XMLHttpRequest();
        xhttp.open('HEAD', image);
        xhttp.onreadystatechange = function () {
          if (this.readyState == this.DONE) {
            let type = this.getResponseHeader('Content-Type');
            var format = 'none';
            if (!type) {
              reject('No content found!');
              return;
            }
            if (type.indexOf('image') > -1) {
              format = 'image';
            } else if (type.indexOf('video') > -1) {
              format = 'video';
            } else {
              format = '3d';
            }
            resolve(format);
          }
        };
        xhttp.send();
      }
    });
  }

  adminComponent?: AdminViewComponent;
  homeComponent?: HomeComponent;

  hasEmptyProperties(obj: any, ignoreKeys: Array<string>) {
    for (var key in obj) {
      if (ignoreKeys.includes(key)) {
        continue;
      }
      if (obj[key] == null || obj[key] == '' || obj[key] == undefined) {
        return true;
      }
    }
    return false;
  }

  async linkAddress(callback: (err?: any) => any) {
    let uid = (await this.isLoggedIn())?.uid;

    let shipping = Globals.shippingInfo;

    if (
      uid &&
      shipping &&
      this.hasEmptyProperties(shipping, ['unit', 'company', 'country_code'])
    ) {
      return;
    }

    let email = shipping!.email;

    if ((await this.isLoggedIn())?.isAnonymous) {
      let fData = {
        email: email,
      };
      this.functions
        .httpsCallable('updateAuth')(fData)
        .pipe(first())
        .subscribe(
          async (resp) => {
            if (typeof resp == 'string') {
              await this.setAddress(uid!);
              this.auth
                .signInWithEmailAndPassword(email, resp)
                .then(() => {
                  // Signed in..
                  callback();
                })
                .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log(errorMessage);
                  callback('An error occured, please try again.');
                });
            } else {
              //error
              if (resp.errorInfo.code == 'auth/email-already-exists') {
                //show popup ******
                callback('Your email is being used by another Guest order.');
              } else {
                callback('An error occured, please try again.');
              }
            }
          },
          (err) => {
            console.error({ err });
          }
        );
    } else {
      await this.setAddress(uid!);
      callback();
    }
  }

  async setAddress(uid: string) {
    let shipping = Globals.shippingInfo;

    let data = {
      Administrative_Area: shipping?.admin_area,
      City: shipping?.city,
      Country: shipping?.country,
      First_Name: shipping?.name.split(' ').slice(0, -1).join(' '),
      Last_Name: shipping?.name.split(' ').slice(-1).join(' '),
      Phone_Num: shipping?.phone_num,
      Email: shipping?.email,
      Postal_Code: shipping?.postal,
      Street: shipping?.street,
      Company: shipping?.company ?? '',
      Unit_Number: shipping?.unit ?? '',
    };

    if (uid) {
      await this.db
        .collection('Users/' + uid + '/Payment_Info')
        .doc('Delivery_Address')
        .set(data);
    }
  }

  async transferNFT(
    signer: ethers.Signer,
    item: NFT,
    code: string,
    callback: (transferred: boolean) => any
  ) {
    let address = await signer.getAddress();
    this.functions
      .httpsCallable('transferItem')({
        signer: address,
        item: item.docID,
        uid: item.uid,
        code: code,
      })
      .pipe(first())
      .subscribe(
        async (resp) => {
          callback(resp);
        },
        (err) => {
          callback(false);
          console.log(err);
        }
      );
  }

  async createPayment(
    storeID: string,
    isCard: boolean = true,
    callback: (order_id: string, client_secret: string, err?: any) => any,
    coupon?: Coupon
  ) {
    var data = {
      merchant_uid: storeID,
      isCard: isCard,
      coupon: undefined,
    };

    if (coupon) {
      data.coupon = JSON.parse(JSON.stringify(coupon));
    }

    this.functions
      .httpsCallable('createWebIntent')(data)
      .pipe(first())
      .subscribe(
        async (resp) => {
          callback(resp.order_id, resp.client_secret);
        },
        (err) => {
          console.log(err);
          callback('', '', err);
        }
      );
  }

  async stopSubscription(plan: Plan, callback: (id: any) => any) {
    this.functions
      .httpsCallable('removeSubIntent')({
        plan: JSON.parse(JSON.stringify(plan)),
      })
      .pipe(first())
      .subscribe(
        async (resp) => {
          callback(resp);
        },
        (err) => {
          console.error({ err });
        }
      );
  }

  async reactivateSubscription(
    plan: Plan,
    callback: (id: any, err?: string) => any
  ) {
    this.functions
      .httpsCallable('reactivateSubIntent')({
        plan: JSON.parse(JSON.stringify(plan)),
      })
      .pipe(first())
      .subscribe(
        async (resp) => {
          callback(resp);
        },
        (err) => {
          console.error({ err });
          callback(undefined, err);
        }
      );
  }

  async startSubscription(
    plan: Plan,
    callback: (id: any, err?: string) => any
  ) {
    this.functions
      .httpsCallable('createSubIntent')({
        plan: JSON.parse(JSON.stringify(plan)),
      })
      .pipe(first())
      .subscribe(
        async (resp) => {
          callback(resp);
        },
        (err) => {
          callback(undefined, err);
          console.error({ err });
        }
      );
  }

  async linkCard(
    billing: any,
    details: Dict<any>,
    callback: (err?: any) => any
  ) {
    // var billing = Globals.billingInfo;

    let uid = (await this.isLoggedIn())?.uid;

    if (details.card && details.stripe) {
      if (
        billing &&
        this.hasEmptyProperties(billing, ['unit', 'company', 'brand', 'number'])
      ) {
        return;
      }

      let stripe = details.stripe as StripeService;

      if (this.isUndefined(billing?.unit)) {
        billing!.unit = undefined;
      }

      let name = billing?.name;
      let card = details.card as StripeCardComponent;

      var b: Dict<string | undefined> = {
        line1: billing?.street,
        city: billing?.city,
        state: billing?.admin_area,
        postal_code: billing?.postal,
        country: billing?.country_code,
      };

      if (billing?.unit) {
        b.line2 = billing.unit;
      }

      stripe
        .createPaymentMethod({
          type: 'card',
          card: card!.element,
          billing_details: {
            address: b,
            name: name,
          },
        })
        .subscribe((result) => {
          if (result.paymentMethod) {
            // Use the token

            var fData = {
              token: result.paymentMethod.id,
              name: billing?.name,
              line1: billing?.street,
              line2: billing?.unit ?? null,
              city: billing?.city,
              state: billing?.admin_area,
              zip: billing?.postal,
              country: billing?.country_code,
            };

            if (true) {
              this.functions
                .httpsCallable('verifyCard')(fData)
                .pipe(first())
                .subscribe(
                  async (resp) => {
                    let data = {
                      Administrative_Area: billing?.admin_area,
                      City: billing?.city,
                      Country: billing?.country,
                      First_Name: billing?.name
                        .split(' ')
                        .slice(0, -1)
                        .join(' '),
                      Last_Name: billing?.name.split(' ').slice(-1).join(' '),
                      Postal_Code: billing?.postal,
                      Street: billing?.street,
                      Company: billing?.company ?? '',
                      Unit_Number: billing?.unit ?? '',
                    };
                    if (uid) {
                      await this.db
                        .collection('Users/' + uid + '/Payment_Info')
                        .doc('Billing_Address')
                        .set(data);
                    }
                    callback();
                  },
                  (err) => {
                    callback('Card was declined');
                    console.error({ err });
                  }
                );
            }
          } else if (result.error) {
            // Error creating the token
            callback(result.error.message);
            console.log(result.error.message);
          }
        });
    } else {
      callback('Missing Fields.');
    }
  }

  async getPlans(callback: (arr?: Array<Plan>) => any) {
    var query = this.db.collection('Plans');
    var arr = new Array<Plan>();
    let sub = query.get().subscribe((docDatas) => {
      docDatas.docs.forEach((d) => {
        arr.push(d.data() as Plan);
      });
      callback(
        arr.sort(function (a, b) {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        })
      );
      if (isPlatformBrowser(this.platformID)) {
        sub.unsubscribe();
      }
    });
  }

  async getUtilities(callback: (arr?: Array<any>) => any) {
    var query = this.db.collection('Utility');
    var arr = new Array<any>();
    let sub = query.get().subscribe((docDatas) => {
      docDatas.docs.forEach((d) => {
        arr.push(d.data());
      });
      callback(
        arr.sort(function (a, b) {
          if (a.id > b.id) {
            return -1;
          }
          if (a.id < b.id) {
            return 1;
          }
          return 0;
        })
      );
      if (isPlatformBrowser(this.platformID)) {
        sub.unsubscribe();
      }
    });
  }

  async getBillingInfo(callback: (info?: any) => any) {
    let uid = (await this.isLoggedIn())?.uid;

    this.functions
      .httpsCallable('getCardInfo')({ uid })
      .pipe(first())
      .subscribe(
        (resp) => {
          callback(resp);
        },
        (err) => {
          callback(undefined);
          console.error({ err });
        }
      );
  }

  async getPaymentMethods(
    uid = Globals.storeInfo.uid,
    callback: (info?: any[]) => any
  ) {
    if (uid && uid !== '') {
      console.log(uid);
      this.functions
        .httpsCallable('getPaymentMethods')({ uid })
        .pipe(first())
        .subscribe(
          (resp) => {
            callback(resp);
          },
          (err) => {
            callback([]);
            console.error({ err });
          }
        );
    }
  }

  async getPages(callback: (info?: any[]) => any) {
    this.functions
      .httpsCallable('getPages')({})
      .pipe(first())
      .subscribe(
        (resp) => {
          callback(resp);
        },
        (err) => {
          callback([]);
          console.error({ err });
        }
      );
  }

  async getBigCommerceStore(callback: (info?: any) => any) {
    this.functions
      .httpsCallable('getBigCommerceStore')({})
      .pipe(first())
      .subscribe(
        (resp) => {
          callback(resp);
        },
        (err) => {
          callback(undefined);
          console.error({ err });
        }
      );
  }

  async processOrder(data: any, callback: (error?: string) => any) {
    this.functions
      .httpsCallable('processOrder')(data)
      .pipe(first())
      .subscribe(
        (resp) => {
          callback(resp);
        },
        (err) => {
          callback('This item is not available');
          console.error({ err });
        }
      );
  }

  isUndefined(element: any) {
    return element == undefined || element == null || element == '';
  }

  isBase64(str: string) {
    try {
      return btoa(atob(str)) == str;
    } catch (err) {
      return false;
    }
  }

  async deployCollection(
    name: string,
    symbol: string,
    abi: any,
    bytecode: any,
    domain: string,
    royaltyAddress: string,
    generatePage: boolean,
    callback: (collection?: Collection) => any
  ) {
    let data = {
      name,
      symbol,
      abi,
      bytecode,
      domain,
      thredMarketplace: thredInfra,
      royaltyAddress,
      generatePage,
    };

    this.functions
      .httpsCallable('deployCollection')(data)
      .pipe(first())
      .subscribe(
        async (resp) => {
          if (resp as Collection) {
            callback(resp);
          }
        },
        (err) => {
          var errorCode = err.code;
          var errorMessage = err.message;
          callback(undefined);
          console.log(errorMessage);
        }
      );
  }

  async saveStore(mappedData: Dict<any>) {
    // let uid = (await this.isLoggedIn())?.uid;
    // if (mappedData.images?.length > 0) {
    //   mappedData.image_list = new Array<string>();
    //   await mappedData.images.forEach(async (image: Dict<string>) => {
    //     mappedData.image_list.push(image.type);
    //     let url = await this.uploadStoreImages(image.img, image.type, uid);
    //   });
    // }
    // await this.saveStoreInfo(mappedData, uid);
  }

  private async saveNftImage(image: any, productID: string, mode = 0) {
    var filePath = 'Products/' + productID + '/';
    var uploadFile: any = '';
    var url = '';

    if (mode == 0) {
      filePath += 'link_' + productID + '.png';
      url = this.getURL(productID);
      uploadFile = Buffer.from(
        image.replace(/^[\w\d;:\/]+base64\,/g, ''),
        'base64'
      );
    } else if (mode == 1) {
      filePath += 'ios_' + productID + '.usdz';
      url = this.getModelURL(productID);
      uploadFile = image;
    } else if (mode == 2) {
      filePath += 'model_' + productID + '.glb';
      url = this.get3DURL(productID);
      uploadFile = image;
    } else if (mode == 3) {
      filePath += 'info_' + productID + '.json';
      url = this.getJSONURL(productID);
      uploadFile = image;
    } else if (mode == 4) {
      filePath += 'skybox_' + productID + '.hdr';
      url = this.getSkyBoxURL(productID);
      uploadFile = image;
    }

    if (uploadFile && uploadFile != '') {
      let ref = this.storage.ref(filePath);

      await ref.put(uploadFile);

      return url;
    }
    return undefined;
  }

  private async uploadLayoutImages(image: string, type: string, uid?: string) {
    const filePath = 'Users/' + uid + '/Layouts/' + type + '.png';
    let ref = this.storage.ref(filePath);

    const byteArray = Buffer.from(
      image?.replace(/^[\w\d;:\/]+base64\,/g, ''),
      'base64'
    );

    const task = await ref.put(byteArray);
    const url = await task.ref.getDownloadURL();
    return url;
  }

  private async uploadInventoryImages(
    image: string,
    inv_id: string,
    uid?: string
  ) {
    const filePath = 'Users/' + uid + '/Inventory/' + inv_id + '.png';
    let ref = this.storage.ref(filePath);

    const byteArray = Buffer.from(
      image.replace(/^[\w\d;:\/]+base64\,/g, ''),
      'base64'
    );

    // const task = await this.storage.upload(filePath, byteArray);
    const task = await ref.put(byteArray);
    const url = await task.ref.getDownloadURL();

    // if (type == "theme"){
    //   Globals.userInfo!.themeLink = url

    //   if (Globals.storeInfo?.uid == Globals.userInfo?.uid){
    //     Globals.storeInfo!.themeLink = url
    //   }
    // }
    // else if (type == "home"){
    //   Globals.userInfo!.homeLink = url

    //   if (Globals.storeInfo?.uid == Globals.userInfo?.uid){
    //     Globals.storeInfo!.homeLink = url
    //   }
    // }
    // else if (type == "action"){

    //   Globals.userInfo!.actionLink = url

    //   if (Globals.storeInfo?.uid == Globals.userInfo?.uid){
    //     Globals.storeInfo!.actionLink = url
    //   }
    // }
    return url;
    return undefined;
  }

  async getBase64ImageFromUrl(imageUrl: string) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', imageUrl, true);
      xhr.responseType = 'arraybuffer';

      xhr.onerror = function (e) {
        alert('error');
      };

      xhr.onload = function (e) {
        if (this.status == 404) {
          resolve('none');
          return;
        } else if (this.status == 200) {
          var uInt8Array = new Uint8Array(this.response);
          var i = uInt8Array.length;
          var biStr = new Array(i);
          while (i--) {
            biStr[i] = String.fromCharCode(uInt8Array[i]);
          }
          var data = biStr.join('');
          var base64 = window.btoa(data);

          xhr.onerror = function (e) {
            reject(e);
          };

          resolve('data:image/jpeg;base64,' + base64);
        }
      };
      xhr.send();
    });
  }

  private async uploadStoreImages(image: string, type?: string, uid?: string) {
    if (type) {
      const filePath = 'Users/' + uid + '/Store_Images/' + type + '.png';
      let ref = this.storage.ref(filePath);
      const byteArray = Buffer.from(
        image.replace(/^[\w\d;:\/]+base64\,/g, ''),
        'base64'
      );

      // const task = await this.storage.upload(filePath, byteArray);
      const task = await ref.put(byteArray);
      const url = new URL(await task.ref.getDownloadURL());

      if (type == 'theme') {
        Globals.storeInfo!.themeLink = url;
      } else if (type == 'home') {
        Globals.storeInfo!.homeLink = url;
      } else if (type == 'home_top') {
        Globals.storeInfo!.homeLinkTop = url;
      } else if (type == 'shop_top') {
        Globals.storeInfo!.shopLinkTop = url;
      } else if (type == 'action') {
        Globals.storeInfo!.actionLink = url;
      }
      return url;
    }
    return undefined;
  }

  async saveNFT(
    collectionAddress: string,
    name: string,
    description: string,
    model: File,
    img: string,
    traits: Dict<any>[],
    royalty: number = 0,
    price: number = 0,
    skybox: File,
    utility: any[],
    ios_model: File,
    tokenURL: string | null = null,
    tgUrls: any,
    callback: (nft?: NFT) => any
  ) {
    //add token later

    this.getCollection(collectionAddress, async (col?: Collection) => {
      if (col) {
        const image = await this.saveNftImage(
          img,
          `${collectionAddress}${(col.collectionCount ?? 0) + 1}`,
          0
        );
        var skyBoxUrl = '';
        if (skybox && skybox != null) {
          skyBoxUrl =
            (await this.saveNftImage(
              skybox,
              `${collectionAddress}${(col.collectionCount ?? 0) + 1}`,
              4
            )) ?? '';
        }

        const url2 = await this.saveNftImage(
          model,
          `${collectionAddress}${(col.collectionCount ?? 0) + 1}`,
          2
        );

        var url4 = '';
        if (ios_model && ios_model != null) {
          url4 =
            (await this.saveNftImage(
              ios_model,
              `${collectionAddress}${(col.collectionCount ?? 0) + 1}`,
              1
            )) ?? '';
        }

        var data1 = {
          name,
          description,
          image,
          model: url2,
          skybox: skyBoxUrl,
          traits: traits && traits !== [] ? traits : undefined,
          utility,
          ios_model: url4,
          tgUrls
        };

        const data2 = JSON.stringify(data1);

        var blob = new Blob([data2], { type: 'application/json' });

        const url = await this.saveNftImage(
          blob,
          `${collectionAddress}${(col.collectionCount ?? 0) + 1}`,
          3
        );

        let data = JSON.parse(
          JSON.stringify({
            collectionAddress,
            name,
            description,
            model: url2,
            skybox: skyBoxUrl,
            img: image,
            info: JSON.parse(data2),
            infoUrl: url,
            royalty,
            price,
            utility,
            ios_model: url4,
            tokenURL,
            tgUrls
          } as Dict<any>)
        );

        this.functions
          .httpsCallable('generateAsset')(data)
          .pipe(first())
          .subscribe(
            async (resp) => {
              if (resp as NFT) {
                callback(resp as NFT);
              }
            },
            (err) => {
              var errorCode = err.code;
              var errorMessage = err.message;
              callback(undefined);
              console.log(errorMessage);
            }
          );
      }
    });
  }

  // async saveStoreInfo(mappedData: Dict<any>, uid?: string) {
  //   var data: Dict<any> = {};

  //   if (mappedData.slogan) {
  //     data['Slogan'] = mappedData.slogan ?? '';
  //   }

  //   if (mappedData.indicator) {
  //     data['indicator'] = mappedData.indicator;
  //   }

  //   if (mappedData.theme) {
  //     data['store_style'] = mappedData.theme;
  //   }

  //   if (mappedData.font) {
  //     data['font'] = mappedData.font;
  //   }

  //   if (mappedData.image_list) {
  //     data['image_list'] = firebase.firestore.FieldValue.arrayUnion(
  //       ...mappedData.image_list
  //     );
  //   }

  //   if (mappedData.banners) {
  //     data['banners'] = mappedData.banners;
  //   }
  //   if (mappedData.banner_style != undefined) {
  //     data['banner_style'] = mappedData.banner_style ?? 0;
  //   }

  //   if (uid && Object.keys(data).length > 0) {
  //     await this.db.collection('Users').doc(uid).update(data);

  //     if (mappedData.slogan) {
  //       Globals.storeInfo!.slogan = mappedData.slogan;
  //     }

  //     if (mappedData.theme) {
  //       let matchingTheme = Globals.themes
  //         ?.find((theme) => theme.name == mappedData.theme?.class)
  //         ?.themes.find((theme) => {
  //           return theme.name == mappedData.theme?.name;
  //         });

  //       if (matchingTheme) {
  //         Globals.storeInfo!.colorStyle = matchingTheme;
  //       }
  //     }

  //     if (mappedData.font) {
  //       Globals.storeInfo!.fontName = mappedData.font;
  //     }

  //     // if (mappedData.image_list){
  //     //   data["image_list"] = firebase.firestore.FieldValue.arrayUnion(...mappedData.image_list)
  //     // }

  //     if (mappedData.banners) {
  //       Globals.storeInfo!.banners = mappedData.banners;
  //     }

  //     if (mappedData.banner_style) {
  //       Globals.storeInfo!.bannerStyle = mappedData.banner_style ?? 0;
  //     }

  //     // Globals.userInfo!.themeLink = mappedData.banners
  //     // Globals.userInfo!.banners = mappedData.banners
  //     // Globals.userInfo!.banners = mappedData.banners

  //     Globals.sInfo.next(Globals.storeInfo);
  //   }
  //   if (this.myCallback) this.myCallback();
  // }

  getRandomInt(max: 100, oldVal: string) {
    let k = Math.floor(Math.random() * max);

    if (k.toString() == oldVal) {
      this.getRandomInt(max, oldVal);
    }
    return k.toString();
  }

  async deletePage(page: Page, callback: (success: boolean) => any) {
    this.functions
      .httpsCallable('deletePage')({
        docID: page.id,
      })
      .pipe(first())
      .subscribe(
        async (resp) => {
          if (resp as Page) {
            Globals.storeInfo!.pages = resp ?? [];
            Globals.sInfo.next(Globals.storeInfo);
            callback(true);
          } else {
            callback(false);
          }
        },
        (err) => {
          console.error({ err });
          callback(false);
        }
      );
  }

  async addLayout(
    page: Page,
    callback: (success: boolean) => any,
    uid?: string
  ) {
    const promises1 = (page.rows ?? []).map(
      async (row: Row, mainIndex: number) => {
        const promises2 = (row.imgs ?? []).map(
          async (image: string, index: number) => {
            if (this.isBase64(image?.replace(/^[\w\d;:\/]+base64\,/g, ''))) {
              var url = image;
              url = (await this.uploadLayoutImages(
                image,
                page.id + '_' + mainIndex.toString() + '_' + index.toString(),
                uid
              )) as string;
              var split = url.split('&token=');
              url = split[0];

              ((page.rows ?? [])[mainIndex].imgs ?? [])[index] = url;
            }
          }
        );
        await Promise.all(promises2);
      }
    );

    await Promise.all(promises1);

    var url = page.img;

    if (
      page.img &&
      this.isBase64(page.img?.replace(/^[\w\d;:\/]+base64\,/g, ''))
    ) {
      url = (await this.uploadLayoutImages(
        page.img,
        `${page.id}_main`,
        uid
      )) as string;
      var split = url.split('&token=');
      url = split[0];
    }

    var pages = JSON.parse(JSON.stringify(Globals.storeInfo?.pages ?? []));

    let i = pages.findIndex((p: any) => p.id == page.id);

    if (i > -1) {
      pages[i].rows = page.rows ?? [];
      pages[i].title = page.title;
      pages[i].url = page.url;
      pages[i].name = page.name;
      pages[i].fullscreen = page.fullscreen;
      pages[i].seo = page.seo;
      pages[i].loader = page.loader;
      pages[i].img = url;
      pages[i].bigcId = page.bigcId;
    } else {
      page.id = uuid().replace('-', '');
      page.img = url;
      pages.push(JSON.parse(JSON.stringify(page)));
    }

    var data = {
      pages: JSON.parse(JSON.stringify(pages)),
    };

    if (uid && data) {
      await this.db.collection('Users').doc(uid).update(data);
      if (data.pages) {
        Globals.storeInfo!.pages = data.pages ?? [];
      }
    }
    callback(true);
  }

  openSnackBar(
    message: string,
    timeDuration = 1000,
    horizontal: MatSnackBarHorizontalPosition = 'right',
    vertical: MatSnackBarVerticalPosition = 'top'
  ) {
    this.snackBar.open(message, '', {
      duration: timeDuration,
      horizontalPosition: horizontal,
      verticalPosition: vertical,
    });
  }

  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }

  loggedIn() {
    return this.auth.authState;
  }

  roundedFavIconLink() {
    return Globals.storeInfo?.profileLink;
  }

  async authenticated() {
    const user = await this.isLoggedIn();
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  async getCoords() {
    let value = (await this.http
      .get('https://api.ipify.org/?format=json')
      .toPromise()) as Dict<any>;

    let url = `https://api.ipstack.com/${value.ip}?access_key=5b5f96aced42e6b1c95ab24d96f704c5`;
    let resp = (await this.http.get(url).toPromise()) as Dict<any>;
    let address = {
      city: resp.city,
      country: resp.country_name,
      country_code: resp.country_code,
      region: resp.region_name,
      region_code: resp.region_code,
    };
    let coords = {
      LATITUDE: resp.latitude,
      LONGITUDE: resp.longitude,
    };
    return {
      coords,
      address,
    };
  }

  addDays(date: Date, days: number) {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + days,
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    );
  }

  getMiscStats(
    uid: string,
    date1: Date,
    date2: Date,
    callback: (views?: Dict<any>[]) => any
  ) {
    var views: Dict<any>[] = [];

    let sub = this.db
      .collection('Users/' + uid + '/Daily_Info/', (ref) =>
        ref
          .where('timestamp', '>=', date1)
          .where('timestamp', '<=', new Date(date2.setHours(23, 59, 59, 999)))
      )
      .valueChanges()
      .subscribe((docDatas) => {
        docDatas.forEach((doc, index) => {
          const docData = doc as DocumentData;
          if (docData) {
            let time = docData.time as Array<any>;
            let type = docData.type as string;
            time.forEach((t) => {
              let p =
                t instanceof firebase.firestore.Timestamp
                  ? (t as firebase.firestore.Timestamp).toDate()
                  : (t.time as firebase.firestore.Timestamp).toDate();
              let v =
                t instanceof firebase.firestore.Timestamp
                  ? this.defaultCoords.coords
                  : t.coords;
              let address =
                t instanceof firebase.firestore.Timestamp
                  ? this.defaultCoords.address
                  : t.address;
              let productId =
                t instanceof firebase.firestore.Timestamp
                  ? undefined
                  : t.productID;
              views?.push({
                num: 1,
                coords: v,
                address,
                productId,
                type,
                timestamp: p,
              });
            });
          }
        });
        callback(views);
        if (isPlatformBrowser(this.platformID)) sub.unsubscribe();
      });
  }

  splitToBulks(arr: Array<any>, bulkSize = 10) {
    const bulks = [];
    for (let i = 0; i < Math.ceil(arr.length / bulkSize); i++) {
      bulks.push(arr.slice(i * bulkSize, (i + 1) * bulkSize));
    }
    return bulks;
  }

  async getNFTsById(
    docIDs: string[],
    callback: (
      items: Dict<{
        nft: NFT;
        collection: Collection;
      }>
    ) => any,
    provider: ethers.providers.Provider = new ethers.providers.JsonRpcProvider(
      this.rpcEndpoint
    )
  ) {
    var cols: Dict<{
      nft: NFT;
      collection: Collection;
    }> = {};

    if (docIDs.length == 0) {
      callback(cols);
      return;
    }

    let ids = this.splitToBulks(docIDs);
    var counter = 0;
    await Promise.all(
      ids.map((i) => {
        var query = this.db.collectionGroup('Products', (ref) =>
          ref.where('docID', 'in', i).orderBy('tokenId')
        );

        let sub = query.get().subscribe(async (docDatas) => {
          let nfts = docDatas.docs.map((doc) => doc.data()) as NFT[];

          nfts.forEach((n) => {
            this.getCols(n, cols, (collection?: Collection) => {
              cols[`${n.docID}`] = { nft: n, collection: collection! };
              counter += 1;
              if (counter == nfts.length) {
                callback(cols);
              }
            });
          });
        });
      })
    );
  }

  getCols(
    n: NFT,
    cols: Dict<{
      nft: NFT;
      collection: Collection;
    }>,
    callback: (col?: Collection) => any
  ) {
    let same = Object.values(cols).find((c) => c.nft.address == n.address);
    if (same) {
      callback(same.collection);
    } else {
      this.getCollection(n.address, async (co) => {
        if (!co) {
          callback(undefined);
          return;
        }
        callback(co);
        return;
      });
    }
  }

  async getPost(
    productID: string,
    callback: (product?: NFT, collection?: Collection) => any,
    cartProduct?: ProductInCart,
    orderProduct?: ProductInCart,
    saleProduct?: ProductInCart,
    selectedProduct?: NFT,
    provider: ethers.providers.Provider = new ethers.providers.JsonRpcProvider(
      this.rpcEndpoint
    )
  ) {
    // let provider2 = await this.checkProviderChain(provider);

    var query = this.db.collectionGroup('Products', (ref) =>
      ref.where('docID', '==', productID).orderBy('tokenId')
    );

    let sub = query.get().subscribe(async (docDatas) => {
      docDatas.docs.forEach(async (doc, index) => {
        var product = doc.data() as NFT;

        if (product) {
          if (product.address) {
            this.getCollection(product.address, async (co) => {
              if (!co) {
                return;
              }
              callback(product, co);
              return;
            });
          } else {
            callback(product);
            return;
          }
        }
        callback();
      });
      if (isPlatformBrowser(this.platformID)) {
        sub.unsubscribe();
      }
    });
  }

  async estimateGas(
    isNative: boolean,
    currency: any,
    symbol: string,
    name: string,
    abi: any,
    bytecode: any,
    wallet: ethers.Wallet
  ) {
    let provider = new ethers.providers.JsonRpcProvider(this.rpcEndpoint);

    let factory = new ethers.ContractFactory(abi, bytecode, wallet);
    var tokenAddress = isNative
      ? ethers.constants.AddressZero
      : ethers.utils.getAddress(currency.token);

    let admins = [thredInfra];
    let minters = [wallet.address, thredInfra];

    const data = factory.getDeployTransaction(
      name,
      symbol,
      tokenAddress,
      minters,
      admins
    );

    const estimatedGas = await provider.estimateGas({ data: data.data });

    console.log(estimatedGas.toNumber());
  }

  getURL(productID: string) {
    return (
      'https://storage.googleapis.com/clothingapp-ed125.appspot.com/Products/' +
      productID +
      '/link_' +
      productID +
      '.png'
    );
  }

  getModelURL(productID: string) {
    return (
      'https://storage.googleapis.com/clothingapp-ed125.appspot.com/Products/' +
      productID +
      '/ios_' +
      productID +
      '.usdz'
    );
  }

  get3DURL(productID: string) {
    return (
      'https://storage.googleapis.com/clothingapp-ed125.appspot.com/Products/' +
      productID +
      '/model_' +
      productID +
      '.glb'
    );
  }

  getSkyBoxURL(productID: string) {
    return (
      'https://storage.googleapis.com/clothingapp-ed125.appspot.com/Products/' +
      productID +
      '/skybox_' +
      productID +
      '.hdr'
    );
  }
  // https://storage.cloud.google.com/clothingapp-ed125.appspot.com/Products/0x499E4f4228A267c9c537EAeb747FE8081fF650B39/skybox_0x499E4f4228A267c9c537EAeb747FE8081fF650B39.hdr

  getJSONURL(productID: string) {
    return (
      'https://storage.googleapis.com/clothingapp-ed125.appspot.com/Products/' +
      productID +
      '/info_' +
      productID +
      '.json'
    );
  }

  getProfileURL(uid: string, dpID: string) {
    if (Globals.isNewUser) {
      return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F0aDUTsg31KR7sb4r6ACi4NWmjXi2%2Fprofile_pic-D6F448C1B7C541F387C2FE4EA02A51D5.jpeg?alt=media';
    }
    return (
      'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' +
      uid +
      '%2Fprofile_pic-' +
      dpID +
      '.jpeg?alt=media'
    );
  }

  getDefaultURL() {
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media';
  }

  getAltURL() {
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';
  }
}
