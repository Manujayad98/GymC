import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const Login = (userName, password) => {

        setIsLoading(true);
        console.log("username :", userName);
        console.log("password :", password);


        axios
            .post("http://192.168.43.134:8080/api/v1/user/auth/login", {
                userName,
                password,
            })
            .then((res) => {
                console.log("sign in response: ", res.data.userName);
                const token = res.data;
                setUserToken(token);
                AsyncStorage.setItem("userToken", JSON.stringify(userToken));
            })
            .catch((e) => {
                console.log("log in error: ", e);
            });
        setIsLoading(false);
    };

    const Logout = async () => {
        setIsLoading(true);
        setUserToken(null);
        await AsyncStorage.removeItem("userToken");
        setIsLoading(false);
        console.log("sign out user token: ", userToken);
    };

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            // console.log("is logged in user token before set token ", userToken);
            let userToken = await AsyncStorage.getItem("userToken");
            console.log("is logged in AsyncStorage before set token ", userToken);
            if (userToken == "null" || userToken == null) {
                setUserToken(null);
            } else {
                setUserToken(userToken);
            }
            console.log("is logged in user token after set token ", userToken);

            //   console.log("is logged in user token", userToken);
            setIsLoading(false);
        } catch (e) {
            console.log("is logged in error: ", e);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);
    return (
        <AuthContext.Provider value={{ Login, Logout, isLoading, userToken }}>
            {children}
        </AuthContext.Provider>
    );

}