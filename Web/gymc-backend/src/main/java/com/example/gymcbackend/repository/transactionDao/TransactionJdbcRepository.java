package com.example.gymcbackend.repository.transactionDao;

import com.example.gymcbackend.dto.Transactions;
import com.example.gymcbackend.entities.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class TransactionJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Transactions> findAllTransactions() {
        String query ="SELECT CONCAT('P000', paymentID) AS payment_id, amount, type, date, payment_planid,CONCAT('T000', trainee_id) trainee_id FROM payment ";

        List<Transactions> TransactionList = jdbc.query(query, new BeanPropertyRowMapper<Transactions>(Transactions.class));
        return TransactionList;
    }

    public Long findAllCardData() {

        String query ="SELECT SUM(amount) as Total FROM payment ";

        Long CardList = jdbcTemplate.queryForObject(query, new Object[] {}, Long.class);
        return CardList;
    }
}
