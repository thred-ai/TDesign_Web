import { Pipe, PipeTransform } from '@angular/core';
import { Globals } from './globals';
import { Dict } from './services/load.service';
interface IGlobals {
  new (): Globals;
}

@Pipe({
  name: 'store'
})
export class StorePipe implements PipeTransform {

  transform(value: any) {
    return Globals.storeInfo;
  }

}
