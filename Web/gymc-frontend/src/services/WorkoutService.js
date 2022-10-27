import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

export const getTrainerData = (traineeID) => {
    console.log(traineeID);
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

export const getExerciseDetails = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/scheduleWorkout`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const getAvailableSlots = (date, staffID) => {
    //initial 0 add
    return axios({
        method: "GET",
        url: `${USER_URL}/availabilityDate/${date}/${staffID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};



export const addWorkoutDate = (requestData, carbs, fats, protein) => {
    return axios({
        method: "POST",
        url: `${USER_URL}/addReservation/${carbs}/${fats}/${protein}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: requestData,
    });
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

export const getBodyFactorsForUpdate = (date, traineeID) => {
    console.log("factors");
    return axios({
        method: "GET",
        url: `${USER_URL}/getBodyFactors/${date}/${traineeID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const getExercisesForUpdate = (date, traineeID) => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getTraineeWorkout/${date}/${traineeID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const getDietPlanForUpdate = (date, traineeID) => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getTraineeDiet/${date}/${traineeID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const getAvailableTrainers = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getTrainers`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};


export const getTraineeProgressChart = (traineeID) => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getTraineeProgress/${traineeID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};
