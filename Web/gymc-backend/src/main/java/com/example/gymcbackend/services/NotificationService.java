package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.NotificationResponse;
import com.example.gymcbackend.repository.notificationDao.NotificationJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    NotificationJdbcRepository notificationJdbcRepository;
    public List<NotificationResponse> getUnreadNotify(long userId) {
        System.out.println("inside the unread notifi service");
        List<NotificationResponse> notificationResponses = notificationJdbcRepository.getUnreadNotifications(userId);
        return notificationResponses;

    }

    public List<NotificationResponse> getReadNotify(long userId) {
        List<NotificationResponse> notificationResponses = notificationJdbcRepository.getReadNotifications(userId);
        return notificationResponses;
    }
}
