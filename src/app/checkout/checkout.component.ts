import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { PersonalInfo } from '../personal-info';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public personalInfo: PersonalInfo;
  constructor( cartService: CartService) { 
    this.personalInfo = new PersonalInfo();
  }

  ngOnInit() {
  }

}
