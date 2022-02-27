import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from './models/collection.model';

@Pipe({
  name: 'collectionFilter'
})
export class CollectionFilterPipe implements PipeTransform {

  transform(value: Array<Collection>, filter: string): Array<Collection> {
    if (filter == 'timestamp-asc') {
      return value.sort(function (a, b) {
        if ((a.timestamp ?? 0) > (b.timestamp ?? 0)) {
          return 1;
        }
        if ((a.timestamp ?? 0) < (b.timestamp ?? 0)) {
          return -1;
        }
        return 0;
      });
    } else if (filter == 'timestamp-desc') {
      return value.sort(function (a, b) {
        if ((a.timestamp ?? 0) < (b.timestamp ?? 0)) {
          return 1;
        }
        if ((a.timestamp ?? 0) > (b.timestamp ?? 0)) {
          return -1;
        }
        return 0;
      });
    }
    return [];
  }

}
