import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Row } from './models/row.model';

@Pipe({name: 'safeHtml'})
export class safeHtmlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: Row, format = false) {
    let replaced = value.html ?? '';

    if (format) {
      replaced = replaced
        .replace(/size=/g, '')
        .replace(/<font >/g, '')
        .replace(
          /style="/g,
          'style="word-wrap:break-word; word-break: break-all; text-overflow: ellipsis; margin-right: 5px; '
        );
    }
    return this.sanitizer.bypassSecurityTrustHtml(replaced);
  }
}