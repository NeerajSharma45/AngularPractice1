package com.fullstack.ecommerce.controllers;
import java.util.logging.Logger;
import ch.qos.logback.core.net.SyslogOutputStream;
import com.fullstack.ecommerce.entity.CartItem;
import com.fullstack.ecommerce.repository.CartRepository;
import com.fullstack.ecommerce.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
public class CartController {
    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping("/api/pushedCartItem")
    public ResponseEntity<CartItem> addToCart(@RequestBody CartItem cartItem) {
        CartItem savedCartItem = cartService.addToCart(cartItem);
        return ResponseEntity.ok(savedCartItem);
    }

    @GetMapping("/api/cart-items")
    public ResponseEntity<List<CartItem>> getAllCartItems() {
        List<CartItem> cartItems = cartService.getAllCartItems();
        return ResponseEntity.ok(cartItems);
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<CartItem> getCartItemById(@PathVariable Long id) {
//        CartItem cartItem = cartService.getCartItemById(id);
//        if (cartItem != null) {
//            return ResponseEntity.ok(cartItem);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

    @PutMapping("/api/updatedCartItem")
    public ResponseEntity<CartItem> updateCartItem(@RequestBody CartItem cartItem) {
        cartService.updateCartItem(cartItem);
        return ResponseEntity.ok(cartItem);
    }
    @PutMapping("/api/decrementCartItem")
    public ResponseEntity<CartItem> decreaseCartItem(@RequestBody CartItem cartItem) {
        cartService.decreaseCartItem(cartItem);
        return ResponseEntity.ok(cartItem);
    }

    @DeleteMapping("/api/deleteCartItem/{id}")
    public void deleteCartItem(@PathVariable Long id) {
        cartService.deleteCartItem(id);
    }
}