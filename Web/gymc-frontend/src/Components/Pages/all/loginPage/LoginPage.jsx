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


import '../../all/loginPage/SampleLogin.css'

const LoginPage = ({ loading, error, ...props }) => {

    const [requestData] = useState({
        userId: '',
        password: '',
        rememberme: false
    });

    const handleChange = (key) => (value) => {
        this.setState({ [key]: value });
    };

    const handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    const handleCheckbox = (rememberme) => {
        this.setState({ rememberme });
    };

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
                    <div className='login-form-container'>
                        <div className="login-form-content-left">
                            <div className="login-form-in-container">
                                <h1 className='login-form-heading'>Login</h1>
                                <div className="form-inputs">

                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.userId}
                                                type='text'
                                                label="User Id"
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('userId')} />
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.password}
                                                type='text'
                                                label="Password"
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('requestData.password')} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <Checkbox
                                                label='   Remember me'
                                                selected={requestData.rememberme}
                                                onChange={handleCheckbox}
                                            />
                                        </div>
                                    </div>


                                    <Button
                                        onClick={handleClick}
                                        value='Login' />
                                </div>
                            </div>
                        </div>
                        <div className='login-form-content-right'>
                            <img className='login-form-img' src={LoginImage} alt='runningMan' />

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
//get data from store
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
