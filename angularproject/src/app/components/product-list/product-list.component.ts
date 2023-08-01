import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-items';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  currentCategoryId: number = 1;
  // previousCategoryId: number = 1;
  searchMode: boolean = false;
  responseMessage: string = '';

  // thePageNumber: number = 1;
  // thePageSize: number = 5;
  // theTotalElements: number = 0;

  // tempProducts: Product[] = [
  //   { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5},
  //   { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5},
  //   { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5},
  //   { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, rating: 5},
  // ]

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=> {
      this.listProducts();
    })
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    // console.log(this.searchMode);

    if(this.searchMode) {
      this.handleSearchProducts();
    }
    else {
      this.handleListProducts();
    }
  }

  handleListProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId) {
      // get id param string and convert it to a number using + symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else {
      // no category available... default to categoryId 1
      this.currentCategoryId = 1;
    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    this.productService.searchProductByName(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  addToCart(product: Product){
    let theCartItem = new CartItem(product);
    this.cartService.addToCart(theCartItem).subscribe();
  }
}
