import { Pipe, PipeTransform } from '@angular/core';
import { Row } from './models/row.model';
import { Product } from './models/product.model';
import { Dict } from './services/load.service';
import { NFT } from './models/nft.model';
import { Collection } from './models/collection.model';

@Pipe({
  name: 'productsPipe'
})
export class ProductsPipePipe implements PipeTransform {

  transform(_: Array<any>, data: Dict<any> = {}): Array<NFT> {


    var prods = new Array<NFT>()

    data.products.forEach((i: Collection) => {
      i.NFTs.forEach((j: any) => {
        prods = prods.concat(j)
      })
    })

    if (data.row.smart_products !== undefined) {
      if (data.row.smart_products == 0) {
        return this.newArrivalProducts(prods);
      } else if (data.row.smart_products == 1) {
        return this.featuredProducts(prods);
      }
      else if (data.row.smart_products == 2) {
        return this.allProducts(prods);
      }
    }
    var prod = Array<NFT>();
    data.row.products?.forEach((p: string) => {
      let pro = prods?.find((pr: NFT) => {
        return pr.docID == p;
      });
      if (pro) {
        prod.push(pro);
      }
    });
    return prod;
  }

  newArrivalProducts(products: Array<NFT>) {
    return products
      ?.sort(function (a, b) {
        // if (a.timestamp > b.timestamp) {
        //   return -1;
        // }
        // if (a.timestamp < b.timestamp) {
        //   return 1;
        // }
        return 1;
      })
      .slice(0, 4);
  }

  featuredProducts(products: Array<NFT>) {
    return products
      ?.sort(function (a, b) {
        // if (a.likes > b.likes) {
        //   return -1;
        // }
        // if (a.likes < b.likes) {
        //   return 1;
        // }
        return 1;
      })
      .slice(0, 4);
  }

  allProducts(products: Array<NFT>) {
    return products
  }
}
