import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-collection',
  templateUrl: './payment-collection.component.html',
  styleUrls: ['./payment-collection.component.css'],
})
export class PaymentCollectionComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  @ViewChild('ccNumber') ccNumberField?: ElementRef;
  @ViewChild('ccExpiry') ccExpiryField?: ElementRef;

  paymentForm = this.fb.group({
    cardNumber: [
      '',
      [
        Validators.required,
        Validators.minLength(17),
        Validators.pattern('^[ 0-9]*$'),
      ],
    ],
    cvc: [
      null,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[ 0-9]*$'),
      ],
    ],
    expiryDate: [null, [Validators.required, Validators.minLength(1)]],
    cardholder: [null, [Validators.required, Validators.minLength(1)]],
  });

  @Output() continue = new EventEmitter<any>();

  save() {
    if (this.paymentForm.valid) {
      let date = this.paymentForm.controls.expiryDate.value;

      let split = date.split('/') as string[];

      let month = Number(split[0]);
      let year = Number(split[1]);
      let numVal = (this.paymentForm.controls.cardNumber.value as string) ?? '';
      let number = numVal.split(' ').join('');

      let cvc = ((this.paymentForm.controls.cvc.value as string) ?? '').trim();
      let name = (
        (this.paymentForm.controls.cardholder.value as string) ?? ''
      ).trim();
      let data = {
        type: 'card',
        cardholder_name: name,
        number: number,
        expiry_month: month,
        expiry_year: year,
        verification_value: cvc,
        issue_month: 0,
        issue_year: 0,
        issue_number: 0,
      };
      this.continue.emit(data);
    } else {
      console.log('not valid payment');
    }
  }

  creditCardNumberSpacing() {
    const input = this.ccNumberField?.nativeElement;
    console.log(input);
    const { selectionStart } = input;
    const { cardNumber } = this.paymentForm.controls;

    let trimmedCardNum = cardNumber.value
      .replace(/\D+/g, '')
      .replace(/\s+/g, '');

    if (trimmedCardNum.length > 16) {
      trimmedCardNum = trimmedCardNum.substr(0, 16);
    }

    /* Handle American Express 4-6-5 spacing */
    const partitions =
      trimmedCardNum.startsWith('34') || trimmedCardNum.startsWith('37')
        ? [4, 6, 5]
        : [4, 4, 4, 4];

    const numbers: any[] = [];
    let position = 0;
    partitions.forEach((partition) => {
      const part = trimmedCardNum.substr(position, partition);
      if (part) numbers.push(part);
      position += partition;
    });

    cardNumber.setValue(numbers.join(' '));

    /* Handle caret position if user edits the number later */
    if (selectionStart < cardNumber.value.length - 1) {
      input.setSelectionRange(selectionStart, selectionStart, 'none');
    }
  }

  creditCardExpiryFormat() {
    const input = this.ccExpiryField?.nativeElement;
    console.log(input);
    const { selectionStart } = input;
    const expiryDate = this.paymentForm.controls.expiryDate;

    let trimmedCardNum = expiryDate.value
      .replace(/\D+/g, '')
      .replace(/\s+/g, '');

    if (trimmedCardNum.length > 6) {
      trimmedCardNum = trimmedCardNum.substr(0, 6);
    }

    const partitions = [2, 4];

    const numbers: any[] = [];
    let position = 0;
    partitions.forEach((partition) => {
      const part = trimmedCardNum.substr(position, partition);
      if (part) numbers.push(part);
      position += partition;
    });

    console.log(numbers);
    expiryDate.setValue(numbers.join('/'));

    /* Handle caret position if user edits the number later */
    if (selectionStart < expiryDate.value.length - 1) {
      input.setSelectionRange(selectionStart, selectionStart, 'none');
    }
  }

  ngOnInit(): void {}
}
