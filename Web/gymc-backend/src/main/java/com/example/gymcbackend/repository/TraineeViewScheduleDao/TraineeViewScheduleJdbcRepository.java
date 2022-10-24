package com.example.gymcbackend.repository.TraineeViewScheduleDao;

import com.example.gymcbackend.dto.*;
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

    public List<DietPlanResponse> getDietDate(LocalDate traineeDate,Long traineeId) {

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        namedParameters.addValue("traineeId", traineeId);
        namedParameters.addValue("traineeDate", traineeDate);

//        String query1= "SELECT diet_plan.* FROM workout_schedule " +
//                "INNER JOIN diet_plan ON workout_schedule.workout_scheduleid= diet_plan.workout_scheduleid " +
//                "AND diet_plan.training_date=? AND diet_plan.trainee_id=? ";
        System.out.println(traineeDate);
        String query1= "SELECT CONCAT('D000', diet_plan.diet_planid) AS diet_planid, diet_plan.carbohydrate, diet_plan.fats, diet_plan.proteins FROM workout_schedule " +
                "INNER JOIN diet_plan ON workout_schedule.workout_scheduleid= diet_plan.workout_scheduleid " +
                "AND diet_plan.training_date=:traineeDate AND diet_plan.trainee_id=:traineeId ";


//        DietPlan traineeDiet = (DietPlan) jdbcTemplate.queryForObject(query1, new Object[]{traineeDate,traineeId}, new BeanPropertyRowMapper(DietPlan.class));
//        DietPlanResponse dietPlanResponse= (DietPlanResponse)  jdbcTemplate.queryForObject(query1, new Object[]{traineeDate,traineeId}, new BeanPropertyRowMapper(DietPlanResponse.class));
//        int count = jdbcTemplate.queryForObject(sql, new Object[] { nic }, Integer.class);
        List<DietPlanResponse> dietPlanResponse = jdbc.query(query1, namedParameters, new BeanPropertyRowMapper<DietPlanResponse>(DietPlanResponse.class));

        System.out.println(dietPlanResponse);

        return dietPlanResponse;
    }

    public TimeSlot getCalDate(LocalDate date1) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
//        namedParameters.addValue("date1", date1);
        String query="SELECT * FROM time_slot WHERE date=?";

        TimeSlot timeSlot = (TimeSlot) jdbcTemplate.queryForObject(query, new Object[]{date1}, new BeanPropertyRowMapper(TimeSlot.class));
System.out.println(timeSlot.getEleven());

        return timeSlot;
    }

    public BodyFactorsResponse getBodyFactors(LocalDate date1, Long traineeId) {
        String query="SELECT weight,height,biceps,chest,forearms,hips,thighs FROM workout_plan WHERE  ";
        BodyFactorsResponse bodyFactors = (BodyFactorsResponse) jdbcTemplate.queryForObject(query, new Object[]{date1}, new BeanPropertyRowMapper(BodyFactorsResponse.class));
        return bodyFactors;
    }

    public List<TraineeProgressResponse> getTraineeProgress(Long traineeId) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        namedParameters.addValue("traineeId", traineeId);
        String query="SELECT weight,height,biceps,chest,forearms,hips,thighs FROM workout_plan INNER JOIN workout_schedule ON " +
                "workout_plan.workout_scheduleid=workout_schedule.workout_scheduleid " +
                "AND workout_schedule.trainee_id=:traineeId AND workout_plan.height IS NOT NULL";
        List<TraineeProgressResponse> traineeProgressResponses = jdbc.query(query, namedParameters, new BeanPropertyRowMapper<TraineeProgressResponse>(TraineeProgressResponse.class));
        return traineeProgressResponses;
    }
}

