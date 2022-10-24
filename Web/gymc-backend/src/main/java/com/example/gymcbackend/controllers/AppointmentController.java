package com.example.gymcbackend.controllers;
import com.example.gymcbackend.dto.AppointmentTableData;
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
}
