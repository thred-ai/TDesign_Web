import { Pipe, PipeTransform } from '@angular/core';
import Axios, { AxiosResponse } from 'axios';
import { setupCache } from 'axios-cache-interceptor';

// same object, but with updated typings.
const axios = setupCache(Axios);


@Pipe({
  name: 'fileDownloader'
})
export class FileDownloaderPipe implements PipeTransform {

  transform(value: string): Promise<AxiosResponse<any>> {
    let s = axios.get(value, { responseType: 'arraybuffer' })
    return s
  }

}
