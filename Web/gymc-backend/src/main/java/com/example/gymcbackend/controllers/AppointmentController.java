package com.example.gymcbackend.controllers;
import com.example.gymcbackend.dto.AppointmentTableData;
import com.example.gymcbackend.dto.MyAppointments;
import com.example.gymcbackend.services.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
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
    @PutMapping("/myappointments/{traineeID}")
    public List<MyAppointments> getAllMyAppointments(@PathVariable String traineeID){
        System.out.println("one");
        return appointmentService.getAllMyAppointments(traineeID);
    }
}
