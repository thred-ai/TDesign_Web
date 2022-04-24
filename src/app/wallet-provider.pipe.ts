import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'walletProvider'
})
export class WalletProviderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
