import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPipe'
})
export class StringPipePipe implements PipeTransform {

  transform(input: any): string{ //string type
    return input.toString() ?? undefined
  }

}
