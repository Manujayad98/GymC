package com.example.gymcbackend.repository.addWorkoutDao;

import com.example.gymcbackend.dto.BodyFactorsResponse;
import com.example.gymcbackend.dto.DietPlanInput;
import com.example.gymcbackend.dto.ExerciseTrainingDate;
import com.example.gymcbackend.dto.WorkoutPlanSchedule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.time.LocalTime;
import java.util.List;

import static java.lang.Math.toIntExact;
import static java.time.LocalDate.parse;

@Repository
public class AddWorkoutJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    //hadanna one
    public Long addWorkout(WorkoutPlanSchedule workoutPlanSchedule,Long traineeId) {

        WorkoutPlanSchedule workoutSchedule=new WorkoutPlanSchedule();

//        LocalDate traineeStartDate = parse(workoutPlanSchedule.getStart_date());
//        LocalDate traineeEndDate = parse(workoutPlanSchedule.getEnd_date());
//        double d=Double.parseDouble("23.6");

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("traineeId", traineeId);
        namedParameters.addValue("height", workoutPlanSchedule.getHeight());
        namedParameters.addValue("weight", workoutPlanSchedule.getWeight());
        namedParameters.addValue("biceps", workoutPlanSchedule.getBiceps());
        namedParameters.addValue("hips", workoutPlanSchedule.getHips());
        namedParameters.addValue("thighs", workoutPlanSchedule.getThighs());
        namedParameters.addValue("forearms", workoutPlanSchedule.getForearms());
        namedParameters.addValue("chest", workoutPlanSchedule.getChest());
        namedParameters.addValue("diseases", workoutPlanSchedule.getDiseases());
        namedParameters.addValue("workout_name", workoutPlanSchedule.getWorkoutName());
//        namedParameters.addValue("trainee_id", workoutPlanSchedule.getTrainerId());
        namedParameters.addValue("workout_type", workoutPlanSchedule.getWorkoutType());
        namedParameters.addValue("staff_id", workoutPlanSchedule.getStaff_id());
//        namedParameters.addValue("start_date",traineeStartDate );
//        namedParameters.addValue("end_date",traineeEndDate );
        namedParameters.addValue("start_date", workoutPlanSchedule.getStart_date());
        namedParameters.addValue("end_date", workoutPlanSchedule.getEnd_date());

        //to insert a workout schedule


        String query0="INSERT INTO workout_schedule (status,workout_name,workout_type,staff_id,trainee_id,start_date,end_date) " +
                "values(0,:workout_name,:workout_type,:staff_id,:traineeId,:start_date,:end_date) ";

        int rowsAffected0 = jdbc.update(query0 , namedParameters);

        System.out.println(workoutPlanSchedule.getStart_date());

        //to get the above latest row of above entered trainee
//        MapSqlParameterSource namedParameters1 =
//                new MapSqlParameterSource();
//        namedParameters1.addValue("traineeId1", traineeId);
////        namedParameters.addValue("traineeId", traineeId);

        String query1="SELECT workout_scheduleid FROM workout_schedule " +
                "WHERE trainee_id=? " +
                "ORDER BY workout_scheduleid DESC LIMIT 1";


        Long schedule_id= jdbcTemplate.queryForObject(query1, new Object[] { traineeId }, Long.class);
        System.out.println(schedule_id);

        //add workout plan for starting date
        namedParameters.addValue("schedule_id", schedule_id);

        String query2 = "INSERT INTO workout_plan " +
                "(workout_scheduleid,height,weight,biceps,chest,hips,thighs,forearms,diseases, staff_id) " +
                "values (:schedule_id,:height, :weight, :biceps,:chest, :hips,:thighs,:forearms,:diseases, :staff_id )";

        int rowsAffected2 = jdbc.update(query2 , namedParameters);


        //getting amount from payment plan table

//        String workoutType = workoutPlanSchedule.getWorkoutType();
//        String query3="SELECT amount FROM payment_plan WHERE type=?";
////        String query="SELECT COUNT(workout_planid) FROM workout_plan WHERE workout_planid=?  ";
//        Double type = jdbcTemplate.queryForObject(query3, new Object[] {workoutType }, Double.class);

//        String query4="INSERT INTO payment_plan (payment_amount,payment_due)";

        if(rowsAffected2==1 && rowsAffected0==1){
            return schedule_id;
        }

        return schedule_id;
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


    public String addDietPlan(Date trainingDate, Integer carbohydrate, Integer fat, Integer protein, long workoutScheduleId, String traineeId) {

        System.out.println("inside diet plan"+carbohydrate);
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("trainingDate", trainingDate);
        namedParameters.addValue("carbohydrate", carbohydrate);
        namedParameters.addValue("fat", fat);
        namedParameters.addValue("protein", protein);
        namedParameters.addValue("workoutScheduleId", workoutScheduleId);
        namedParameters.addValue("traineeId", traineeId);

        String query = "INSERT INTO diet_plan " +
                "(training_date,carbohydrate,fats,proteins,workout_scheduleid,trainee_id) " +
                "values (:trainingDate,:carbohydrate,:fat,:protein,:workoutScheduleId,:traineeId )";
        int rowsAffected = jdbc.update(query , namedParameters);
        if(rowsAffected==1){
            return "diet plan added";
        };
        return "failed";

    }

    //default value for workout plan id

    public String addTrainingDate(Date trainingDate, LocalTime startTime, LocalTime endTime, List<ExerciseTrainingDate> trainingDateList, Long scheduleId) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();


        namedParameters.addValue("trainingDate",trainingDate );
//        namedParameters.addValue("workoutPlanId",workoutPlanId );
        namedParameters.addValue("scheduleId",scheduleId );
//        namedParameters.addValue("exercise_id",exerciseId);
//        namedParameters.addValue("no_of_repetitions",no_of_repetitions);
        namedParameters.addValue("startTime",startTime);
        namedParameters.addValue("endTime",endTime );



        String query="SELECT COUNT(workout_planid) FROM workout_plan WHERE workout_scheduleid=? AND training_date=?  ";
        int count = jdbcTemplate.queryForObject(query, new Object[] {scheduleId,trainingDate }, Integer.class);


        int rowsAffected1=0;int rowsAffected0=0;
        Long insertedWorkoutPlanId;
        if(count==0){
            //if no row exists
            String query0 = "INSERT INTO workout_plan " +
                    "(training_date,start_time,end_time,workout_scheduleid) " +
                    "values (:trainingDate,:startTime,:endTime,:scheduleId )";
            rowsAffected0 = jdbc.update(query0 , namedParameters);

            //get the inserted row's workout plan id
            String query2="SELECT workout_planid FROM workout_plan WHERE workout_scheduleid=? AND training_date=?  ";
            insertedWorkoutPlanId = jdbcTemplate.queryForObject(query2, new Object[] {scheduleId,trainingDate }, Long.class);

        }else{
            //if row exists
            String query1 = "UPDATE workout_plan SET training_date=:trainingDate,start_time=:startTime,end_time=:endTime WHERE workout_scheduleid=:scheduleId AND training_date=:trainingDate ";
            rowsAffected1 = jdbc.update(query1 , namedParameters);

            String query2="SELECT workout_planid FROM workout_plan WHERE workout_scheduleid=? AND training_date=?  ";
            insertedWorkoutPlanId = jdbcTemplate.queryForObject(query2, new Object[] {scheduleId,trainingDate }, Long.class);
//            insertedWorkoutPlanId = workoutPlanId;
        }

        namedParameters.addValue("insertedWorkoutPlanId",insertedWorkoutPlanId);
        //adding training date exercise list


        if(rowsAffected1==1 || rowsAffected0==1 ){

            for(int i=0;i<trainingDateList.size();i++){

                namedParameters.addValue("insertedWorkoutPlanId",insertedWorkoutPlanId);
                String exerciseId = trainingDateList.get(i).getExerciseId().substring(4);
                namedParameters.addValue("exerciseId",exerciseId);
                System.out.println("Exercise id :"+trainingDateList.get(i).getExerciseId());
                namedParameters.addValue("no_of_repetitions",trainingDateList.get(i).getNoOfRepetitions());
                String query2 = "INSERT INTO training_date " +
                        "(exercise_id,workout_planid,no_of_repetitions) " +
                        "values (:exerciseId,:insertedWorkoutPlanId,:no_of_repetitions)";

                int rowsAffected2 = jdbc.update(query2 , namedParameters);
            }

            return "added";
        };
        return "failed";


    }

//    public String setAvailability(Long startSlot,Long endSlot, Date trainingDate) {
//
//        MapSqlParameterSource namedParameters =
//                new MapSqlParameterSource();
//
//        namedParameters.addValue("startSlot",startSlot );
//        namedParameters.addValue("endSlot",endSlot );
//        namedParameters.addValue("trainingDate",trainingDate );
//
//        String query="SELECT COUNT(date) FROM time_slot WHERE date=?  ";
//        int count = jdbcTemplate.queryForObject(query, new Object[] {trainingDate }, Integer.class);
//        System.out.println("count "+count);
//        namedParameters.addValue("trainingDate",trainingDate );
//
//        if(count==0){
//            String query1 = "INSERT INTO time_slot " +
//                        "(date) " +
//                        "values (:trainingDate)";
//
//            int rowsAffected1 = jdbc.update(query1, namedParameters);
//        }
//
//            for(Long i=startSlot;i<=endSlot;i++){
//
//                namedParameters.addValue("i",i );
//
//                //get current reserved count
//                namedParameters.addValue("trainingDate",trainingDate );
//
//                String query1="SELECT `$col` FROM time_slot WHERE date=?";
//                query1 =query1.replace("$col",i.toString());
//
//                int reservedCount = jdbcTemplate.queryForObject(query1, new Object[] {trainingDate }, Integer.class);
//                System.out.println("resrv count:"+reservedCount);
//                reservedCount +=1;
//
//                namedParameters.addValue("reservedCount",reservedCount );
//                String query2 = "UPDATE time_slot SET `$col`=:reservedCount WHERE date=:trainingDate";
//
//                query2 =query2.replace("$col",i.toString());
//                System.out.println("query2"+query2);
//                int rowsAffected = jdbc.update(query2 , namedParameters);
//
//
//        }
//
//        return "testing";
//    }

    public String setAvailability(Long startSlot,Long endSlot, Date trainingDate) {

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("startSlot",startSlot );
        namedParameters.addValue("endSlot",endSlot );
        namedParameters.addValue("trainingDate",trainingDate );

        String query="SELECT COUNT(date) FROM time_slot_two WHERE date=?  ";
        int count = jdbcTemplate.queryForObject(query, new Object[] {trainingDate }, Integer.class);
        System.out.println("count "+count);
        namedParameters.addValue("trainingDate",trainingDate );

        if(count==0){
            String query1 = "INSERT INTO time_slot_two " +
                    "(date) " +
                    "values (:trainingDate)";

            int rowsAffected1 = jdbc.update(query1, namedParameters);
        }

        Integer s = toIntExact(startSlot);
        Integer e = toIntExact(endSlot);

        String colName="";

        for(int i=s;i<=e;i++){

            switch(i){
//                case 0:
//                    System.out.println("i value is 0");
//                    break;

                case 1:colName="one";break;
                case 2:colName="two";break;
                case 3:colName="three";break;
                case 4:colName="four";break;
                case 5:colName="five";break;
                case 6:colName="six";break;
                case 7:colName="seven";break;
                case 8:colName="eight";break;
                case 9:colName="nine";break;
                case 10:colName="ten";break;
                case 11:colName="eleven";break;
                case 12:colName="twelve";break;
                case 13:colName="thirteen";break;
                case 14:colName="fourteen";break;
                case 15:colName="fifteen";break;
                case 16:colName="sixteen";break;
                case 17:colName="seventeen";break;
                case 18:colName="eighteen";break;
                case 19:colName="nineteen";break;
                case 20:colName="twenty";break;
                case 21:colName="twentyone";break;
                case 22:colName="twentytwo";break;
                case 23:colName="twentythree";break;
                case 24:colName="twentyfour";break;
                case 25:colName="twentyfive";break;
                case 26:colName="twentysix";break;
                case 27:colName="twentyseven";break;
                case 28:colName="twentyeight";break;
                case 29:colName="twentynine";break;
                case 30:colName="thirty";break;
                case 31:colName="thirtyone";break;
                case 32:colName="thirtytwo";break;

                default:
                    System.out.println("i value is greater than 2 and less than 5");

            }

            namedParameters.addValue("i",i );

            //get current reserved count
            namedParameters.addValue("trainingDate",trainingDate );

            String query1="SELECT "+ colName +" FROM time_slot_two WHERE date=?";
//            query1 =query1.replace("$col",i.toString());

            int reservedCount = jdbcTemplate.queryForObject(query1, new Object[] {trainingDate }, Integer.class);
            System.out.println("resrv count:"+reservedCount);
            reservedCount +=1;

            namedParameters.addValue("reservedCount",reservedCount );
            String query2 = "UPDATE time_slot_two SET "+ colName+"=:reservedCount WHERE date=:trainingDate";

//            query2 =query2.replace("$col",i.toString());
            System.out.println("query2"+query2);
            int rowsAffected = jdbc.update(query2 , namedParameters);


        }

        return "testing";
    }


    public String updateBodyFactors(Long workoutPlanId, BodyFactorsResponse updatedBodyFactors) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        namedParameters.addValue("thighs",updatedBodyFactors.getThighs() );
        namedParameters.addValue("hips",updatedBodyFactors.getHips() );
        namedParameters.addValue("forearms",updatedBodyFactors.getForearms() );
        namedParameters.addValue("chest",updatedBodyFactors.getChest() );
        namedParameters.addValue("biceps",updatedBodyFactors.getBiceps() );
        namedParameters.addValue("height",updatedBodyFactors.getHeight() );
        namedParameters.addValue("weight",updatedBodyFactors.getWeight() );
        namedParameters.addValue("workoutPlanId",workoutPlanId );

        String query="UPDATE workout_plan " +
                "SET thighs=:thighs,hips=:hips,forearms=:forearms,chest=:chest,biceps=:biceps,height=:height,weight:weight" +
                " WHERE workout_planid=:workoutPlanId";
        int rowsAffected = jdbc.update(query , namedParameters);
        if(rowsAffected==1){
            return "factors updated";
        }
        else{
            return "factors update failure";
        }
    }

    public String updateExercises(Long workoutPlanId, List<ExerciseTrainingDate> newExerciseList) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        //optimize for new exercise
        int updated=0;

        for(int i=0;i<newExerciseList.size();i++){

            namedParameters.addValue("workoutPlanId",workoutPlanId);
            namedParameters.addValue("exerciseId",newExerciseList.get(i).getExerciseId());
            System.out.println("Exercise id :"+newExerciseList.get(i).getExerciseId());
            namedParameters.addValue("noOfRepetitions",newExerciseList.get(i).getNoOfRepetitions());
            String query2 = "UPDATE training_date SET " +
                    "no_of_repetitions=:noOfRepetitions " +
                    "WHERE exercise_id=:exerciseId AND workout_planid=:workoutPlanId";

            int rowsAffected2 = jdbc.update(query2 , namedParameters);
            if(i == newExerciseList.size()-1 && rowsAffected2==1){
                updated=1;
            }
        }
        if(updated==1){
            return "Reps updated";
        }
        else{
            return "Reps update failure";
        }
    }



    public String setAppointmentAvailability(Date tempStartDate, long startSlot, long endSlot) {


        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("startSlot",startSlot );
        namedParameters.addValue("endSlot",endSlot );
        namedParameters.addValue("Date",tempStartDate );

        String query="SELECT COUNT(date) FROM time_slot_two WHERE date=?  ";
        int count = jdbcTemplate.queryForObject(query, new Object[] {tempStartDate }, Integer.class);
        System.out.println("count "+count);
        namedParameters.addValue("trainingDate",tempStartDate );

        if(count==0){
            String query1 = "INSERT INTO time_slot_two " +
                    "(date) " +
                    "values (:trainingDate)";

            int rowsAffected1 = jdbc.update(query1, namedParameters);
        }

        Integer s = toIntExact(startSlot);
        Integer e = toIntExact(endSlot);

        String colName="";

        for(int i=s;i<=e;i++){

            switch(i){
//                case 0:
//                    System.out.println("i value is 0");
//                    break;

                case 1:colName="one";break;
                case 2:colName="two";break;
                case 3:colName="three";break;
                case 4:colName="four";break;
                case 5:colName="five";break;
                case 6:colName="six";break;
                case 7:colName="seven";break;
                case 8:colName="eight";break;
                case 9:colName="nine";break;
                case 10:colName="ten";break;
                case 11:colName="eleven";break;
                case 12:colName="twelve";break;
                case 13:colName="thirteen";break;
                case 14:colName="fourteen";break;
                case 15:colName="fifteen";break;
                case 16:colName="sixteen";break;
                case 17:colName="seventeen";break;
                case 18:colName="eighteen";break;
                case 19:colName="nineteen";break;
                case 20:colName="twenty";break;
                case 21:colName="twentyone";break;
                case 22:colName="twentytwo";break;
                case 23:colName="twentythree";break;
                case 24:colName="twentyfour";break;
                case 25:colName="twentyfive";break;
                case 26:colName="twentysix";break;
                case 27:colName="twentyseven";break;
                case 28:colName="twentyeight";break;
                case 29:colName="twentynine";break;
                case 30:colName="thirty";break;
                case 31:colName="thirtyone";break;
                case 32:colName="thirtytwo";break;

                default:
                    System.out.println("i value is greater than 2 and less than 5");

            }

            namedParameters.addValue("i",i );

            //get current reserved count
            namedParameters.addValue("tempStartDate",tempStartDate );

            String query1="SELECT "+ colName +" FROM time_slot_two WHERE date=?";

            int reservedCount = jdbcTemplate.queryForObject(query1, new Object[] {tempStartDate }, Integer.class);
            System.out.println("resrv count:"+reservedCount);
            reservedCount +=1;

            namedParameters.addValue("reservedCount",reservedCount );
            String query2 = "UPDATE time_slot_two SET "+ colName+"=:reservedCount WHERE date=:tempStartDate";

            System.out.println("query2"+query2);
            int rowsAffected = jdbc.update(query2 , namedParameters);


        }

        return "testing";

    }

    public String addAppointment(Date tempStartDate, LocalTime startTime, LocalTime endTime, Long staffId, Long traineeId) {

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("startTime",startTime );
        namedParameters.addValue("endTime",endTime );
        namedParameters.addValue("staffId",staffId );
        namedParameters.addValue("traineeId",traineeId );
        namedParameters.addValue("tempStartDate",tempStartDate );



        String query = "INSERT INTO appointment (date,start_time,end_time,staff_id,trainee_id) values(:tempStartDate,:startTime,:endTime,:staffId,:traineeId)";
        int rowsAffected = jdbc.update(query , namedParameters);

        if(rowsAffected==1){
            return "appoinment added";
        }
        else{
            return "appoinment failed";
        }

    }

    public String updateDiet(DietPlanInput dietPlan) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("id",dietPlan.getId());
        namedParameters.addValue("proteins",dietPlan.getProteins() );
        namedParameters.addValue("carbohydrate",dietPlan.getCarbohydrate() );
        namedParameters.addValue("fats",dietPlan.getFats() );
        namedParameters.addValue("trainingDate",dietPlan.getTrainingDate() );
        namedParameters.addValue("workoutScheduleId",dietPlan.getWorkoutScheduleId() );

        System.out.println("schedule "+dietPlan.getWorkoutScheduleId());
        System.out.println("tdate "+dietPlan.getTrainingDate());

        String query = "UPDATE diet_plan SET fats=:fats,carbohydrate=:carbohydrate,proteins=:proteins " +
                "WHERE training_date=:trainingDate AND workout_scheduleid=:workoutScheduleId ";
        int rowsAffected = jdbc.update(query , namedParameters);
        if(rowsAffected==1){
            return "diet update success";
        }
        else{
            return "diet update failed";
        }

    }
}
