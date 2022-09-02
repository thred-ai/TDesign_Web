import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentMethodFilter',
})
export class PaymentMethodFilterPipe implements PipeTransform {
  transform(value: any[]): any[] {
    let arr = value ?? [];
    if (!(value.find((v) => v.name.toLowerCase() == 'stripe2'))){
      let index = value.findIndex((v) => v.name.toLowerCase() == 'stripe');
      if (index > -1) {
        let copy = { //
          code: 'stripeupe2',
          name: arr[index].name + '2',
          test_mode: arr[index].test_mode,
        };
        arr.splice(0, 0, copy);
      }//
    }
    return arr
      .filter((v) => {
        return (
          v.name.toLowerCase() == 'stripe' || v.name.toLowerCase() == 'stripe2' || v.code == 'bigpaypay'
        );
      })
      .reverse();

    // this.test_mode = method.test_mode
    // this.code = method.code

    // if (method.name == 'Stripe'){
    //   this.name = 'Credit Card'
    // }
    // else{
    //   this.name = method.name
    // }

    // this.imgOnly = method.code == 'paypalcommerce'
    // this.img = `assets/${method.code}.png`

    // return [];
  }
}
