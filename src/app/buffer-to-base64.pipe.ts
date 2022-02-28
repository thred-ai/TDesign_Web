import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bufferToBase64'
})
export class BufferToBase64Pipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return ''
    let format = value.headers['content-type']
    const buffer = Buffer.from(value.data);
    let s = `data:${format};base64,${buffer.toString('base64')}`;
    return s
  }

}
