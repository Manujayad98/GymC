import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

export const getTodaysTrainees = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/todayAvailableTrainees`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};
