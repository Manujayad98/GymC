package com.example.gymcbackend.repository.adjustmentCountDao;

import com.example.gymcbackend.dto.AdjustmentCount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AdjustmentCountJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<AdjustmentCount> findAllAdjustmentCountDetails(){
        String query = "SELECT appoinment_count AS appoinment_count, leave_count AS leave_count FROM adjustment_count";

        List<AdjustmentCount> CountList = jdbc.query(query, new BeanPropertyRowMapper<AdjustmentCount>(AdjustmentCount.class));
        return CountList;
    }
}
