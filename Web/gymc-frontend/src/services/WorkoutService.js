import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

export const getTrainerData = (traineeID) => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getTraineeSchedule/${traineeID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const getWorkoutDetails = (date, traineeID) => {
    console.log('sasa');
    return axios({
        method: "GET",
        url: `${USER_URL}/getTraineeWorkout/${date}/${traineeID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const getTraineeDiet = (date, traineeID) => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getTraineeDiet/${date}/${traineeID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const addWorkoutDetails = (requestData, traineeID) => {
    return axios({
        method: "POST",
        url: `${USER_URL}/addWorkoutSchedule/${traineeID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: requestData,
    });
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
