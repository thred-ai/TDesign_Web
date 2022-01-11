import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './models/order.model';

@Pipe({
  name: 'liloadedAllProductsPipe'
})
export class LiloadedAllProductsPipePipe implements PipeTransform {

  transform(value: boolean, orders: Array<Order>) {
    return !(orders.find(o => {return o.products.find(p => (!p.product?.name || p.product?.name == ""))}))
  }

}
