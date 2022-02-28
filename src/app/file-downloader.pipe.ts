import { Pipe, PipeTransform } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Pipe({
  name: 'fileDownloader'
})
export class FileDownloaderPipe implements PipeTransform {

  transform(value: string): Promise<AxiosResponse<any>> {
    let s = axios.get(value, { responseType: 'arraybuffer' })
    console.log(s)
    return s
  }

}
