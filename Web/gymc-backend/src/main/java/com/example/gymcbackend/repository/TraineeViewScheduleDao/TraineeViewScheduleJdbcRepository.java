package com.example.gymcbackend.repository.TraineeViewScheduleDao;

import com.example.gymcbackend.dto.*;
import com.example.gymcbackend.entities.TimeSlot;
import com.example.gymcbackend.entities.TimeSlotTwo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.List;
import java.util.Locale;

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

                String query1= "SELECT CONCAT('E000', exercise.exerciseid) AS exercise_id , exercise.name,training_date.no_of_repetitions " +
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



        public TimeSlotTwo getDateAvailability(LocalDate date1, Long staffId) {

                MapSqlParameterSource namedParameters = new MapSqlParameterSource();
                namedParameters.addValue("staffId", staffId);


                namedParameters.addValue("date1", date1);
                String query0="SELECT COUNT(date) FROM time_slot_two WHERE date=?";
                Integer dateCount = jdbcTemplate.queryForObject(query0, new Object[] {date1 }, Integer.class);

                int rowsAffected1=0;
                if(dateCount==0){

                        String query2="INSERT INTO time_slot_two (date) VALUES (:date1) ";
                        rowsAffected1 = jdbc.update(query2 , namedParameters);
                }


                namedParameters.addValue("date1", date1);
                String query="SELECT * FROM time_slot_two WHERE date=?";

                TimeSlotTwo timeSlot = (TimeSlotTwo) jdbcTemplate.queryForObject(query, new Object[]{date1}, new BeanPropertyRowMapper(TimeSlotTwo.class));
                System.out.println(timeSlot.getEleven()+" time slot response");


//        Integer c= (Integer) jdbcTemplate.queryForObject(query, new Object[]{date1}, new BeanPropertyRowMapper(Integer.class));



                return timeSlot;
        }

        public TimeSlotTwo getDateAvailabilityTimes(LocalDate date1) {

                String query="SELECT * FROM time_slot_two WHERE date=?";

                TimeSlotTwo timeSlot = (TimeSlotTwo) jdbcTemplate.queryForObject(query, new Object[]{date1}, new BeanPropertyRowMapper(TimeSlotTwo.class));

                System.out.println("sdsdsdsdsds");

                return timeSlot;
        }

        public static String getDayStringNew(LocalDate date, Locale locale) {
                DayOfWeek day = date.getDayOfWeek();
                return day.getDisplayName(TextStyle.FULL, locale);
        }

        public Integer getShiftNo(Long staffId, LocalDate date1) {

                MapSqlParameterSource namedParameters = new MapSqlParameterSource();
                //getting shift no of the day of the trainer
                Integer shiftNo=0;
                if(staffId!=0){
                        Locale locale1 = new Locale("EN", "INDIA");
                        String day = getDayStringNew(date1,locale1).toLowerCase();
                        namedParameters.addValue("day", day);
                        System.out.println("Day:"+day);


                        String query1="SELECT "+ day+" FROM shift_details WHERE staff_id=?";
                        shiftNo = jdbcTemplate.queryForObject(query1, new Object[] {staffId }, Integer.class);
                        System.out.println("Shift No:"+shiftNo);
                }

                return shiftNo;
        }


        public BodyFactorsResponse getBodyFactors(LocalDate date1, Long traineeId) {
                MapSqlParameterSource namedParameters =
                        new MapSqlParameterSource();
                namedParameters.addValue("traineeId", traineeId);
                namedParameters.addValue("date", date1);

                String query="SELECT weight,height,biceps,chest,forearms,hips,thighs, diseases FROM workout_plan " +
                        "INNER JOIN workout_schedule ON workout_plan.workout_scheduleid=workout_schedule.workout_scheduleid " +
                        "AND  workout_schedule.trainee_id= ? AND workout_plan.training_date= ? ";
                BodyFactorsResponse bodyFactors = (BodyFactorsResponse) jdbcTemplate.queryForObject(query, new Object[]{traineeId,date1}, new BeanPropertyRowMapper(BodyFactorsResponse.class));
                return bodyFactors;
        }

        //to progress chart

        public List<TraineeProgressResponse> getTraineeProgress(Long traineeId) {
                MapSqlParameterSource namedParameters =
                        new MapSqlParameterSource();
                namedParameters.addValue("traineeId", traineeId);
                String query="SELECT weight,height,biceps,chest,forearms,hips,thighs,training_date FROM workout_plan INNER JOIN workout_schedule ON " +
                        "workout_plan.workout_scheduleid=workout_schedule.workout_scheduleid " +
                        "AND workout_schedule.trainee_id=:traineeId AND workout_plan.height IS NOT NULL ORDER BY workout_plan.training_date DESC LIMIT 5";
                List<TraineeProgressResponse> traineeProgressResponses = jdbc.query(query, namedParameters, new BeanPropertyRowMapper<TraineeProgressResponse>(TraineeProgressResponse.class));
                System.out.println("progress retrived :"+traineeProgressResponses);
                return traineeProgressResponses;
        }


        public List<TrainerListResponse> getTrainers() {
                String query="SELECT staff_id as id,CONCAT(staff_member.first_name,' ',staff_member.last_name) as name" +
                        " FROM staff_member INNER JOIN user_account ON staff_member.user_id=user_account.user_id " +
                        "AND user_account.status=1 AND (user_account.user_level='Owner' OR user_account.user_level='Trainer') " +
                        "AND is_hold=0 AND status=1 " ;
                List<TrainerListResponse> traineeProgressResponses = jdbc.query(query, new BeanPropertyRowMapper<TrainerListResponse>(TrainerListResponse.class));
                return traineeProgressResponses;
        }
}

