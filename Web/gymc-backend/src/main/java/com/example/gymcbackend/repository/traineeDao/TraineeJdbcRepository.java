package com.example.gymcbackend.repository.traineeDao;

import com.example.gymcbackend.dto.StaffUsers;
import com.example.gymcbackend.dto.TraineeInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TraineeJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public List<TraineeInfo> findAllTrainees() {
        String query ="SELECT CONCAT('T000', t.trainee_id) AS trainee_id, CONCAT(t.first_name,' ', t.last_name) AS full_name, t.phone_number, t.address, u.registered_date " +
                "FROM trainee as t " +
                "INNER JOIN user_account as u ON t.user_id = u.user_id AND u.status=1 ";

        List<TraineeInfo> traineeList = jdbc.query(query, new BeanPropertyRowMapper<TraineeInfo>(TraineeInfo.class));
        return traineeList;
    }

}
