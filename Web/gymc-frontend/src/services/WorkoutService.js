import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

export const getTrainerData = () => {
    // return axios({
    //     method: "GET",
    //     url: `${USER_URL}/xxxxxxxx`,
    //     headers: {
    //         Authorization: "Bearer " + getToken(),
    //     },
    // });
};

export const addWorkoutDetails = (requestData) => {
    // return axios({
    //     method: "POST",
    //     url: `${USER_URL}/xxxxxxx`,
    //     headers: {
    //         Authorization: "Bearer " + getToken(),
    //     },
    //     data: requestData,
    // });
};

export const addWorkoutDateExerciseDetails = (requestData) => {
    // return axios({
    //     method: "POST",
    //     url: `${USER_URL}/xxxxxxx`,
    //     headers: {
    //         Authorization: "Bearer " + getToken(),
    //     },
    //     data: requestData,
    // });
};

export const addDietPlanDetails = (requestData) => {
    // return axios({
    //     method: "POST",
    //     url: `${USER_URL}/xxxxxxx`,
    //     headers: {
    //         Authorization: "Bearer " + getToken(),
    //     },
    //     data: requestData,
    // });
};