import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

//GET ADJUSTMENT COUNT TABLE DETAILS

export const getAdjustmentCountDetails = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/adjustmentCount`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};