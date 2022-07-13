import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utilityInfo',
})
export class UtilityInfoPipe implements PipeTransform {
  transform(value: any[], shorten = false): string {
    let util = value
    .map((v) =>
      shorten ? v.name
        .split(' ')
        .map((x: string) => x[0])
        .join('') : v.name
    )
    .join(', ')
    return util != '' ? util : shorten ? 'None' : 'No Utilities';
  }
}
