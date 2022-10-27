import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

//GET PAYMENT PLAN TABLE DETAILS

export const getPaymentPlanTableDetails = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/(CashPaymentController)`,
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

// ADD PAYMENT PLAN

export const addPaymentPlan = (requestData) => {
    return axios({
        method: "POST",
        url: `${USER_URL}/newPaymentPlan`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: requestData,
    });
};

//RECEPTIONIST TRANSACTIONS TABLE

export const getTransactionDetails = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/transactions`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

//RECEPTIONIST TRANSACTIONS TOTAL PAYMENTS

export const getTotalPayments = () => {
    
    return axios({
        method: "GET",
        url: `${USER_URL}/cards`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

//RECEPTIONIST TRANSACTIONS TOTAL CASH PAYMENTS

export const getTotalCashPayments = () => {
    
    return axios({
        method: "GET",
        url: `${USER_URL}/cash`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

//RECEPTIONIST TRANSACTIONS TOTAL ONLINE PAYMENTS

export const getTotalOnlinePayments = () => {
    
    return axios({
        method: "GET",
        url: `${USER_URL}/online`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};




                        //PAYMENT MODAL RELATED
//GET DETAILS FOR PAYMENT POPUP
export const getPaymentDetails = (trainee_ID) => {
    return axios({
        method: "GET",
        url: `${USER_URL}/getPayment/${trainee_ID}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

//POST CASH PAYMENT
export const postCashPayment = (requestData) => {
    return axios({
        method: "POST",
        url: `${USER_URL}/cashPayment`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: requestData,
    });
};