import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

//GET EXERCISE TABLE DETAILS

export const getExerciseTableDetails = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/exercises`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

//DELETE EXERCISE

export const deleteExercise = (exerciseID) => {
    return axios({
        method: "PUT",
        url: `${USER_URL}/deleteExercise/${exerciseID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};
