package com.example.gymcbackend.repository.addWorkoutDao;

import com.example.gymcbackend.dto.WorkoutPlanSchedule;
import com.example.gymcbackend.entities.TrainingDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;

import java.sql.Time;
import java.util.Date;
import java.util.List;

@Repository
public class AddWorkoutJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    //hadanna one
    public String addWorkout(WorkoutPlanSchedule workoutPlanSchedule,Long traineeId) {

        WorkoutPlanSchedule workoutSchedule=new WorkoutPlanSchedule();

//        workoutPlanSchedule.setDuration(workoutPlanSchedule.getDuration());
//        workoutPlanSchedule.setStartDate(workoutPlanSchedule.getStartDate());
//        workoutPlanSchedule.setWorkoutName(workoutPlanSchedule.getWorkoutName(

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        //to insert a workout schedule

        String query0="INSERT INTO workout_schedule (status,workout_type,staff_id,trainee_id) " +
                "values(0,:workout_name,:workout_type,:staff_id,:trainee_id) ";

        int rowsAffected0 = jdbc.update(query0 , namedParameters);

        System.out.println("q1");

        //to get the above latest row of above entered trainee

        String query1="SELECT workout_schedule.workout_scheduleid FROM workout_schedule WHERE trainee_id=1 " +
                "ORDER BY workout_scheduleid DESC LIMIT 1";


        Long schedule_id= jdbcTemplate.queryForObject(query1, new Object[] { workoutSchedule }, Long.class);




        String query2 = "INSERT INTO workout_plan " +
                "(workout_scheduleid,height,weight,biceps,chest,hips,thighs,forearms) " +
                "values (:schedule_id,:height, :weight, :biceps,:chest, :hips,:thighs,:forearms )";

        //execute karanna one

        namedParameters.addValue("height", workoutPlanSchedule.getHeight());
        namedParameters.addValue("weight", workoutPlanSchedule.getWeight());
        namedParameters.addValue("biceps", workoutPlanSchedule.getBiceps());
        namedParameters.addValue("hips", workoutPlanSchedule.getHips());
        namedParameters.addValue("thighs", workoutPlanSchedule.getThighs());
        namedParameters.addValue("forearms", workoutPlanSchedule.getForearms());
        namedParameters.addValue("chest", workoutPlanSchedule.getChest());
//        namedParameters.addValue("workout_name", workoutPlanSchedule.getWorkoutName());
        namedParameters.addValue("trainee_id", workoutPlanSchedule.getTrainerId());
        namedParameters.addValue("workout_type", workoutPlanSchedule.getWorkoutType());

//        namedParameters.addValue("startDate", workoutPlanSchedule.getStart_date());
//        namedParameters.addValue("endDate", workoutPlanSchedule.getEnd_date());




        int rowsAffected4 = jdbc.update(query2 , namedParameters);
        if(rowsAffected4==1){


            return "added";
        };
            return "failed";
//        List<TraineeAddWorkoutDetailsResponse> traineeAddWorkout = jdbc.query(query, new BeanPropertyRowMapper<TraineeAddWorkoutDetailsResponse>(TraineeAddWorkoutDetailsResponse.class));
//
    }
//    public String addTrainingDate(List<WorkoutReservation> workoutReservations){
//
//        MapSqlParameterSource namedParameters =
//                new MapSqlParameterSource();
//
//        namedParameters.addValue("carbs", workoutReservations.get(0).getCarbs());
//        namedParameters.addValue("weight", workoutReservations.get(0).getWeight());
//        namedParameters.addValue("biceps", workoutReservations.get(0).getBiceps());
//        namedParameters.addValue("hips", workoutReservations.get(0).getHips());
//        namedParameters.addValue("thighs", workoutReservations.get(0).getThighs());
//        namedParameters.addValue("forearms", workoutReservations.get(0).getForearms());
//        namedParameters.addValue("chest", workoutReservations.get(0).getChest());
//
//        String query1 = "INSERT INTO workout_plan " +
//                "(height,weight,biceps,chest,hips,thighs,forearms) " +
//                "values (:height, :weight, :biceps,:chest, :hips,:thighs,:forearms )";
//
//
//
//
//        int rowsAffected = jdbc.update(query1 , namedParameters);
//        if(rowsAffected==1){
//
//
//            return "added";
//        };
//        return "failed";
//
//    }


    public String addDietPlan(Integer carbohydrate, Integer fat, Integer protein) {

        System.out.println(carbohydrate);
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        namedParameters.addValue("carbohydrate", carbohydrate);
        namedParameters.addValue("fat", fat);
        namedParameters.addValue("protein", protein);

        String query = "INSERT INTO diet_plan " +
                "(carbohydrate,fats,proteins) " +
                "values (:carbohydrate,:fat,:protein )";
        int rowsAffected = jdbc.update(query , namedParameters);
        if(rowsAffected==1){
            return "diet plan added";
        };
        return "failed";

    }

    //default value for workout plan id

    public String addTrainingDate(long workoutPlanId, Date trainingDate, Time startTime, Time endTime, List<TrainingDate> trainingDateList) {
                MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();


        namedParameters.addValue("training_date",trainingDate );
//        namedParameters.addValue("exercise_id",exerciseId);
//        namedParameters.addValue("no_of_repetitions",no_of_repetitions);
        namedParameters.addValue("start_time",startTime);
        namedParameters.addValue("end_time",endTime );
        namedParameters.addValue("end_time",endTime );


//        String query1 = "INSERT INTO workout_plan " +
//                "(exercise_id,training_date,workout_planid,trainee_id,start_time,end_time) " +
//                "values (1,:training_date,1,1, :start_time,:end_time )";

        String query1 = "UPDATE workout_plan SET training_date=:trainingDate,start_time:startTime,end_time=:endTime WHERE workout_planid=:workoutPlanId ";
        int rowsAffected1 = jdbc.update(query1 , namedParameters);

        String query2 = "INSERT INTO training_date " +
                "(exercise_id,workout_planid,no_of_repetitions) " +
                "values (:exerciseId,:workotPlanId,:no_of_repetitions)";

        int rowsAffected2 = jdbc.update(query2 , namedParameters);


        //availability setting part

        if(rowsAffected1==1){
            String query3 = "INSERT INTO training_date " +
                    "(exercise_id,training_date,workout_planid,no_of_repetitions,start_time,end_time) " +
                    "values (:exerciseId,:training_date,:workoutPlanId,:no_of_repetitions,1, :start_time,:end_time )";


            int rowsAffected3 = jdbc.update(query3 , namedParameters);

            return "added";
        };
        return "failed";


    }

    public String setAvailability(Long startSlot,Long endSlot, Date tempStartDate) {

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("startSlot",startSlot );
        namedParameters.addValue("endSlot",endSlot );
        namedParameters.addValue("slot_no",tempStartDate );

        String query="SELECT COUNT(date) FROM time_slot WHERE date=:tempStartDate  ";
        int count = jdbcTemplate.queryForObject(query, new Object[] {tempStartDate }, Integer.class);

        if(count==0){
            for(Long i=startSlot;i<=endSlot;i++){

                String query1 = "INSERT INTO time_slot " +
                        "(date,:i) " +
                        "values (:tempStartDate,1 )";
                int rowsAffected = jdbc.update(query1 , namedParameters);
            }


        }else{

            for(Long i=startSlot;i<=endSlot;i++){

                //get current reserved count

                String query1="SELECT :i FROM time_slot WHERE date=:tempStartDate";
                int reservedCount = jdbcTemplate.queryForObject(query, new Object[] {tempStartDate }, Integer.class);
                reservedCount +=1;

                String query2 = "INSERT INTO time_slot " +
                        "(date,:i) " +
                        "values (:tempStartDate,reservedCount )";
                int rowsAffected = jdbc.update(query2 , namedParameters);

            }
        }





        return "testing";
    }
}
