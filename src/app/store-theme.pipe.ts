import { Pipe, PipeTransform } from '@angular/core';
import { Globals } from './globals';
import { Store } from './models/store.model';
import { Dict } from './services/load.service';

@Pipe({
  name: 'storeTheme',
})
export class StoreThemePipe implements PipeTransform {
  transform(_: Store | undefined) {
    let co = Globals.storeInfo?.colorStyle?.btn_color;
    let bco = Globals.storeInfo?.colorStyle?.bg_color;
    let name = Globals.storeInfo?.colorStyle?.name;

    if (co && bco && name) {
      let color =
        'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

      let bg_color =
        'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

      var theme: Dict<string> = {
        name: name,
        color: color,
        bg_color: bg_color,
      };
      return theme;
    }

    return undefined;
  }
}
