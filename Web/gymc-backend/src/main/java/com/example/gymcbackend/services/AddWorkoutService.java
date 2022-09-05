package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.TraineeAddWorkoutDetailsResponse;
import com.example.gymcbackend.dto.TraineeViewScheduleDetailsResponse;
import com.example.gymcbackend.entities.StaffMember;
import com.example.gymcbackend.repository.TraineeViewScheduleDao.TraineeViewScheduleJdbcRepository;
import com.example.gymcbackend.repository.addWorkoutDao.AddWorkoutJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddWorkoutService {

    @Autowired
    AddWorkoutJdbcRepository traineeAddWorkoutJdbcRepository;

    public String addWorkout(StaffMember staffMember) {
        List<TraineeAddWorkoutDetailsResponse> traineeaddWorkout = traineeAddWorkoutJdbcRepository.addWorkout(staffMember.getId());
        return traineeaddWorkout.toString();

    }
}
