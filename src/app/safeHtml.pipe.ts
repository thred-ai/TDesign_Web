import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class safeHtmlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: string) {
      
    console.log(value)
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}