package com.example.gymcbackend.repository;

import com.example.gymcbackend.entities.Trainee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TraineeRepository extends JpaRepository<Trainee, Long> {
}
