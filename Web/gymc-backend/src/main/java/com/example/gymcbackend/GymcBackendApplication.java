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
//		staffMember.setFirstName("Sumudu");
//		staffMember.setLastName("Perera");
//		staffMember.setAddress("No,324/3, Church road, Giriulla");
//		staffMember.setGender('F');
//		staffMember.setNic("199874513500");
//		staffMember.setPhoneNumber("0773514140");
//		staffMember.setStaffType(1);
//
//		staffMemberRepository.save(staffMember);
//
//		int staffMemId= (int) staffMember.getId();
//
//		user.setUserName("SumuduP");
//		user.setMemberId(staffMemId);
//		user.setPassword("123456789");
//		user.setEmail("sumuduperera@gmail.com");
//		user.setUserLevel("Admin");
//		user.setPassword(passwordEncoder.encode("123456789"));
//		user.setStatus(true);
//
//		userAccountDetailsRepository.save(user);
//	}

}
