package com.example.gymcbackend.repository.appoinmentDao;

import com.example.gymcbackend.dto.AppointmentTableData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
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
}
