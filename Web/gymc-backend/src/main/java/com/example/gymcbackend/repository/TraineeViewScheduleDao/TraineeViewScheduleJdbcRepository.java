package com.example.gymcbackend.repository.TraineeViewScheduleDao;

import com.example.gymcbackend.dto.TraineeDetailsResponse;
import com.example.gymcbackend.dto.TraineeViewScheduleDetailsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository

public class TraineeViewScheduleJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    public List<TraineeViewScheduleDetailsResponse> getTraineeSchedule(Long traineeId) {

        //        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

//        namedParameters.addValue("category", category);

        String query ="SELECT t.trainee_id,t.first_name,t.last_name,t.phone_number,t.address,td.training_date,td.no_of_repetions,e.name " +
                "FROM trainee as t " +
                "INNER JOIN workout_schedule  as w  ON t.trainee_id=w.trainee_id " +
                "INNER JOIN workout_plan as wp  ON w.workout_planid=wp.workout_planid " +
                "INNER JOIN training_date as td  ON w.workout_planid=td.workout_planid " +
                "INNER JOIN exercise as e ON td.exercise_id=e.exerciseid " +
                "AND t.trainee_id=? AND w.status=1";

        List<TraineeViewScheduleDetailsResponse> traineeViewSchedule = jdbc.query(query, new BeanPropertyRowMapper<TraineeViewScheduleDetailsResponse>(TraineeViewScheduleDetailsResponse.class));
        return traineeViewSchedule;
    }
}
