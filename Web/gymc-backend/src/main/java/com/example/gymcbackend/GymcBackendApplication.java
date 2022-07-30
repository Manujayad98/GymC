package com.example.gymcbackend;

import com.example.gymcbackend.repository.UserAccountDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;
import com.example.gymcbackend.entities.UserAccount;

@SpringBootApplication
public class GymcBackendApplication {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserAccountDetailsRepository userAccountDetailsRepository;

	public static void main(String[] args) {
		SpringApplication.run(GymcBackendApplication.class, args);
		System.out.println("can login");
	}

	// To init a user
//	@PostConstruct
//	protected void init() {

//		UserAccount user=new UserAccount();
//
//		user.setUserName("SumuduP");
//		user.setMemberId("S000001");
//		user.setPassword("12345678");
//
//		user.setPassword(passwordEncoder.encode("123456789"));
//		user.setStatus(true);
//
//		userAccountDetailsRepository.save(user);

//	}

}
