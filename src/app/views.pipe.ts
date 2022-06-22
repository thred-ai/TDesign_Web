import { Pipe, PipeTransform } from '@angular/core';
import { Dict } from './services/load.service';

@Pipe({
  name: 'views'
})
export class ViewsPipe implements PipeTransform {

  transform(value?: Dict<any>[]) {
    return value?.filter(v => v.type == 'VIEW') ?? []
  }

}
