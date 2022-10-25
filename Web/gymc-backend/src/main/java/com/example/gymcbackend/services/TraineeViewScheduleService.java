package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.*;
import com.example.gymcbackend.entities.TimeSlot;
import com.example.gymcbackend.entities.TimeSlotTwo;
import com.example.gymcbackend.repository.TraineeViewScheduleDao.TraineeViewScheduleJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TraineeViewScheduleService {

    @Autowired
    TraineeViewScheduleJdbcRepository traineeViewScheduleJdbcRepository;

    public List<TraineeViewScheduleDetailsResponse> getTraineeSchedule(String traineeId) {
        System.out.println("schedule service");
        List<TraineeViewScheduleDetailsResponse> traineeViewSchedule = traineeViewScheduleJdbcRepository.getTraineeSchedule(traineeId);
        return traineeViewSchedule;

    }

    public List<TraineeViewWorkoutDateResponse> getTraineeDateWorkoutPlan(LocalDate traineeDate,Long traineeId) {

        List<TraineeViewWorkoutDateResponse> traineeViewWorkoutDate = traineeViewScheduleJdbcRepository.getWorkoutDate(traineeDate,traineeId);
        return traineeViewWorkoutDate;
    }


    public List<DietPlanResponse> getTraineeDateDietPlan(LocalDate traineeDate,Long traineeId) {
        List<DietPlanResponse> traineeViewDietDate = traineeViewScheduleJdbcRepository.getDietDate(traineeDate,traineeId);
        return traineeViewDietDate;
    }

    public TimeSlotResponse getDate(LocalDate date1, Long staffId) {
        TimeSlotTwo timeSlot= traineeViewScheduleJdbcRepository.getDateAvailability(date1,staffId);
        Integer shiftNo= traineeViewScheduleJdbcRepository.getShiftNo(staffId,date1);
        TimeSlotResponse timeSlotResponse = new TimeSlotResponse();
        timeSlotResponse.setShiftNo(shiftNo);
        timeSlotResponse.setTimeSlot(timeSlot);
        return timeSlotResponse;
    }

    public BodyFactorsResponse getWorkoutPlanBodyFactors(LocalDate date1, Long traineeId) {
        BodyFactorsResponse bodyFactors= traineeViewScheduleJdbcRepository.getBodyFactors(date1,traineeId);
        return bodyFactors;
    }

    public List<TraineeProgressResponse> getTraineeProgressServ(Long result) {
        List<TraineeProgressResponse> traineeProgressResponses= traineeViewScheduleJdbcRepository.getTraineeProgress(result);
        return traineeProgressResponses;
    }

    public long isExistAWorkout(String traineeId, LocalDate date){

        String traineeID = traineeId.substring(4);

        Long result = Long.parseLong(String.valueOf(traineeID));

        return traineeViewScheduleJdbcRepository.isExistAWorkout(result, date);
    }
}
