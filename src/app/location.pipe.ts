import { Pipe, PipeTransform } from '@angular/core';
import { Dict } from './services/load.service';

@Pipe({
  name: 'location',
})
export class LocationPipe implements PipeTransform {
  transform(value?: Dict<any>[], filterVal?: string, filterVal2?: string) {
    var x = value ?? [];

    if (filterVal) {
      x = value?.filter((v) => v.type == filterVal) ?? [];
    }

    let r =
      x.map((v) => ({
        id: `${v.type}${v.address.city}, ${v.address.country}`,
        name: `${v.address.city}, ${v.address.country}`,
        type: v.type,
        coords: v.coords,
      })) ?? [];

    var l: Dict<{
      name: string;
      views: number;
      sales: number;
      coords: any;
      count: number
    }> = {};

    r.forEach((k) => {
      let v = l[`${k.name}`];
      let name = k.name;
      let type = k.type;
      let views = 0;
      let sales = 0;
      let count = 0

      if (v) {
        if (type == 'VIEW') {
          views = v.views + 1;
          sales = v.sales;
        } else if (type == 'SALE') {
          sales = v.sales + 1;
          views = v.views;
        }
      } else {
        if (type == 'VIEW') {
          views = 1;
        } else if (type == 'SALE') {
          sales = 1;
        }
      }
      count = views + (sales*2)
      l[`${k.name}`] = {
        name,
        views,
        sales,
        coords: k.coords,
        count
      };
    });

    if (Object.keys(l).length > 0) {
      let most = Object.values(l).sort((a, b) =>
        a.count > b.count ? -1 : 1
      );
      console.log(most);

      return most;
    }
    return [];
  }
}
