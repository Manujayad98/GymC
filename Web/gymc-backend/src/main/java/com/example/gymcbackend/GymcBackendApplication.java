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
//		staffMember.setFirstName("Kalindu");
//		staffMember.setLastName("Sampath");
//		staffMember.setAddress("No,324/3, Dewalapara, Panadura");
//		staffMember.setGender('M');
//		staffMember.setNic("199874513600");
//		staffMember.setPhoneNumber("0773514180");
//		staffMember.setStaffType(4);
//
//		staffMemberRepository.save(staffMember);
//
//		Long staffMemId= (Long) staffMember.getId();
//
//		user.setUserName("KalinduS");
//		user.setMemberId(staffMemId);
//		user.setPassword("123456789");
//		user.setEmail("sampath@gmail.com");
//		user.setUserLevel("Owner");
//		user.setPassword(passwordEncoder.encode("123456789"));
//		user.setStatus(true);
//
//		userAccountDetailsRepository.save(user);
//	}

}
