package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.TraineeDetailsResponse;
import com.example.gymcbackend.repository.traineeDao.TraineeJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TraineeService {

    @Autowired
    TraineeJdbcRepository traineeJdbcRepository;

    public List<TraineeDetailsResponse> getAllTrainees() {
        List<TraineeDetailsResponse> trainees = traineeJdbcRepository.getAllTrainees();
        return trainees;
    }
}
