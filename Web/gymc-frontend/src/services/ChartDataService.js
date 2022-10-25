import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

export const getAnnualIncomeChartData = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/annualIncomeChartData`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};
export const getThisMonthIncomeIncomeChartData = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/thisMonthIncome`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};


export const getCardData = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/ownerDashboardCardData`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};