package com.example.gymcbackend.repository.traineeDao;

import com.example.gymcbackend.dto.StaffUsers;
import com.example.gymcbackend.dto.TraineeInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import com.example.gymcbackend.dto.TraineeDetailsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import java.util.List;

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

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public List<TraineeInfo> findAllTrainees() {
        String query ="SELECT t.trainee_id, t.first_name, t.last_name, t.phone_number, t.address, u.status " +
                "FROM trainee as t " +
                "INNER JOIN user_account as u ON t.user_id = u.user_id ";

        List<TraineeInfo> traineeList = jdbc.query(query, new BeanPropertyRowMapper<TraineeInfo>(TraineeInfo.class));
        return traineeList;
    }

}
