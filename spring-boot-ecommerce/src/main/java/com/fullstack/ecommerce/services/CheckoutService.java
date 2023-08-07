package com.fullstack.ecommerce.services;

import com.fullstack.ecommerce.dto.Purchase;

public interface CheckoutService {

    String placeOrder(Purchase purchase);
}
