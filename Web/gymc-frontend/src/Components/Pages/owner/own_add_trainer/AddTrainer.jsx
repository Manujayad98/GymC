import React, { useState } from "react";
import '../own_sidebar/Sidebar.css'
import '../own_add_trainer/AddTrainer.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'

import Pic1 from '../../../../images/owner.png'

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import Dropdown from "../../../Utilities/Form/Dropdown";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Checkbox from "../../../Utilities/Form/Checkbox";
import Radiobutton from "../../../Utilities/Form/Radiobutton";
import PictureUploader from "../../../Utilities/Form/PictureUploader/PictureUploader";


export default function AddTrainer() {
    const [requestData, setState] = useState({
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
    });

    const handleChange = (key) => (value) => {
        setState({ 
            ...requestData,
            [key]: value });
    };
    // handleRadio = () => {
    // //   this.setState({ selectedOption});
    //     this.setState({gender});
    // };

    const handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };

    const handleDropdown = (country) => {
        setState({ country });
    };

    const handleCheckbox = (acceptance) => {
        this.setState({ acceptance });
    };

    return (
        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="New Trainer" />
                <div className="content-container">
                    <div className="add-trainer-form-div">
                        <div className="form-container">
                            <h4 className='form-subHeading'>Basic Info</h4>
                            <hr />
                            <div className="form-inputs">

                                <div className="form-row">
                                    <div className="form-col1">
                                        <div className='own-dashboard-card profile-cards'>
                                            <div className='own-dashboard-card-img-container'>
                                                <img src={Pic1} alt="" />
                                            </div>
                                            <div className='own-dashboard-card-content'>
                                                <div className='staffID'>T00001</div>
                                                <div className='staffName'></div>
                                            </div>
                                        </div>
                                        <PictureUploader label="Add Photo"/>
                                        
                                    </div>
                                    <div className="form-col2">
                                    <InputField
                                            value={requestData.fname}
                                            type='text'
                                            label="First Name"
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.required, message: 'This field is required' }
                                            ]}
                                            onChange={handleChange('fname')} />
                                        <InputField
                                            value={requestData.lname}
                                            type='text'
                                            label="Last Name"
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.required, message: 'This field is required' }
                                            ]}
                                            onChange={handleChange('lname')} />
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
                                            value={requestData.number}
                                            type='text'
                                            label="Phone"
                                            placeholder='Type'
                                            validators={[
                                                { check: Validators.number, message: 'Number is not valid' }
                                            ]}
                                            onChange={handleChange('number')} />
                                    </div>

                                </div>

                                <div className="form-row">
                                    <div className="form-col1">
                                        {/* <InputField
                                            value={requestData.qualifications}
                                            type='textarea'
                                            placeholder='Enter message!'
                                            validators={[
                                                { check: Validators.required, message: 'This field is required' }
                                            ]}
                                            onChange={this.handleChange('requestData.qualifications')} />
                                        <br></br> */}

                                    </div>
                                </div>



                                <Button
                                    onClick={handleClick}
                                    value='Save' />
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
