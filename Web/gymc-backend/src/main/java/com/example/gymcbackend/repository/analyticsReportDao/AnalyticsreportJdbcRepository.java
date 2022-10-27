package com.example.gymcbackend.repository.analyticsReportDao;

import com.example.gymcbackend.dto.AnnualIncome;
import com.example.gymcbackend.dto.Profile;
import com.example.gymcbackend.dto.StaffUsers;
import com.example.gymcbackend.dto.ThisMonthIncomeChartData;
import com.example.gymcbackend.entities.OwnerDashboardCards;
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

    public OwnerDashboardCards getCardData() {
        String query ="SELECT\n" +
                "    COUNT(DISTINCT s.staff_id) AS no_of_trainers,\n" +
                "    SUM(p.amount) AS total_income,\n" +
                "    COUNT(DISTINCT a.appointmentid) AS no_of_appointments,\n" +
                "    COUNT(DISTINCT w.workout_scheduleid) AS no_of_workouts\n" +
                "FROM\n" +
                "    workout_schedule AS w,\n" +
                "    appointment AS a,\n" +
                "    payment AS p,\n" +
                "    staff_member AS s\n" +
                "INNER JOIN user_account AS u\n" +
                "ON\n" +
                "    s.user_id = u.user_id AND u.status = 1 AND u.user_level='Trainer'; ";

        OwnerDashboardCards cardData = (OwnerDashboardCards) jdbcTemplate.queryForObject(query, new Object[] {}, new BeanPropertyRowMapper(OwnerDashboardCards.class));

        return cardData;
    }

    public List<ThisMonthIncomeChartData> getThisMonthsIncome() {

        String query ="SELECT DATE_FORMAT(date, '%m-%d') AS dateN, SUM(amount) AS totalIncome " +
                "FROM payment " +
                "WHERE MONTH(DATE) = MONTH(CURRENT_DATE) AND YEAR(DATE) = YEAR(CURRENT_DATE) " +
                "GROUP BY DATE(date) " +
                "ORDER BY DATE(date) ";

        List<ThisMonthIncomeChartData> thisMonthIncomeChartDataList = jdbc.query(query, new BeanPropertyRowMapper<ThisMonthIncomeChartData>(ThisMonthIncomeChartData.class));

        return thisMonthIncomeChartDataList;
    }
}
