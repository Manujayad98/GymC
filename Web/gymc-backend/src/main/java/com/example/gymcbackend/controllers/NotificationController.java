package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.AnnoucementsResponse;
import com.example.gymcbackend.dto.NotificationResponse;
import com.example.gymcbackend.services.NotificationService;
import com.example.gymcbackend.services.TraineeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public class NotificationController {

    @Autowired
    NotificationService notificationService;

    @GetMapping("/unreadNotifications")
    public List<NotificationResponse> getUnreadNotifications(){
        return notificationService.getUnreadNotify();
    }

}
