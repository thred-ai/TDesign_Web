import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Row } from './models/row.model';
import { Order } from './models/order.model';

@Pipe({name: 'safeHtml'})
export class safeHtmlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: string) {
      
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}