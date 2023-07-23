import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../models/product-category';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit{

  productCategories: ProductCategory[] = [
    {id: 1, categoryName: "Men's Fashion"},
    {id: 2, categoryName: "Women's Fashion"},
    {id: 3, categoryName: "Mobiles"},
    {id: 4, categoryName: "Laptops"}
  ];

  constructor() {  }

  ngOnInit(): void {
    this.listProductCategories();
  }

  listProductCategories() {
    // fetch product categories using service from backend
  }
}
