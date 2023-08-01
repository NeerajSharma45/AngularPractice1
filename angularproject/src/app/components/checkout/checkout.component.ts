import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.totalPrice.subscribe(
      data => {
        this.totalPrice = data;
        console.log("this.Priceee "+this.totalPrice);
      }
    )
    console.log("this.Priceee "+this.totalPrice);
    this.cartService.totalQuantity.subscribe(
      data => {
        this.totalQuantity = data;
        console.log("this.Quantityy "+this.totalQuantity);
      }
    )
    console.log("this.Quantityy "+this.totalQuantity);
    
  }
}
