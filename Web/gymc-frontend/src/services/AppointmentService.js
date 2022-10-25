import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

//GET APPOINMENT TABLE DETAILS

export const getAppointmentTableDetails = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/appointments`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

//GET UPCOMING APPOINMENT TABLE DETAILS FOR RECEPT DASHBOARD

export const getUpcomingAppointmentTableDetails = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/upcomingappointments`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};
