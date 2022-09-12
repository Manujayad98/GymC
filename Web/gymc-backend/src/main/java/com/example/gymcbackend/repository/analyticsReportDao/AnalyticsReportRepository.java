package com.example.gymcbackend.repository.analyticsReportDao;

import com.example.gymcbackend.entities.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnalyticsReportRepository extends JpaRepository<Exercise,Long> {
}
