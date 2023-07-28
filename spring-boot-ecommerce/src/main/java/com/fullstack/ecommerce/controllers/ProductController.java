package com.fullstack.ecommerce.controllers;

import com.fullstack.ecommerce.entity.Product;
import com.fullstack.ecommerce.repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("http://localhost:4200")
public class ProductController {
    private ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping
    public List<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable("id") Long id) {
        return productRepository.findById(id);
    }

    @GetMapping("/category/{id}")
    public List<Product> getProductsByCategoryId(@PathVariable("id") Long id) {
        return productRepository.findByCategoryId(id);
    }

    @GetMapping("/search")
    public List<Product> searchProductsByName(@RequestParam("name") String name) {
        return productRepository.findByNameContaining(name);
    }
}
