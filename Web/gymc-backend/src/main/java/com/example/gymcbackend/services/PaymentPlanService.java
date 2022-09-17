package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.PaymentPlanMethod;
import com.example.gymcbackend.entities.PaymentPlanMethods;
import com.example.gymcbackend.repository.paymentPlanMethod.PaymentPlanMethodJdbcRepository;
import com.example.gymcbackend.repository.paymentPlanMethod.PaymentPlanMethodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentPlanService {

    @Autowired
    PaymentPlanMethodJdbcRepository paymentPlanMethodJdbcRepository;

    @Autowired
    PaymentPlanMethodRepository paymentPlanMethodRepository;

    public List<PaymentPlanMethod> getPaymentPlanMethodDetails() {
        return paymentPlanMethodJdbcRepository.findAllPaymentPlanDetails();
    }

    public String newPaymentPlan(PaymentPlanMethods paymentPlan) {
        PaymentPlanMethods paymentPlan1 = new PaymentPlanMethods();

        paymentPlan1.setType(paymentPlan.getType());
        paymentPlan1.setAmount(paymentPlan.getAmount());
        paymentPlan1.setAffectedDate(paymentPlan.getAffectedDate());
        paymentPlan1.setNextAmount(paymentPlan.getNextAmount());

        paymentPlanMethodRepository.save(paymentPlan1);

        return "Your have successfully added a new payment plan";

    }

    public long changePaymentPlanStatus(String staffUserID, Integer sts) {

        String staffID = staffUserID;
        System.out.println("payservice");

        Long result = Long.parseLong(String.valueOf(staffID));
        System.out.println("payservic2");


        return paymentPlanMethodJdbcRepository.changePaymentPlanDeleteStatus(result);


    }

}
