package com.example.gymcbackend.repository.ExerciseDao;

import com.example.gymcbackend.dto.ExerciseDetailsResponse;
import com.example.gymcbackend.dto.ExerciseTableData;
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

        public List<ExerciseTableData> findAllExerciseDetails() {
                String query = "SELECT exerciseid AS exercise_id, name AS exercise_name, primary_muscle AS primary_muscle, secondary_muscle AS secondary_muscle FROM exercise WHERE status='1'";

                List<ExerciseTableData> ExerciseList = jdbc.query(query,
                                new BeanPropertyRowMapper<ExerciseTableData>(ExerciseTableData.class));
                return ExerciseList;
        }

        public long changeExerciseDeleteStatus(Long userID) {

                Integer x = 0;
                MapSqlParameterSource namedParameters = new MapSqlParameterSource();
                String update = "UPDATE exercise " +
                                "SET status = :status WHERE exerciseid = :exerciseid;";

                namedParameters.addValue("status", x);
                namedParameters.addValue("exerciseid", userID);

                int rowAffected = jdbc.update(update, namedParameters);

                return rowAffected;
        }

        public List<ExerciseDetailsResponse> getExerciseDetailsList() {

                MapSqlParameterSource namedParameters = new MapSqlParameterSource();

                // namedParameters.addValue("id", traineeId);

                String query = "SELECT CONCAT('E000',exerciseID) AS exerciseId,name FROM exercise";
                // add colum reps and return 0 for all
                List<ExerciseDetailsResponse> exerciseDetails = jdbc.query(query,
                                new BeanPropertyRowMapper<ExerciseDetailsResponse>(ExerciseDetailsResponse.class));

                return exerciseDetails;
        }
}
