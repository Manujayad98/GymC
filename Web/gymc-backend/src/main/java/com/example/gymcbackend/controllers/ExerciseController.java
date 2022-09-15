package com.example.gymcbackend.controllers;

import com.example.gymcbackend.entities.Exercise;
import com.example.gymcbackend.services.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.gymcbackend.dto.ExerciseTableData;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class ExerciseController {

    @Autowired
    ExerciseService exerciseService;

    @PostMapping("/newExercise")
    public String newExercise(@RequestBody Exercise exercise){return exerciseService.newExercise(exercise);}

    @GetMapping("/exercises")
    public List<ExerciseTableData> getExerciseDetails(){
        return exerciseService.getExerciseDetails();
    }

    // DELETE EXERCISE
    @PutMapping("/deleteExercise/{exerciseID}")
    public long deleteExercise(@PathVariable String exerciseID){
        int sts= 0;
        return exerciseService.changeExerciseStatus(exerciseID,sts);

    }
}
