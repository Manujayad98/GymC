package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.AnnoucementsResponse;
import com.example.gymcbackend.dto.ExerciseDetailsResponse;
import com.example.gymcbackend.dto.NotificationResponse;
import com.example.gymcbackend.entities.Notification;
import com.example.gymcbackend.repository.addWorkoutDao.AddWorkoutJdbcRepository;
import com.example.gymcbackend.repository.notificationDao.NotificationJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    NotificationJdbcRepository notificationJdbcRepository;
    public List<NotificationResponse> getUnreadNotify() {
        List<NotificationResponse> notificationResponses = notificationJdbcRepository.getUnreadNotifications();
        return notificationResponses;

    }
}
