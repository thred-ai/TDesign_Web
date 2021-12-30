import { Pipe, PipeTransform } from '@angular/core';
import { Row } from './models/row.model';
import { Product } from './models/product.model';
import { Dict } from './services/load.service';

@Pipe({
  name: 'productsPipe'
})
export class ProductsPipePipe implements PipeTransform {

  transform(_: Array<any>, data: Dict<any> = {}): Array<Product> {
    if (data.row.smart_products !== undefined) {
      if (data.row.smart_products == 0) {
        return this.newArrivalProducts(data.products);
      } else if (data.row.smart_products == 1) {
        return this.featuredProducts(data.products);
      }
    }
    var prod = Array<Product>();
    data.row.products?.forEach((p: string) => {
      let pro = data.products?.find((pr: Product) => {
        return pr.productID == p;
      });
      if (pro) {
        prod.push(pro);
      }
    });
    return prod;
  }

  newArrivalProducts(products: Array<Product>) {
    return products
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

  featuredProducts(products: Array<Product>) {
    return products
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
