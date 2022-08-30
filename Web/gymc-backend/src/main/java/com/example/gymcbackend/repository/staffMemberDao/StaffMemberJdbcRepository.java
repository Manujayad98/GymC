package com.example.gymcbackend.repository.staffMemberDao;

import com.example.gymcbackend.dto.Profile;
import com.example.gymcbackend.dto.StaffUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StaffMemberJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public long updateProfile(Profile profile) {
//        System.out.println("sdsdsdsd3");

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String updateUserAccount = "UPDATE user_account " +
                "SET email = :email  WHERE user_id = :userId;";
        String updateStaffMember="UPDATE staff_member " +
                    "SET email = :email, phone_number = :phoneNumber, address = :address  WHERE user_id = :userId;";

        namedParameters.addValue("userId", profile.getUser_id());
        namedParameters.addValue("email", profile.getEmail());
        namedParameters.addValue("phoneNumber", profile.getPhone_number());
        namedParameters.addValue("address", profile.getAddress());

        int tableUserAccount = jdbc.update(updateUserAccount, namedParameters);
        int tableStaffMember = jdbc.update(updateStaffMember, namedParameters);

        return  tableUserAccount+tableStaffMember;
    }

    public List<StaffUsers> findAllStaffMembers() {
        String query ="SELECT u.user_id, s.first_name, s.last_name, s.staff_type, u.status " +
                "FROM staff_member as s " +
                "INNER JOIN user_account as u ON s.user_id = u.user_id ";

        List<StaffUsers> staffUsersList = jdbc.query(query, new BeanPropertyRowMapper<StaffUsers>(StaffUsers.class));
        return staffUsersList;
    }
}
