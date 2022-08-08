import React, { Component } from 'react';
// import React, { useState,initialState } from 'react';

import './App.css';

import Button from './library/components/form-components/Button';
import InputField from "./library/components/form-components/InputField";
import Dropdown from "./library/components/form-components/Dropdown";
import { Validators } from "./library/utilities/Validator";
import Checkbox from "./library/components/form-components/Checkbox";
import Radiobutton from "./library/components/form-components/Radiobutton";

export default class App extends Component {

  state = {
    text: '',
    occupation: '',
    phone: '',
    number: '',
    // emergency: '',
    address: '',
    email: '',
    country: '',
    message: '',
    acceptance: false,
    selectedOption: null,
    gender: false,
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };
  // handleRadio = () => {
  // //   this.setState({ selectedOption});
  //     this.setState({gender});
  // };

  handleClick = (event) => {
    event.preventDefault();
    alert('Button Clicked');
  };

  handleDropdown = (country) => {
    this.setState({ country });
  };

  handleCheckbox = (acceptance) => {
    this.setState({ acceptance });
  };

  render() {
    const { fname, lname, nic, dob, selectedOption, gender, occ, address, email, phone, emergency, text, number, occupation, country, message, acceptance } = this.state;

    return (
      <div className="form-div">
        <div className="form-container">
          <h2>Registration</h2>
          <h4>Basic Info</h4>
          <hr />
          <div className="form-inputs">

            <div className="form-row">
              <div className="form-col1">
                <InputField
                  value={fname}
                  type='text'
                  label="First Name"
                  placeholder='Type'
                  validators={[
                    { check: Validators.required, message: 'This field is required' }
                  ]}
                  onChange={this.handleChange('fname')} />
              </div>
              <div className="form-col2">
                <InputField
                  value={lname}
                  type='text'
                  label="Last Name"
                  placeholder='Type'
                  validators={[
                    { check: Validators.required, message: 'This field is required' }
                  ]}
                  onChange={this.handleChange('text')} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col1">
                <InputField
                  value={nic}
                  type='text'
                  label="NIC"
                  placeholder='Type'
                  validators={[
                    { check: Validators.nic, message: 'NIC is not valid' }
                  ]}
                  onChange={this.handleChange('nic')} />
              </div>
              <div className="form-col2">
                <InputField
                  value={dob}
                  type='date'
                  label="Date of Birth"
                  placeholder='Type'
                  validators={[
                    { check: Validators.required, message: 'This field is required' }
                  ]}
                  onChange={this.handleChange('dob')} />
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
                  value={occupation}
                  type='text'
                  label="Occupation"
                  placeholder='Type'
                  validators={[
                    { check: Validators.required, message: 'This field is required' }
                  ]}
                  onChange={this.handleChange('occupation')} />
                <br></br>
              </div>
            </div>

            <h4>Contact Info</h4>
            <hr />
            <div className="form-row">
              <div className="form-col1">
                <InputField
                  value={address}
                  type='text'
                  label="Address"
                  placeholder='Type'
                  validators={[
                    { check: Validators.required, message: 'This field is required' }
                  ]}
                  onChange={this.handleChange('address')} />
              </div>
              <div className="form-col2">
                <InputField
                  value={email}
                  type='text'
                  label="Email"
                  placeholder='Type'
                  validators={[
                    { check: Validators.email, message: 'Email is not valid' }
                  ]}
                  onChange={this.handleChange('email')} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col1">
                <InputField
                  value={number}
                  type='text'
                  label="Phone"
                  placeholder='Type'
                  validators={[
                    { check: Validators.number, message: 'Number is not valid' }
                  ]}
                  onChange={this.handleChange('number')} />
              </div>
              <div className="form-col2">
                <InputField
                  value={emergency}
                  type='text'
                  label="Emergency"
                  placeholder='Type'
                  validators={[
                    { check: Validators.number, message: 'Number is not valid' }
                  ]}
                  onChange={this.handleChange('emergency')} />
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
                  selected={acceptance}
                  onChange={this.handleCheckbox}
                />
              </div>
            </div>



              <Button
                onClick={this.handleClick}
                value='Register' />
            </div>
          </div>
        </div>
        );
  }
}