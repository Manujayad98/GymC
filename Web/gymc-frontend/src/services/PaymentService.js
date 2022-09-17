import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

//GET PAYMENT PLAN TABLE DETAILS

export const getPaymentPlanTableDetails = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/paymentPlanMethods`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

