import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";
const getToken = () => {
    return localStorage.getItem("USER_KEY");
};

export const getUsers = () => {
    // return axios.get(USER_URL);
    return axios({
        method: "GET",
        url: `${USER_URL}/users`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const getProfile = (userName) => {
    // return axios.get(USER_URL);
    // console.log('awa');
    return axios({
        method: "GET",
        url: `${USER_URL}/users/${userName}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

export const updatePassword = (password, userName) => {
    console.log(userName);
    // return axios.get(USER_URL);
    return axios({
        method: "PUT",
        url: `${USER_URL}/changePassword/${userName}`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: password,
    });
};

export const registerUser = (requestData) => {
    return axios({
        method: "POST",
        url: `${USER_URL}/registerUser`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: requestData,
    });
};


export const updateUserProfile = (profile) => {
    return axios({
        method: "PUT",
        url: `${USER_URL}/updateProfile`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
        data: profile,
    });
};

export const getAllStaffUsers = () => {
    return axios({
        method: "GET",
        url: `${USER_URL}/staffMembers`,
        headers: {
            Authorization: "Bearer " + getToken(),
        },
    });
};

