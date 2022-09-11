package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.PaymentPlanMethod;
import com.example.gymcbackend.repository.paymentPlanMethod.PaymentPlanMethodJdbcRepository;
//import com.example.gymcbackend.repository.paymentPlanMethod.PaymentPlanMethodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentPlanService {

    @Autowired
    PaymentPlanMethodJdbcRepository paymentPlanMethodJdbcRepository;

//    @Autowired
//    PaymentPlanMethodRepository paymentPlanMethodRepository;

    public List<PaymentPlanMethod> getPaymentPlanMethodDetails() {
        return paymentPlanMethodJdbcRepository.findAllPaymentPlanDetails();
    }

}
