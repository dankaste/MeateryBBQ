import { Injectable } from '@angular/core';
import { Meal } from '../meal';
import { ICartItem } from '../cart-item';

@Injectable()
export class CartService {

  private cartItems: ICartItem[] = [];

  constructor() { }

  addItem( item: ICartItem ) {
    this.cartItems.push( item );
  }

  removeItem( item: ICartItem ) {
    const index = this.cartItems.indexOf(item);
    if ( index > -1 ){
      this.cartItems.splice( index, 1 );
    }
  }

  getItems(): ICartItem[] {
    return this.cartItems;
  }
}
