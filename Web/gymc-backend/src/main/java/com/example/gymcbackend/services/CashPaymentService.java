package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.ExerciseTableData;
import com.example.gymcbackend.dto.PaymentInfo;
import com.example.gymcbackend.dto.TraineeInfo;
import com.example.gymcbackend.entities.Payment;
import com.example.gymcbackend.repository.cashPaymentDao.CashPaymentJdbcRepository;
import com.example.gymcbackend.repository.cashPaymentDao.CashPaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CashPaymentService {
    @Autowired
    CashPaymentJdbcRepository cashPaymentJdbcRepository;

    @Autowired
    CashPaymentRepository cashPaymentRepository;

    public String cashPayment(Payment payment){

        Payment newPayment = new Payment();


        newPayment.setDate(payment.getDate());
        newPayment.setAmount(payment.getAmount());
        newPayment.setTrainee(payment.getTrainee());
        newPayment.setType("Cash");

        cashPaymentRepository.save(newPayment);
        return "payment Added";
    }

    public PaymentInfo getAllPayments(long trainee_ID) {

        System.out.println("awaservice");
        //does this work?
//        PaymentInfo payment = cashPaymentJdbcRepository.getPaymentById(trainee_ID);

//        System.out.println(trainee_ID);
        return cashPaymentJdbcRepository.getPaymentById(trainee_ID);

    }


    //public List<PaymentInfo> getPlanInfo(){return cashPaymentJdbcRepository.getPlanInfo();}


}
