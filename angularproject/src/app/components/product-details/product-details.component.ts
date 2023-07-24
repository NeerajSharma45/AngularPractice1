import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product: Product = { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5}
  
  ngOnInit(): void {
    this.handleProductDetails();
  }

  handleProductDetails() {
    // fetch product details using service
  }

}
