import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-items';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItem: CartItem[] = [];

  totalPrice: Subject<number> = new Subject<number>;
  totalQuantity: Subject<number> = new Subject<number>;

  constructor() { }

  addToCart(theCartItem: CartItem) {
    // check if we already have item in cart
    let alreadyExistInCart: boolean = false;
    let existingCartItem!: CartItem ;

    if(this.cartItem.length > 0) {
      // find item in cart based on item id
      existingCartItem = this.cartItem.find( item => { return item.id == theCartItem.id } )!;
      
      // check if we found it
      alreadyExistInCart = (existingCartItem != undefined);
    }
    if(alreadyExistInCart) {
      existingCartItem.quantity++;
    }
    else {
      // just add item to the array
      this.cartItem.push(theCartItem);
    }
    // console.log("items "+JSON.stringify(this.cartItem))
    this.computeTotals();
  }

  computeTotals() {
    let totalPrice = 0;
    let totalQuantity = 0;

    for(let currentItem of this.cartItem) {
      totalPrice += currentItem.quantity * currentItem.unitPrice;
      totalQuantity += currentItem.quantity;
    }

    this.totalPrice.next(totalPrice);
    this.totalQuantity.next(totalQuantity);
  }

  decrementQuantity(theCartItem: CartItem) {
    // check if we already have item in cart
    let alreadyExistInCart: boolean = false;
    let existingCartItem!: CartItem ;

    if(this.cartItem.length > 0) {
      // find item in cart based on item id
      existingCartItem = this.cartItem.find( item => { return item.id == theCartItem.id } )!;
      
      // check if we found it
      alreadyExistInCart = (existingCartItem != undefined);
    }
    if(alreadyExistInCart) {
      existingCartItem.quantity--;
    }

    if(existingCartItem.quantity === 0) {
      this.remove(theCartItem);
    }
    else {
      this.computeTotals();
    }
  }

  remove(theCartItem: CartItem) {
    const index = this.cartItem.findIndex(
      item => item.id === theCartItem.id
    )
    if(index >= 0) {
      this.cartItem.splice(index,1);
      this.computeTotals();
    }
  }

  getCartItemQuantity(productId: number) {
    const cartItem = this.cartItem.find( item => item.id === productId);

    if(cartItem != undefined) {
      return cartItem.quantity;
    }
    return 0;
  }
}
