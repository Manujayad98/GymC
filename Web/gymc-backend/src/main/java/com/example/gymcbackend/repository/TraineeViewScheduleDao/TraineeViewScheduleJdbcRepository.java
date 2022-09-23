package com.example.gymcbackend.repository.TraineeViewScheduleDao;

import com.example.gymcbackend.dto.TraineeDetailsResponse;
import com.example.gymcbackend.dto.TraineeViewScheduleDetailsResponse;
import com.example.gymcbackend.dto.TraineeViewWorkoutDateResponse;
import com.example.gymcbackend.entities.DietPlan;
import com.example.gymcbackend.entities.TimeSlot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
@Repository

public class TraineeViewScheduleJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<TraineeViewScheduleDetailsResponse> getTraineeSchedule(String traineeId) {

        String staffID = traineeId.substring(4);

        Long result = Long.parseLong(String.valueOf(staffID));

        //        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        LocalDate traineeDate = LocalDate.now();
        namedParameters.addValue("traineeId", result);
        namedParameters.addValue("traineeDate", traineeDate);


        String query1="SELECT trainee.trainee_id,trainee.first_name,trainee.last_name,  DATE_FORMAT(trainee.dob, '%y-%m-%d') AS dob, trainee.phone_number, trainee.emergency_number," +
                "trainee.address,exercise.name AS eName,training_date.no_of_repetitions, workout_plan.training_date " +
                "FROM workout_schedule " +
                "INNER JOIN workout_plan  ON  workout_schedule.workout_scheduleid=workout_plan.workout_scheduleid " +
                "INNER JOIN training_date  ON workout_plan.workout_planid=training_date.workout_planid " +
                "INNER JOIN exercise ON training_date.exercise_id=exercise.exerciseid "+
                "INNER JOIN trainee ON trainee.trainee_id=workout_schedule.trainee_id "+
                "AND workout_schedule.trainee_id=:traineeId AND workout_plan.training_date=:traineeDate";



        List<TraineeViewScheduleDetailsResponse> traineeViewSchedule = jdbc.query(query1, namedParameters, new BeanPropertyRowMapper<TraineeViewScheduleDetailsResponse>(TraineeViewScheduleDetailsResponse.class));
        return traineeViewSchedule;
    }

    public List<TraineeViewWorkoutDateResponse> getWorkoutDate(LocalDate traineeDate,Long traineeId) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();


        namedParameters.addValue("traineeId", traineeId);
        namedParameters.addValue("traineeDate", traineeDate);
        System.out.println(traineeDate);

        String query1= "SELECT exercise.name,training_date.no_of_repetitions " +
                "FROM workout_schedule " +
                "INNER JOIN workout_plan  ON  workout_schedule.workout_scheduleid=workout_plan.workout_scheduleid " +
                "INNER JOIN training_date  ON workout_plan.workout_planid=training_date.workout_planid " +
                "INNER JOIN exercise ON training_date.exercise_id=exercise.exerciseid "+
                "AND workout_schedule.trainee_id=:traineeId AND workout_plan.training_date=:traineeDate ";

        List<TraineeViewWorkoutDateResponse> traineeWorkout = jdbc.query(query1, namedParameters, new BeanPropertyRowMapper<TraineeViewWorkoutDateResponse>(TraineeViewWorkoutDateResponse.class));
        return traineeWorkout;
    }

    public DietPlan getDietDate(LocalDate traineeDate,Long traineeId) {

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        namedParameters.addValue("traineeId", traineeId);
        namedParameters.addValue("traineeDate", traineeDate);

        String query1= "SELECT diet_plan.* FROM workout_schedule " +
                "INNER JOIN diet_plan ON workout_schedule.workout_scheduleid= diet_plan.workout_scheduleid " +
                "AND diet_plan.training_date=? ";

//        DietPlan traineeDiet=
//                jdbc.query(query1, namedParameters, new Object[] {traineeId} DietPlan.class);

        DietPlan traineeDiet = (DietPlan) jdbcTemplate.queryForObject(query1, new Object[]{traineeDate}, new BeanPropertyRowMapper(DietPlan.class));

//        int count = jdbcTemplate.queryForObject(sql, new Object[] { nic }, Integer.class);
        return traineeDiet;
    }

    public TimeSlot getCalDate(LocalDate date1) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("date1", date1);
        String query="SELECT * FROM time_slot WHERE date=:date1";

        TimeSlot timeSlot = (TimeSlot) jdbcTemplate.queryForObject(query, new Object[]{date1}, new BeanPropertyRowMapper(TimeSlot.class));

        return timeSlot;
    }
}

