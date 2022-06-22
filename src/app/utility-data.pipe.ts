import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utilityData'
})
export class UtilityDataPipe implements PipeTransform {

  transform(value: any, utils: any[]): any {
    return utils.find(u => u.code == value.code)
  }

}
