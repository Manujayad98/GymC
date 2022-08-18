package com.example.gymcbackend.services;

import com.example.gymcbackend.entities.Trainee;
import com.example.gymcbackend.entities.UserAccount;
import com.example.gymcbackend.repository.traineeDao.TraineeJdbcRepository;
import com.example.gymcbackend.repository.traineeDao.TraineeRepository;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsJdbcRepository;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.stream.Collectors;

@Service
public class SignUpService {

    @Autowired
    UserAccountDetailsJdbcRepository userAccountDetailsJdbcRepository;

    @Autowired
    UserAccountDetailsRepository userAccountDetailsRepository;

    @Autowired
    TraineeRepository traineeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender mailSender;


    public String signUp(Trainee trainee) {

        int rowCount1 = userAccountDetailsJdbcRepository.checkEmailExists(trainee.getEmail());

        SimpleMailMessage message=new SimpleMailMessage();

        if(rowCount1>0){
            return "You have already an account!";
        }else{
            Trainee success=traineeRepository.save(trainee);

            String pw=generateRandomPassword(8, 97, 122);

            UserAccount user=new UserAccount();

            user.setUserName(trainee.getFirstName());
            user.setEmail(trainee.getEmail());
            user.setMemberId(trainee.getId());
            user.setPassword(passwordEncoder.encode(pw));
            user.setStatus(true);
            user.setUserLevel("Trainee");

            userAccountDetailsRepository.save(user);

            message.setFrom("thirdyeargroupproject2@gmail.com");
            message.setTo(trainee.getEmail());


            String mainContent="Welcome to the Gym C.\n"+
                    "Your have successfully registered.\n" +
                    "Welcome to the gym c!\n" +
                    "We have provided a auto generated password for you.\n" +
                    "Please change the password for security purposes\nYour Password : ";

            message.setText(mainContent + pw + "\n" + "Your Username : "+trainee.getFirstName());
            message.setSubject("Welcome to the GYM C!");

            mailSender.send(message);

            return "Your have successfully registered!";
        }
    }

    public static String generateRandomPassword(int len, int randNumOrigin, int randNumBound)
    {
        SecureRandom random = new SecureRandom();
        return random.ints(len, randNumOrigin, randNumBound + 1)
                .mapToObj(i -> String.valueOf((char)i))
                .collect(Collectors.joining());
    }


}
