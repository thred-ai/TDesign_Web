import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  OnDestroy,
  ElementRef,
  ChangeDetectorRef,
  SecurityContext,
  PLATFORM_ID,
} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Order } from '../models/order.model';
import { Globals } from '../globals';
import { Country } from '../models/shipping-country.model';
import { Product } from '../models/product.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Row } from '../models/row.model';
import { AppComponent } from '../app.component';
import { Dict, LoadService } from '../services/load.service';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { Banner } from '../models/banner.model';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CropperComponent } from '../cropper/cropper.component';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-layout-builder',
  templateUrl: './layout-builder.component.html',
  styleUrls: ['./layout-builder.component.css'],
})
export class LayoutBuilderComponent implements OnInit, OnDestroy {
  rootComponent?: AppComponent;
  admin?: AdminViewComponent;
  loaded = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  editingBlock?: number;

  storeInfo() {
    return Globals.storeInfo;
  }

  layoutForm = this.fb.group({
    header: [null],
    rows: [[]],
  });

  rowForm = this.fb.group({
    title: [null],
    htmlText: [null],
    imgs: [[]],
    type: [null],
    grid: [null],
  });

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '100',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: this.storeInfo().fontName ?? '',
    defaultFontSize: '',
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: false,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'insertImage',
        'insertVideo',
        'toggleEditorMode',
        'heading',
        'subscript',
        'superscript',
        'indent',
        'outdent',
        'undo',
        'redo',
        'insertHorizontalRule',    
      ],
    ],
    fonts: this.storeFonts(),
  };

  //'fontName'

  title = 'LAUNCHING LAYOUT BUILDER';

  prods: Array<string> = [];


  storeFonts(){

    var fonts: Array<{
      class: string,
      name: string
    }> = []

    Globals.fonts.forEach(font => {
      fonts.push({
        class: font.split(' ').join('-'),
        name: font
      })
    })
    return fonts
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value != '0' && value != '1') {
      this.prods.push(value);
    } else {
      this.prods = [value];
      console.log('smart');
    }
    // Clear the input value
    event.chipInput!.clear();
    this.setRow();
    this.productCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.prods.indexOf(fruit);

    if (index >= 0) {
      this.prods.splice(index, 1);
    }
    this.setRow();
  }

  hoverIndex?: number = undefined;

  changeStyle($event: Event, index: number) {
    // this.color = $event.type == 'mouseover' ? 'yellow' : 'red';
    let p = document.getElementById('p-' + index);

    if ($event.type == 'mouseover') {
      this.hoverIndex = index;
      setTimeout(async () => {
        if (p) {
          p.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start',
          });
        } else {
          console.log('blamk');
        }
      }, 0);
    } else {
      this.hoverIndex = undefined;
    }
  }

  productName(id: any) {
    if (id === '1') {
      return 'HOTTEST PRODUCTS';
    } else if (id === '0') {
      return 'NEWEST PRODUCTS';
    }
    return this.admin?.storeProducts?.find((product) => {
      return product.productID == id;
    })?.name;
  }

  allSelected() {
    return this.prods.find((j) => {
      return j == '1' || j == '0';
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (event.option.value != '0' && event.option.value != '1') {
      this.prods.push(event.option.value);
    } else {
      this.prods = [event.option.value];
      console.log('smart');
    }

    this.productInput!.nativeElement.value = '';

    this.setRow();
    this.productCtrl.setValue(null);
  }

  private _filter(value: string): Product[] {
    const filterValue = ((value as string) ?? '').toLowerCase();

    return (this.admin!.storeProducts ?? []).filter((product) =>
      product.name?.toLowerCase().includes(filterValue)
    );
  }

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LayoutBuilderComponent>,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    private loadService: LoadService,
    private cdr: ChangeDetectorRef,
    public sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformID: Object
  ) {
    this.admin = data.admin;
    this.rootComponent = data.rootComponent;

    this.spinner.show('loader');

    for (let i = 1; i < 5; i++) {
      for (let j = 1; j < 5; j++) {
        this.grid.push({
          name: String(i) + 'x' + String(j),
          row: i,
          col: j,
        });
      }
    }
    this.filteredProducts = this.productCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : (this.admin?.storeProducts ?? []).slice()
      )
    );
  }

  selectable = true;
  removable = true;
  productCtrl = new FormControl();
  filteredProducts: Observable<Product[]>;
  @ViewChild('productInput') productInput?: ElementRef<HTMLInputElement>;

  types = [
    {
      name: 'Button Block',
      code: 3,
    },
    {
      name: 'Text Block',
      code: 2,
    },
    {
      name: 'Image Block',
      code: 1,
    },
    {
      name: 'Product Block',
      code: 0,
    },
  ];

  images = new Array<{
    isActive: boolean;
    img: string;
  }>();

  grid: Array<{
    name: string;
    row: number;
    col: number;
  }> = [];

  matchingType(type: number) {
    return this.types.find((t) => {
      return t.code == type;
    });
  }

  ngOnDestroy(): void {
    this.interval = undefined;
    this.aRow.index = undefined;
    this.aRow.row = undefined;
    this.rowForm.reset();
    this.layoutForm.reset();
    this.admin = undefined;
    this.rootComponent = undefined;
  }

  ngOnInit(): void {
    console.log('a');

    if (isPlatformBrowser(this.platformID)) {
      if (this.document.body.removeAllListeners) {
        this.document.body.removeAllListeners('click');
      }
    }

    console.log(this.storeInfo().homeRows);

    this.layoutForm.controls.rows.setValue(
      Object.assign([], this.storeInfo().homeRows ?? [])
    );
    this.layoutForm.controls.header.setValue(
      this.storeInfo().homeLinkTop ?? this.storeInfo().themeLink
    );

    setTimeout(() => {
      this.loaded = true;
      this.spinner.hide('loader');
    }, 500);
    if (this.storeInfo()?.banners.length > 0) {
      this.setInterval();
    }
    this.cdr.detectChanges();
    this.onValueChanges();
  }

  closeDialog() {
    this.interval = undefined;
    this.dialogRef.close();
  }

  removeRows(index: number) {
    (this.layoutForm.controls.rows.value ?? [])?.splice(index, 1);
    this.cdr.detectChanges();
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

  async edit(index: number) {
    if (this.editingBlock == index) {
      return;
    }
    this.editingBlock = index;

    this.cdr.detectChanges();

    let matchingRow = ((this.layoutForm.controls.rows.value as Array<Row>) ??
      [])[index];

    this.rowForm.controls.title.setValue(matchingRow.text ?? '');

    if (matchingRow.products ?? []) {
      this.prods = matchingRow.products ?? [];
    }

    if (matchingRow.smart_products != undefined) {
      this.prods = [String(matchingRow.smart_products)];
    }

    this.rowForm.controls.htmlText.setValue(matchingRow.html ?? '');

    this.rowForm.controls.type.setValue(matchingRow.type ?? 0);

    const promises = (matchingRow.imgs ?? []).map(async (image) => {
      let img = {
        isActive: true,
        img: image.toString(),
      };
      this.images.push(img);
    });
    await Promise.all(promises);

    let row = matchingRow.grid_row ?? 1;
    let count = Math.ceil((this.images ?? []).length / row);

    if (count == 0) {
      count = Math.ceil(
        (
          this.products(
            Number((this.prods as Array<string>)[0]),
            (this.prods as Array<string>) ?? []
          ) ?? []
        ).length / row
      );
    }

    if (count == 0) {
      count = 1;
    }

    let name = String(row) + 'x' + String(count);

    console.log(name);
    this.rowForm.controls.grid.setValue(name);

    if (matchingRow.type == 1) {
      let matchGrid = this.grid.find((g) => g.name == name);

      let diff =
        (matchGrid?.row ?? 1) * (matchGrid?.col ?? 2) - this.images.length;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          this.images.push({
            isActive: false,
            img: '',
          });
        }
      }
    }
    setTimeout(async () => {
      let p = document.getElementById('p-' + index);
      if (p) {
        p.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        });
      } else {
        console.log('blamk');
      }
    }, 100);
  }

  height() {
    let matchGrid = this.grid.find(
      (g) => g.name == this.rowForm.controls.grid.value ?? '2x1'
    );

    return (
      (document.getElementById('label')?.offsetHeight ?? 0) /
      ((matchGrid?.row ?? 1) * (matchGrid?.col ?? 2))
    );
  }

  removeImg(img: { isActive: boolean; img: string }) {
    img.img = '';
    img.isActive = false;

    let index = this.images.indexOf(img);
    this.setRow();
    moveItemInArray(this.images, index, this.images.length - 1);
  }

  fileChangeEvent(
    event: any,
    image: {
      isActive: boolean;
      img: string;
    }
  ): void {
    const modalRef = this.modalService.open(CropperComponent, { size: 'lg' });
    modalRef.componentInstance.imageChangedEvent = event;

    modalRef.componentInstance.width = 2560;
    modalRef.componentInstance.height = 2560;

    let sub = modalRef.dismissed.subscribe((img: string) => {
      sub.unsubscribe();
      if (img != '0') {
        image.img = img;
        image.isActive = true;
      }
      this.setRow();
    });
  }

  fileChangeBannerEvent(event: any): void {
    const modalRef = this.modalService.open(CropperComponent, { size: 'lg' });
    modalRef.componentInstance.imageChangedEvent = event;

    modalRef.componentInstance.width = 2560;
    modalRef.componentInstance.height = 1140;

    let sub = modalRef.dismissed.subscribe((img: string) => {
      sub.unsubscribe();
      if (img != '0') {
        this.layoutForm.controls.header.setValue(img);
      }
    });
  }

  canCancel() {
    return (
      this.images.filter((img) => {
        return img.isActive;
      }).length > 1
    );
  }

  onValueChanges(): void {
    this.rowForm.valueChanges.subscribe((val) => {
      this.setRow();
      this.cdr.detectChanges();
    });
  }

  changed(event?: any) {
    let type = this.rowForm.controls.type.value ?? 1;

    if (type == 1) {
      let matchGrid = this.grid.find((g) => g.name == event.value);

      let newSize = (matchGrid?.row ?? 1) * (matchGrid?.col ?? 2);

      console.log(newSize);

      if (newSize > this.images.length) {
        for (let i = 0; i < newSize; i++) {
          if (!this.images[i]) {
            this.images.push({
              isActive: false,
              img: '',
            });
          }
        }
      } else if (newSize < this.images.length) {
        this.images = this.images.slice(0, newSize);
      }
    }
  }

  finishedEditing(isDelete: boolean = false) {
    if (this.editingBlock == undefined) {
      return;
    }

    let rows = (this.layoutForm.controls.rows.value as Array<Row>) ?? [];

    switch (isDelete) {
      // @ts-ignore
      case false:
        let name = (this.rowForm.controls.title.value as string) ?? '';
        let type = (this.rowForm.controls.type.value as number) ?? 0;
        let html = (this.rowForm.controls.htmlText.value ?? '').replace(
          /style="/g,
          'style="overflow-wrap: break-word;'
        );

        let imgs = (this.images ?? [])
          .filter((i) => i.img != undefined && i.img.trim() != '')
          .map((i) => i.img);
        let products = this.prods ?? [];

        if (
          !(
            (type == 0 && products.length == 0) ||
            (type == 1 && imgs.length == 0) ||
            (type == 2 && html.trim() == '')
          )
        ) {
          let grid = (this.rowForm.controls.grid.value as string) ?? '2x1';

          let matchGrid = this.grid.find((g) => g.name == grid)?.row;

          let row = new Row(
            name,
            Object.assign([], products),
            undefined,
            type,
            Object.assign([], imgs),
            matchGrid,
            html,
            ''
          );

          if (
            products.find((i) => i == '0') ||
            products.find((i) => i == '1')
          ) {
            row.products = [];
            row.smart_products = parseInt(products[0]);
          }

          if (this.editingBlock != undefined) {
            rows[this.editingBlock] = row;
          }

          console.log(row);

          this.layoutForm.controls.rows.setValue(rows);
          break;
        }
      default:
        if (rows[this.editingBlock] != undefined)
          this.removeRows(this.editingBlock);
    }

    this.rowForm.reset();
    this.prods = [];
    this.images = [];
    this.editingBlock = undefined;
    this.aRow.row = undefined;
    this.aRow.index = undefined;
  }

  aRow: {
    row?: Row;
    index?: number;
  } = {
    row: undefined,
    index: undefined,
  };

  rowText(row: Row, format = false) {
    let replaced = row.html ?? '';

    if (format) {
      replaced = replaced
        .replace(/size=/g, '')
        .replace(/<font >/g, '')
        .replace(
          /style="/g,
          'style="word-wrap:break-word; word-break: break-all; text-overflow: ellipsis; margin-right: 5px; '
        );
    }
    return this.sanitizer.bypassSecurityTrustHtml(replaced);
  }

  setRow(gridVal?: string) {
    let name = (this.rowForm.controls.title.value as string) ?? '';
    let type = (this.rowForm.controls.type.value as number) ?? 0;
    let html = (this.rowForm.controls.htmlText.value ?? '').replace(
      /style="/g,
      'style="overflow-wrap: break-word;'
    );

    let imgs = (this.images ?? [])
      .filter((i) => i.img != undefined && i.img.trim() != '')
      .map((i) => i.img);
    let products = this.prods ?? [];

    let grid = gridVal ?? (this.rowForm.controls.grid.value as string) ?? '2x1';

    let matchGrid = this.grid.find((g) => g.name == grid)?.row;

    let row = new Row(
      name,
      Object.assign([], products),
      undefined,
      type,
      Object.assign([], imgs),
      matchGrid,
      html,
      ''
    );

    if (products.find((i) => i == '0') || products.find((i) => i == '1')) {
      row.products = [];
      row.smart_products = parseInt(products[0]);
      console.log('smart2');
    }

    this.aRow.row = row;
    this.aRow.index = this.editingBlock;
  }

  addBlock() {
    let rows = (this.layoutForm.controls.rows.value as Array<Row>) ?? [];
    rows.push(new Row('', [], undefined, 0, [], 2));
    this.layoutForm.controls.rows.setValue(rows);

    this.edit(rows.length - 1);
  }

  selectedIndicator() {
    let co = Globals.storeInfo?.loading?.color;
    let bco = Globals.storeInfo?.loading?.bg_color;
    let name = Globals.storeInfo?.loading?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    var indicator: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return indicator;
  }

  async close() {
    this.finishedEditing();

    let rowInfo = (this.layoutForm.controls.rows.value as Array<Row>) ?? [];
    let header = (this.layoutForm.controls.header.value as string) ?? '';

    this.spinner.show('loader');
    this.title = 'SAVING LAYOUT';

    const promises = rowInfo.map(async (r) => {
      if (r.type == 1) {
        let promises2 = (r.imgs ?? []).map(async (i: string, index: number) => {
          if (
            !this.loadService.isBase64(i?.replace(/^[\w\d;:\/]+base64\,/g, ''))
          ) {
            var im = (await this.getBase64ImageFromUrl(i?.toString())) as any;
            (r.imgs ?? [])[index] = im;
          }
        });
        await Promise.all(promises2);
      }
    });
    await Promise.all(promises);

    this.loadService.addLayout(
      rowInfo,
      header,
      (success) => {
        this.spinner.hide('loader');
        this.title = 'LAUNCHING LAYOUT BUILDER';

        if (success) {
          this.dialogRef.close(rowInfo);
        } else {
          this.dialogRef.close('0');
        }
      },
      Globals.storeInfo.uid
    );
  }

  drop(event: any, isImage = false) {
    if (isImage) {
      moveItemInArray(this.images, event.previousIndex, event.currentIndex);
      return;
    }
    let arr = this.layoutForm.controls.rows.value;
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
    this.layoutForm.controls.rows.setValue(arr);
  }

  formatPrice(price: number, short = false, order?: Order) {
    var priceAsString = new String(
      Number(
        (price * (Globals.selectedCurrency?.rate ?? 1)).toFixed(2)
      ).toLocaleString('en')
    );
    if (!short) {
      priceAsString = new String(
        Number((price * (Globals.selectedCurrency?.rate ?? 1)).toFixed(2))
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
      this.getCurrencyForCountry(
        Globals.selectedCurrency?.name != 'US',
        Globals.selectedCurrency
      ) + priceAsString
    );
  }

  autoCoupon(product: Product) {
    var autoCoupon = this.storeInfo()
      .coupons?.filter((coupon) => {
        return coupon.products.includes(product.productID) && coupon.auto;
      })
      .sort(function (a, b) {
        if (a.amt < b.amt) {
          return 1;
        }
        if (a.amt > b.amt) {
          return -1;
        }
        return 0;
      })[0];
    return autoCoupon;
  }

  mainPrice(product: Product) {
    let coupon = this.autoCoupon(product);
    if (coupon) {
      if (coupon.style == 0) {
        return (
          (product.price ?? 0) / 100 - ((product.price ?? 0) / 100) * coupon.amt
        );
      } else if (coupon.style == 1) {
        return (product.price ?? 0) / 100 - (coupon.amt ?? 0) * 100;
      }
    }
    return (product.price ?? 0) / 100;
  }

  getCurrencyForCountry(shouldShowName: boolean, country?: Country) {
    var returnItem = country?.currency_symbol ?? '$';
    if (shouldShowName) returnItem = (country?.name ?? '') + ' ' + returnItem;

    return returnItem;
  }

  fontSize(row: Row) {
    if (this.rootComponent?.isMobile() || (row.grid_row ?? 2) >= 2) {
      return 12;
    }
    return (0.5 / (row.grid_row ?? 1)) * 100;
  }

  titleFontSize(row: Row) {
    if (this.rootComponent?.isMobile() || (row.grid_row ?? 1) >= 2) {
      return 12;
    }
    return (0.3 / (row.grid_row ?? 1)) * 100;
  }

  // widthM(){
  //   return (1680 / window.innerWidth) * window.innerWidth

  // }

  // heightM(){
  //   return (939 / window.innerHeight) * window.innerHeight
  // }

  products(smartProducts?: number, products?: Array<string>) {
    if (smartProducts !== undefined) {
      if (smartProducts == 0) {
        return this.newArrivalProducts();
      } else if (smartProducts == 1) {
        return this.featuredProducts();
      }
    }
    var prod = Array<Product>();
    products?.forEach((p) => {
      let pro = this.admin?.storeProducts?.find((pr) => {
        return pr.productID == p;
      });
      if (pro) {
        prod.push(pro);
      }
    });
    return prod;
  }

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

  @ViewChild('carousel', { read: DragScrollComponent })
  ds?: DragScrollComponent;

  moveLeft() {
    this.ds!.moveLeft();
  }

  moveRight() {
    if (this.ds?.currIndex == (this.storeInfo().banners?.length ?? 0) - 1) {
      this.ds?.moveTo(0);
    } else {
      this.ds?.moveRight();
    }
  }

  didMove() {
    // this.selectedColor = this.selectedTemplate?.colors[this.ds?.currIndex ?? 0]
  }

  interval: any;

  setInterval() {
    if (this.interval) {
      return;
    }
    if (Globals.storeInfo.bannerStyle == 0) {
      this.interval = setInterval(() => {
        this.moveRight();
      }, 3000);
    } else {
      this.initScroll();
    }
  }

  initScroll() {
    this.interval = 0;
    let outer = document.querySelector('#outer') as HTMLElement;

    if (outer) {
      let content = outer.querySelector('#content') as HTMLElement;

      this.repeatContent(content, outer.offsetWidth);

      let el = outer.querySelector('#loop');
      if (el) {
        el.innerHTML = el.innerHTML + el.innerHTML;
      }
    }
  }

  repeatContent(el: HTMLElement, till: number) {
    let html = el.innerHTML;
    let counter = 0; // prevents infinite loop

    while (el.offsetWidth < till && counter < 100) {
      el.innerHTML += html;
      counter += 1;
    }
  }

  arrLength() {
    if (this.storeInfo().banners.length == 0) {
      return [];
    }

    return Array(12 / this.storeInfo().banners.length).fill(0);
  }

  bannerTheme(banner?: Banner) {
    if (!banner) {
      banner = this.storeInfo().banners[this.ds?.currIndex ?? 0];
    }

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

  newArrivalProducts() {
    return this.admin?.storeProducts
      ?.sort(function (a, b) {
        if (a.timestamp > b.timestamp) {
          return -1;
        }
        if (a.timestamp < b.timestamp) {
          return 1;
        }
        return 0;
      })
      .slice(0, 4);
  }

  featuredProducts() {
    return this.admin?.storeProducts
      ?.sort(function (a, b) {
        if (a.likes > b.likes) {
          return -1;
        }
        if (a.likes < b.likes) {
          return 1;
        }
        return 0;
      })
      .slice(0, 4);
  }
}
