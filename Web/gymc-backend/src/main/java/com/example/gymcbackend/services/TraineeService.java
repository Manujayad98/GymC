package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.*;
import com.example.gymcbackend.repository.traineeDao.TraineeJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TraineeService {

    @Autowired
    private TraineeJdbcRepository traineeJdbcRepository;


    public List<TraineeInfo> getAllTrainees() {
        return traineeJdbcRepository.findAllTrainees();
    }


    public List<TodayAvailableTrainees> getTodayAvailableTrainees() {
        String today = String.valueOf(java.time.LocalDate.now());

        return traineeJdbcRepository.findTodayAvailableTrainees(today);
    }

    public List<AnnoucementsResponse> getAnn() {

        return traineeJdbcRepository.getAnnouncements();
    }

    public String addAnnouce(AnnouncementInput announcementInput) {
        String annSuccess= traineeJdbcRepository.addAnnouncement(announcementInput);
        return annSuccess;
    }
}
