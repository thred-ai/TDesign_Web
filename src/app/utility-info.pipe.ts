import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utilityInfo'
})
export class UtilityInfoPipe implements PipeTransform {

  transform(value: any[]): unknown {
    return value.map(v => v.name).join(", ");
  }

}
