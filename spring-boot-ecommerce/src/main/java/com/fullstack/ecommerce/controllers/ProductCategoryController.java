package com.fullstack.ecommerce.controllers;

import com.fullstack.ecommerce.entity.ProductCategory;
import com.fullstack.ecommerce.repository.ProductCategoryRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/product-category")
@CrossOrigin("http://localhost:4200")
public class ProductCategoryController {
    private ProductCategoryRepository productCategoryRepository;
    public ProductCategoryController(ProductCategoryRepository productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }

    @GetMapping
    public List<ProductCategory> getAllProductCategories() {
        return productCategoryRepository.findAll();
    }
}
