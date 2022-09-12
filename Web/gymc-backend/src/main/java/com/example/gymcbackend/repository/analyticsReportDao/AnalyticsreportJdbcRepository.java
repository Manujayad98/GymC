package com.example.gymcbackend.repository.analyticsReportDao;

import com.example.gymcbackend.dto.AnnualIncome;
import com.example.gymcbackend.dto.StaffUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AnalyticsreportJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;


    public List<AnnualIncome> getAnnualIncomeChartData() {

        System.out.println("getAnnualIncomeChartData");

        String query ="SELECT DATE_FORMAT(payment.date, '%M') AS month, SUM(payment.amount) AS totalIncome " +
                "FROM payment WHERE YEAR(payment.date) = YEAR(CURRENT_DATE()) " +
                "GROUP BY YEAR(payment.date), MONTH(payment.date) " +
                "ORDER BY YEAR(payment.date), MONTH(payment.date) ";

        List<AnnualIncome> annualIncomeChartData = jdbc.query(query, new BeanPropertyRowMapper<AnnualIncome>(AnnualIncome.class));

        Object[] obj = new Object[] { "a", "b", "c" };
        return annualIncomeChartData;
    }
}
