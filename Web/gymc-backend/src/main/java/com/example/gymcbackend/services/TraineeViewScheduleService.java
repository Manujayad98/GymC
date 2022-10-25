package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.BodyFactorsResponse;
import com.example.gymcbackend.dto.ExerciseDetailsResponse;
import com.example.gymcbackend.dto.TraineeViewScheduleDetailsResponse;
import com.example.gymcbackend.dto.TraineeViewWorkoutDateResponse;
import com.example.gymcbackend.entities.DietPlan;
import com.example.gymcbackend.entities.TimeSlot;
import com.example.gymcbackend.repository.TraineeViewScheduleDao.TraineeViewScheduleJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
public class TraineeViewScheduleService {

    @Autowired
    TraineeViewScheduleJdbcRepository traineeViewScheduleJdbcRepository;

    public List<TraineeViewScheduleDetailsResponse> getTraineeSchedule(String traineeId) {
        System.out.println("schedule service");
        List<TraineeViewScheduleDetailsResponse> traineeViewSchedule = traineeViewScheduleJdbcRepository
                .getTraineeSchedule(traineeId);
        return traineeViewSchedule;

    }

    public List<TraineeViewWorkoutDateResponse> getTraineeDateWorkoutPlan(LocalDate traineeDate, Long traineeId) {

        List<TraineeViewWorkoutDateResponse> traineeViewWorkoutDate = traineeViewScheduleJdbcRepository
                .getWorkoutDate(traineeDate, traineeId);
        return traineeViewWorkoutDate;
    }

    public DietPlan getTraineeDateDietPlan(LocalDate traineeDate, Long traineeId) {
        DietPlan traineeViewDietDate = traineeViewScheduleJdbcRepository.getDietDate(traineeDate, traineeId);
        return traineeViewDietDate;
    }

    public TimeSlot getDate(LocalDate date1) {
        TimeSlot timeSlot = traineeViewScheduleJdbcRepository.getCalDate(date1);
        return timeSlot;
    }

    public BodyFactorsResponse getWorkoutPlanBodyFactors(LocalDate date1, Long traineeId) {
        BodyFactorsResponse bodyFactors = traineeViewScheduleJdbcRepository.getBodyFactors(date1, traineeId);
        return bodyFactors;
    }

    public List<TraineeProgressResponse> getTraineeProgressServ(Long result) {
        List<TraineeProgressResponse> traineeProgressResponses = traineeViewScheduleJdbcRepository
                .getTraineeProgress(result);
        return traineeProgressResponses;
    }

    public long isExistAWorkout(String traineeId, LocalDate date) {

        String traineeID = traineeId.substring(4);

        Long result = Long.parseLong(String.valueOf(traineeID));

        return traineeViewScheduleJdbcRepository.isExistAWorkout(result, date);
    }
}
