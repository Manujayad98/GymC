package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.Profile;
import com.example.gymcbackend.dto.Password;
import com.example.gymcbackend.dto.StaffUsers;
import com.example.gymcbackend.dto.TraineeInfo;
import com.example.gymcbackend.entities.StaffMember;
import com.example.gymcbackend.entities.Trainee;
import com.example.gymcbackend.entities.UserAccount;
import com.example.gymcbackend.repository.staffMemberDao.StaffMemberRepository;
import com.example.gymcbackend.repository.traineeDao.TraineeRepository;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsRepository;
import com.example.gymcbackend.services.CustomUserService;
import com.example.gymcbackend.services.PasswordService;
import com.example.gymcbackend.services.StaffMemberService;
import com.example.gymcbackend.services.TraineeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserAccountDetailsRepository userAccountDetailsRepository;

    @Autowired
    private StaffMemberRepository staffMemberRepository;

    @Autowired
    private TraineeRepository traineeRepository;


    @Autowired
    private CustomUserService customUserService;

    @Autowired
    private StaffMemberService staffMemberService;

    @Autowired
    private TraineeService traineeService;

    @Autowired
    PasswordService passwordService;

    // FOR TESTING
    @GetMapping("/test")
    public String test(){
        return "Hello!";
    }

    // GET A LIST OF ALL USER ACCOUNTS
    @GetMapping("/users")
    public List<UserAccount> getAllUsers(){
        return userAccountDetailsRepository.findAll();
    }

//    @GetMapping("/users/{id}")
//    public Optional<UserAccount> getUserByUsername(@PathVariable String userName){
//        return customUserService.loadUserByUsername(userName);
//    }

    // GET USER DETAILS BY USERNAME
    @GetMapping("/users/{userName}")
    public Profile getUserById(@PathVariable String userName){
        return customUserService.getUserByUsername(userName);
    }

    // CHANGE PASSWORD FROM PROFILE
    @PutMapping("/changePassword/{userName}")
    public long changePassword(@RequestBody Password password, @PathVariable String userName){
        return passwordService.changePassword(password,userName);
    }

    // REGISTER A STAFF MEMBER
    @PostMapping("/registerUser")
    public String registerUser(@RequestBody StaffMember staffMember){
        return staffMemberService.register(staffMember);
    }

    // UPDATE USER'S PROFILE DETAILS
    @PutMapping("/updateProfile")
    public long updateProfile(@RequestBody Profile profile){
        return staffMemberService.updateProfile(profile);
    }

    // GET DATA FOR USER TABLE
    @GetMapping("/staffMembers")
    public List<StaffUsers> getAllStaffMembers(){
        return staffMemberService.getAllStaffMembers();
    }

    // GET DATA FOR TRAINEE TABLE
    @GetMapping("/trainees")
    public List<TraineeInfo> getAllTrainees(){

        return traineeService.getAllTrainees();
    }
}
