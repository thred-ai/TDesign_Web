import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { LoadService, Dict } from '../services/load.service';
import { AppComponent } from '../app.component';
import { Globals } from '../globals';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CropperComponent } from '../cropper/cropper.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { Country } from '../models/shipping-country.model';
import { ProductInCart } from '../models/product-in-cart.model';
import { Inventory } from '../models/inventory.model';
import { Template } from '../models/template.model';
import { Clipboard } from '@angular/cdk/clipboard';
import { RoutingService } from '../services/routing.service';
import { Coupon } from '../models/coupon.model';
import { MatDialog } from '@angular/material/dialog';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Banner } from '../models/banner.model';
import { Popup } from '../models/popup.model';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Order } from '../models/order.model';
import { Row } from '../models/row.model';
import { LayoutBuilderComponent } from '../layout-builder/layout-builder.component';
import { Page } from '../models/page.model';
import { Plan } from '../models/plan.model';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexFill,
} from 'ng-apexcharts';
import { CreateCryptoComponent } from '../create-crypto/create-crypto.component';
import { CreateCollectionComponent } from '../create-collection/create-collection.component';

import { NFT } from '../models/nft.model';
import { Collection } from '../models/collection.model';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Store } from '../models/store.model';
import { skip } from 'rxjs/operators';
import { BillingInfo } from '../models/billing-address.model';
import { BillingAdminComponent } from '../billing-admin/billing-admin.component';
import { EditPlanComponent } from '../edit-plan/edit-plan.component';
import { StoreDomain } from '../models/store-domain.model';
import { LocationPipe } from '../location.pipe';
import {
  MatDateFormats,
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS,
} from '@angular/material/core';
// artifacts/contracts/Market.sol/NFTMarket
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
};

export const GRI_DATE_FORMATS: MatDateFormats = {
  ...MAT_NATIVE_DATE_FORMATS,
  display: {
    ...MAT_NATIVE_DATE_FORMATS.display,
    dateInput: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    } as Intl.DateTimeFormatOptions,
  },
};

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotateY(0)' })),
      state('rotated', style({ transform: 'rotateY(-180deg)' })),
      transition('rotated => default', animate('200ms ease-out')),
      transition('default => rotated', animate('200ms ease-in')),
    ]),
  ],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: GRI_DATE_FORMATS }],
})
export class AdminViewComponent implements OnInit, OnDestroy {
  public chartOptions?: Partial<ChartOptions>;

  activeAffiliates = new Array<{
    affiliate: string;
    timestamp: Date;
  }>();

  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();
  day = this.today.getDate();

  dateRange = new FormGroup({
    start: new FormControl(this.loadService.addDays(this.today, -this.day + 1)),
    end: new FormControl(new Date(this.year, this.month, this.day)),
  });

  items: Array<Dict<any>> = [];
  miscItems: Array<Dict<any>> = [];
  signedIn = false;
  bankInfo?: any = undefined;
  subInfo?: any = undefined;
  billingInfo?: BillingInfo | any = undefined;
  plans?: Plan[] = undefined;
  views?: Dict<any>[] = undefined;

  canTrial?: boolean = true;
  collections: Collection[] | undefined = undefined;
  invTitle = 'FULFILLED BY THRED';
  bigcommerceMetadata?: Dict<any> = undefined;
  utilities?: Dict<any>[] = undefined;

  viewMapping: { [k: string]: string } = {
    '=0': 'No Views',
    '=1': '1 View',
    other: '# Views',
  };
  saleMapping: { [k: string]: string } = {
    '=0': 'No Sales',
    '=1': '1 Sale',
    other: '# Sales',
  };

  dateRangeChange(
    dateRangeStart: HTMLInputElement,
    dateRangeEnd: HTMLInputElement
  ) {
    if (dateRangeStart.value && dateRangeEnd.value) {
      let start = dateRangeStart.value;
      let end = dateRangeEnd.value;

      this.loadStats();
    }
  }

  intValue?: number = undefined;

  deletePage(page: Page) {
    // this.openPopup(
    //   'Are you sure?',
    //   "Your page '" +
    //     page.title +
    //     "' will be removed forever. This action cannot be undone.",
    //   '',
    //   'Yes, Remove',
    //   'Never Mind',
    //   async () => {
    this.loadService.deletePage(page, (success) => {
      this.toast('Page Removed!');
    });
    //   }
    // );
  }

  showLayoutModal(page?: Page, index?: number) {
    const modalRef = this.dialog.open(LayoutBuilderComponent, {
      width: '97.5vw',
      height: '97.5vh',
      maxHeight: '100vh',
      maxWidth: '100vw',
      panelClass: 'app-full-bleed-sm-dialog',
      data: {
        page: page,
        rootComponent: this.rootComponent,
        admin: this,
      },
    });

    let sub = modalRef.afterClosed().subscribe(async (layouts: any) => {
      sub.unsubscribe();
      if (layouts == 'DELETE') {
        this.toast('Page Deleted!');
        return;
      } else if (layouts && layouts != '0') {
        if (index) {
          this.storeInfo!.pages![index] = layouts.page;
        }
        this.toast('Page Saved!');
      } else if (layouts == '0') {
        this.toast('Unable to save Page! Try Again Later.');
      }
    });
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
        if (this.status == 200) {
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

          resolve('data:image/png;base64,' + base64);
        }
      };
      xhr.send();
    });
  }

  // showLegend = true;

  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  // };

  // // pie
  // showLabels = true;
  // explodeSlices = false;
  // doughnut = false;

  // pieInfo?: Array<Dict<any>>;
  // addSubs() {
  //   // if (!this.emailSubs || !this.phoneSubs) {
  //   //   return;
  //   // }
  //   // this.pieInfo = [
  //   //   {
  //   //     name: 'Email Subscribers',
  //   //     value: this.emailSubs?.length ?? 0,
  //   //   },
  //   //   {
  //   //     name: 'SMS Subscribers',
  //   //     value: this.phoneSubs?.length ?? 0,
  //   //   },
  //   // ];
  // }

  // emails() {
  //   // return this.emailSubs?.slice(
  //   //   this.selectedEmailPageIndex * 10,
  //   //   this.selectedEmailPageIndex * 10 + 10
  //   // );
  // }

  // numbers() {
  // //   return this.phoneSubs?.slice(
  // //     this.selectedPhonePageIndex * 10,
  // //     this.selectedPhonePageIndex * 10 + 10
  // //   );
  // // }

  // emailLength() {
  //   return Math.ceil((this.emailSubs?.length ?? 0) / 10);
  // }

  // emailLengthTotal() {
  //   return Math.ceil(this.emailSubs?.length ?? 0);
  // }

  // phoneLength() {
  //   return Math.ceil((this.phoneSubs?.length ?? 0) / 10);
  // }

  // phoneLengthTotal() {
  //   return Math.ceil(this.phoneSubs?.length ?? 0);
  // }

  // selectedEmailPageIndex = 0;
  // selectedPhonePageIndex = 0;

  // changePhoneDisplayColumns(page: PageEvent) {
  //   this.selectedPhonePageIndex = page.pageIndex;
  //   this.cdr.detectChanges();
  // }

  // changeEmailDisplayColumns(page: PageEvent) {
  //   this.selectedEmailPageIndex = page.pageIndex;
  //   this.cdr.detectChanges();
  // }

  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private loadService: LoadService,
    private rootComponent: AppComponent,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private _router: Router,
    private sanitizer: DomSanitizer,
    private clipboard: Clipboard,
    private routingService: RoutingService,
    private dialog: MatDialog
  ) {
    (<any>window).openCard = this.openCard.bind(this);
  }

  selectedCoord?: Dict<any> = undefined;

  closeCard() {
    this.selectedCoord = undefined;
    this.cdr.detectChanges();
  }

  openCard(coords: Dict<any>) {
    coords.time = new Date(coords.time);

    let col = this.collections?.find(
      (c) => c.NFTs[`${coords.productID}`] != undefined
    );

    if (col) {
      coords.product = col?.NFTs[`${coords.productID}`];
      coords.collection = col;
      this.selectedCoord = coords;
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.loadService.adminComponent = undefined;
  }

  state: string = 'default';

  leapYear(year: number) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  }

  organizeMonth(set: Array<Dict<any>>, type: string) {
    var months = new Array<{
      name: string;
      value: number;
    }>();

    //SPLIT SALES INTO SEPERATE ARRAYS BY YEAR

    let sets = Array<Array<Dict<any>>>();

    set.forEach((data) => {
      let timestamp = data.timestamp as Date;
      let year = timestamp?.getFullYear();
      var result = sets.find((obj) => {
        var years = obj.find((obj2) => {
          return (obj2.timestamp as Date)?.getFullYear() == year;
        });
        return years != undefined;
      });
      if (result) {
        sets[sets.indexOf(result)].push(data);
      } else {
        sets.push([data]);
      }
    });

    Globals.months.forEach((month) => {
      //IF MONTH AND YEAR ARE UNDEFINED FOR A GIVEN INTERVAL, PUT IN AN EMPTY FILLER VALUE OF 0

      sets.forEach((s) => {
        var result = s.find((obj) => {
          return Globals.months[obj.timestamp?.getMonth()] == month;
        });

        if (!result) {
          var time = s.find((obj) => {
            return obj.timestamp != undefined;
          });
          var d = new Date(
            time?.timestamp?.getFullYear(),
            Globals.months.indexOf(month),
            1
          );
          if (type == 'Products Sold') {
            set.push(
              new ProductInCart(
                undefined,
                undefined,
                0,
                undefined,
                d,
                undefined,
                undefined,
                0
              )
            );
          } else if (type == 'Gross Revenue') {
            set.push(
              new ProductInCart(
                undefined,
                undefined,
                0,
                undefined,
                d,
                undefined,
                undefined,
                0
              )
            );
          } else if (type == 'Net Profit') {
            set.push(
              new ProductInCart(
                undefined,
                undefined,
                0,
                undefined,
                d,
                undefined,
                undefined,
                0
              )
            );
          } else if (type == 'Onboarded Users (Affiliate)') {
            set.push({ affiliate: '', timestamp: d });
          } else if (type == 'Affiliate Revenue') {
            set.push({ affiliate: '', timestamp: d });
          } else if (type == 'Store Views') {
            set.push({ views: 0, timestamp: d });
          } else if (type == 'Abandoned Carts') {
            set.push({ dropCarts: 0, timestamp: d });
          }
        }
      });
    });

    //SORT SALES BY TIMESTAMP

    set.sort(function (a, b) {
      if (a.timestamp! < b.timestamp!) {
        return -1;
      }
      if (a.timestamp! > b.timestamp!) {
        return 1;
      }
      return 0;
    });

    //REMOVE EMPTY MONTHS THAT ARE IN THE FUTURE

    set = set.filter((obj) => {
      return new Date() >= obj.timestamp!;
    });

    //APPEND TO FINAL SERIES ARRAY

    set.forEach((data) => {
      let month =
        Globals.months[data.timestamp?.getMonth()].substring(0, 3) +
        ' ' +
        data.timestamp!.getFullYear();
      var result = months.find((obj) => {
        return obj?.name === month;
      });

      let value = 0;

      if (type == 'Products Sold') {
        value = data.quantity ?? 0;
      } else if (type == 'Gross Revenue') {
        value = data.product?.price ?? 0;
      } else if (type == 'Net Profit') {
        value = data.profit ?? 0;
        if (isNaN(value)) {
          value = 0;
        }
      } else if (type == 'Onboarded Users (Affiliate)') {
        if (data.affiliate != '') {
          value = 1;
        }
      } else if (type == 'Affiliate Revenue') {
        if (data.affiliate != '') {
          value = 37 / 2;
        }
      } else if (type == 'Store Views') {
        value = data.views;
      } else if (type == 'Abandoned Carts') {
        value = data.dropCarts;
      }

      if (result) {
        months[months.indexOf(result)].value += value ?? 0;
      } else {
        months.push({
          name: month,
          value: value ?? 0,
        });
      }
    });

    return months;
  }

  organizeAllTime(set: Array<Dict<any>>, type: string) {
    var months = new Array<{
      name: string;
      data: number;
    }>();

    //SPLIT SALES INTO SEPERATE ARRAYS BY YEAR

    let sets = Array<Array<Dict<any>>>();

    set.forEach((data) => {
      let timestamp = data.timestamp as Date;
      let year = timestamp?.getFullYear();
      var result = sets.find((obj) => {
        var years = obj.find((obj2) => {
          return (obj2.timestamp as Date)?.getFullYear() == year;
        });
        return years != undefined;
      });
      if (result) {
        sets[sets.indexOf(result)].push(data);
      } else {
        sets.push([data]);
      }
    });

    Globals.months.forEach((month) => {
      //IF MONTH AND YEAR ARE UNDEFINED FOR A GIVEN INTERVAL, PUT IN AN EMPTY FILLER VALUE OF 0

      sets.forEach((s) => {
        var result = s.find((obj) => {
          return Globals.months[obj.timestamp?.getMonth()] == month;
        });

        if (!result) {
          var d = s.find((obj) => {
            return obj.timestamp != undefined;
          })?.timestamp;
          if (type == 'Products Sold') {
            set.push(
              new ProductInCart(
                undefined,
                undefined,
                0,
                undefined,
                d,
                undefined,
                undefined,
                0
              )
            );
          } else if (type == 'Gross Revenue') {
            set.push(
              new ProductInCart(
                undefined,
                undefined,
                0,
                undefined,
                d,
                undefined,
                undefined,
                0
              )
            );
          } else if (type == 'Net Profit') {
            set.push(
              new ProductInCart(
                undefined,
                undefined,
                0,
                undefined,
                d,
                undefined,
                undefined,
                0
              )
            );
          } else if (type == 'Onboarded Users (Affiliate)') {
            set.push({ affiliate: '', timestamp: d });
          } else if (type == 'Affiliate Revenue') {
            set.push({ affiliate: '', timestamp: d });
          } else if (type == 'Store Views') {
            set.push({ views: 0, timestamp: d });
          } else if (type == 'Abandoned Carts') {
            set.push({ dropCarts: 0, timestamp: d });
          }
        }
      });
    });

    //SORT SALES BY TIMESTAMP

    set.sort(function (a, b) {
      if (a.timestamp! < b.timestamp!) {
        return -1;
      }
      if (a.timestamp! > b.timestamp!) {
        return 1;
      }
      return 0;
    });

    //REMOVE EMPTY MONTHS THAT ARE IN THE FUTURE

    set = set.filter((obj) => {
      return new Date() >= obj.timestamp!;
    });

    //APPEND TO FINAL SERIES ARRAY

    set.forEach((data) => {
      let month = data.timestamp;
      var result = months.find((obj) => {
        return obj?.name === month;
      });

      let value = 0;

      if (type == 'Products Sold') {
        value = data.quantity ?? 0;
      } else if (type == 'Gross Revenue') {
        value = data.product?.price ?? 0;
      } else if (type == 'Net Profit') {
        value = data.profit ?? 0;
        if (isNaN(value)) {
          value = 0;
        }
      } else if (type == 'Onboarded Users (Affiliate)') {
        if (data.affiliate != '') {
          value = 1;
        }
      } else if (type == 'Affiliate Revenue') {
        if (data.affiliate != '') {
          value = 37 / 2;
        }
      } else if (type == 'Store Views') {
        value = data.views;
      } else if (type == 'Abandoned Carts') {
        value = data.dropCarts;
      }

      if (result) {
        months[months.indexOf(result)].data += value ?? 0;
      } else {
        months.push({
          name: month.toISOString(),
          data: value ?? 0,
        });
      }
    });

    return months;
  }

  formatPercent(val: string) {
    // var t = this as unknown as XAxisTicksComponent

    // let series = t.ticks as Array<string>

    // var result = series.filter(obj => {
    //   return obj === val
    // })[0]

    // if (series.indexOf(result) == 0 || series.indexOf(result) == series.length - 1){
    //   return val
    // }

    return '';
  }

  charts(onlyAffiliates = false, onlyOverview = false) {
    // if (onlyAffiliates) {
    //   return this.items
    //     .filter((item) => {
    //       return (
    //         item.name == 'Onboarded Users (Affiliate)' ||
    //         item.name == 'Affiliate Revenue'
    //       );
    //     })
    //     .sort(function (a, b) {
    //       if (a.index < b.index) {
    //         return -1;
    //       }
    //       if (a.index > b.index) {
    //         return 1;
    //       }
    //       return 0;
    //     });
    // }
    if (onlyOverview) {
      // let charts = this.items
      //   .filter((item) => {
      //     return item.name == 'Gross Revenue' || item.name == 'Net Profit';
      //   })
      //   .sort(function (a, b) {
      //     if (a.index < b.index) {
      //       return -1;
      //     }
      //     if (a.index > b.index) {
      //       return 1;
      //     }
      //     return 0;
      //   });
      let views = this.miscItems.filter((item) => {
        return item.name == 'Store Views';
      });
      // if (views) {
      //   charts.unshift(views);
      // }
      return views;
    }
    if (
      Globals.productsSold == undefined ||
      Globals.newCustomers == undefined ||
      Globals.dropCarts == undefined
    ) {
      return [];
    }
    let newItems = this.items.concat(this.miscItems);
    return newItems
      .filter((item) => {
        return !(
          (item.name == 'Onboarded Users (Affiliate)' ||
            item.name == 'Affiliate Revenue') &&
          this.activeAffiliates.length == 0
        );
      })
      .sort(function (a, b) {
        if (a.index < b.index) {
          return -1;
        }
        if (a.index > b.index) {
          return 1;
        }
        return 0;
      });
  }

  addMiscCharts(name: string, data_set: Array<Dict<any>>) {
    var dataToUse = data_set;

    if (!this.miscItems.some((e) => e?.name === name)) {
      if (name == 'Store Views') {
        var views: Array<{
          views: number;
          timestamp: Date;
        }> = [];

        data_set.forEach((p) => {
          let i = views?.findIndex(
            (k) => k.timestamp.toDateString() == p.timestamp.toDateString()
          );
          if (i != -1) {
            views[i].views += 1;
          } else {
            views?.push({ views: 1, timestamp: p.timestamp });
          }
        });
        dataToUse = views;
      }

      let set = this.organizeAllTime(dataToUse, name);

      var index = 0;
      if (name == 'Store Views') {
        index = 0;
      }

      // let item = {
      //   name: name,
      //   legend: true,
      //   showLabels: true,
      //   animations: true,
      //   xAxis: true,
      //   yAxis: true,
      //   index: index,
      //   showYAxisLabel:  true,
      //   showXAxisLabel: true,
      //   xAxisLabel: set[0]?.name + '  ➜  ' + "TODAY",
      //   yAxisLabel:  'Population',
      //   timeline: true,
      //   shouldDisplay: set.length != 0,
      //   customColors:[
      //     {
      //       name: name,
      //       value: '#1ac6ff'
      //     }
      //   ],
      //   series: [
      //     {
      //       "name": name,
      //       "series": set
      //     }
      //   ]
      // }
      // this.miscItems.push(item)

      this.miscItems.push({
        name: name,
        index: index,
        shouldDisplay: set.length != 0,
        series: [
          {
            name: name,
            data: set.map((s) => s.data),
          },
        ],
        chart: {
          height: 250,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: set.map((s) => s.name),
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      });
    }
  }

  addChart(name: string, data_set: Array<ProductInCart>) {
    if (!this.items.some((e) => e?.name === name)) {
      let set = this.organizeAllTime(data_set, name);

      var index = 0;

      if (name == 'Products Sold') {
        index = 2;
      } else if (name == 'Gross Revenue') {
        index = 1;
      } else if (name == 'Net Profit') {
        index = 3;
      } else if (
        name == 'Onboarded Users (Affiliate)' ||
        name == 'Affiliate Revenue'
      ) {
        index = 4;
      } else {
        index = 5;
      }

      let item = {
        name: name,
        index: index,
        shouldDisplay: set.length != 0,
        series: [
          {
            name: name,
            data: set.map((s) => s.data),
          },
        ],
        chart: {
          height: 250,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: set.map((s) => s.name),
        },
        yaxis: {},
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      };

      if (index != 2) {
        item.yaxis = {
          labels: {
            formatter: function (value: number) {
              function formatPrice(
                price: number,
                short = false,
                order?: Order
              ) {
                var priceAsString = new String(
                  Number(
                    (price * (Globals.selectedCurrency?.rate ?? 1)).toFixed(2)
                  ).toLocaleString('en')
                );
                if (!short) {
                  priceAsString = new String(
                    Number(
                      (price * (Globals.selectedCurrency?.rate ?? 1)).toFixed(2)
                    )
                  );
                }
                let index = priceAsString.indexOf('.');

                switch (index) {
                  case priceAsString.length - 1:
                    priceAsString += '00';
                    break;
                  case -1:
                    priceAsString += '.00';
                    break;
                  case priceAsString.length - 2:
                    priceAsString += '0';
                    break;
                  default:
                    break;
                }
                return (
                  getCurrencyForCountry(
                    Globals.selectedCurrency?.name != 'US',
                    Globals.selectedCurrency
                  ) + priceAsString
                );
              }

              function getCurrencyForCountry(
                shouldShowName: boolean,
                country?: Country
              ) {
                var returnItem = country?.currency_symbol ?? '$';
                if (shouldShowName)
                  returnItem = (country?.name ?? '') + ' ' + returnItem;

                return returnItem;
              }

              return formatPrice(value);
            },
          },
        };
      }

      this.items.push(item);

      // let item = {
      //   name: name,
      //   legend: true,
      //   showLabels: true,
      //   animations: true,
      //   xAxis: true,
      //   yAxis: true,
      //   index: index,
      //   showYAxisLabel:  true,
      //   showXAxisLabel: true,
      //   xAxisLabel: set[0]?.name + '  ➜  ' + "TODAY",
      //   yAxisLabel:  'Population',
      //   timeline: true,
      //   shouldDisplay: set.length != 0,
      //   customColors:[
      //     {
      //       name: name,
      //       value: '#1ac6ff'
      //     }
      //   ],
      //   series: [
      //     {
      //       "name": name,
      //       "series": set
      //     }
      //   ]
      // }
      // this.items.push(item)
    }
  }

  move(ds: DragScrollComponent, direction: number) {
    if (direction == 0) {
      ds?.moveLeft();
      return;
    }
    ds?.moveRight();
  }

  loaders() {
    return Globals.loaders;
  }

  storeInfo?: Store;

  availableCurrencies() {
    return Globals.availableCurrencies;
  }

  selectedCurrency() {
    return Globals.selectedCurrency;
  }

  templates() {
    return Globals.templates;
  }

  availableTemplates() {
    return Globals.availableTemplates;
  }

  @ViewChild('orderTable') orderTable?: MatTable<any>;

  themes() {
    return Globals.themes?.sort(function (a, b) {
      if (a.themes.length < b.themes.length) {
        return 1;
      }
      if (a.themes.length > b.themes.length) {
        return -1;
      }
      return 0;
    });
  }

  fonts() {
    return Globals.fonts;
  }

  // handleListener(event: MessageEvent){
  //   if (event.origin !== "http://localhost:3000")
  //   return;

  //   console.log(event.data)
  //   if (event.data.name == 'newNFT'){

  //   }
  // }

  com() {
    // window.removeEventListener('message', this.handleListener)
    // window.addEventListener("message", (event) => this.handleListener(event), false);
  }

  passVars(iframe: HTMLIFrameElement) {
    if (iframe) {
      // iframe.contentWindow?.postMessage(JSON.parse(JSON.stringify({
      //   storeInfo: this.storeInfo,
      //   themeInfo: {
      //     themes: this.storeInfo?.colorStyle,
      //     colors: this.selectedTheme()
      //   }
      // })), 'http://localhost:3000')
    }
  }

  panels = [
    // {
    //   Category: 'DASHBOARD',
    //   Options: [
    //     // {
    //     //   Title: 'OVERVIEW',
    //     //   Icon: 'dashboard',
    //     //   Active: false,
    //     // },
    //     {
    //       Title: 'COLLECTIONS',
    //       Icon: 'category',
    //       Active: false,
    //     },
    //     // {
    //     //   Title: 'LIVE VIEW',
    //     //   Icon: 'public',
    //     //   Active: false,
    //     // },
    //     // {
    //     //   Title: 'AUDIENCE',
    //     //   Icon: 'groups',
    //     //   Active: false,
    //     // },
    //   ],
    // },
    // {
    //   Category: 'LAYOUT',
    //   Options: [
    //     {
    //       Title: 'PAGES',
    //       Icon: 'layers',
    //       Active: false,
    //     },
    //   ],
    // },
    // {
    //   Category: 'MANAGE',
    //   Options: [
    //     {
    //       Title: 'THEMES',
    //       Icon: 'backup_table',
    //       Active: false,
    //     },
    //     {
    //       Title: 'STORE',
    //       Icon: 'shopping_bag',
    //       Active: false,
    //     },
    //     // {
    //     //   Title: 'INVENTORY',
    //     //   Icon: 'local_shipping',
    //     //   Active: false,
    //     // },
    //     {
    //       Title: 'POPUPS',
    //       Icon: 'wysiwyg',
    //       Active: false,
    //     },
    //     {
    //       Title: 'BANNERS',
    //       Icon: 'view_day',
    //       Active: false,
    //     },
    //     // {
    //     //   Title: 'DISCOUNTS',
    //     //   Icon: 'local_offer',
    //     //   Active: false,
    //     // },
    //   ],
    // },
    {
      Category: 'SETTINGS',
      Options: [
        {
          Title: 'NEW',
          Icon: 'add',
          Active: false,
        },
        {
          Title: 'ASSETS',
          Icon: 'category',
          Active: true,
        },
        {
          Title: 'PAGES',
          Icon: 'layers',
          Active: false,
        },
        {
          Title: 'BILLING',
          Icon: 'credit_card',
          Active: false,
        },
        {
          Title: 'PLAN',
          Icon: 'work',
          Active: false,
        },
        // {
        //   Title: 'PAYMENTS',
        //   Icon: 'monetization_on',
        //   Active: false,
        // },
        // {
        //   Title: 'ADVERTISE',
        //   Icon: 'share',
        //   Active: false,
        // },
        // {
        //   Title: 'SECURITY',
        //   Icon: 'admin_panel_settings',
        //   Active: false,
        // },
      ],
    },
    // {
    //   Category: 'OTHER',
    //   Options: [
    //     // {
    //     //   Title: 'AFFILIATE',
    //     //   Icon: 'local_atm',
    //     //   Active: false,
    //     // },
    //     {
    //       Title: 'PRIVACY',
    //       Icon: 'vpn_lock',
    //       Active: false,
    //     },
    //     {
    //       Title: 'LEGAL',
    //       Icon: 'sticky_note_2',
    //       Active: false,
    //     },
    //     {
    //       Title: 'QUESTIONS',
    //       Icon: 'contact_support',
    //       Active: false,
    //     },
    //   ],
    // },
  ];

  // async isSignedIn(){
  //   return this.storeInfo?.walletAddress && this.storeInfo?.walletAddress?.toLowerCase() == (?.toLowerCase()
  // }

  inMenu(h?: string) {
    let headers = this.headerForm.controls.links.value;

    return headers.find((l: string) => l == h) != undefined;
  }

  inFooter(h?: string) {
    return (
      this.footerCols.find((l: Dict<any>) =>
        l.link.find((k: string) => k == h)
      ) != undefined
    );
  }

  getLinkImg(name: string) {
    return Globals.socials.filter((obj) => {
      return obj.name == name;
    })[0].img;
  }

  configureFooter(h?: string) {
    if (h != undefined) {
      let isAdding =
        this.footerCols.find((l: Dict<any>) =>
          l.link.find((k: string) => k == h)
        ) == undefined;

      if (isAdding) {
        this.footerCols[0].link.push(h);
        this.toast('Added to footer!');
      } else {
        let i = this.footerCols.findIndex((l: Dict<any>) =>
          l.link.find((k: string) => k == h)
        );
        let j = this.footerCols[i].link.findIndex((l: string) => l == h);

        if (i >= 0 && j >= 0) {
          this.footerCols[i].link.splice(j, 1);
          this.toast('Removed from footer!');
        }
      }
    }
  }

  configureHeader(h?: string) {
    let headers = this.headerForm.controls.links.value;

    if (h != undefined) {
      let isAdding = headers.find((l: string) => l == h) == undefined;
      if (isAdding) {
        headers.push(h);
        this.toast('Added to header!');
      } else {
        let i = headers.findIndex((l: string) => l == h);

        if (i >= 0) {
          headers.splice(i, 1);
          this.toast('Removed from header!');
        }
      }
    }
    this.headerForm.controls.links.setValue(headers);
  }

  defaultBio = '';
  color = '';
  bg_color = '';
  inventory?: Array<Inventory>;

  selectedIndicator() {
    if (!this.storeInfo) {
      return {
        name: '',
        color: '',
        bg_color: '',
      };
    }
    let co = this.storeInfo?.loading?.color;
    let bco = this.storeInfo?.loading?.bg_color;
    let name = this.storeInfo?.loading?.name;

    let color =
      (this.themeForm.controls.loadingIndicatorColor.value as string) ??
      'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';
    let bg_color =
      (this.themeForm.controls.loadingIndicatorBgColor.value as string) ??
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    let indicator: Dict<string> = {
      name: this.themeForm.controls.loadingIndicator.value ?? name,
      color: color,
      bg_color: bg_color,
    };
    return indicator;
  }

  addPageToList() {}

  getTypeImages(templateCode: string, inv?: Inventory) {
    if (inv?.isCustom) {
      return inv?.img;
    } else {
      let template = Globals.templates.find((obj) => {
        return obj.productCode == templateCode;
      });
      return (
        'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Templates%2F' +
        template?.templateID +
        '%2Fdisplay1.jpg?alt=media'
      );
    }
  }

  checkBilling() {
    if (this.billingInfo?.name && this.billingInfo?.name != '') {
      return true;
    } else {
      var sec = 0;
      var ind = 0;
      this.panels.forEach((panel, section) => {
        panel.Options.forEach((option, index) => {
          if (option.Title == 'BILLING') {
            sec = section;
            ind = index;
            return;
          }
        });
      });
      this.selectSetting(ind, sec);
      return false;
    }
  }

  shouldHideLiveBtn() {
    return (
      this.billingInfo == undefined
      //  ||
      // // this.bankInfo == undefined ||
      // this.subInfo == undefined
    );
  }

  resizeIframe(index: number) {
    let obj = document.getElementById('frame2' + index) as HTMLIFrameElement;
    let c = document.getElementById('c2' + index) as HTMLElement;

    if (obj) {
      c.style.height =
        (obj.contentWindow?.document.body.scrollHeight ?? 0) + 'px';
    }
  }

  storeLive() {
    return this.subInfo != '';
  }

  shouldRed(panel: any) {
    // if (this.shouldHideLiveBtn()) {
    //   return false;
    // }
    if (panel.Title == 'BILLING') {
      if (this.billingInfo == null) {
        return true;
      } else {
      }
    }
    // else if (panel.Title == 'PAYMENTS') {
    //   if (this.bankInfo == '') {
    //     return true;
    //   }
    // }
    else if (panel.Title == 'PLAN') {
      if (this.subInfo == '') {
        return true;
      }
    }
    return false;
  }

  missingInfo() {
    var array = Array<string>();

    // if (Globals.billingInfo?.name == '') {
    //   array.push('Add your billing method');
    // }
    if (this.subInfo == '') {
      array.push('Start your Thred Merchant plan');
    }
    // if (this.bankInfo == '') {
    //   array.push('Set up your merchant payments account');
    // }
    return array;
  }

  @ViewChild('chartObj') chart?: ChartComponent;

  totalElement(series: Array<number>) {
    var total = 0;
    if (!series) {
      return 0;
    }
    series.forEach((item) => {
      total += item;
    });
    return total;
  }

  totalSales() {
    return 0; // this.formatPrice(this.totalElement(this.charts()[1].series[0].data));
  }

  totalViews() {
    return 0; // this.charts().length > 0 ? this.totalElement(this.charts()[0].series[0].data) : 0
  }

  formatGraphElement(element: number, name: string) {
    if (
      name == 'Gross Revenue' ||
      name == 'Net Profit' ||
      name == 'Affiliate Revenue'
    ) {
      return ''; //this.formatPrice(element);
    }
    return element;
  }

  getCurrencyForCountry(shouldShowName: boolean, country?: Country) {
    var returnItem = country?.currency_symbol ?? '$';
    if (shouldShowName) returnItem = (country?.name ?? '') + ' ' + returnItem;

    return returnItem;
  }

  isSpinning = false;

  mainLoad = false;

  showSpinner(duration = 500) {
    if (!this.isSpinning) {
      this.isSpinning = true;
      if (isPlatformBrowser(this.platformID)) {
        this.spinner.show('adminSpinner');
      }
    }
  }

  showSampleSpinner(duration = 1500) {
    this.isSpinning = true;
    if (isPlatformBrowser(this.platformID)) {
      this.spinner.show('sampleSpinner');
    }

    setTimeout(() => {
      this.spinner.hide('sampleSpinner');
    }, duration);
  }

  hideSpinner() {
    if (this.isSpinning) {
      this.spinner.hide('adminSpinner');
    }
  }

  theme = 'Light';

  storeForm = this.fb.group({
    username: [null, [Validators.required]],
    full_name: [null, Validators.required],
    bio: [null],
    profile_pic: [null],
    custom_url: [null],
    socials: new Array<{
      name: string;
      link: string;
    }>(),
  });

  themeForm = this.fb.group({
    loadingIndicator: [null, Validators.required],
    loadingIndicatorColor: [null, Validators.required],
    loadingIndicatorBgColor: [null, Validators.required],
    themeImg: [null],
    actionImg: [null],
    storeTheme: [null, Validators.required],
    font: [null, Validators.required],
  });

  bannerForm = this.fb.group({
    banners: [[[]]],
    style: [null, Validators.required],
  });

  shopForm = this.fb.group({
    themeImg: [null],
  });

  changeEmailForm = this.fb.group({
    newEmail: [null, Validators.required],
    password: [null, Validators.required],
  });

  changePassForm = this.fb.group({
    password: [null, Validators.required],
    newPassword: [null, Validators.required],
    confirmNewPassword: [null, Validators.required],
  });

  marketingForm = this.fb.group({
    pixel: [null, Validators.required],
  });

  headerForm = this.fb.group({
    links: [[], Validators.required],
  });

  footerCols: Array<Dict<any>> = [];

  getSelectedPanel() {
    let selected = this.panels
      .filter(
        (panel) => panel.Options?.filter((option) => option.Active).length != 0
      )[0]
      ?.Options.filter((option) => option?.Active)[0];
    return selected;
  }

  openFBAdsManager() {
    const link = document.createElement('a');
    link.target = '_blank';

    let url: string =
      'https://www.facebook.com/business/learn/facebook-ads-pixel';

    link.href = url;
    this.spinner.hide('adminSpinner');

    link.setAttribute('visibility', 'hidden');
    link.click();
    link.remove();
  }

  setForm() {
    this.storeForm.controls.username.setValue(this.storeInfo?.username ?? '');
    this.storeForm.controls.full_name.setValue(this.storeInfo?.fullName ?? '');
    this.storeForm.controls.bio.setValue(this.storeInfo?.bio ?? '');

    this.themeForm.controls.loadingIndicator.setValue(
      this.storeInfo?.loading?.name ?? ''
    );

    this.themeForm.controls.themeImg.setValue(
      this.storeInfo?.themeLink?.toString()
    );

    // this.homeForm.controls.homeImg.setValue(this.storeInfo?.homeLink?.toString())
    // this.homeForm.controls.themeImg.setValue(this.storeInfo?.homeLinkTop?.toString())

    this.shopForm.controls.themeImg.setValue(
      this.storeInfo?.shopLinkTop?.toString()
    );

    this.themeForm.controls.actionImg.setValue(
      this.storeInfo?.actionLink?.toString()
    );

    this.themeForm.controls.font.setValue(this.storeInfo?.fontName);

    this.storeForm.controls.socials.setValue(this.storeInfo?.socials);

    this.storeForm.controls.custom_url.setValue(
      this.storeInfo?.customURL?.fullURL
    );

    this.marketingForm.controls.pixel.setValue(this.storeInfo?.fb_pixel);

    this.themeForm.controls.storeTheme.setValue(
      this.storeInfo?.colorStyle?.name?.toString()
    );

    this.bannerForm.controls.banners.setValue(this.storeInfo?.banners ?? []);

    this.bannerForm.controls.style.setValue(this.storeInfo?.bannerStyle ?? 0);

    this.headerForm.controls.links.setValue(this.storeInfo?.header ?? []);
    this.footerCols = this.storeInfo?.footer ?? [];

    this.theme = this.storeInfo?.colorStyle?.name?.toString() ?? 'Light';

    let co = this.storeInfo?.loading?.color;
    let bco = this.storeInfo?.loading?.bg_color;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    this.themeForm.controls.loadingIndicatorColor.setValue(color ?? []);
    this.themeForm.controls.loadingIndicatorBgColor.setValue(bg_color ?? []);
  }

  fontSize(row: Row) {
    if (this.rootComponent.isMobile() || this.colCount(row) >= 2) {
      return '6';
    }
    return (0.5 / this.colCount(row)) * 100;
  }

  titleFontSize(row: Row) {
    if (this.rootComponent.isMobile() || this.colCount(row) >= 2) {
      return '6';
    }
    return (0.3 / this.colCount(row)) * 100;
  }

  products(smartProducts?: number, products?: Array<String>) {
    if (smartProducts !== undefined) {
      if (smartProducts == 0) {
        return this.newArrivalProducts();
      } else if (smartProducts == 1) {
        return this.featuredProducts();
      }
    }
    var prod = Array<NFT>();
    products?.forEach((p) => {
      let pro = this.collections?.find((pr) => {
        // Object.values
        let k = pr.NFTs![`${p}`];
        return k;
      })?.NFTs![`${p}`];
      if (pro) {
        prod.push(pro);
      } else {
        prod.push(new NFT());
      }
    });
    return prod;
  }

  newArrivalProducts() {
    // return (this.storeInfo?.collections ?? [])[0].NFTs
    //   ?.sort(function (a, b) {
    //     // if (a.timestamp > b.timestamp) {
    //     //   return -1;
    //     // }
    //     // if (a.timestamp < b.timestamp) {
    //     //   return 1;
    //     // }
    //     return 1;
    //   })
    //   .slice(0, 4);

    return [];
  }

  featuredProducts() {
    // return (this.storeInfo?.collections ?? [])[0].NFTs
    //   ?.sort(function (a, b) {
    //     // if (a.likes > b.likes) {
    //     //   return -1;
    //     // }
    //     // if (a.likes < b.likes) {
    //     //   return 1;
    //     // }
    //     return 1;
    //   })
    //   .slice(0, 4);

    return [];
  }

  colCount(row: Row) {
    var count = 0;
    this.products(row.smart_products, row.products)?.forEach((product: NFT) => {
      if (count < 4) {
        count += 1;
      }
    });
    return count;
  }

  isBase64(str: string) {
    try {
      return btoa(atob(str)) == str;
    } catch (err) {
      return false;
    }
  }

  selectColor(value: string, isPrimary: boolean) {
    if (isPrimary) {
      this.themeForm.controls.loadingIndicatorColor.setValue(value ?? []);
    } else {
      this.themeForm.controls.loadingIndicatorBgColor.setValue(value ?? []);
    }

    this.showSampleSpinner(2000);
  }

  fileChangeEvent(event: any, type = 'Profile'): void {
    const modalRef = this.modalService.open(CropperComponent, { size: 'lg' });
    modalRef.componentInstance.imageChangedEvent = event;

    if (type == 'Profile') {
      modalRef.componentInstance.ratio = 1;
      modalRef.componentInstance.width = 200;
      modalRef.componentInstance.height = 200;

      let sub = modalRef.dismissed.subscribe((img: string) => {
        sub.unsubscribe();
        if (img != '0') {
          this.storeForm.controls.profile_pic.setValue(img);
        }
      });
    } else if (type == 'Background') {
      // modalRef.componentInstance.ratio = 1.78
      modalRef.componentInstance.width = 2560;
      modalRef.componentInstance.height = 1440;

      let sub = modalRef.dismissed.subscribe((img: string) => {
        sub.unsubscribe();
        if (img != '0') {
          this.themeForm.controls.themeImg.setValue(img);
        }
      });
    } else if (type == 'Shop_Background') {
      // modalRef.componentInstance.ratio = 1.78
      modalRef.componentInstance.width = 2560;
      modalRef.componentInstance.height = 1440;

      let sub = modalRef.dismissed.subscribe((img: string) => {
        sub.unsubscribe();
        if (img != '0') {
          this.shopForm.controls.themeImg.setValue(img);
        }
      });
    } else if (type == 'Action') {
      // modalRef.componentInstance.ratio = 1.78
      modalRef.componentInstance.width = 2560;
      modalRef.componentInstance.height = 1440;

      let sub = modalRef.dismissed.subscribe((img: string) => {
        sub.unsubscribe();
        if (img != '0') {
          this.themeForm.controls.actionImg.setValue(img);
        }
      });
    }
  }

  getImgSrc() {
    if (this.storeForm.controls.profile_pic.value) {
      return this.storeForm.controls.profile_pic.value;
    }
    return this.storeInfo?.profileLink;
  }

  getUsername() {
    if (this.storeForm.controls.full_name.value) {
      return this.storeForm.controls.full_name.value;
    }
    return this.storeInfo?.fullName ?? "Brian's Tees";
  }

  show: boolean = false;

  password() {
    this.show = !this.show;
  }

  joinColor(color: string) {
    let c = color
      ?.replace('rgb', '')
      ?.replace('a', '')
      ?.replace('(', '')
      ?.replace(')', '')
      ?.split(',');
    var returnArr = new Array<string>();
    c.forEach((element) => {
      returnArr.push(element.trim());
    });

    if (returnArr.length < 4) {
      for (let i = 0; i < 4 - returnArr.length; i++) {
        returnArr.push('1');
      }
    }

    return returnArr.join(',');
  }

  numToColor(color: Array<number>) {
    var returnArr = new Array<string>();

    color.forEach((color) => {
      returnArr.push(color.toString());
    });

    return returnArr.join(',');
  }

  bannerTheme(banner: Banner) {
    let co = banner.color;
    let bco = banner.bg_color;
    let text = banner.text;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    var theme: Dict<string> = {
      text: text,
      color: color,
      bg_color: bg_color,
    };
    return theme;
  }

  drop(event: CdkDragDrop<string[]>) {
    let arr = this.bannerForm.controls.banners.value;
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
    this.bannerForm.controls.banners.setValue(arr);
  }

  dropHeaderLink(event: CdkDragDrop<string[]>) {
    let arr = this.headerForm.controls.links.value;
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
    this.headerForm.controls.links.setValue(arr);
  }

  dropFooterRow(event: CdkDragDrop<any>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  selectedTheme() {
    let co = this.storeInfo?.colorStyle?.btn_color;
    let bco = this.storeInfo?.colorStyle?.bg_color;
    let name = this.storeInfo?.colorStyle?.name!;

    let color =
      'rgba(' + co![0] + ',' + co![1] + ',' + co![2] + ',' + co![3] + ')';

    let bg_color =
      'rgba(' + bco![0] + ',' + bco![1] + ',' + bco![2] + ',' + bco![3] + ')';

    var theme: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return theme;
  }

  selectTheme(theme: string) {
    this.themeForm.controls.storeTheme.setValue(theme);
    this.theme = this.themeForm.controls.storeTheme.value;

    // this.saveStore();
  }

  titleCase(str: string = '') {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
  }

  toast(message: string) {
    this.loadService.openSnackBar(message);
  }

  isMobile() {
    if (isPlatformBrowser(this.platformID)) {
      let height = window.innerHeight;
      let width = window.innerWidth;
      return width < height;
    }
    return false;
  }

  shouldShowSaveBtn() {
    let title = this.getSelectedPanel()?.Title;
    let list = ['STORE', 'HOME', 'SHOP', 'THEMES', 'BANNERS', 'PAGES'];
    return list.find((l) => {
      return l == title;
    });
  }

  async selectSetting(index: number, section: number) {
    if (section == 0 && index == 0) {
      this.createNewProduct();
      return;
    }
    if (section == 4 && index != 0) {
      var urlLink = '';
      if (index == 1 || index == 2) {
        urlLink = 'https://thredapps.com/privacy-policy';
      } else if (index == 3) {
        urlLink = 'https://thredapps.com/customer-support';
      }
      const link = document.createElement('a');
      link.target = '_blank';

      let url: string = '';
      if (!/^http[s]?:\/\//.test(urlLink)) {
        url += 'http://';
      }

      url += urlLink;

      link.href = url;
      this.spinner.hide('adminSpinner');

      link.setAttribute('visibility', 'hidden');
      link.click();
      link.remove();

      return;
    }

    if (this.isMobile()) {
      this.classApplied = false;
    }

    this.panels.forEach((panel) => {
      panel.Options.forEach((option) => {
        option.Active = false;
      });
    });
    let user = await this.loadService.isLoggedIn();

    if (
      this.panels[section].Options[index].Title == 'OVERVIEW' &&
      user?.uid &&
      !user?.isAnonymous
    ) {
    } else if (
      this.panels[section].Options[index].Title == 'AFFILIATE' &&
      user?.uid &&
      !user?.isAnonymous
    ) {
      this.getAffiliateStats(true);
    }
    this.panels[section].Options[index].Active = true;
    this.cdr.detectChanges();
  }

  soldNFTs: Array<NFT> = [];

  copyAffiliateURL() {
    this.toast('Affiliate link copied to clipboard!');
    var host = 'shopmythred.com';

    this.clipboard.copy(host + '/?affiliate=' + this.storeInfo?.uid);
  }

  async getAffiliateStats(showEmpty = false) {
    // if (this.activeAffiliates.length == 0) {
    //   this.loadService.miscCallback = () => this.getMiscStats();
    //   let user = await this.loadService.isLoggedIn();
    //   this.loadService.getAffiliateStats(user?.uid!, (affiliates) => {
    //     this.activeAffiliates = affiliates;
    //     if (affiliates.length != 0 || showEmpty) {
    //       let data = ['Onboarded Users (Affiliate)', 'Affiliate Revenue'];
    //       data.forEach((d) => {
    //         this.addChart(d, this.activeAffiliates);
    //       });
    //     }
    //   });
    // }
  }

  isBrowser() {
    return isPlatformBrowser(this.platformID);
  }

  classApplied = true;

  toggleSidebar() {
    this.classApplied = !this.classApplied;

    if (this.classApplied) {
      this.state = 'rotated';
    } else {
      this.state = 'default';
    }
  }

  storeBio() {
    let bio = this.storeInfo?.bio;

    if (bio == '' || bio == undefined) {
      return this.defaultBio?.replace(
        /FULL9NAME/g,
        this.storeInfo?.fullName?.trim() ?? 'This brand'
      );
    }
    return bio?.replace(/\n/g, '<br>') ?? '';
  }

  async ngOnInit() {
    this.loadService.adminComponent = this;
    Globals.sInfo.pipe(skip(1)).subscribe((s) => {
      this.storeInfo = s;
    });
    // Globals.uInfo.subscribe(s => {
    //   this.storeInfo = s
    // })

    this.init();
  }

  showWelcomeModal() {
    if (Globals.isNewUser) {
      Globals.isNewUser = false;
      // this.loadService.startSubscription(
      //   this.plans[0],
      //   (id: any, err?: string) => {
      //     if (err && err != '') {
      //       return;
      //     } else {
      //       this.subInfo = id;
      //     }
      //   }
      // );
    }
  }

  str = `

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="hologram/style.css" />
        <script src="../miniature.earth.js"></script>
        <style>
          .arrow-tip {
            background-color: #33cc33;
            color: white;
            padding: 0.5em 0.75em 0.5em 1.75em;
            font-size: 1.5em;
            clip-path: polygon(
              1.25em 0,
              100% 0,
              100% 50%,
              100% 100%,
              1.25em 100%,
              0 50%
            );
            transition: clip-path 0.3s ease, padding 0.3s ease, transform 0.3s ease;
            transform: translate(0, -50%);
          }
          .earth-overlay-left > .arrow-tip {
            padding: 0.5em 1.75em 0.5em 0.75em;
            clip-path: polygon(
              0% 0%,
              calc(100% - 1.25em) 0%,
              100% 50%,
              calc(100% - 1.25em) 100%,
              0% 100%,
              0% 50%
            );
            transform: translate(-100%, -50%);
          }
        </style>
        <script>
          var myearth;
          var sprites = [];
          window.addEventListener("load", function () {
            // myearth = new Earth(
            //   "myearth",
            //   {
            //     location: {
            //       lat: 20,
            //       lng: 20,
            //     },
            //     light: "none",
            //     mapImage: "hologram/hologram-map.svg",
            //     zoomable: true,
            //     transparent: false,
            //     autoRotate: true,
            //     autoRotateSpeed: 1.0,
            //     autoRotateDelay: 100,
            //     autoRotateStart: 2000,
            //   },
            //   {
            //     passive: true,
            //   }
            // );

            myearth = new Earth( "myearth", {
              location: { lat: 47.5, lng: 10 },
              
              zoom: 1.15,
              zoomMin: 1,
              zoomMax: 1.8,
              quality: ( window.innerWidth <= 1024 ) ? 4 : 5,
              light: 'none',
              zoomable: true,
              transparent: true,		
              mapLandColor : '#95abcf',
              mapSeaColor : 'rgba(0,51,153,0.8)',
              mapBorderColor : 'rgba(0,51,153,1)',
              mapBorderWidth : 0.25,
              mapStyles : '#FR, #ES, #DE, #IT, #BE, #NL, #LU, #DK, #SE, #FI, #IE, #PT, #GR, #EE, #LV, #LT, #PL, #CZ, #AT, #BG, #MT, #SK, #SI, #HR, #HU, #RO, #CY { fill: #e1f3fd; } #GL, #GF { fill: #a9c3e4; }'
            } );


            myearth.addEventListener(
              "ready",
              function () {
                this.startAutoRotate();
                var line = {
                  color: "#009CFF",
                  opacity: 0.01,
                  hairline: true,
                  offset: -0.5,
                };
                for (var i in connections) {
                  line.locations = [
                    {
                      lat: connections[i][0],
                      lng: connections[i][1],
                    },
                    {
                      lat: connections[i][2],
                      lng: connections[i][3],
                    },
                  ];
                  this.addLine(line);
                }
    
                yyyy;
    
                // for (var i = 0; i < 8; i++) {
                //   sprites[i] = this.addSprite({
                //     image: "hologram/hologram-shine.svg",
                //     scale: 0.01,
                //     offset: -0.5,
                //     opacity: 0.5,
                //   });
    
                //   xxxxxx;
    
                //   pulse(i);
                // }
              },
              {
                passive: true,
              }
            );
          });
    
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          function goTo(coords) {
            myearth.goTo(
              { 
                lat :coords.LATITUDE, 
                lng :coords.LONGITUDE
              }, 
              { 
                duration: 500 
              } 
            );
          };
          function pulse(index) {
            var random_location =
              connections[getRandomInt(0, connections.length - 1)];
            sprites[index].location = {
              lat: random_location[0],
              lng: random_location[1],
            };
            sprites[index].animate("scale", 0.5, {
              duration: 320,
              complete: function () {
                this.animate("scale", 0.01, {
                  duration: 320,
                  complete: function () {
                    setTimeout(function () {
                      pulse(index);
                    }, getRandomInt(100, 400));
                  },
                });
              },
            });
          }
          var connections = [
            [59.651901245117, 17.918600082397, 41.8002778, 12.2388889],
            [59.651901245117, 17.918600082397, 51.4706, -0.461941],
            [13.681099891662598, 100.74700164794922, -6.1255698204, 106.65599823],
            [
              13.681099891662598, 100.74700164794922, 28.566499710083008,
              77.10310363769531,
            ],
            [30.12190055847168, 31.40559959411621, -1.31923997402, 36.9277992249],
            [30.12190055847168, 31.40559959411621, 25.2527999878, 55.3643989563],
            [30.12190055847168, 31.40559959411621, 41.8002778, 12.2388889],
            [
              28.566499710083008, 77.10310363769531, 7.180759906768799,
              79.88410186767578,
            ],
            [
              28.566499710083008, 77.10310363769531, 40.080101013183594,
              116.58499908447266,
            ],
            [28.566499710083008, 77.10310363769531, 25.2527999878, 55.3643989563],
            [-33.9648017883, 18.6016998291, -1.31923997402, 36.9277992249],
            [-1.31923997402, 36.9277992249, 25.2527999878, 55.3643989563],
            [41.8002778, 12.2388889, 51.4706, -0.461941],
            [41.8002778, 12.2388889, 40.471926, -3.56264],
            [19.4363, -99.072098, 25.79319953918457, -80.29060363769531],
            [19.4363, -99.072098, 33.94250107, -118.4079971],
            [19.4363, -99.072098, -12.0219, -77.114304],
            [-12.0219, -77.114304, -33.393001556396484, -70.78579711914062],
            [-12.0219, -77.114304, -34.8222, -58.5358],
            [-12.0219, -77.114304, -22.910499572799996, -43.1631011963],
            [-34.8222, -58.5358, -33.393001556396484, -70.78579711914062],
            [-34.8222, -58.5358, -22.910499572799996, -43.1631011963],
            [22.3089008331, 113.915000916, 13.681099891662598, 100.74700164794922],
            [22.3089008331, 113.915000916, 40.080101013183594, 116.58499908447266],
            [22.3089008331, 113.915000916, 31.143400192260742, 121.80500030517578],
            [35.552299, 139.779999, 40.080101013183594, 116.58499908447266],
            [35.552299, 139.779999, 31.143400192260742, 121.80500030517578],
            [33.94250107, -118.4079971, 40.63980103, -73.77890015],
            [33.94250107, -118.4079971, 25.79319953918457, -80.29060363769531],
            [33.94250107, -118.4079971, 49.193901062, -123.183998108],
            [40.63980103, -73.77890015, 25.79319953918457, -80.29060363769531],
            [40.63980103, -73.77890015, 51.4706, -0.461941],
            [51.4706, -0.461941, 40.471926, -3.56264],
            [
              40.080101013183594, 116.58499908447266, 31.143400192260742,
              121.80500030517578,
            ],
            [-33.94609832763672, 151.177001953125, -41.3272018433, 174.804992676],
            [-33.94609832763672, 151.177001953125, -6.1255698204, 106.65599823],
            [55.5914993286, 37.2615013123, 59.651901245117, 17.918600082397],
            [55.5914993286, 37.2615013123, 41.8002778, 12.2388889],
            [55.5914993286, 37.2615013123, 40.080101013183594, 116.58499908447266],
            [55.5914993286, 37.2615013123, 25.2527999878, 55.3643989563],
          ];
        </script>
      </head>
      <body>
        <div id="myearth">
          <div id="glow"></div>
        </div>
      </body>
    </html>    

    `;

  trackByFn(index: number, collection: Collection) {
    return collection.contract;
  }

  routeToProduct(product: NFT) {
    this.rootComponent.routeToProduct(product.docID ?? '');
  }

  viewPage(page: Page) {
    const link = document.createElement('a');
    link.target = '_blank';

    let url = Globals.storeInfo.customURL;

    if (url) {
      let url2: string = `${url.fullURL}/${page.url}`;

      link.href = url2;

      link.setAttribute('visibility', 'hidden');
      link.click();
      link.remove();
    }
  }

  editPlan() {
    const modalRef = this.dialog.open(EditPlanComponent, {
      width: '750px',
      height: '760px',
      maxHeight: '100vh',
      maxWidth: '100vw',
      panelClass: 'app-full-bleed-sm-dialog',
      data: {
        plans: this.plans,
        subInfo: this.subInfo,
      },
    });

    let sub = modalRef.afterClosed().subscribe((subInfo?: any) => {
      sub.unsubscribe();
      if (subInfo) {
        this.subInfo = subInfo ?? '';
        this.toast('Plan Updated!');
      }
    });
  }

  async callback() {
    if (this.storeInfo?.username) {
      this.mainLoad = true;
      this.rootComponent.setOptions();
      this.rootComponent.setFavIcon(
        this.storeInfo?.profileLink?.toString() ?? ''
      );

      this.addTags(
        this.storeInfo?.fullName ?? 'Thred',
        (
          this.storeInfo?.profileLink ?? new URL('https://shopmythred.com')
        ).toString(),
        this.storeInfo?.bio ?? 'Check out my Thred Store!',
        'shopmythred.com/' + this.storeInfo?.username
      );

      if (isPlatformBrowser(this.platformID)) {
        if (this.signedIn) {
          this.setForm();
          this.showWelcomeModal();
        }
      }
    } else {
      this.routingService.routeTo404(this.getStoreName().isCustom);
    }
  }

  scrollToLocation(val?: any) {
    if (val) {
      let loc = val;
      let coords = loc.coords;

      let frame = (document.getElementById('earthFrame') as HTMLIFrameElement)
        ?.contentWindow as any;

      frame.goTo(coords);
    }
  }

  providerName() {
    if (Globals.provider) {
      return 'CONNECTED';
    }
    return 'CONNECT WALLET';
  }

  async setProvider() {
    await Globals.checkProvider();
  }

  get provider() {
    return Globals.provider;
  }

  planStatus() {
    if (this.subInfo?.plan.id == 'price_1KrbIjIdY1nzc70NYFEfX1OV') {
      return 'Thred Core Plan';
    } else if (this.subInfo.plan.id == 'price_1KfTcTIdY1nzc70NJcgzPZCy') {
      return 'Thred Store Builder Plan';
    }
    return '';
  }

  planRenewalDate() {
    return new Date(this.subInfo.current_period_end * 1000).toDateString();
  }

  planEndDate() {
    return new Date(this.subInfo.cancel_at * 1000).toDateString();
  }

  routeToBillingAdmin() {
    const modalRef = this.dialog.open(BillingAdminComponent, {
      width: '750px',
      height: '650px',
      maxHeight: '100vh',
      maxWidth: '100vw',
      panelClass: 'app-full-bleed-sm-dialog',
      data: {
        billingInfo: this.billingInfo != '' ? this.billingInfo : null,
      },
    });
    let sub = modalRef.afterClosed().subscribe((resp) => {
      sub.unsubscribe();
      if (resp) {
        let col = resp as BillingInfo;
        this.billingInfo = col;
        this.cdr.detectChanges();
      }
    });
  }

  orders?: Array<Order>;
  displayedColumns: string[] = ['name', 'value', 'status', 'action'];

  async init() {
    if (isPlatformBrowser(this.platformID)) {
      let user = await this.loadService.isLoggedIn();
      let uid = user?.uid;
      let isAnon = user?.isAnonymous ?? false;

      this.signedIn = uid != undefined && !isAnon;
      if (!this.subInfo) {
        this.loadService.getSubInfo(
          async (subInfo: any, canTrial?: boolean) => {
            if (!this.subInfo) {
              this.subInfo = subInfo ?? '';
            }
            this.canTrial = canTrial;
            this.cdr.detectChanges();
          }
        );
      }
      if (!this.collections) {
        this.loadService.getPosts(
          (cols) => {
            if (!this.collections) {
              this.collections = cols ?? [];
            }
            this.cdr.detectChanges();
          },
          undefined,
          undefined,
          uid
        );
      }
      if (!this.plans) {
        this.loadService.getPlans(async (plans?: Array<Plan>) => {
          if (!this.plans) {
            this.plans = plans ?? [];
          }
          this.cdr.detectChanges();
        });
      }
      if (!this.views) {
        this.loadStats(user!.uid);
      }
      if (!this.bigcommerceMetadata) {
        this.loadService.getBigCommerceStore((info) => {
          this.bigcommerceMetadata = info ?? null;
          if (info.logo.url) {
            Globals.storeInfo.profileLink = new URL(info.logo.url);
          }
          Globals.storeInfo.customURL = new StoreDomain(
            info.domain,
            'https',
            2,
            ''
          );
          this.cdr.detectChanges();
        });
      }
      if (!this.billingInfo) {
        this.loadService.getBillingInfo(async (billingInfo?: any) => {
          if (billingInfo) {
            this.billingInfo = new BillingInfo(
              billingInfo.billing_details.name,
              undefined,
              billingInfo.card.last4,
              billingInfo.card.brand,
              billingInfo.billing_details.address.line1,
              billingInfo.billing_details.address.city,
              billingInfo.billing_details.address.country,
              billingInfo.billing_details.address.state,
              billingInfo.billing_details.address.line2,
              billingInfo.billing_details.address.postal_code,
              billingInfo.card.country
            );
          } else {
            this.billingInfo = '';
          }
          this.cdr.detectChanges();
        });
      }
      if (!this.utilities) {
        this.loadService.getUtilities(async (utils?: Array<any>) => {
          console.log(utils)
          if (!this.utilities) {
            this.utilities = utils ?? [];
          }
          this.cdr.detectChanges();
        });
      }

      this.router.queryParams.subscribe((params) => {
        let selected = params.selected as string;

        let s = selected?.toUpperCase();
      });
    }

    const storeInfo = this.getStoreName();
    this.downloadAllStoreInfo(storeInfo?.link, storeInfo?.isCustom);

    if (this.classApplied) {
      this.state = 'rotated';
    } else {
      this.state = 'default';
    }
  }

  storeURL() {
    let l = this.getStoreName();
    if (l.isCustom) {
      return l.link;
    }
    return 'shopmythred.com/' + l.link;
  }

  downloadAllStoreInfo(storeName: string, isCustom = false) {
    console.log(storeName)
    this.loadService.getUser(storeName, undefined, isCustom, (store) => {
      this.callback();
    });
  }

  plan(id: string) {
    return this.plans!.find((p) => p.id == id);
  }

  getStoreName() {
    var request = '';
    if (isPlatformServer(this.platformID)) {
      request = Globals.URL;
    } else {
      request = globalThis.location.host;
    }
    if (
      request != 'localhost:4200' &&
      request != Globals.ngrokId &&
      request != 'shopmythred.com'
    ) {
      // return {
      //   isCustom: true,
      //   link: request,
      // };
    }
    const routeParams = this.router.snapshot.paramMap;
    const storeID = routeParams.get('user') as string;
    return {
      isCustom: false,
      link: storeID,
    };
  }

  loadStats(uid = Globals.storeInfo.uid!) {
    this.loadService.getMiscStats(
      uid,
      this.dateRange.controls.start.value,
      this.dateRange.controls.end.value,
      (views) => {
        this.views = views ?? [];
        this.cdr.detectChanges();
      }
    );
  }

  async deleteProduct(product: NFT) {
    // this.openPopup(
    //   'Are you sure?',
    //   'Your product will be removed forever.',
    //   product.url.toString(),
    //   'Yes, Remove',
    //   'Never Mind',
    //   async () => {
    //     await this.loadService.deleteProduct({ productID: product.productID });
    //     this.toast('Product Removed');
    //   }
    // );
  }

  editProduct(product: NFT) {
    // let same =
    //   this.templates().find((temp) => {
    //     return temp.productCode == product.productType;
    //   }) ?? null;
    // let sameC =
    //   same?.colors.find((co) => {
    //     return co.code == product.templateColor;
    //   }) ?? null;
    // var data: Dict<any> = {
    //   linkImg: product.url,
    //   back_linkImg: undefined,
    //   frontImg: product.picID,
    //   backImg: undefined,
    //   selectedTemplate: same,
    //   selectedColor: sameC,
    //   suggested_price: product.price / 100,
    //   templates: this.templates().filter((template) => {
    //     return (
    //       !template.onlyBulk ||
    //       this.inventory?.filter((inv) => {
    //         return inv.code == template.productCode && inv.amount > 0;
    //       }).length != 0
    //     );
    //   }),
    //   inventory: this.inventory ?? [],
    //   mode: 'edit',
    //   product: product,
    // };
    // if (
    //   product.supportedSides.find((side) => {
    //     return side == 'Back';
    //   })
    // ) {
    //   data.backImg = product.picID;
    // }
    // this.productDetailsMode = true;
    // this.productDetails = data;
  }

  productDetailsMode = false;
  productDetails: any;

  createNewNFT(selected: any) {
    // if (!this.isSignedIn()){ return }
    if (selected.id) {
      let col = this.collections?.find(
        (c) => c.NFTs[`${selected.id}`] != undefined
      );
      if (col) {
        selected = {
          asset: col?.NFTs[`${selected.id}`],
          contract: col,
        };
        this.cdr.detectChanges();
      } else {
        return;
      }
    }
    console.log(this.utilities)
    selected.utils = this.utilities ?? [];
    const modalRef = this.dialog.open(CreateCryptoComponent, {
      width: '97.5vw',
      height: '97.5vh',
      maxHeight: '100vh',
      maxWidth: '100vw',
      panelClass: 'app-full-bleed-sm-dialog',

      data: selected,
    });

    // const modalRef = this.dialog.open(DesignComponent, {
    //   width: '' + this.myInnerHeight() + "px",
    //   maxWidth: '100vw',
    //   maxHeight: '100vh',
    //   data: {
    //     inventory: this.inventory ?? [],
    //     templates: this.templates().filter(template => { return !template.onlyBulk || this.inventory?.filter(inv =>{ return inv.code == template.productCode && inv.amount > 0}).length != 0})
    //   },
    // });

    let sub = modalRef.afterClosed().subscribe((resp) => {
      sub.unsubscribe();
      if (resp) {
        let col = resp as NFT;

        let same = this.collections?.findIndex(
          (c) => c.contract == col.address
        );
        if (this.collections![same!].NFTs == undefined) {
          this.collections![same!].NFTs = {};
        }
        this.collections![same!].NFTs[`${col.docID!}`] = col;
        this.collections![same!].collectionCount! += 1;

        this.cdr.detectChanges();

        this.toast('NFT Created!');
      }
      // if (resp == 2){
      //   this.newInventory()
      // }
      // else if (resp){
      //   this.productDetailsMode = true
      //   resp.templates = this.templates().filter(template => { return !template.onlyBulk || this.inventory?.filter(inv =>{ return inv.code == template.productCode && inv.amount > 0}).length != 0}),
      //   resp.inventory = this.inventory ?? []
      //   resp.mode = 'create'
      //   this.productDetails = resp
      // }
      // else{
      //   this.productDetailsMode = false
      //   this.productDetails = undefined
      // }
    });
  }

  createNewProduct() {
    // if (!this.isSignedIn()){ return }

    const modalRef = this.dialog.open(CreateCollectionComponent, {
      width: '750px',
      maxHeight: '100vh',
      maxWidth: '100vw',
      panelClass: 'app-full-bleed-sm-dialog',

      data: {
        provider: this.provider,
      },
    });

    // const modalRef = this.dialog.open(DesignComponent, {
    //   width: '' + this.myInnerHeight() + "px",
    //   maxWidth: '100vw',
    //   maxHeight: '100vh',
    //   data: {
    //     inventory: this.inventory ?? [],
    //     templates: this.templates().filter(template => { return !template.onlyBulk || this.inventory?.filter(inv =>{ return inv.code == template.productCode && inv.amount > 0}).length != 0})
    //   },
    // });

    let sub = modalRef.afterClosed().subscribe((resp) => {
      sub.unsubscribe();
      if (resp) {
        let col = resp.collection as Collection;
        let generate = resp.generate as boolean;
        this.collections?.push(col);
        this.toast('Collection Created!');
        // if (generate){
        //   let page = new Page(col.name.toLowerCase().replace(" ", ''), col.name, undefined, )
        //   this.storeInfo?.pages.push
        // }
        this.cdr.detectChanges();
      }
      // if (resp == 2){
      //   this.newInventory()
      // }
      // else if (resp){
      //   this.productDetailsMode = true
      //   resp.templates = this.templates().filter(template => { return !template.onlyBulk || this.inventory?.filter(inv =>{ return inv.code == template.productCode && inv.amount > 0}).length != 0}),
      //   resp.inventory = this.inventory ?? []
      //   resp.mode = 'create'
      //   this.productDetails = resp
      // }
      // else{
      //   this.productDetailsMode = false
      //   this.productDetails = undefined
      // }
    });
  }

  myInnerHeight() {
    let height = window.innerHeight;
    let width = window.innerWidth;

    if (width < height) {
      return width * 0.98;
    } else {
      return height * 0.7;
    }
  }

  finish(success: boolean) {
    this.productDetailsMode = false;
    this.productDetails = undefined;
  }

  routeToHome() {
    this.rootComponent.routeToHome();
  }

  addTags(title: string, imgUrl: string, description: string, url: string) {
    this.metaService.updateTag({
      property: 'og:title',
      content: title + ' - ' + 'My Account',
    });
    this.metaService.updateTag({ property: 'og:image:width', content: '200' });
    this.metaService.updateTag({ property: 'og:image:height', content: '200' });
    this.metaService.updateTag({ property: 'og:image', content: imgUrl });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({
      property: 'og:description',
      content: description,
    });
    this.titleService.setTitle(title);
    this.metaService.updateTag({
      property: 'description',
      content: description,
    });
    this.metaService.removeTag("name='robots'");
    this.metaService.removeTag("name='googlebot'");
  }
}
