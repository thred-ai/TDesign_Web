import { Dict } from '../services/load.service'
import { StoreTheme } from './theme.model'
import { StoreDomain } from './store-domain.model'
import { Coupon } from './coupon.model'
import { Banner } from './banner.model'
import { Popup } from './popup.model'

import { Globals } from '../globals'
import { Row } from './row.model'

export class Store {
    uid?: string
    dpID?: string
    username?: string
    fullName?: string
    bio?: string
    notifID?: string
    userFollowing?: Array<string>
    userLiked?: Array<string>
    followerCount?: number
    postCount?: number
    followingCount?: number
    usersBlocking?: Array<string>
    //designImage: Data!
    profileLink?: URL
    verified?: boolean
    isPublic?: boolean
    postNotifsList: Array<string>
    slogan?: string
    loading?: Dict<any>


    themeLink?: URL = new URL('https://shopmythred.com')
    homeLink?: URL = new URL('https://shopmythred.com')
    actionLink?: URL = new URL('https://shopmythred.com')
    homeLinkTop?: URL
    shopLinkTop?: URL

    colorStyle: StoreTheme
    fontName?: string
    socials?: Array<{
      name: string,
      link: string
    }>
    customURL?: StoreDomain
    fb_pixel?: string
    active?: boolean
    coupons?: Array<Coupon>
    banners: Array<Banner> = []
    bannerStyle?: number = 0
    popups?: Array<Popup>
    homeRows?: Array<Row>
    orders?: number = 0

    constructor(
      uid?: string, 
      dpID?: string,
      username?: string,
      fullName?: string,
      bio?: string,
      notifID?: string,
      userFollowing?: Array<string>,
      userLiked?: Array<string>,
      followerCount?: number,
      postCount?: number,
      followingCount?: number,
      usersBlocking?: Array<string>,
      profileLink?: string,
      verified?: boolean,
      isPublic?: boolean,
      postNotifsList?: Array<string>,
      slogan?: string,
      loading?: Dict<any>,


      themeLink?: string,
      actionLink?: string,


      homeLink?: string,
      homeLinkTop?: string,
      shopLinkTop?: string,


      colorStyle?: StoreTheme,
      fontName?: string,
      socials?: Array<{
        name: string,
        link: string
      }>,
      customURL?: StoreDomain,
      fb_pixel?: string,
      active?: boolean,
      coupons?: Array<Coupon>,
      banners?: Array<Banner>,
      bannerStyle?: number,
      popups?: Array<Popup>,
      homeRows?: Array<Row>,
      orders?: number
      ) {

      this.uid = uid
      this.dpID = dpID;
      this.username = username;
      this.fullName = fullName;
      this.bio = bio;
      this.notifID = notifID;
      this.userFollowing = userFollowing;
      this.userLiked = userLiked;
      this.followerCount = followerCount;
      this.postCount = postCount;
      this.followingCount = followingCount;
      this.usersBlocking = usersBlocking;
      if (profileLink){
        this.profileLink = new URL(profileLink as string ?? "");
      }
      if (themeLink){
        this.themeLink = new URL(themeLink as string ?? "");
      }
      if (homeLink){
        this.homeLink = new URL(homeLink as string ?? "");
      }
      if (actionLink){
        this.actionLink = new URL(actionLink as string ?? "");
      }
      if (homeLinkTop){
        this.homeLinkTop = new URL(homeLinkTop as string ?? "");
      }
      if (shopLinkTop){
        this.shopLinkTop = new URL(shopLinkTop as string ?? "");
      }

      this.verified = verified;
      this.isPublic = isPublic
      this.postNotifsList = postNotifsList as Array<string>
      this.slogan = slogan ?? fullName ?? ""


      this.loading = loading ?? {
        name: "ball-clip-rotate-pulse",
        color: [100.0, 100.0, 100.0, 1],
        bg_color: [255.0, 255.0, 255.0, 0.98]
      }

      this.colorStyle = colorStyle ?? new StoreTheme('Light','light','dark', 'light', 'simple', [255.0, 255.0, 255.0, 1],[10.0, 10.0, 10.0, 1])
      this.fontName = fontName ?? 'Montserrat'//"Roboto"
      // this.colorStyle = colorStyle ?? new StoreTheme('Dark','dark','light',[10.0, 10.0, 10.0, 1],[255.0, 255.0, 255.0, 1])

      // this.colorStyle = colorStyle ?? new StoreTheme('Red','light','dark',[255.0, 0.0, 0.0, 1],[10.0, 10.0, 10.0, 1])

      let s: {
        name: string;
        link: string;
      }[] = []

      if (socials != undefined && socials.length != 0){
        Globals.socials.forEach( social => {
          let same = socials.filter(obj => {
            return obj.name == social.name
          })
          if (same && same.length != 0){
            s.push(same[0])
          }
        })

        this.socials = s
      }
      this.customURL = customURL
      this.fb_pixel = fb_pixel
      this.active = (active ?? false) && ((postCount ?? 0) > 0)

      this.coupons = coupons ?? []
      this.banners = banners ?? []
      this.bannerStyle = bannerStyle ?? 0

      this.popups = popups ?? []
      this.homeRows = homeRows ?? [
        new Row('NEW ARRIVALS', undefined, 0, 0, undefined),
        new Row(undefined, undefined, undefined, 1, this.homeLink?.toString() ?? ""),
        new Row('FEATURED', undefined, 1, 0, undefined),
      ]
      this.orders = orders ?? 0
    }
}