import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

//GET PAYMENT PLAN TABLE DETAILS

export const getPaymentPlanTableDetails = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getPayment/${trainee_ID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

// DELETE PAYMENT PLAN 

export const deletePaymentPlan = (planID) => {
    return axios({
        method: "PUT",
        url: `${USER_URL}/deletePaymentPlan/${planID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

