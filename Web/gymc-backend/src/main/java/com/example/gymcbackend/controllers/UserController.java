package com.example.gymcbackend.controllers;

import com.example.gymcbackend.entities.UserAccount;
import com.example.gymcbackend.repository.UserAccountDetailsRepository;
import com.example.gymcbackend.services.CustomUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserAccountDetailsRepository userAccountDetailsRepository;

    @Autowired
    private CustomUserService customUserService;

    @GetMapping("/test")
    public String test(){
        return "Hello!";
    }

    @GetMapping("/users")
    public List<UserAccount> getAllUsers(){
        return userAccountDetailsRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public Optional<UserAccount> getUserById(@PathVariable Long id){
        return userAccountDetailsRepository.findById(id);
    }
}
