import { Component, OnInit, Inject } from '@angular/core';
import { Order } from '../models/order.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Country } from '../models/shipping-country.model';
import { Globals } from '../globals';

@Component({
  selector: 'app-view-all-order-admin',
  templateUrl: './view-all-order-admin.component.html',
  styleUrls: ['./view-all-order-admin.component.css']
})
export class ViewAllOrderAdminComponent implements OnInit {

  orders?: Array<Order> = []
  displayedColumns: string[] = ['name', 'value', 'timestamp', 'status', 'action'];

    matchingElem(order: Order){
      if (order.status == 'confirmed' || order.status == 'completed'){
        return {
          color: 'info',
          icon: 'credit_card',
          text: 'CONFIRMED'
        }
      }
      return {
        color: 'success',
        icon: 'local_shipping',
        text: 'SHIPPED'
      }
    }

    close(){
      this.dialogRef.close()
    }

    viewOrder(order: Order){
      this.dialogRef.close(order)
    }

    orderTotal(order: Order){
      return this.numberWithCommas(this.formatPrice(this.total(order), false, order))
    }

    orderSlice(){
      return this.orders?.slice(0,5) ?? []
    }

    orderCurrency(order?: Order){
      if (order == undefined){
        return undefined
      }
      return new Country(order?.currency.toUpperCase().slice(0, (order?.currency.length ?? 0) - 1), undefined, undefined, order?.currency, order?.currencySymbol, 1, true, 0)
    }

    formatPrice(price: number, short = false, order?: Order){
      var priceAsString = new String(Number((price * (this.orderCurrency(order)?.rate ?? (Globals.selectedCurrency?.rate ?? 1))).toFixed(2)).toLocaleString('en'))
      if (!short){
        priceAsString = new String(Number((price * (this.orderCurrency(order)?.rate ?? (Globals.selectedCurrency?.rate ?? 1))).toFixed(2)))
      }
      let index = priceAsString.indexOf(".")
      
      switch (index){
        case priceAsString.length - 1:
            priceAsString += "00"
            break
        case -1:
            priceAsString += ".00"
            break
        case priceAsString.length - 2:
            priceAsString += "0"
            break
        default:
            break
      }
      return this.getCurrencyForCountry((this.orderCurrency(order)?.name ?? Globals.selectedCurrency?.name) != "US", this.orderCurrency(order) ?? Globals.selectedCurrency) + priceAsString
  }
    
  getCurrencyForCountry(shouldShowName: boolean, country?: Country){
  
    var returnItem = country?.currency_symbol ?? "$"
    if (shouldShowName) returnItem = (country?.name ?? '') + " " + returnItem
  
    return returnItem
  }

    orderCount(){
      return this.orders?.filter(o => o.status == 'confirmed').length ?? 0
    }
  
    total(order: Order){
      var total = 0
      
      order.products.forEach(product => {
        total += (product.product?.price ?? 0) * (product.quantity ?? 1)
      })
      return total / 100
    }

    numberWithCommas(x: string) {
      return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewAllOrderAdminComponent>
  ) {
    this.orders = data.orders ?? []
   }

  ngOnInit(): void {
  }

  orderLoaded(){
    return !this.orders?.find(o => o.products?.length == 0)
  }

}

