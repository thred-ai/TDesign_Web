import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storeTheme'
})
export class StoreThemePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
