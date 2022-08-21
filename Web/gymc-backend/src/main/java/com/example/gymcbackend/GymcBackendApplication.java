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
//		user.setUserName("199874511111");
////		user.setMemberId(staffMemId);
//		user.setPassword("123456789");
//		user.setEmail("sudam@gmail.com");
//		user.setUserLevel("Admiin");
//		user.setPassword(passwordEncoder.encode("123456789"));
//		user.setStatus(true);
//
//		userAccountDetailsRepository.save(user);
//
//		staffMember.setFirstName("Sudam");
//		staffMember.setLastName("Mune");
//		staffMember.setAddress("No,324/3, Dewalapara, Panadura");
//		staffMember.setGender('F');
//		staffMember.setNic("199874511111");
//		staffMember.setPhoneNumber("0773514180");
//		staffMember.setStaffType(3);
////		staffMember.setId(8);
//
//		staffMemberRepository.save(staffMember);
//
////		Long staffMemId= (Long) staffMember.getId();
//
//
//	}

	//Staff Types
	//Owner : 1
	//Receptionist : 2
	//Trainer : 3
	//Admin : 4
}
