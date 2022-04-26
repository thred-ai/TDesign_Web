import { Pipe, PipeTransform } from '@angular/core';
import { LoadService } from './services/load.service';
@Pipe({
  name: 'loggedIn'
})
export class LoggedInPipe implements PipeTransform {

  transform(value: string): unknown {
    return ;
  }

}
