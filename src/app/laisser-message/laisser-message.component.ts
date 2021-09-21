import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-laisser-message',
  templateUrl: './laisser-message.component.html',
  styleUrls: ['./laisser-message.component.css']
})
export class LaisserMessageComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    message: '',
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
