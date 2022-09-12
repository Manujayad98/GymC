package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.AnnualIncome;
import com.example.gymcbackend.dto.StaffUsers;
import com.example.gymcbackend.repository.analyticsReportDao.AnalyticsreportJdbcRepository;
import com.example.gymcbackend.repository.staffMemberDao.StaffMemberJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnalyticsReportService {
    @Autowired
    AnalyticsreportJdbcRepository analyticsreportJdbcRepository;

    public List<AnnualIncome> getAnnualIncome() {
        System.out.println("getAnnualIncome");
        return analyticsreportJdbcRepository.getAnnualIncomeChartData();
    }
}
