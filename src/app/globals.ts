import { Store } from './models/store.model'
import { Country } from './models/shipping-country.model'
import { Product } from './models/product.model'
import { Template } from './models/template.model'
import { Injectable } from '@angular/core'
import { Blog } from './models/blog.model'
import { ProductInCart } from './models/product-in-cart.model'
import { ShippingInfo } from './models/shipping-address.model'
import { BillingInfo } from './models/billing-address.model'
import { Order } from './models/order.model'
import { StoreTheme } from './models/theme.model'
import { Dict } from './services/load.service'
import { ethers } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal';
import { BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root',
})
export class Globals {

  public static sInfo = new BehaviorSubject<Store>(new Store())

  public static uInfo = new BehaviorSubject<Store>(new Store())

  public static storeInfo = new Store()

  public static userInfo?: Store = undefined

  public static availableCurrencies: Array<Country> = []

  public static selectedCurrency?: Country = new Country()

  public static templates: Array<Template> = []

  public static availableTemplates: Array<Template> = []

  public static selectedTemplate?: Template = new Template()

  public static prov?: ethers.providers.Web3Provider


  public static rates: Dict<any>[] = []

  public static get provider(){
    return this.prov
  }

  public static set provider(provider: ethers.providers.Web3Provider | undefined){
    this.prov = provider
    console.log(provider)
    this.checkNetwork(true,  provider);
  }

  public static requested = false;
  public static async checkNetwork(test: boolean, provider: ethers.providers.Web3Provider | undefined) {
    
    // console.log(.)

    // let sent = await provider?.send('wallet_switchEthereumChain', [{ chainId: `0x${Number(80001).toString(16)}` }])

        // try {
         
        // } catch (error) {
        //   console.log(error)
        //   const polygon = {
        //     chainId: `0x${Number(80001).toString(16)}`,
        //     chainName: 'Polygon Mainnet',
        //     nativeCurrency: {
        //       name: 'MATIC',
        //       symbol: 'MATIC',
        //       decimals: 18,
        //     },
        //     rpcUrls: ['https://polygon-rpc.com'],
        //     blockExplorerUrls: ['https://polygonscan.com'],
        //   };
        //   await this.provider?.send('wallet_addEthereumChain', [polygon])
        // }

    // this.checkProvider();
  }

  public static async checkProvider() {
    if (true) {
      const provider = await this.initializeProvider();
      this.provider = provider;
    }
  }

  public static async initializeProvider() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: '90806fec200c42fdbf783260b38f0a73',
          rpc: {
            1:
              'https://mainnet.infura.io/v3/' +
              '90806fec200c42fdbf783260b38f0a73',
            42:
              'https://kovan.infura.io/v3/' +
              '90806fec200c42fdbf783260b38f0a73',
            137:
              'https://polygon-mainnet.infura.io/v3/' +
              '90806fec200c42fdbf783260b38f0a73',
            80001: 'https://rpc-mumbai.matic.today',
          },
          qrcodeModalOptions: {
            mobileLinks: [
              'rainbow',
              'metamask',
              'argent',
              'trust',
              'imtoken',
              'pillar',
            ],
          },
        },
        
        display: {
          description: 'Scan with a wallet to connect',
        },
      },
    };

    const web3Modal = new Web3Modal({
      network: 'mainnet', // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });

    var provider: ethers.providers.Web3Provider | undefined = undefined

    try {
        const connection = await web3Modal.connect();
        provider = new ethers.providers.Web3Provider(connection);
      } catch (error) {
        provider = undefined
      }
    return provider;
  }

  public static async isUnlocked() {

    let unlocked;

    try {
      const accounts = await this.provider?.listAccounts() ?? [];

      unlocked = accounts.length > 0;
    } catch (e) {
      unlocked = false;
    }

    return unlocked;
  }

  public static types = [
    {
      id: 'product',
      name: 'Per. Product',
      icon: 'sell'
    },
    {
      id: 'order_val',
      name: 'Cart Value',
      icon: 'add_shopping_cart'
    },
    {
      id: 'order_qty',
      name: 'Cart Size',
      icon: 'receipt'
    }
  ]

  public static rowAnimations = [
    {
        name: 'Fade',
        animations: [
            'fade-up',
            'fade-down',
            'fade-right',
            'fade-left',
            'fade-up-right',
            'fade-up-left',
            'fade-down-right',
            'fade-down-left'
        ]
    },
    {
        name: 'Flip',
        animations: [
            'flip-left',
            'flip-right',
            'flip-up',
            'flip-down',
        ]
    },
    {
        name: 'Zoom',
        animations: [
            'zoom-in',
            'zoom-in-up',
            'zoom-in-down',
            'zoom-in-left',
            'zoom-in-right',
            'zoom-out',
            'zoom-out-up',
            'zoom-out-down',
            'zoom-in-right',
            'zoom-out-right',
            'zoom-out-left',
        ]
    }
  ]

  public static selectedOrder?: Order = new Order()

  public static selectedBlog?: Blog = new Blog()

  public static blogs: Array<Blog> = []

  public static URL: any = ""

  public static productsSold?: Array<ProductInCart> = []

  public static views?: Array<{
      views: Dict<any>,
      timestamp: Date,
  }> = []

  public static dropCarts?: Array<{
    dropCarts: number,
    timestamp: Date
}> = []

  public static newCustomers?: number = 0

  public static shippingInfo?: ShippingInfo = new ShippingInfo()

  public static billingInfo?: BillingInfo = new BillingInfo()

  public static themes?: Array<{
    name: string,
    themes: Array<StoreTheme>
  }> = []

  public static shippingTax? = 0

  public static didLog = false

  public static days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  public static months = ['January','February','March','April','May','June', 'July','August','September','October','November','December'];


  public static useOtherPaymentMethod = false

  public static isNewUser = false

public static socials = [

    {
        name: 'Instagram',
        img: '/assets/instagram.png',
    },
    {
        name: 'Discord',
        img: '/assets/discord.png',
    },
    {
        name: 'Twitter',
        img: '/assets/twitter.png',
    },
    {
        name: 'TikTok',
        img: '/assets/tiktok.png',
    },
    {
        name: 'Youtube',
        img: '/assets/youtube.png',
    },
    {
        name: 'Facebook',
        img: '/assets/facebook.png',
    },
    {
        name: 'Pinterest',
        img: '/assets/pinterest.png',
    }
]



  public static loaders = [
    'ball-8bits',
    'ball-atom',
    'ball-beat',
    'ball-circus',
    'ball-climbing-dot',
    'ball-clip-rotate',
    'ball-clip-rotate-multiple',
    'ball-clip-rotate-pulse',
    'ball-elastic-dots',
    'ball-fall',
    'ball-fussion',
    'ball-grid-beat',
    'ball-grid-pulse',
    'ball-newton-cradle',
    'ball-pulse',
    'ball-pulse-rise',
    'ball-pulse-sync',
    'ball-rotate',
    'ball-running-dots',
    'ball-scale',
    'ball-scale-multiple',
    'ball-scale-pulse',
    'ball-scale-ripple',
    'ball-scale-ripple-multiple',
    'ball-spin',
    'ball-spin-clockwise',
    'ball-spin-clockwise-fade',
    'ball-spin-clockwise-fade-rotating',
    'ball-spin-fade',
    'ball-spin-fade-rotating',
    'ball-spin-rotate',
    'ball-square-clockwise-spin',
    'ball-square-spin',
    'ball-triangle-path',
    'ball-zig-zag',
    'ball-zig-zag-deflect',
    'cog',
    'cube-transition',
    'fire',
    'line-scale',
    'line-scale-party',
    'line-scale-pulse-out',
    'line-scale-pulse-out-rapid',
    'line-spin-clockwise-fade',
    'line-spin-clockwise-fade-rotating',
    'line-spin-fade',
    'line-spin-fade-rotating',
    'pacman',
    'square-jelly-box',
    'square-loader',
    'square-spin',
    'timer',
    'triangle-skew-spin',
]


public static fonts = [
    'Arbutus',
    'Bungee Hairline',
    'Bungee Outline',
    'Clicker Script',
    'Codystar',
    'Condiment',
    'Diplomata SC',
    'DotGothic16',
    'Erica One',
    'Ewert',
    'Geo',
    'Lexend Peta',
    'Meie Script',
    'Monofett',
    'Montserrat',
    'Montserrat Alternates',
    'Montserrat Subrayada',
    'Nanum Brush Script',
    'Notable',
    'Original Surfer',
    'Permanent Marker',
    'Playfair Display',
    'Roboto',
    'Rowdies',
    'Saira Stencil One',
    'Tulpen One',
]

  public static countries = [

    {
      'name': 'Canada',
      'abbreviation': 'CA'
    },
    {
      'name': 'United States',
      'abbreviation': 'US'
    },
    {
      'name': 'United Kingdom',
      'abbreviation': 'UK'
    },
    {
        'name': 'Australia',
        'abbreviation': 'AU'
      }
  ]



  public static usStates = [
    {
        'name': 'Alabama',
        'abbreviation': 'AL'
    },
    {
        'name': 'Alaska',
        'abbreviation': 'AK'
    },
    {
        'name': 'American Samoa',
        'abbreviation': 'AS'
    },
    {
        'name': 'Arizona',
        'abbreviation': 'AZ'
    },
    {
        'name': 'Arkansas',
        'abbreviation': 'AR'
    },
    {
        'name': 'California',
        'abbreviation': 'CA'
    },
    {
        'name': 'Colorado',
        'abbreviation': 'CO'
    },
    {
        'name': 'Connecticut',
        'abbreviation': 'CT'
    },
    {
        'name': 'Delaware',
        'abbreviation': 'DE'
    },
    {
        'name': 'District Of Columbia',
        'abbreviation': 'DC'
    },
    {
        'name': 'Federated States Of Micronesia',
        'abbreviation': 'FM'
    },
    {
        'name': 'Florida',
        'abbreviation': 'FL'
    },
    {
        'name': 'Georgia',
        'abbreviation': 'GA'
    },
    {
        'name': 'Guam',
        'abbreviation': 'GU'
    },
    {
        'name': 'Hawaii',
        'abbreviation': 'HI'
    },
    {
        'name': 'Idaho',
        'abbreviation': 'ID'
    },
    {
        'name': 'Illinois',
        'abbreviation': 'IL'
    },
    {
        'name': 'Indiana',
        'abbreviation': 'IN'
    },
    {
        'name': 'Iowa',
        'abbreviation': 'IA'
    },
    {
        'name': 'Kansas',
        'abbreviation': 'KS'
    },
    {
        'name': 'Kentucky',
        'abbreviation': 'KY'
    },
    {
        'name': 'Louisiana',
        'abbreviation': 'LA'
    },
    {
        'name': 'Maine',
        'abbreviation': 'ME'
    },
    {
        'name': 'Marshall Islands',
        'abbreviation': 'MH'
    },
    {
        'name': 'Maryland',
        'abbreviation': 'MD'
    },
    {
        'name': 'Massachusetts',
        'abbreviation': 'MA'
    },
    {
        'name': 'Michigan',
        'abbreviation': 'MI'
    },
    {
        'name': 'Minnesota',
        'abbreviation': 'MN'
    },
    {
        'name': 'Mississippi',
        'abbreviation': 'MS'
    },
    {
        'name': 'Missouri',
        'abbreviation': 'MO'
    },
    {
        'name': 'Montana',
        'abbreviation': 'MT'
    },
    {
        'name': 'Nebraska',
        'abbreviation': 'NE'
    },
    {
        'name': 'Nevada',
        'abbreviation': 'NV'
    },
    {
        'name': 'New Hampshire',
        'abbreviation': 'NH'
    },
    {
        'name': 'New Jersey',
        'abbreviation': 'NJ'
    },
    {
        'name': 'New Mexico',
        'abbreviation': 'NM'
    },
    {
        'name': 'New York',
        'abbreviation': 'NY'
    },
    {
        'name': 'North Carolina',
        'abbreviation': 'NC'
    },
    {
        'name': 'North Dakota',
        'abbreviation': 'ND'
    },
    {
        'name': 'Northern Mariana Islands',
        'abbreviation': 'MP'
    },
    {
        'name': 'Ohio',
        'abbreviation': 'OH'
    },
    {
        'name': 'Oklahoma',
        'abbreviation': 'localhost:4200'
    },
    {
        'name': 'Oregon',
        'abbreviation': 'OR'
    },
    {
        'name': 'Palau',
        'abbreviation': 'PW'
    },
    {
        'name': 'Pennsylvania',
        'abbreviation': 'PA'
    },
    {
        'name': 'Puerto Rico',
        'abbreviation': 'PR'
    },
    {
        'name': 'Rhode Island',
        'abbreviation': 'RI'
    },
    {
        'name': 'South Carolina',
        'abbreviation': 'SC'
    },
    {
        'name': 'South Dakota',
        'abbreviation': 'SD'
    },
    {
        'name': 'Tennessee',
        'abbreviation': 'TN'
    },
    {
        'name': 'Texas',
        'abbreviation': 'TX'
    },
    {
        'name': 'Utah',
        'abbreviation': 'UT'
    },
    {
        'name': 'Vermont',
        'abbreviation': 'VT'
    },
    {
        'name': 'Virgin Islands',
        'abbreviation': 'VI'
    },
    {
        'name': 'Virginia',
        'abbreviation': 'VA'
    },
    {
        'name': 'Washington',
        'abbreviation': 'WA'
    },
    {
        'name': 'West Virginia',
        'abbreviation': 'WV'
    },
    {
        'name': 'Wisconsin',
        'abbreviation': 'WI'
    },
    {
        'name': 'Wyoming',
        'abbreviation': 'WY'
    }
  ];

  public static caProvinces = [
    {
        'name': 'Alberta',
        'abbreviation': 'AB'
    },
    {
        'name': 'British Columbia',
        'abbreviation': 'BC'
    },
    {
        'name': 'Manitoba',
        'abbreviation': 'MB'
    },
    {
        'name': 'New Brunswick',
        'abbreviation': 'NB'
    },
    {
        'name': 'Newfoundland & Labrador',
        'abbreviation': 'NL'
    },
    {
        'name': 'Nova Scotia',
        'abbreviation': 'NS'
    },
    {
        'name': 'Prince Edward Island',
        'abbreviation': 'PEI'
    },
    {
        'name': 'Quebec',
        'abbreviation': 'QC'
    },
    {
        'name': 'Saskatchewan',
        'abbreviation': 'SK'
    },
    {
        'name': 'Ontario',
        'abbreviation': 'ON'
    }
  ];

  public static matchingProvince(a: string){
    return this.caProvinces.find(p => { return p.name.toLowerCase() == a.trim().toLowerCase() || p.abbreviation.toLowerCase() == a.trim().toLowerCase()})
  }

  public static ukNations = [
    {
        'name': 'England',
        'abbreviation': 'ENG'
    },
    {
        'name': 'Scotland',
        'abbreviation': 'SCT'
    },
    {
        'name': 'Northern Ireland',
        'abbreviation': 'NIR'
    },
    {
        'name': 'Wales',
        'abbreviation': 'WLS'
    },
  ];

  public static auNations = [
    {
        'name': 'New South Wales',
        'abbreviation': 'NSW'
    },
    {
        'name': 'Queensland',
        'abbreviation': 'QLD'
    },
    {
        'name': 'Victoria',
        'abbreviation': 'VIC'
    },
    {
        'name': 'Tasmania',
        'abbreviation': 'TAS'
    },
    {
        'name': 'Western Australia',
        'abbreviation': 'WA'
    },
    {
        'name': 'South Australia',
        'abbreviation': 'SA'
    },
  ];

  public static allCountries = [
    {"name": "United States", "code": "US"},
    {"name": "Canada", "code": "CA"},
    {"name": "United Kingdom", "code": "GB"},
    {"name": "Australia", "code": "AU"},
    {"name": "Afghanistan", "code": "AF"},
    {"name": "Åland Islands", "code": "AX"},
    {"name": "Albania", "code": "AL"},
    {"name": "Algeria", "code": "DZ"},
    {"name": "American Samoa", "code": "AS"},
    {"name": "AndorrA", "code": "AD"},
    {"name": "Angola", "code": "AO"},
    {"name": "Anguilla", "code": "AI"},
    {"name": "Antarctica", "code": "AQ"},
    {"name": "Antigua and Barbuda", "code": "AG"},
    {"name": "Argentina", "code": "AR"},
    {"name": "Armenia", "code": "AM"},
    {"name": "Aruba", "code": "AW"},
    {"name": "Austria", "code": "AT"},
    {"name": "Azerbaijan", "code": "AZ"},
    {"name": "Bahamas", "code": "BS"},
    {"name": "Bahrain", "code": "BH"},
    {"name": "Bangladesh", "code": "BD"},
    {"name": "Barbados", "code": "BB"},
    {"name": "Belarus", "code": "BY"},
    {"name": "Belgium", "code": "BE"},
    {"name": "Belize", "code": "BZ"},
    {"name": "Benin", "code": "BJ"},
    {"name": "Bermuda", "code": "BM"},
    {"name": "Bhutan", "code": "BT"},
    {"name": "Bolivia", "code": "BO"},
    {"name": "Bosnia and Herzegovina", "code": "BA"},
    {"name": "Botswana", "code": "BW"},
    {"name": "Bouvet Island", "code": "BV"},
    {"name": "Brazil", "code": "BR"},
    {"name": "British Indian Ocean Territory", "code": "IO"},
    {"name": "Brunei Darussalam", "code": "BN"},
    {"name": "Bulgaria", "code": "BG"},
    {"name": "Burkina Faso", "code": "BF"},
    {"name": "Burundi", "code": "BI"},
    {"name": "Cambodia", "code": "KH"},
    {"name": "Cameroon", "code": "CM"},
    {"name": "Cape Verde", "code": "CV"},
    {"name": "Cayman Islands", "code": "KY"},
    {"name": "Central African Republic", "code": "CF"},
    {"name": "Chad", "code": "TD"},
    {"name": "Chile", "code": "CL"},
    {"name": "China", "code": "CN"},
    {"name": "Christmas Island", "code": "CX"},
    {"name": "Cocos (Keeling) Islands", "code": "CC"},
    {"name": "Colombia", "code": "CO"},
    {"name": "Comoros", "code": "KM"},
    {"name": "Congo", "code": "CG"},
    {"name": "Congo, The Democratic Republic of the", "code": "CD"},
    {"name": "Cook Islands", "code": "CK"},
    {"name": "Costa Rica", "code": "CR"},
    {"name": "Cote D\"Ivoire", "code": "CI"},
    {"name": "Croatia", "code": "HR"},
    {"name": "Cuba", "code": "CU"},
    {"name": "Cyprus", "code": "CY"},
    {"name": "Czech Republic", "code": "CZ"},
    {"name": "Denmark", "code": "DK"},
    {"name": "Djibouti", "code": "DJ"},
    {"name": "Dominica", "code": "DM"},
    {"name": "Dominican Republic", "code": "DO"},
    {"name": "Ecuador", "code": "EC"},
    {"name": "Egypt", "code": "EG"},
    {"name": "El Salvador", "code": "SV"},
    {"name": "Equatorial Guinea", "code": "GQ"},
    {"name": "Eritrea", "code": "ER"},
    {"name": "Estonia", "code": "EE"},
    {"name": "Ethiopia", "code": "ET"},
    {"name": "Falkland Islands (Malvinas)", "code": "FK"},
    {"name": "Faroe Islands", "code": "FO"},
    {"name": "Fiji", "code": "FJ"},
    {"name": "Finland", "code": "FI"},
    {"name": "France", "code": "FR"},
    {"name": "French Guiana", "code": "GF"},
    {"name": "French Polynesia", "code": "PF"},
    {"name": "French Southern Territories", "code": "TF"},
    {"name": "Gabon", "code": "GA"},
    {"name": "Gambia", "code": "GM"},
    {"name": "Georgia", "code": "GE"},
    {"name": "Germany", "code": "DE"},
    {"name": "Ghana", "code": "GH"},
    {"name": "Gibraltar", "code": "GI"},
    {"name": "Greece", "code": "GR"},
    {"name": "Greenland", "code": "GL"},
    {"name": "Grenada", "code": "GD"},
    {"name": "Guadeloupe", "code": "GP"},
    {"name": "Guam", "code": "GU"},
    {"name": "Guatemala", "code": "GT"},
    {"name": "Guernsey", "code": "GG"},
    {"name": "Guinea", "code": "GN"},
    {"name": "Guinea-Bissau", "code": "GW"},
    {"name": "Guyana", "code": "GY"},
    {"name": "Haiti", "code": "HT"},
    {"name": "Heard Island and Mcdonald Islands", "code": "HM"},
    {"name": "Holy See (Vatican City State)", "code": "VA"},
    {"name": "Honduras", "code": "HN"},
    {"name": "Hong Kong", "code": "HK"},
    {"name": "Hungary", "code": "HU"},
    {"name": "Iceland", "code": "IS"},
    {"name": "India", "code": "IN"},
    {"name": "Indonesia", "code": "ID"},
    {"name": "Iran, Islamic Republic Of", "code": "IR"},
    {"name": "Iraq", "code": "IQ"},
    {"name": "Ireland", "code": "IE"},
    {"name": "Isle of Man", "code": "IM"},
    {"name": "Israel", "code": "IL"},
    {"name": "Italy", "code": "IT"},
    {"name": "Jamaica", "code": "JM"},
    {"name": "Japan", "code": "JP"},
    {"name": "Jersey", "code": "JE"},
    {"name": "Jordan", "code": "JO"},
    {"name": "Kazakhstan", "code": "KZ"},
    {"name": "Kenya", "code": "KE"},
    {"name": "Kiribati", "code": "KI"},
    {"name": "Korea, Democratic People\"S Republic of", "code": "KP"},
    {"name": "Korea, Republic of", "code": "KR"},
    {"name": "Kuwait", "code": "KW"},
    {"name": "Kyrgyzstan", "code": "KG"},
    {"name": "Lao People\"S Democratic Republic", "code": "LA"},
    {"name": "Latvia", "code": "LV"},
    {"name": "Lebanon", "code": "LB"},
    {"name": "Lesotho", "code": "LS"},
    {"name": "Liberia", "code": "LR"},
    {"name": "Libyan Arab Jamahiriya", "code": "LY"},
    {"name": "Liechtenstein", "code": "LI"},
    {"name": "Lithuania", "code": "LT"},
    {"name": "Luxembourg", "code": "LU"},
    {"name": "Macao", "code": "MO"},
    {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"},
    {"name": "Madagascar", "code": "MG"},
    {"name": "Malawi", "code": "MW"},
    {"name": "Malaysia", "code": "MY"},
    {"name": "Maldives", "code": "MV"},
    {"name": "Mali", "code": "ML"},
    {"name": "Malta", "code": "MT"},
    {"name": "Marshall Islands", "code": "MH"},
    {"name": "Martinique", "code": "MQ"},
    {"name": "Mauritania", "code": "MR"},
    {"name": "Mauritius", "code": "MU"},
    {"name": "Mayotte", "code": "YT"},
    {"name": "Mexico", "code": "MX"},
    {"name": "Micronesia, Federated States of", "code": "FM"},
    {"name": "Moldova, Republic of", "code": "MD"},
    {"name": "Monaco", "code": "MC"},
    {"name": "Mongolia", "code": "MN"},
    {"name": "Montserrat", "code": "MS"},
    {"name": "Morocco", "code": "MA"},
    {"name": "Mozambique", "code": "MZ"},
    {"name": "Myanmar", "code": "MM"},
    {"name": "Namibia", "code": "NA"},
    {"name": "Nauru", "code": "NR"},
    {"name": "Nepal", "code": "NP"},
    {"name": "Netherlands", "code": "NL"},
    {"name": "Netherlands Antilles", "code": "AN"},
    {"name": "New Caledonia", "code": "NC"},
    {"name": "New Zealand", "code": "NZ"},
    {"name": "Nicaragua", "code": "NI"},
    {"name": "Niger", "code": "NE"},
    {"name": "Nigeria", "code": "NG"},
    {"name": "Niue", "code": "NU"},
    {"name": "Norfolk Island", "code": "NF"},
    {"name": "Northern Mariana Islands", "code": "MP"},
    {"name": "Norway", "code": "NO"},
    {"name": "Oman", "code": "OM"},
    {"name": "Pakistan", "code": "PK"},
    {"name": "Palau", "code": "PW"},
    {"name": "Palestinian Territory, Occupied", "code": "PS"},
    {"name": "Panama", "code": "PA"},
    {"name": "Papua New Guinea", "code": "PG"},
    {"name": "Paraguay", "code": "PY"},
    {"name": "Peru", "code": "PE"},
    {"name": "Philippines", "code": "PH"},
    {"name": "Pitcairn", "code": "PN"},
    {"name": "Poland", "code": "PL"},
    {"name": "Portugal", "code": "PT"},
    {"name": "Puerto Rico", "code": "PR"},
    {"name": "Qatar", "code": "QA"},
    {"name": "Reunion", "code": "RE"},
    {"name": "Romania", "code": "RO"},
    {"name": "Russian Federation", "code": "RU"},
    {"name": "RWANDA", "code": "RW"},
    {"name": "Saint Helena", "code": "SH"},
    {"name": "Saint Kitts and Nevis", "code": "KN"},
    {"name": "Saint Lucia", "code": "LC"},
    {"name": "Saint Pierre and Miquelon", "code": "PM"},
    {"name": "Saint Vincent and the Grenadines", "code": "VC"},
    {"name": "Samoa", "code": "WS"},
    {"name": "San Marino", "code": "SM"},
    {"name": "Sao Tome and Principe", "code": "ST"},
    {"name": "Saudi Arabia", "code": "SA"},
    {"name": "Senegal", "code": "SN"},
    {"name": "Serbia and Montenegro", "code": "CS"},
    {"name": "Seychelles", "code": "SC"},
    {"name": "Sierra Leone", "code": "SL"},
    {"name": "Singapore", "code": "SG"},
    {"name": "Slovakia", "code": "SK"},
    {"name": "Slovenia", "code": "SI"},
    {"name": "Solomon Islands", "code": "SB"},
    {"name": "Somalia", "code": "SO"},
    {"name": "South Africa", "code": "ZA"},
    {"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
    {"name": "Spain", "code": "ES"},
    {"name": "Sri Lanka", "code": "LK"},
    {"name": "Sudan", "code": "SD"},
    {"name": "Suriname", "code": "SR"},
    {"name": "Svalbard and Jan Mayen", "code": "SJ"},
    {"name": "Swaziland", "code": "SZ"},
    {"name": "Sweden", "code": "SE"},
    {"name": "Switzerland", "code": "CH"},
    {"name": "Syrian Arab Republic", "code": "SY"},
    {"name": "Taiwan, Province of China", "code": "TW"},
    {"name": "Tajikistan", "code": "TJ"},
    {"name": "Tanzania, United Republic of", "code": "TZ"},
    {"name": "Thailand", "code": "TH"},
    {"name": "Timor-Leste", "code": "TL"},
    {"name": "Togo", "code": "TG"},
    {"name": "Tokelau", "code": "TK"},
    {"name": "Tonga", "code": "TO"},
    {"name": "Trinidad and Tobago", "code": "TT"},
    {"name": "Tunisia", "code": "TN"},
    {"name": "Turkey", "code": "TR"},
    {"name": "Turkmenistan", "code": "TM"},
    {"name": "Turks and Caicos Islands", "code": "TC"},
    {"name": "Tuvalu", "code": "TV"},
    {"name": "Uganda", "code": "UG"},
    {"name": "Ukraine", "code": "UA"},
    {"name": "United Arab Emirates", "code": "AE"},
    {"name": "United States Minor Outlying Islands", "code": "UM"},
    {"name": "Uruguay", "code": "UY"},
    {"name": "Uzbekistan", "code": "UZ"},
    {"name": "Vanuatu", "code": "VU"},
    {"name": "Venezuela", "code": "VE"},
    {"name": "Viet Nam", "code": "VN"},
    {"name": "Virgin Islands, British", "code": "VG"},
    {"name": "Virgin Islands, U.S.", "code": "VI"},
    {"name": "Wallis and Futuna", "code": "WF"},
    {"name": "Western Sahara", "code": "EH"},
    {"name": "Yemen", "code": "YE"},
    {"name": "Zambia", "code": "ZM"},
    {"name": "Zimbabwe", "code": "ZW"}
]

}

