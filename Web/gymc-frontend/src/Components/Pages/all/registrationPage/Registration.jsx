import React, { Component, useState } from 'react';
// import React, { useState,initialState } from 'react';
import { joinRequest } from "../../../../services/SignUpService";

import '../../../Utilities/Form/Form.css'
// import './Registration.css';

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
// import Dropdown from "../../../Utilities/Form/Dropdown";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Checkbox from "../../../Utilities/Form/Checkbox";
// import Radiobutton from "../../../Utilities/Form/Radiobutton";

export default function Registration() {

    const [requestData, setState] = useState({
        firstName: '',
        lastName: '',
        nic: '',
        dob: '',
        occupation: '',
        address: '',
        email: '',
        phoneNumber: '',
        emergencyNumber: '',


        // country: '',
        // message: '',
        acceptance: true,
        // selectedOption: null,
        gender: false,
    });

    const handleChange = (key) => (value) => {
        setState({
            ...requestData,
            [key]: value
        });
    };

    // handleRadio = (event) => {
    // //   this.setState({ selectedOption});
    //     setState({selectedOption: event.target.value});
    // };

    const handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };

    // const handleDropdown = (country) => {
    //     setState({ country });
    // };

    const handleCheckbox = (acceptance) => {
        setState({ acceptance });
    };


    // const {
    //     fname,
    //     lname,
    //     nic,
    //     dob,
    //     selectedOption,
    //     gender,
    //     occ,
    //     address,
    //     email,
    //     phone,
    //     emergency,
    //     text,
    //     number,
    //     occupation,
    //     country,
    //     message,
    //     acceptance
    // } = this.state;

    const handleSubmit = (evt) => {
        // evt.preventDefault();
        joinRequest(requestData)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    // setMessage(response.data);
                    if (response.data === "You have already an account!") {
                        toast.error('Failed!!!');
                    } else {
                        toast.error("success!!!");
                    }
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log(err);
                    toast.error('Failed!!!');
                }
            });
    };

    return (
        <>
            <div className="form-div">
                <form className="login-form" onSubmit={handleSubmit} noValidate={false}>
                    <div className="form-container">
                        <h2 className='form-heading'>Registration</h2>
                        <h4 className='form-subHeading'>Basic Info</h4>
                        <hr />
                        <div className="form-inputs">

                            <div className="form-row">
                                <div className="form-col1">
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
                                <div className="form-col2">
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
                            <div className="form-row">
                                <div className="form-col1">
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
                                <div className="form-col2">
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
                            <div className="form-row">
                                <div className="form-col1">

                                    {/* <Radiobutton
                  value={gender}
                  name='gender'
                  type='radio'
                  label="selectedOption"
                  // validators={[
                  //   { check: Validators.required, message: 'Select an option' }
                  // ]}
                  onChange={handleRadio('gender')} /> */}
                                </div>
                                <div className="form-col2">
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

                            <h4 className='form-subHeading'>Contact Info</h4>
                            <hr />
                            <div className="form-row">
                                <div className="form-col1">
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
                                <div className="form-col2">
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
                            <div className="form-row">
                                <div className="form-col1">
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
                                <div className="form-col2">
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

                            <div className="form-row">
                                <div className="form-col1">
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

                            <div className="login-btn-container">
                                <button type="submit" className=" login-btn">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );

}