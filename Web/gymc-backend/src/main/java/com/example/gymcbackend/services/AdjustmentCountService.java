package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.AdjustmentCount;
import com.example.gymcbackend.repository.adjustmentCountDao.AdjustmentCountJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdjustmentCountService {

    @Autowired
    AdjustmentCountJdbcRepository adjustmentCountJdbcRepository;

    public List<AdjustmentCount> getAdjustmentCountDetails() {
        return adjustmentCountJdbcRepository.findAllAdjustmentCountDetails();
    }

}
