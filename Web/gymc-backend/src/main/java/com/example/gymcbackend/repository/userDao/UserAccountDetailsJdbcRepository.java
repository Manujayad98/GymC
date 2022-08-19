package com.example.gymcbackend.repository.userDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserAccountDetailsJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public int checkEmailExists(String email) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("email", email);

        String sql = "SELECT count(*) from user_account where email = ?";

        int count = jdbcTemplate.queryForObject(sql, new Object[] { email }, Integer.class);

        return count;
    }
}
