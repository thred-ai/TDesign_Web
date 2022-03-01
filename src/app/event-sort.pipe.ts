import { Pipe, PipeTransform } from '@angular/core';
import { NftLog } from './models/nft-log.model';

@Pipe({
  name: 'eventSort'
})
export class EventSortPipe implements PipeTransform {

  transform(value: Array<NftLog>, sort: string = 'asc') {
    // if (sort == 'asc'){
    //   return value.sort((a, b) =>{
    //     let conditions = [
    //       (a.event == 'mint') && (b.event == 'list'),
    //       (a.event == 'list') && (b.event == 'transfer' || b.event == 'sale')
    //     ]
    //     return (a.timestamp < b.timestamp) || ((a.timestamp == b.timestamp) && conditions.find(l => l == true)) ? -1 : 1
    //   })
    // }
    return []
  }

}
