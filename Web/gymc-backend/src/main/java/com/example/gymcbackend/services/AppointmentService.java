package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.AppointmentTableData;
import com.example.gymcbackend.dto.MyAppointments;
import com.example.gymcbackend.dto.UpcomingReservations;
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

    public List<AppointmentTableData> getAllUpcomingAppointmentTableData() {
        return appointmentJdbcRepository.findAllUpcomingAppointments();
    }

    public List<MyAppointments> getAllMyAppointments(String traineeID) {
        System.out.println("two");
        String traineeid = traineeID.substring(4);

        long result = Long.parseLong(String.valueOf(traineeid));
        System.out.println(result);
        return appointmentJdbcRepository.findAllMyAppointments(result);
    }

    public List<UpcomingReservations> getAllUpcomingReservationsTableData() {
        return appointmentJdbcRepository.findAllUpcomingReservations();
    }

}
