package com.example.gymcbackend.repository.appoinmentDao;

import com.example.gymcbackend.dto.AppointmentTableData;
import com.example.gymcbackend.dto.MyAppointments;
import com.example.gymcbackend.dto.UpcomingReservations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class AppointmentJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public List<AppointmentTableData> findAllAppointments() {
//        System.out.println("awa2");

        String query ="SELECT CONCAT('A000', appointmentID) AS appointmentID, date AS date, start_time AS start_time, end_time AS end_time, CONCAT('S000', staff_id) AS staff_id, CONCAT('T000', trainee_id) AS trainee_id FROM appointment ";
//        System.out.println("awa3");

        List<AppointmentTableData> AppointmentList = jdbc.query(query, new BeanPropertyRowMapper<AppointmentTableData>(AppointmentTableData.class));
        return AppointmentList;
    }

    public List<AppointmentTableData> findAllUpcomingAppointments() {


        String query ="SELECT CONCAT('A000', appointmentID) AS appointmentID, date AS date, start_time AS start_time, end_time AS end_time, CONCAT('S000', staff_id) AS staff_id, CONCAT('T000', trainee_id) AS trainee_id FROM appointment WHERE date>=DATE(NOW())";


        List<AppointmentTableData> AppointmentList = jdbc.query(query, new BeanPropertyRowMapper<AppointmentTableData>(AppointmentTableData.class));
        return AppointmentList;
    }

    public List<MyAppointments> findAllMyAppointments(Long traineeID) {
//        System.out.println(traineeID);
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String query ="SELECT CONCAT('A000', appointmentID) AS appointmentID, date AS date, start_time AS start_time, end_time AS end_time, CONCAT('S000', staff_id) AS staff_id FROM appointment WHERE trainee_id = :trainee_id; ";
//        System.out.println("four");
        namedParameters.addValue("trainee_id", traineeID);


        List<MyAppointments> AppointmentList = jdbc.query(query, namedParameters, new BeanPropertyRowMapper<MyAppointments>(MyAppointments.class));
        return AppointmentList;
    }

    public List<UpcomingReservations> findAllUpcomingReservations() {


        String query ="SELECT CONCAT('T000', workout_schedule.trainee_id) AS trainee_id, workout_plan.training_date, workout_plan.start_time, workout_plan.end_time FROM workout_schedule INNER JOIN workout_plan ON workout_schedule.workout_scheduleid=workout_plan.workout_scheduleid WHERE training_date>=DATE(NOW())";


        List<UpcomingReservations> AppointmentList = jdbc.query(query, new BeanPropertyRowMapper<UpcomingReservations>(UpcomingReservations.class));
        return AppointmentList;
    }
}
