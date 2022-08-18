import React, { useState } from "react"
import { connect } from "react-redux";
import { userLogin } from "../../../../services/AuthenticationService";
import { fetchUserData } from "../../../../services/AuthenticationService";
import { authenticate, authFailure, authSuccess } from "../../../Redux/AuthAction";

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import Checkbox from "../../../Utilities/Form/Checkbox";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import LoginImage from "../../../../images/LoginPage.jpg"


import '../../all/resetPassword/ResetPassword.css'

const ResetPassword = ({ loading, error, ...props }) => {

    const [requestData, setValues] = useState({
        newPassword: "",
        confirmPassword: "",
        
    });

    const handleChange = (key) => (value) => {
        // key.persist();
        console.log(key,value);
        setValues({
            ...requestData,
            [key]: value });
    };


    const handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    // const handleMatch = e =>{
    //     if(requestData.newPassword === requestData.confirmPassword){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // };
    

    // let [authMode, setAuthMode] = useState("signin")

    // const changeAuthMode = () => {
    //     setAuthMode(authMode === "signin" ? "signup" : "signin")
    // }

    // const [values, setValues] = useState({
    //     userName: "",
    //     password: "",
    // });

    const userData = async () => {
        console.log('res1');
        const res = await fetchUserData();

        // console.log(res.data.userName);
        var userLevel = res.data.userLevel;

        if (userLevel === "Owner") {
            window.location.href = "/sidebar";
        } else if (userLevel === "Admin") {
            window.location.href = "/";
        } else if (userLevel === "Receptionist") {
            window.location.href = "/";
        } else {
            localStorage.clear();
            window.location.href = "/";
        }

    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.authenticate();    //do not reload the page
        // console.log(props);

        userLogin(requestData)
            .then((response) => {
                console.log("response->", response);
                if (response.status === 200) {
                    console.log("logging success");
                    props.setUser(response.data);
                    userData();
                } else {
                    console.log("logging fail");
                    props.loginFailure("1.Something Wrong!Please Try Again");
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    switch (err.response.status) {
                        case 401:
                            console.log("401 status");
                            props.loginFailure("Authentication Failed.Bad Credentials");
                            break;
                        default:
                            props.loginFailure("2.Something Wrong!Please Try Again!");
                    }
                } else {
                    // props.loginFailure("3.Something Wrong!Please Try Again");
                }
            });
        //console.log("Loading again",loading);
    };

    // const handleChange = (e) => {
    //     e.persist();
    //     // console.log(e.target.name+"-"+e.target.value)
    //     setValues((values) => ({
    //         ...values,
    //         [e.target.name]: e.target.value,
    //     }));
    // };
    return (
        <>
            <div className='form-div'>
                <form className="" onSubmit={handleSubmit} noValidate={false}>
                    <div className='resetPswd-form-container'>
                        <div className="resetPswd-form-content-left">
                            <div className="resetPswd-form-in-container">
                                <h1 className='resetPswd-form-heading'>Reset Password</h1>
                                <div className="form-inputs">

                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.newPassword}
                                                type='password'
                                                label="New Password"
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.password, message: 'Password is invalid.must contain lowercase,uppercase,numeric and special with 8 or more' }
                                                ]}
                                                onChange={handleChange('newPassword')} />
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.confirmPassword}
                                                type='password'
                                                label="Password"
                                                placeholder='Type'
                                                validators={[
                                                    { check: handleChange, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('confirmPassword')} />
                                        </div>
                                    </div>
                                    


                                    <Button
                                        onClick={handleClick}
                                        value='Reset' />
                                </div>
                            </div>
                        </div>
                        <div className='resetPswd-form-content-right'>
                            <img className='resetPswd-form-img' src={LoginImage} alt='runningMan' />

                        </div>
                    </div>
                </form>
            </div>
        </>
    );

};

const mapStateToProps = ({ auth }) => {
    console.log("state ", auth);
    return {
        loading: auth.loading,
        error: auth.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: () => dispatch(authenticate()),
        //user details setted in above
        setUser: (data) => dispatch(authSuccess(data)),
        //error messages setted in above
        loginFailure: (message) => dispatch(authFailure(message)),
    };
};

export default ResetPassword;
