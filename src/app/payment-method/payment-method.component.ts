import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  constructor() { }

  name?: string
  code?: string
  img?: string
  test_mode?: boolean
  imgOnly = false

  method: any

  @Input() set data(method: any) {
    this.test_mode = method.test_mode
    this.code = method.code
    this.method = method

    if (method.name == 'Stripe'){
      this.name = 'Credit Card'
    }
    else if (method.name == 'Stripe2'){
      this.name = 'Debit Card'
    }
    else{
      this.name = method.name
    }

    this.imgOnly = method.code == 'paypalcommerce'
    this.img = `assets/${method.code}.png`
  }


  @Output() selectMethod = new EventEmitter<any>();

  ngOnInit(): void {
  }

}
