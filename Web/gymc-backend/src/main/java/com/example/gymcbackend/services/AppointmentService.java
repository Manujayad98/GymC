package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.AppointmentTableData;
import com.example.gymcbackend.repository.appoinmentDao.AppointmentJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AppointmentService {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    private AppointmentJdbcRepository appointmentJdbcRepository;

    public List<AppointmentTableData> getAllAppointmentTableData() {
//        System.out.println("awa");
        return appointmentJdbcRepository.findAllAppointments();
    }

}
