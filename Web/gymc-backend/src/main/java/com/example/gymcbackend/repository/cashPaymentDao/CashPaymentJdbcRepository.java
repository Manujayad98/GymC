package com.example.gymcbackend.repository.cashPaymentDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CashPaymentJdbcRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;


}
