import React, { Component, useState } from 'react';
// import React, { useState,initialState } from 'react';
import { signUp } from "../../../../services/SignUpService";

import '../../../Utilities/Form/Form.css'
import './Registration.css';
import BikeExercise from '../../../../images/Svg/bike.svg'
import Tracker from '../../../../images/Svg/tracker.svg'

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import Dropdown from "../../../Utilities/Form/Dropdown";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Checkbox from "../../../Utilities/Form/Checkbox";
// import Radiobutton from "../../../Utilities/Form/Radiobutton";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {

    const [requestData, setState] = useState({
        firstname: '',
        lastname: '',
        nic: '',
        dob: '',
        occupation: '',
        address: '',
        email: '',
        phoneNumber: '',
        emergencyNumber: '',
        gender: '',
        message: '',
        acceptance: true,
        // selectedOption: null,
    });

    const handleChange = (key) => (value) => {
        console.log(key, value);
        setState({
            ...requestData,
            [key]: value
        });
    };

    // handleRadio = (event) => {
    // //   this.setState({ selectedOption});
    //     setState({selectedOption: event.target.value});
    // };

    // const handleClick = (event) => {
    //     event.preventDefault();
    //     alert('Button Clicked');
    // };

    // const handleDropdown = (gender) => (value) => {
    //     console.log(gender, value);
    //     setState({ ...requestData, [gender]: value });
    // };

    const handleCheckbox = (acceptance) => {
        setState({ ...requestData, acceptance });
    };

    const handleSubmit = (evt) => {
        console.log(requestData);
        evt.preventDefault();

        if (!requestData.firstname || !requestData.lastname || requestData.nic || requestData.dob || requestData.occupation || requestData.address || requestData.email || requestData.phoneNumber || requestData.emergencyNumber || requestData.gender) {
            console.log('Please fill out the form correctly');
            toast.warning('Please fill out the form correctly');
        } else {

            signUp(requestData)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        // setMessage(response.data);
                        if (response.data === "You have already an account!") {
                            toast.warning('You have already an account!');
                        } else {
                            window.location.href = "/";
                            toast.success("successfully registered!!!");
                        }
                    }
                })
                .catch((err) => {
                    if (err && err.response) {
                        console.log(err);
                        toast.error('Failed!!!');
                    }
                });
        }
    };

    return (
        <>
            <div className="reg-form-div">
                {/* <div className="reg-svg" >
                    <img src={Tracker} alt="" className="reg-svg-img" />
                </div> */}
                <form className="login-form" onSubmit={handleSubmit} noValidate={false}>

                    <div className="reg-form-container">
                        <h2 className='reg-form-heading'>Registration</h2>
                        <h4 className='reg-form-subHeading'>Basic Info</h4>
                        <hr className='reg-hr' />
                        <div className="reg-form-inputs">

                            <div className="reg-form-row">
                                <div className="reg-form-col1">
                                    <InputField
                                        value={requestData.firstName}
                                        type='text'
                                        label="First Name"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.required, message: 'This field is required' }
                                        ]}
                                        onChange={handleChange('firstName')} />
                                </div>
                                <div className="reg-form-col2">
                                    <InputField
                                        value={requestData.lastName}
                                        type='text'
                                        label="Last Name"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.required, message: 'This field is required' }
                                        ]}
                                        onChange={handleChange('lastName')} />
                                </div>
                            </div>
                            <div className="reg-form-row">
                                <div className="reg-form-col1">
                                    <InputField
                                        value={requestData.nic}
                                        type='text'
                                        label="NIC"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.nic, message: 'NIC is not valid' }
                                        ]}
                                        onChange={handleChange('nic')} />
                                </div>
                                <div className="reg-form-col2">
                                    <InputField
                                        value={requestData.dob}
                                        type='date'
                                        label="Date of Birth"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.required, message: 'This field is required' }
                                        ]}
                                        onChange={handleChange('dob')} />
                                </div>
                            </div>
                            <div className="reg-form-row">
                                <div className="reg-form-col1">

                                    {/* <Radiobutton
                                    value={gender}
                                    name='gender'
                                    type='radio'
                                    label="selectedOption"
                                    // validators={[
                                    //   { check: Validators.required, message: 'Select an option' }
                                    // ]}
                                    onChange={handleRadio('gender')} /> */}

                                    {/* <Dropdown
                                        data={[
                                            { value: "M", label: 'Male' },
                                            { value: "F", label: 'Female' },
                                        ]}
                                        label="Gender"
                                        // styleClass='mt-3'
                                        value={requestData.gender}
                                        placeholder='Select Gender'
                                        onChange={handleDropdown}
                                    /><br></br> */}

                                    {/* <InputField
                                        value={message}
                                        type='textarea'
                                        placeholder='Enter message!'
                                        validators={[
                                            { check: Validators.required, message: 'This field is required' }
                                        ]}
                                        onChange={this.handleChange('message')} />
                                    <br></br> */}
                                </div>
                                <div className="reg-form-col2">
                                    <InputField
                                        value={requestData.occupation}
                                        type='text'
                                        label="Occupation"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.required, message: 'This field is required' }
                                        ]}
                                        onChange={handleChange('occupation')} />
                                    <br></br>
                                </div>
                            </div>

                            <h4 className='reg-form-subHeading'>Contact Info</h4>
                            <hr className='reg-hr' />
                            <div className="reg-form-row">
                                <div className="reg-form-col1">
                                    <InputField
                                        value={requestData.address}
                                        type='text'
                                        label="Address"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.required, message: 'This field is required' }
                                        ]}
                                        onChange={handleChange('address')} />
                                </div>
                                <div className="reg-form-col2">
                                    <InputField
                                        value={requestData.email}
                                        type='text'
                                        label="Email"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.email, message: 'Email is not valid' }
                                        ]}
                                        onChange={handleChange('email')} />
                                </div>
                            </div>
                            <div className="reg-form-row">
                                <div className="reg-form-col1">
                                    <InputField
                                        value={requestData.phoneNumber}
                                        type='text'
                                        label="Phone"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.number, message: 'Number is not valid' }
                                        ]}
                                        onChange={handleChange('phoneNumber')} />
                                </div>
                                <div className="reg-form-col2">
                                    <InputField
                                        value={requestData.emergencyNumber}
                                        type='text'
                                        label="Emergency"
                                        placeholder='Type'
                                        validators={[
                                            { check: Validators.number, message: 'Number is not valid' }
                                        ]}
                                        onChange={handleChange('emergencyNumber')} />
                                </div>
                            </div>

                            {/* <Dropdown
                            data={[
                                { value: 1, label: 'India' },
                                { value: 2, label: 'USA' },
                                { value: 3, label: 'UK' },
                                { value: 4, label: 'Germany' },
                                { value: 5, label: 'Russia' },
                                { value: 5, label: 'Italy' },
                            ]}
                            styleClass='mt-3'
                            value={country}
                            placeholder='Select Country'
                            onChange={this.handleDropdown}
                            /><br></br>

                            <InputField
                            value={message}
                            type='textarea'
                            placeholder='Enter message!'
                            validators={[
                                { check: Validators.required, message: 'This field is required' }
                            ]}
                            onChange={this.handleChange('message')} />
                            <br></br> */}

                            <div className="reg-form-row">
                                <div className="reg-form-col1">
                                    <Checkbox
                                        label='I Accept the terms and conditions'
                                        selected={requestData.acceptance}
                                        onChange={handleCheckbox}
                                    />
                                </div>
                            </div>



                            {/* <Button
                            onClick={handleClick}
                            value='Register' />. */}

                            <div className="reg-login-btn-container">
                                <button type="submit" className=" login-btn">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
    );

}