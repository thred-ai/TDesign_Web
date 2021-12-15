import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Coupon } from '../models/coupon.model';
import { Product } from '../models/product.model';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Globals } from '../globals';
import { CurrencyMaskInputMode } from 'ngx-currency';

@Component({
  selector: 'app-coupon-info',
  templateUrl: './coupon-info.component.html',
  styleUrls: ['./coupon-info.component.css']
})
export class CouponInfoComponent implements OnInit {

  coupons: Array<Coupon> = []

  customCurrencyMaskConfig = {
    align: "left",
    allowNegative: false,
    allowZero: true,
    decimal: ".",
    precision: 2,
    prefix: "$ ",
    suffix: "",
    thousands: ",",
    min: 0,
    inputMode: CurrencyMaskInputMode.NATURAL
  };

  isGlobal = false


  types(){
    return Globals.types
  }

  matchingType(id: string){
    return Globals.types.find(type => { return type.id == id})
  }

  storeInfo(){
    return Globals.storeInfo
  }

  parsedProducts(){
    var returnProducts = new Array<string>()
    this.allProducts.forEach(product => {
      returnProducts.push(product.productID)
    })
    return returnProducts
  }
  

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  productCtrl = new FormControl();
  typeCtrl = new FormControl();
  thresholdCtrl = new FormControl();
  discountStyle = new FormControl();

  filteredProducts: Observable<Product[]>;
  products: string[] = [];
  allProducts: Product[] = [];
  type = 'products'

  @ViewChild('productInput') productInput?: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CouponInfoComponent>
  ) {
    this.allProducts = data.products
    this.coupons = data.coupons
    this.editCoupon = data.editCoupon


    this.filteredProducts = this.productCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allProducts.slice())),
    );
  }

  couponForm = this.fb.group({
    name: [null],
    price: [null],
  });

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();


    if (value) {
      this.products.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.productCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.products.indexOf(fruit);

    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }

  productName(id: string){
    if (id == 'ALL'){
      return 'ALL PRODUCTS'
    }
    return this.allProducts.find(product => { return product.productID == id})?.name
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (event.option.value == 'ALL'){
      this.products = []
    }
    this.products.push(event.option.value);

    this.productInput!.nativeElement.value = '';

    this.productCtrl.setValue(null);
  }

  private _filter(value: string): Product[] {
    const filterValue = value.toLowerCase();

    return this.allProducts.filter(product => product.name.toLowerCase().includes(filterValue));
  }

  name = ''
  mode?: number
  editCoupon?: Coupon

  ngOnInit(): void {
    // console.log(this.linkImg)
    this.mode = this.editCoupon ? 1 : 0
    this.name = (this.mode == 0) ? 'NEW COUPON' : 'EDIT COUPON'
    this.discountStyle.setValue(this.editCoupon?.style ?? 0)

    if (this.editCoupon){
      this.couponForm.controls.name.setValue(this.editCoupon.code)
      this.couponForm.controls.price.setValue(this.editCoupon.amt * 100)
      this.typeCtrl.setValue(this.editCoupon.type)
      this.isGlobal = this.editCoupon.auto

      this.thresholdCtrl.setValue(this.editCoupon.threshold)


      if (this.editCoupon.products.sort().toString() == this.parsedProducts().sort().toString()){
        this.products = ['ALL']
      }
      else{
        this.products = this.editCoupon.products
      }

    }
    else{
      this.typeCtrl.setValue(Globals.types[0].id)
      this.products = ['ALL']
    }
  }

  allSelected(){
    return this.products.includes('ALL')
  }


  close(){
    this.dialogRef.close('0')
  }

  discountIcon(){
    if (this.discountStyle.value == 1){
      return 'attach_money'
    }
    return 'percent'
  }

  discountPlaceholder(){
    if (this.discountStyle.value == 1){
      return "Coupon $ (ex: 20)"
    }
    return "Coupon % (ex: 30)"
  }

  changeDiscountStyle(){
    let val = this.discountStyle.value == 0 ? 1 : 0
    this.discountStyle.setValue(val)
  }

  finish(){
    var name = ((this.couponForm.controls.name.value ?? '') as string)?.replace(" ", '').toUpperCase()
    var price = Number(this.couponForm.controls.price.value) ?? 0
    var type = this.typeCtrl.value
    var threshold = this.thresholdCtrl.value
    var style = this.discountStyle.value ?? 0


    if (name == '' || !(price > 0) || price == NaN || (this.coupons.find(c => { return c.code == name}) && this.mode == 0)){
      return
    }

    if (type == 'product'){
      this.products = this.products.filter((el, i, a) => i === a.indexOf(el))
      if (this.allSelected()){
        this.products = this.parsedProducts()
      }
    }
    else{
      this.products = []
    }

    if (price > 95){
      price = 95
    }

    let coupon = new Coupon(name, price / 100, this.products, this.isGlobal, type, threshold, style)

    this.dialogRef.close(coupon)
  }
  

  myInnerHeight(){
    let height = window.innerHeight
    let width = window.innerWidth

    if (width < height){
      return width * 0.98
    }
    else{
      return height * 0.70
    }
  }

}
