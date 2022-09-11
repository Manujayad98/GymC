package com.example.gymcbackend.repository.paymentPlanMethod;

import com.example.gymcbackend.dto.PaymentPlanMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PaymentPlanMethodJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<PaymentPlanMethod> findAllPaymentPlanDetails(){
        String query = "SELECT payment_plan_methodsid AS plan_id, type AS type, amount AS amount FROM payment_plan_methods";

        List<PaymentPlanMethod> PlanList = jdbc.query(query, new BeanPropertyRowMapper<PaymentPlanMethod>(PaymentPlanMethod.class));
        return PlanList;
    }

}
