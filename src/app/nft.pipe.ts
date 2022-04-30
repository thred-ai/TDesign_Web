import { Pipe, PipeTransform } from '@angular/core';
import { Dict } from './services/load.service';

@Pipe({
  name: 'nft',
  pure: false
})
export class NftPipe implements PipeTransform {

  transform(value?: Dict<any>): Array<any> {
    return Object.values(value ?? {});
  }

}
