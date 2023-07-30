import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit{
  products= [
      { id: 1, quantity:1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../assets/images/products/laptops/acer-nitro-5.png', unitsInStock: 10, rating: 5},
      { id: 2, quantity:1, name: 'Acer Predator', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../assets/images/products/laptops/acer-predator.png', unitsInStock: 10, rating: 5},
      { id: 3, quantity:1, name: 'Asus TUF F15', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../assets/images/products/laptops/asus-tuf.png', unitsInStock: 10, rating: 5},
      { id: 4, quantity:1, name: 'Dell G15', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../assets/images/products/laptops/dell-g15.png', unitsInStock: 10, rating: 5},
    ]
    TotalQty:number=0;
    ngOnInit(){
        for(const product of this.products){
          this.TotalQty+=(product.quantity*product.unitPrice);
        }
    }
    add(quantity:number,price:number){
      this.TotalQty+=price;
      return ++quantity;
    }
    subtract(quantity:number,price:number){
      if(quantity>1){
        this.TotalQty-=price;
        return --quantity;
      }
      else 
      return quantity;
    }
}
