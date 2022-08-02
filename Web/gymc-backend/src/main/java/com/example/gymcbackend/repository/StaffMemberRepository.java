package com.example.gymcbackend.repository;

import com.example.gymcbackend.entities.StaffMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffMemberRepository extends JpaRepository<StaffMember, Long> {
}
