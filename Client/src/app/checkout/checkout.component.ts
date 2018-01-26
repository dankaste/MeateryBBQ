import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  
  public deliveryInfoFormGroup: FormGroup;
  public paymentInfoFormGroup: FormGroup;


  constructor( cartService: CartService, private formBuilder: FormBuilder) { 
    this.deliveryInfoFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

    this.paymentInfoFormGroup = this.formBuilder.group({
      cardNumber: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

}
