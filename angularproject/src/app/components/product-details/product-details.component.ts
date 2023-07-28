import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  // product: Product = { id: 1, name: 'Acer Nitro 5', description: 'Gaming laptop', unitPrice: 75000, imageUrl: '../../../assets/laptop.jpeg', unitsInStock: 10, ratings: 5}
  product: Product = { id: 0, name: '', description: '', unitPrice: 0, imageUrl: '', unitsInStock: 0, ratings: 0};

  constructor(private productService: ProductService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.handleProductDetails();
  }

  handleProductDetails() {
    // fetch product details using service
    const productId = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProductById(productId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

}