package com.fullstack.ecommerce.services;

import com.fullstack.ecommerce.dto.Purchase;
import com.fullstack.ecommerce.entity.Address;
import com.fullstack.ecommerce.entity.Customer;
import com.fullstack.ecommerce.entity.Order;
import com.fullstack.ecommerce.entity.OrderItem;
import com.fullstack.ecommerce.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService{

    private CustomerRepository customerRepository;

    @Autowired
    public CheckoutServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public String placeOrder(Purchase purchase) {
        Order order = purchase.getOrder();

        String trackingNumber = getTrackingNumber();
        order.setTrackingNumber(trackingNumber);

        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(orderItem -> order.add(orderItem));

        Address shippingAddress = purchase.getShippingAddress();
        order.setShippingAddress(shippingAddress);

        Customer customer = purchase.getCustomer();
        customer.add(order);
        customerRepository.save(customer);

        return trackingNumber;
    }

    private String getTrackingNumber() {
        String trackingNumber = UUID.randomUUID().toString();
        return trackingNumber;
    }
}
