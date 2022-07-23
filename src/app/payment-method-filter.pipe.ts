import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentMethodFilter'
})
export class PaymentMethodFilterPipe implements PipeTransform {

  transform(value: any[]): any[] {

    return value.filter(v => {
      return (v.name.toLowerCase() == 'stripe') || (v.name.toLowerCase() == 'test payment provider')
    }).reverse()

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
