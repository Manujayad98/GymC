package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.CheckDetails;
import com.example.gymcbackend.dto.PaymentInfo;
import com.example.gymcbackend.repository.CheckDao.CheckJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CheckService {
    @Autowired
    CheckJdbcRepository checkJdbcRepository;

    public static CheckDetails getAllCheckDetails(long trainee_ID) {

        System.out.println("awaservice");

        return CheckJdbcRepository.getDetailsById(trainee_ID);

    }

}
