package com.example.gymcbackend.repository.addWorkoutDao;

import com.example.gymcbackend.dto.TraineeAddWorkoutDetailsResponse;
import com.example.gymcbackend.dto.TraineeViewScheduleDetailsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import java.util.List;

public class AddWorkoutJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    public List<TraineeAddWorkoutDetailsResponse> addWorkout(Long traineeId) {


        String query ="SELECT t.trainee_id,t.first_name,t.last_name,t.phone_number,t.address,td.training_date,td.no_of_repetions,e.name " +
                "FROM trainee as t " +
                "INNER JOIN workout_schedule  as w  ON t.trainee_id=w.trainee_id " +
                "INNER JOIN workout_plan as wp  ON w.workout_planid=wp.workout_planid " +
                "INNER JOIN training_date as td  ON w.workout_planid=td.workout_planid " +
                "INNER JOIN exercise as e ON td.exercise_id=e.exerciseid " +
                "AND t.trainee_id=? AND w.status=1;";

        List<TraineeAddWorkoutDetailsResponse> traineeAddWorkout = jdbc.query(query, new BeanPropertyRowMapper<TraineeAddWorkoutDetailsResponse>(TraineeAddWorkoutDetailsResponse.class));
        return traineeAddWorkout;
    }

}
