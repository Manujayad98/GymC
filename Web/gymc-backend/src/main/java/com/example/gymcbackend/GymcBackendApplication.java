package com.example.gymcbackend;

import com.example.gymcbackend.repository.staffMemberDao.StaffMemberRepository;
import com.example.gymcbackend.repository.traineeDao.TraineeRepository;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

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
//		staffMember.setAddress("No,487/2, Temple road, Narammala");
//		staffMember.setGender('F');
//		staffMember.setNic("199954872540");
//		staffMember.setPhoneNumber("0714557892");
//		staffMember.setStaffType(2);
//
//		staffMemberRepository.save(staffMember);
//
//		int staffMemId= (int) staffMember.getId();
//
//		user.setUserName("SumuduP");
//		user.setMemberId(staffMemId);
//		user.setPassword("12345678");
//		user.setEmail("sumuduperera98@gmail.com");
//		user.setUserLevel("Owner");
//		user.setPassword(passwordEncoder.encode("123456789"));
//		user.setStatus(true);
//
//		userAccountDetailsRepository.save(user);
//	}

}
