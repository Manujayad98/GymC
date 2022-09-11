package com.example.gymcbackend.services;

import com.example.gymcbackend.entities.Exercise;
import com.example.gymcbackend.repository.ExerciseDao.ExerciseJdbcRepository;
import com.example.gymcbackend.repository.ExerciseDao.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.gymcbackend.dto.ExerciseTableData;

import java.util.List;

@Service
public class ExerciseService {

    @Autowired
    ExerciseRepository exerciseRepository;

    @Autowired
    ExerciseJdbcRepository exerciseJdbcRepository;

    public List<ExerciseTableData> getExerciseDetails() {
        return exerciseJdbcRepository.findAllExerciseDetails();
    }

    public String newExercise(Exercise exercise) {
        Exercise exercise1 = new Exercise();

        exercise1.setName(exercise.getName());
        exercise1.setCaloriesPerRep(exercise.getCaloriesPerRep());
        exercise1.setPrimaryMuscle(exercise.getPrimaryMuscle());
        exercise1.setSecondaryMuscle(exercise.getSecondaryMuscle());
        exercise1.setEquipment(exercise.getEquipment());

        exerciseRepository.save(exercise1);

        return "Your have successfully added a new exercise";

    }

    public long changeExerciseStatus(String staffUserID, Integer sts) {

        String staffID = staffUserID;
//        System.out.println("trainerservice");

        Long result = Long.parseLong(String.valueOf(staffID));
//        System.out.println("trainerservic2");

        
        return exerciseJdbcRepository.changeExerciseDeleteStatus(result);


    }
}