package com.example.gymcbackend.repository.trainerDao;

import com.example.gymcbackend.dto.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TrainerJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<TrainerTableData> findAllTrainers() {
        String query ="SELECT CONCAT('S000', u.user_id) AS trainer_id, CONCAT(s.first_name,' ', s.last_name) AS full_name,s.phone_number AS phone,s.qualification AS qualifications, s.address AS address," +
//                "IF(u.status=1, \"Active\", \"Inactive\") AS status " +
                "CASE u.is_hold " +
                "WHEN 1 THEN \"Hold\" \n" +
                "ELSE "+
                "CASE u.status \n" +
                "WHEN 1 THEN \"Active\" \n" +
                "END "+
                "END as status " +
                "FROM staff_member as s " +
                "INNER JOIN user_account as u ON s.user_id = u.user_id AND u.status=1 AND u.user_level='Trainer' ";

        List<TrainerTableData> TrainerList = jdbc.query(query, new BeanPropertyRowMapper<TrainerTableData>(TrainerTableData.class));
        return TrainerList;
    }

    public long changeTrainerDeleteStatus(Long userID) {

        Integer x = 0;
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE user_account " +
                "SET status = :status WHERE user_id = :user_id;";

        namedParameters.addValue("status", x);
        namedParameters.addValue("user_id", userID);

        int rowAffected = jdbc.update(update, namedParameters);

        return rowAffected;
    }

    public long changeTrainerHoldActiveStatus(Long userID, Integer sts) {

        Integer x = 1;
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE user_account " +
                "SET is_hold = :status WHERE user_id = :user_id;";

        namedParameters.addValue("status", sts);
        namedParameters.addValue("user_id", userID);

        int rowAffected = jdbc.update(update, namedParameters);

        return rowAffected;
    }

    public List<TodayAvailableTrainers> findTodayAvailableTrainers(String today) {

//        MapSqlParameterSource namedParameters =
//                new MapSqlParameterSource();


        System.out.println(today);

        String query ="SELECT DISTINCT\n" +
                "    CONCAT('S000', s.staff_id) AS trainer_id,\n" +
                "    CONCAT(s.first_name, ' ', s.last_name) AS full_name\n" +
                "FROM\n" +
                "    staff_member AS s\n" +
//                "INNER JOIN user_account AS u\n" +
//                "ON\n" +
//                "    s.user_id = u.user_id\n" +
                "INNER JOIN workout_plan AS w\n" +
                "ON\n" +
                "    s.staff_id = w.staff_id\n" +
                "INNER JOIN training_date AS t\n" +
                "ON\n" +
                "    w.workout_planid = t.workout_planid\n" +
//                "INNER JOIN workout_schedule AS ws\n" +
//                "ON\n" +
//                "    ws.trainee_id = t.trainee_id\n" +
                "    AND DATE(w.training_date) = ? ";

//        namedParameters.addValue("today", today);

        List<TodayAvailableTrainers> todayAvailableTrainersList = jdbcTemplate.query(query, new Object[] {today}, new BeanPropertyRowMapper<TodayAvailableTrainers>(TodayAvailableTrainers.class));
        return todayAvailableTrainersList;
    }



    public List<TodayWorkouts> findTodayWorkouts(String today) {

        String query ="SELECT w.start_time, w.end_time, CONCAT(s.first_name,' ', s.last_name) AS trainer_name,CONCAT(t.first_name,' ', t.last_name) AS trainee_name  FROM workout_plan AS w \n" +
                "INNER JOIN workout_schedule AS ws ON ws.workout_scheduleid= w.workout_scheduleid \n" +
                "INNER JOIN staff_member AS s ON s.staff_id=w.staff_id \n" +
                "INNER JOIN trainee AS t ON t.trainee_id=ws.trainee_id \n" +
                "AND w.training_date = CURDATE() ";

        List<TodayWorkouts> todayWorkoutsList = jdbcTemplate.query(query, new Object[] {}, new BeanPropertyRowMapper<TodayWorkouts>(TodayWorkouts.class));
        return todayWorkoutsList;
    }
}
