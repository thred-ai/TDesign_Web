import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './models/order.model';
import { Dict } from './services/load.service';
import { Globals } from './globals';
import { Country } from './models/shipping-country.model';

@Pipe({
  name: 'liveEarthPipe'
})
export class LiveEarthPipePipe implements PipeTransform {

  transform(value: string, orders: Array<Order>) {
    var sameOrders = new Array<{
      sales: number
      value: number,
      city: string,
      country: string,
      coords: Dict<number>,
    }>()

    var mystr = ''

    orders.forEach(o => {
      
      var total = 0
      o.products.forEach(p => {
        total += ((p.product?.price ?? 0) / 100) + o.totalCost 
      })
      if (sameOrders.find(s => ((s.country == o.address?.country && s.city == o.address.city) || (s.coords.LONGITUDE == o.address?.coords?.LONGITUDE && s.coords.LATITUDE == o.address?.coords?.LATITUDE)))){
        let index = sameOrders.findIndex(s => ((s.country == o.address?.country && s.city == o.address.city) || (s.coords.LONGITUDE == o.address?.coords?.LONGITUDE && s.coords.LATITUDE == o.address?.coords?.LATITUDE)))
        if (index){
          sameOrders[index].sales += o.products.length ?? 0
          sameOrders[index].value += total
        }
      }
      else{
        sameOrders.push({sales: o.products?.length ?? 0, value: total, city: o.address?.city ?? '', country: o.address?.country ?? '', coords: o.address?.coords ?? {}})
      }
    })

    sameOrders.forEach(i => {
      mystr += "this.addOverlay( {content: '" + i.sales + " Sales • " + this.formatPrice(i.value) + "',location : {lat: " + (i.coords.LATITUDE ?? '34.052235') + ", lng: " + (i.coords.LONGITUDE ?? '-118.243683') + "},depthScale: 0.25,className : 'arrow-tip'});"
    })


    return value.replace('xxxxxx;',  mystr != '' ? mystr : ";")
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

orderCurrency(order?: Order){
  if (order == undefined){
    return undefined
  }
  return new Country(order?.currency.toUpperCase().slice(0, (order?.currency.length ?? 0) - 1), undefined, undefined, order?.currency, order?.currencySymbol, 1, true, 0)
}

}
