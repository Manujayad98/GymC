package com.example.gymcbackend.repository.notificationDao;

import com.example.gymcbackend.dto.NotificationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NotificationJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<NotificationResponse> getUnreadNotifications(long userId) {


        System.out.println("inside the unread notifi jdbc");
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        namedParameters.addValue("userId", userId);

        System.out.println("userId:"+userId);
        String query="SELECT notification_id AS notificationId,topic,time,description FROM notification " +
                "INNER JOIN user_account ON notification.user_id=user_account.user_id " +
                "AND notification.state=0 AND notification.user_id=:userId ORDER BY notification.notification_id DESC ";
        List<NotificationResponse> notificationResponses = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<NotificationResponse>(NotificationResponse.class));
        System.out.println("un read notification retrival");
        return notificationResponses;
    }

    public List<NotificationResponse> getReadNotifications(long userId) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        namedParameters.addValue("userId", userId);

        String query="SELECT notification_id AS notificationId,topic AS title,time,description FROM notification " +
                "INNER JOIN user_account ON notification.user_id=user_account.user_id " +
                "AND notification.state=1 AND notification.user_id=:userId ORDER BY notification.notification_id DESC LIMIT 20";

        List<NotificationResponse> notificationResponses = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<NotificationResponse>(NotificationResponse.class));
        System.out.println("read notification retrival");
        return notificationResponses;
    }
}
