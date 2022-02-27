import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classCheck'
})
export class ClassCheckPipe implements PipeTransform {

  transform(value: string, c: string) {
    return this.hasClass(value, c);
  }

  hasClass(id: string, c: string){
    let el = document.getElementById(id)
    return el?.classList.contains(c) ?? false
  }

}
