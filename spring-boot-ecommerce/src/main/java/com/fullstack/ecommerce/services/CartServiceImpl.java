package com.fullstack.ecommerce.services;

import com.fullstack.ecommerce.entity.CartItem;
import com.fullstack.ecommerce.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService{
    private final CartRepository cartRepository;
    @Autowired
    public CartServiceImpl(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }
    @Override
    public CartItem addToCart(CartItem cartItem) {
        return cartRepository.save(cartItem);
    }

    @Override
    public List<CartItem> getAllCartItems() {
        return cartRepository.findAll();
    }

//    @Override
//    public CartItem getCartItemById(Long id) {
//        return cartRepository.findById(id).orElse(null);
//    }

    @Override
    public void updateCartItem(CartItem cartItem) {
        CartItem existingCartItem = cartRepository.findById(cartItem.getId()).orElse(null);
        existingCartItem.setQuantity(cartItem.getQuantity()+1);
        cartRepository.save(existingCartItem);
    }

    @Override
    public void deleteCartItem(Long id) {
        cartRepository.deleteById(id);
    }

    @Override
    public void decreaseCartItem(CartItem cartItem) {
        CartItem existingCartItem = cartRepository.findById(cartItem.getId()).orElse(null);
        if(existingCartItem.getQuantity()>1){
            existingCartItem.setQuantity(cartItem.getQuantity()-1);
            cartRepository.save(existingCartItem);
        }
        else
            deleteCartItem(cartItem.getId());
    }
}
