package com.example.gymcbackend.repository.notificationDao;

import com.example.gymcbackend.dto.AnnoucementsResponse;
import com.example.gymcbackend.dto.NotificationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NotificationJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<NotificationResponse> getUnreadNotifications() {
        String query="SELECT announcementid AS id,topic AS title,CONCAT('by -',staff_member.staff_type,' ',time) as author,description AS note FROM announcement INNER JOIN staff_member ON announcement.staff_id=staff_member.staff_id ORDER BY announcement.announcementid DESC LIMIT 20";
        List<NotificationResponse> notificationResponses = jdbc.query(query, new BeanPropertyRowMapper<NotificationResponse>(NotificationResponse.class));
        System.out.println("annocements retrival");
        return notificationResponses;
    }
}
