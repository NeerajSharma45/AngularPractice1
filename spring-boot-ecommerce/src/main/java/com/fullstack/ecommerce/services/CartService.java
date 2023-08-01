package com.fullstack.ecommerce.services;

import com.fullstack.ecommerce.entity.CartItem;

import java.util.List;

public interface CartService {
    CartItem addToCart(CartItem cartItem);
    List<CartItem> getAllCartItems();
//    CartItem getCartItemById(Long id);
    void updateCartItem(CartItem cartItem);
    void deleteCartItem(Long id);

    void decreaseCartItem(CartItem cartItem);
}
