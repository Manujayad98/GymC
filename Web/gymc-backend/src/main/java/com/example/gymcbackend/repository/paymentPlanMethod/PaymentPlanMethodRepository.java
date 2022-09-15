package com.example.gymcbackend.repository.paymentPlanMethod;

import com.example.gymcbackend.entities.PaymentPlanMethods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
public interface PaymentPlanMethodRepository extends JpaRepository<PaymentPlanMethods,Long>{

}
