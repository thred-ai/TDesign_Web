import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order } from '../models/order.model';
import { Country } from '../models/shipping-country.model';
import { Globals } from '../globals';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-view-order-admin',
  templateUrl: './view-order-admin.component.html',
  styleUrls: ['./view-order-admin.component.css']
})
export class ViewOrderAdminComponent implements OnInit {

  order?: Order
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewOrderAdminComponent>
  ) { 
    this.order = data.order
  }

  ngOnInit(): void {

  }

  close(){
    this.dialogRef.close()
  }

  orderCurrency(){
    return new Country(this.order?.currency.toUpperCase().slice(0, (this.order?.currency.length ?? 0) - 1), undefined, undefined, this.order?.currency, this.order?.currencySymbol, 1, true, 0)
  }

  getShippingAddressSecond(){
    var address = this.order?.address?.street
    var unit = this.order?.address?.unit
    if (unit) address += ". " + unit
    return address
  }

  getShippingAddressThird(){
    return this.order?.address?.city + ", " + this.order?.address?.admin_area + ". " + this.order?.address?.postal
  }

  getShippingAddressFourth(){
    return this.order?.address?.email ?? 'No Email Provided'
  }

  getShippingAddressFifth(){
    return this.order?.address?.phone_num ?? 'No Phone Number Provided'
  }

  getShippingAddressFirst(){
    var name = this.order?.address?.name
    var company = this.order?.address?.company
    if (company) name += " - " + company
    return name
  }

  itemCount(){
    var count = 0
    this.order?.products.forEach(product => {
      count += (product.quantity ?? 0)
    });
    return count
  }

  shipping(){
    let shipping = (this.order?.shippingCost ?? 0)
    if (shipping > 0){
      return this.formatPrice(shipping)
    }
    return "FREE"
  }

  total(){
    var total = 0
    
    this.order?.products.forEach(product => {
      total += (product.product?.price ?? 0) * (product.quantity ?? 1)
    })
    return total / 100
  }

  format(d: Date) {
    return Globals.months[d.getMonth()].substring(0,3) + " " + d.getDate() + " " + d.getFullYear()
  }

  routeToProduct(productID: string){
    // this.rootComponent.routeToProduct(productID)
  }

  routeToProducts(){
    // this.rootComponent.routeToShop()
  }

  formatPrice(price: number){
    var priceAsString = new String((price * this.orderCurrency()!.rate).toFixed(2))
    let index = priceAsString.indexOf(".")

    switch (index){
    case priceAsString.length - 1:
        priceAsString += "00"
        break
    case priceAsString.length - 2:
        priceAsString += "0"
        break
    default:

        break
    }
    return this.numberWithCommas(this.getCurrencyForCountry(this.orderCurrency(), this.orderCurrency().name != "US") + priceAsString)
  }

  numberWithCommas(x: string) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  getCurrencyForCountry(country: Country, shouldShowName: boolean){

    var returnItem = country.currency_symbol
    if (shouldShowName) returnItem = country.name + " " + returnItem
  
    return returnItem
  }

  productTax(){
    let tax = this.tax()
    if (tax > 0){
      return this.numberWithCommas(this.formatPrice((tax ?? 0)))
    }
    return "N/A"
  }

  getColor(product?: Product){
    let colors = Globals.templates.find(template => template.productCode == product?.productType)?.colors
    return colors?.find(color => color.code == product?.templateColor)?.display ?? "White"
  }

  trackingLink(){
    var link = ""
    if (this.order?.address?.country === "Canada"){
      link = "https://www.purolator.com/purolator/ship-track/tracking-details.page?pin=" + this.order?.trackingNumber
    }
    else{
      link = "https://chitchats.com/tracking/" + this.order?.trackingNumber
    }
    window.open(link, "_blank");
  }

  orderTotal(){
    return this.numberWithCommas(this.formatPrice(this.total() + this.shippingNum() + this.productTaxNum()))
  }

  productTaxNum(){
    return (this.tax() ?? 0)
  }

  shippingNum(){
    return this.order?.shippingCost ?? 0
  }

  tax(){
    return this.order!.tax
  }

}
