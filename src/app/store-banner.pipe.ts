import { Pipe, PipeTransform } from '@angular/core';
import { Banner } from './models/banner.model';
import { Globals } from './globals';
import { Dict } from './services/load.service';

@Pipe({
  name: 'storeBanner'
})
export class StoreBannerPipe implements PipeTransform {

  transform(banner: Banner, index: number): Dict<any> {
    if (!banner) {
      banner = Globals.storeInfo.banners[index];
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

}
