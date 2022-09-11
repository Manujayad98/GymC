package com.example.gymcbackend.repository.shiftDetailsDao;

import com.example.gymcbackend.entities.Exercise;
import com.example.gymcbackend.entities.ShiftDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShiftDetailsRepository extends JpaRepository<ShiftDetails,Long> {
}
