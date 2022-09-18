package com.example.gymcbackend.repository.cashPaymentDao;

import com.example.gymcbackend.dto.ExerciseTableData;
import com.example.gymcbackend.dto.PaymentInfo;
import com.example.gymcbackend.entities.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CashPaymentJdbcRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    public PaymentInfo getPaymentById(long trainee_ID){
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        System.out.println(trainee_ID);


        String query = "SELECT p.date, t.due_payment,ppm.type, ppm.amount" +
                "FROM payment AS p" +
                "INNER JOIN trainee as t on t.trainee_id=p.trainee_id" +
                "INNER JOIN payment_plan as p on p.trainee_id=ppm/trainee_id" +
                "INNER JOIN payment_plan_methods as ppm on ppm.payment_plan_methods=p.payment_method_plans_id" +
                "ORDER BY p.date DESC limit 1 AND p.trainee_id=?";

        System.out.println(query);
        PaymentInfo Payment = (PaymentInfo) jdbcTemplate.queryForObject(query, new Object[] {trainee_ID}, new BeanPropertyRowMapper(PaymentInfo.class));



        System.out.println("awajdbc3");
        return Payment;
    }



    //public List<PaymentInfo> cashPaymentDetails (Long trainee_ID){
      //  String query = "SELECT paymentPlanMethodsID AS paymentPlanMethodsID FROM payment_plan_methods WHERE trainee_id= :traineeId";

        //List<PaymentInfo> PaymentList = jdbc.query(query, new BeanPropertyRowMapper<PaymentInfo>(PaymentInfo.class));
        //return PaymentList;
    //}


}
//        Profile profile = (Profile) jdbcTemplate.queryForObject(query, new Object[] {userId}, new BeanPropertyRowMapper(Profile.class));
//instead of list