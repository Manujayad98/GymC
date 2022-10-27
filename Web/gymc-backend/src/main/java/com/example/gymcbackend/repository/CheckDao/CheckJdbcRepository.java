package com.example.gymcbackend.repository.CheckDao;

import com.example.gymcbackend.dto.CheckDetails;
import com.example.gymcbackend.dto.PaymentInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CheckJdbcRepository {
    @Autowired
    static
    JdbcTemplate jdbcTemplate;

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    public static CheckDetails getDetailsById(long trainee_ID){
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        System.out.println(trainee_ID);

        String query = "SELECT t.traineeName " +
                "FROM trainee AS t " +
               "WHERE trainee_id=?";

        namedParameters.addValue("trainee_id", trainee_ID);
        System.out.println(query);
        CheckDetails Details = (CheckDetails) jdbcTemplate.queryForObject(query, new Object[] {trainee_ID}, new BeanPropertyRowMapper(CheckDetails.class));

        System.out.println(Details);

        return Details;
    }
}
