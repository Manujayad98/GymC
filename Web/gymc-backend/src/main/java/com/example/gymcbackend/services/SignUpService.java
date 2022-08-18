//package com.example.gymcbackend.services;
//
//import com.example.gymcbackend.entities.Trainee;
//import com.example.gymcbackend.entities.UserAccount;
//import com.example.gymcbackend.repository.traineeDao.TraineeJdbcRepository;
//import com.example.gymcbackend.repository.traineeDao.TraineeRepository;
//import com.example.gymcbackend.repository.userDao.UserAccountDetailsJdbcRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.security.SecureRandom;
//import java.util.stream.Collectors;
//
//@Service
//public class SignUpService {
//
//    @Autowired
//    UserAccountDetailsJdbcRepository userAccountDetailsJdbcRepository;
//
//    @Autowired
//    TraineeRepository traineeRepository;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//
//    public String signUp(Trainee trainee) {
////      check email is exists in user
//
//        int rowCount1 = userAccountDetailsJdbcRepository.checkEmailExists(trainee.getEmail());
//
//        SimpleMailMessage message=new SimpleMailMessage();
//
//        if(rowCount1>0){
//            return "You have already an account!";
//        }else{
//            Trainee success=traineeRepository.save(trainee);
//
//            message.setFrom("thirdyeargroupproject2@gmail.com");
//            message.setTo(trainee.getEmail());
//            String pw=generateRandomPassword(8, 97, 122);
//
//            String content="Your have successfully signed up.\n" +
//                    "Welcome to the gym c!\n" +
//                    "Your initial auto generated password attached with here.\n" +
//                    "Please change it into your own password\nPassword : ";
//
//            message.setText(content + pw + "\n" + "Username : "+trainee.getFirstName());
//            message.setSubject("Welcome to the GYM C!");
//
//            UserAccount user=new UserAccount();
//
//            user.setUserName(trainee.getFirstName());
//            user.setEmail(trainee.getEmail());
//            user.setMemberId(trainee.getId());
//            user.setPassword(passwordEncoder.encode(pw));
//            user.setStatus(true);
//            user.setUserLevel("Trainee");
//
//            return "Your have successfully registered!";
//        }
//    }
//
//    public static String generateRandomPassword(int len, int randNumOrigin, int randNumBound)
//    {
//        SecureRandom random = new SecureRandom();
//        return random.ints(len, randNumOrigin, randNumBound + 1)
//                .mapToObj(i -> String.valueOf((char)i))
//                .collect(Collectors.joining());
//    }
//
//
//}
