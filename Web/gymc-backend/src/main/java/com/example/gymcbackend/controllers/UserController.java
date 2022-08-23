package com.example.gymcbackend.controllers;

import com.example.gymcbackend.dto.Profile;
import com.example.gymcbackend.dto.Password;
import com.example.gymcbackend.entities.StaffMember;
import com.example.gymcbackend.entities.UserAccount;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsRepository;
import com.example.gymcbackend.services.CustomUserService;
import com.example.gymcbackend.services.PasswordService;
import com.example.gymcbackend.services.StaffMemberService;
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
    private CustomUserService customUserService;

    @Autowired
    private StaffMemberService staffMemberService;

    @Autowired
    PasswordService passwordService;

    @GetMapping("/test")
    public String test(){
        return "Hello!";
    }

    @GetMapping("/users")
    public List<UserAccount> getAllUsers(){
        return userAccountDetailsRepository.findAll();
    }

//    @GetMapping("/users/{id}")
//    public Optional<UserAccount> getUserByUsername(@PathVariable String userName){
//        return customUserService.loadUserByUsername(userName);
//    }

    @GetMapping("/users/{userName}")
    public Profile getUserById(@PathVariable String userName){
        return customUserService.getUserByUsername(userName);
    }

    @PutMapping("/changePassword/{userName}")
    public long changePassword(@RequestBody Password password, @PathVariable String userName){
//        System.out.println("pwcontroller");
        System.out.println(password.getNewPassword());
        return passwordService.changePassword(password,userName);
    }

    @PostMapping("/registerTrainer")
    public String registerTrainer(@RequestBody StaffMember staffMember){
        System.out.println("registerTrainer");
        return staffMemberService.register(staffMember);
    }

}
