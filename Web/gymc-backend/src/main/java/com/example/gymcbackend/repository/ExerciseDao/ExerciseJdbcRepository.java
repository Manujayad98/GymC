package com.example.gymcbackend.repository.ExerciseDao;

import com.example.gymcbackend.dto.ExerciseDetailsResponse;
import com.example.gymcbackend.dto.ExerciseTableData;
import com.example.gymcbackend.dto.TraineeViewScheduleDetailsResponse;
import com.example.gymcbackend.dto.TrainerTableData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ExerciseJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<ExerciseTableData> findAllExerciseDetails(){
        String query = "SELECT exerciseid AS exercise_id, name AS exercise_name, primary_muscle AS primary_muscle, secondary_muscle AS secondary_muscle FROM exercise WHERE status='1'";

        List<ExerciseTableData> ExerciseList = jdbc.query(query, new BeanPropertyRowMapper<ExerciseTableData>(ExerciseTableData.class));
        return ExerciseList;
    }


    public List<ExerciseDetailsResponse> getExerciseDetails(Long traineeId) {

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("id", traineeId);

        String query = "SELECT exerciseid,name,primary_muscle,secondary_muscle FROM exercise";
        List<ExerciseDetailsResponse> exerciseDetails = jdbc.query(query, new BeanPropertyRowMapper<ExerciseDetailsResponse>(ExerciseDetailsResponse.class));

        return exerciseDetails;
    }
}
