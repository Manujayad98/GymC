package com.example.gymcbackend.repository.traineeDao;

import com.example.gymcbackend.dto.TraineeDetailsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import java.util.List;

@Repository
public class TraineeJdbcRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;
    public List<TraineeDetailsResponse> getAllTrainees() {



//        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

//        namedParameters.addValue("category", category);

        String query ="SELECT trainee_id,first_name,last_name,phone_number,user_account.registered_date FROM trainee INNER JOIN user_account ON trainee.user_id=user_account.user_id;";

        List<TraineeDetailsResponse> trainees = jdbc.query(query, new BeanPropertyRowMapper<TraineeDetailsResponse>(TraineeDetailsResponse.class));
        return trainees;

    }
}
