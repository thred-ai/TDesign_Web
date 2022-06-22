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
      count: number;
      type: string
    }> = {};

    r.forEach((k) => {
      let v = l[`${k.id}`];

      let name = k.name;
      let type = k.type;
      let count = 0;

      if (v) {
        count = v.count + 1;
      } else {
        count = 1;
      }
      l[`${k.id}`] = {
        name,
        count,
        type
      };
    });

    if (Object.keys(l).length > 0) {
      let most = Object.keys(l).reduce((a, b) =>
        l[a].count > l[b].count ? a : b
      );
      
      if (filterVal2 && l[`${most}`].type != filterVal2){
        return []
      }

      let d = r.filter((f) => f.name == l[`${most}`].name);
      
      return d
      
    }
    return [];
  }
}
