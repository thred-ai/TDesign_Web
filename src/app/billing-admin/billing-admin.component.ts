import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit,
} from '@angular/core';
import { Globals } from '../globals';
import { Dict, LoadService } from '../services/load.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BillingInfo } from '../models/billing-address.model';
import {
  StripeCardComponent,
  StripeService,
} from 'ngx-stripe';
import { NgxSpinnerService } from 'ngx-spinner';

import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-billing-admin',
  templateUrl: './billing-admin.component.html',
  styleUrls: ['./billing-admin.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class BillingAdminComponent implements OnInit, AfterViewInit {
  @ViewChild(StripeCardComponent) card1?: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    hidePostalCode: true,
    style: {
      base: {
        iconColor: '#06415F',
        color: '#051113',
        fontWeight: 'regular',
        fontFamily: 'Arial',
        fontSize: '16px',
        '::placeholder': {
          color: '#979999',
        },
      },
    },
  };

  selectedTheme() {
    let co = Globals.storeInfo?.colorStyle?.btn_color;
    let bco = Globals.storeInfo?.colorStyle?.bg_color;
    let name = Globals.storeInfo?.colorStyle?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    var theme: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return theme;
  }

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

  stripeTest!: FormGroup;

  billingForm = this.fb.group({
    company: null,
    cardholder: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    country: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [
      null,
      [Validators.required, Validators.minLength(5), Validators.maxLength(8)],
    ],
    shipping: ['custom', Validators.required],
  });

  hasUnitNumber = false;

  states(country?: string) {
    country = country?.toLowerCase();
    if (country == 'canada') {
      return Globals.caProvinces;
    }
    if (country == 'united states') {
      return Globals.usStates;
    }
    if (country == 'united kingdom') {
      return Globals.ukNations;
    }
    if (country == 'australia') {
      return Globals.auNations;
    }
    return Globals.usStates;
  }

  countries() {
    return Globals.allCountries;
  }

  getStateFieldName(country?: string) {
    country = country?.toLowerCase();
    if (country == 'canada') {
      return 'Province';
    }
    if (country == 'united states') {
      return 'State';
    }
    if (country == 'united kingdom') {
      return 'Region';
    }
    if (country == 'australia') {
      return 'Province';
    }
    return 'State';
  }

  getZipFieldName(country?: string) {
    country = country?.toLowerCase();
    if (country == 'canada') {
      return 'Postal Code';
    }
    if (country == 'united states') {
      return 'Zip Code';
    }
    if (country == 'united kingdom') {
      return 'Postal Code';
    }
    if (country == 'australia') {
      return 'Postal Code';
    }
    return 'Zip Code';
  }

  storeInfo() {
    return Globals.storeInfo;
  }

  availableCurrencies() {
    return Globals.availableCurrencies;
  }

  selectedCurrency() {
    return Globals.selectedCurrency;
  }

  templates() {
    return Globals.availableTemplates;
  }

  availableTemplates() {
    return Globals.availableTemplates;
  }

  selectedTemplate() {
    return Globals.selectedTemplate;
  }

  selectedCode!: string;

  firstName() {
    return this.billingInfo?.name.split(' ').slice(0, -1).join(' ');
  }

  lastName() {
    return this.billingInfo?.name.split(' ').slice(-1).join(' ');
  }

  format(d: Date) {
    return (
      Globals.months[d.getMonth()].substring(0, 3) +
      ' ' +
      d.getDate() +
      ' ' +
      d.getFullYear()
    );
  }

  setForm() {
    this.card1?.element.on('change', ({ error }) => {
      this.validCard = !error;

      if (error) {
        console.log(error);
      }
    });

    this.billingForm.controls.company.setValue(this.billingInfo?.company ?? '');
    this.billingForm.controls.cardholder.setValue(this.billingInfo?.name ?? '');
    this.billingForm.controls.address.setValue(this.billingInfo?.street ?? '');
    this.billingForm.controls.address2.setValue(this.billingInfo?.unit ?? '');
    this.billingForm.controls.country.setValue(
      (this.billingInfo?.country ?? '').trim() != ''
        ? this.billingInfo?.country
        : 'United States'
    );
    this.billingForm.controls.city.setValue(this.billingInfo?.city ?? '');
    this.billingForm.controls.state.setValue(
      this.billingInfo?.admin_area ?? ''
    );
    this.billingForm.controls.postalCode.setValue(
      this.billingInfo?.postal ?? ''
    );
  }

  selectedIndicator() {
    if (!Globals.storeInfo) {
      return {
        name: '',
        color: '',
        bg_color: '',
      };
    }
    let co = Globals.storeInfo?.loading?.color;
    let bco = Globals.storeInfo?.loading?.bg_color;
    let name = Globals.storeInfo?.loading?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    let indicator: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return indicator;
  }

  async callback() {
    if (await this.loadService.authenticated()) {
      this.cardOptions.style!.base!.color = this.selectedTheme().color;
      this.cardOptions.style!.base!.iconColor = this.selectedTheme().color;
      this.cardOptions.style!.base!['::placeholder']!.color =
        this.selectedTheme().color;

      if (!this.billingInfo){
        this.loadService.getBillingInfo((billingInfo) => {
          if (Globals.storeInfo?.username && billingInfo) {
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
          }
          this.setForm();
          this.cdr.detectChanges();
        });
      }
      else{
        this.setForm();
      }
    } else {
    }
  }

  validCard = false;
  err = '';
  billingInfo?: BillingInfo = undefined;

  saving = false

  async addCard() {

    if (this.billingForm.valid && this.validCard) {
      let f = this.billingForm.controls;

      this.billingInfo = new BillingInfo(
        f.cardholder.value,
        f.company.value,
        undefined,
        undefined,
        f.address.value,
        f.city.value,
        f.country.value,
        f.state.value,
        f.address2.value,
        f.postalCode.value,
        this.getCountryCode(f.country.value)
      );

      if (f.country.value == 'CA' || f.country.value == 'Canada') {
        this.billingInfo.admin_area =
          Globals.caProvinces.find((province) => {
            return (
              province.name == f.state.value ||
              province.abbreviation == f.state.value
            );
          })?.abbreviation ?? 'ON';
      }

      if (isPlatformBrowser(this.platformID)) {
        this.saving = true
      }

      this.loadService.linkCard(
        this.billingInfo,
        { card: this.card1, stripe: this.stripeService },
        (err?: any) => {
          this.saving = false
          if (err) {
            this.err = err;
          } else {
            this.activeModal.close(this.billingInfo)
          }
        }
      );
    }
  }

  init() {
    this.cardOptions.style!.base!.color = this.selectedTheme().color;
    this.billingInfo = this.data.billingInfo
    this.callback()
  }


  closeDialog(){
    this.activeModal.close()
  }


  getStoreName() {
    var request = '';
    if (isPlatformServer(this.platformID)) {
      request = Globals.URL;
    } else {
      request = globalThis.location.host;
    }
    if (request != 'localhost:4200' && request != Globals.ngrokId && request != 'shopmythred.com') {
      return {
        isCustom: true,
        link: request,
      };
    }
    const routeParams = this.router.snapshot.paramMap;
    const storeID = routeParams.get('user') as string;
    return {
      isCustom: false,
      link: storeID,
    };
  }

  isBrowser() {
    return isPlatformBrowser(this.platformID);
  }

  getCountryCode(country: string) {
    var returnItem = this.countries().find((c) => c.name == country)?.code;
    return returnItem;
  }

  addTags(title: string, imgUrl: string, description: string, url: string) {
    this.metaService.updateTag({
      property: 'og:title',
      content: title + ' - ' + 'Checkout',
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

  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    public activeModal: MatDialogRef<BillingAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private loadService: LoadService,
    private fb: FormBuilder,
    private stripeService: StripeService,
  ) {}
  ngAfterViewInit(): void {}

  buttonBack() {
    if (this.storeInfo()?.colorStyle.back_code == 'dark') {
      return 'rgb(255,255,255)';
    }
    return 'rgb(0,0,0)';
  }

  ngOnInit(): void {
    this.init();
  }
}
