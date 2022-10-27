package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.NotificationResponse;
import com.example.gymcbackend.entities.TimeSlot;
import com.example.gymcbackend.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class NotificationController {

    @Autowired
    NotificationService notificationService;


    @GetMapping("/notifications/{userId}")
    public List<NotificationResponse> getUnreadNotifications(@PathVariable String userId){
        return notificationService.getUnreadNotify(userId);
    }

    @GetMapping("/readNotifications/{userId}")
    public List<NotificationResponse> getReadNotifications(@PathVariable long userId){
        return notificationService.getReadNotify(userId);
    }

}
