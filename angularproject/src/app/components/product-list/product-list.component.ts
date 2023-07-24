import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  searchMode: boolean = false;
  searchText: string = '';

  tempProducts: Product[] = [
    { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5},
    { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5},
    { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5},
    { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5},
    { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5},
    { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5},
    { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5},
    { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5},
    { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5},
  ]

  constructor() {  }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    if(this.searchMode) {
      this.handleSearchProducts();
    }
    else {
      this.handleListProducts();
    }
  }

  handleListProducts() {
    // get all products
  }

  handleSearchProducts() {
    // get searched products
  }

}
