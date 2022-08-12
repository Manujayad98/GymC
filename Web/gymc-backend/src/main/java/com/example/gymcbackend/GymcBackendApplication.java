package com.example.gymcbackend;

import com.example.gymcbackend.entities.StaffMember;
import com.example.gymcbackend.entities.UserAccount;
import com.example.gymcbackend.repository.staffMemberDao.StaffMemberRepository;
import com.example.gymcbackend.repository.traineeDao.TraineeRepository;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class GymcBackendApplication {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserAccountDetailsRepository userAccountDetailsRepository;

	@Autowired
	private StaffMemberRepository staffMemberRepository;

	@Autowired
	private TraineeRepository traineeRepository;

	public static void main(String[] args) {
		SpringApplication.run(GymcBackendApplication.class, args);
		System.out.println("can login");
	}

	// To init a user
//	@PostConstruct
//	protected void init() {
//
//		UserAccount user=new UserAccount();
//		StaffMember staffMember= new StaffMember();
//
//		staffMember.setFirstName("Sudam");
//		staffMember.setLastName("Munasinghe");
//		staffMember.setAddress("No,324/3, Highlevel road, Nugegoda");
//		staffMember.setGender('M');
//		staffMember.setNic("199845247600");
//		staffMember.setPhoneNumber("0775475140");
//		staffMember.setStaffType(3);
//
//		staffMemberRepository.save(staffMember);
//
//		int staffMemId= (int) staffMember.getId();
//
//		user.setUserName("SudamM");
//		user.setMemberId(staffMemId);
//		user.setPassword("12345678");
//		user.setEmail("sudammunasinghe@gmail.com");
//		user.setUserLevel("Receptionist");
//		user.setPassword(passwordEncoder.encode("123456789"));
//		user.setStatus(true);
//
//		userAccountDetailsRepository.save(user);
//	}

}
