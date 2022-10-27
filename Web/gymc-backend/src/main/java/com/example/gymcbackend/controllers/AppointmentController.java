package com.example.gymcbackend.controllers;
import com.example.gymcbackend.dto.AppointmentTableData;
import com.example.gymcbackend.dto.MyAppointments;
import com.example.gymcbackend.dto.UpcomingReservations;
import com.example.gymcbackend.services.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class AppointmentController {

    @Autowired
    AppointmentService appointmentService;

    // GET DATA FOR APPOINTMENT TABLE
    @GetMapping("/appointments")
    public List<AppointmentTableData> getAllAppointmentTableData(){
        return appointmentService.getAllAppointmentTableData();
    }

    // GET UPCOMING APPOINTMENT TABLE DATA FOR RECEPTIONIST DASHBOARD
    @GetMapping("/upcomingappointments")
    public List<AppointmentTableData> getAllUpcomingAppointmentTableData(){
        return appointmentService.getAllUpcomingAppointmentTableData();
    }

    // GET DATA FOR TRAINEE MY APPOINTMENTS
    @GetMapping("/myappointments/{traineeID}")
    public List<MyAppointments> getAllMyAppointments(@PathVariable String traineeID){
        System.out.println("one appointment");
        return appointmentService.getAllMyAppointments(traineeID);
    }

    //GET DATA FOR TRAINER RESERVATIONS
    @GetMapping("/reservations")
    public List<UpcomingReservations> getAllUpcomingReservationsTableData(){
        return appointmentService.getAllUpcomingReservationsTableData();
    }
}
