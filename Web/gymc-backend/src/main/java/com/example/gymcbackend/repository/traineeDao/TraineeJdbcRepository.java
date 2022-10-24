package com.example.gymcbackend.repository.traineeDao;

import com.example.gymcbackend.dto.StaffUsers;
import com.example.gymcbackend.dto.TodayAvailableTrainees;
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

    public List<TraineeInfo> findAllTrainees() {
        String query ="SELECT CONCAT('T000', t.trainee_id) AS trainee_id, CONCAT(t.first_name,' ', t.last_name) AS full_name, t.phone_number, t.address, u.registered_date " +
                "FROM trainee as t " +
                "INNER JOIN user_account as u ON t.user_id = u.user_id AND u.status=1 ";

        List<TraineeInfo> traineeList = jdbc.query(query, new BeanPropertyRowMapper<TraineeInfo>(TraineeInfo.class));
        return traineeList;
    }

    public List<TodayAvailableTrainees> findTodayAvailableTrainees(String today) {

        String query ="SELECT DISTINCT \n" +
                "    CONCAT('T000', te.trainee_id) AS trainee_id,\n" +
                "    CONCAT(te.first_name, ' ', te.last_name) AS full_name\n" +
                "FROM\n" +
                "    trainee AS te\n" +
                "#INNER JOIN user_account AS u\n" +
                "#ON\n" +
                "    #te.user_id = u.user_id\n" +
                "INNER JOIN workout_schedule AS ws\n" +
                "ON\n" +
                "    ws.trainee_id = te.trainee_id\n" +
                "    \n" +
                "INNER JOIN workout_plan AS w\n" +
                "ON\n" +
                "    ws.workout_scheduleid = w.workout_scheduleid\n" +
                "INNER JOIN training_date AS t\n" +
                "ON\n" +
                "    w.workout_planid = t.workout_planid\n" +
                "    AND DATE(w.training_date) = ? ";

        List<TodayAvailableTrainees> todayAvailableTraineesList = jdbcTemplate.query(query, new Object[] {today}, new BeanPropertyRowMapper<TodayAvailableTrainees>(TodayAvailableTrainees.class));
        return todayAvailableTraineesList;
    }


}
