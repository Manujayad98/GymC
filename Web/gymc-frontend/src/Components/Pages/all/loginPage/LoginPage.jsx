import React, { useState } from "react"
import { connect } from "react-redux";
import { userLogin } from "../../../../services/AuthenticationService";
import { fetchUserData } from "../../../../services/AuthenticationService";
import { authenticate, authFailure, authSuccess } from "../../../Redux/AuthAction";
import './LoginPage.css'
import LoginImage from "../../../../images/LoginPage.jpg"

const LoginPage = ({ loading, error, ...props }) => {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    const [values, setValues] = useState({
        userName: "",
        password: "",
    });

    const userData = async () => {
        console.log('res1');
        const res = await fetchUserData();

        // console.log(res.data.userName);
        var userLevel = res.data.userLevel;

        if (userLevel === "Owner") {
            window.location.href = "/Odashboard";
        } else if (userLevel === "Admin") {
            window.location.href = "/Adashboard";
        } else if (userLevel === "Receptionist") {
            window.location.href = "/Rdashboard";
        } else {
            localStorage.clear();
            window.location.href = "/";
        }

    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.authenticate();    //do not reload the page
        // console.log(props);

        userLogin(values)
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

    const handleChange = (e) => {
        e.persist();
        // console.log(e.target.name+"-"+e.target.value)
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <>
            <div className='form-div'>
                <form className="" onSubmit={handleSubmit} noValidate={false}>
                    <div className='login-form-container'>
                        <div className="login-form-content-left">
                            <div className="login-form-in-container">
                                <h1 className='login-form-heading'>Login</h1>
                                <div className="form-inputs">

                                    <div className="form-group mt-3">
                                        <label>User Name</label>
                                        <input
                                            id="username"
                                            type="text"
                                            className="form-control mt-1"
                                            placeholder="Enter username"
                                            minLength={5}
                                            value={values.userName}
                                            onChange={handleChange}
                                            name="userName"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Password</label>
                                        <input
                                            id="password"
                                            type="password"
                                            className="form-control mt-1"
                                            placeholder="Enter password"
                                            minLength={8}
                                            value={values.password}
                                            onChange={handleChange}
                                            name="password"
                                            required
                                        />
                                    </div>

                                    <p className="text-center mt-2">
                                        Forgot <a href="#">password?</a>
                                    </p>
                                    <div className="login-btn-container">
                                        <button type="submit" className=" login-btn">
                                            Login
                                        </button>
                                    </div>
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
    )
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
