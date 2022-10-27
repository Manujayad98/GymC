import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

//GET DETAILS FOR Check in POPUP
export const getCheckinUserDetails = (trainee_ID) => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getCheckUserDetails/${trainee_ID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

//POST Check in 
export const postCheckIn = (requestData) => {
    return axios({
        method: "POST",
        url: `${USER_URL}/cashPayment`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: requestData,
    });
};