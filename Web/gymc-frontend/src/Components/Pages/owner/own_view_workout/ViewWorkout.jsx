import React, { useState } from "react";
import '../own_sidebar/Sidebar.css'
import './ViewWorkout.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import SampleCal from '../../../Utilities/CalendarComp/SampleCal'

import Pic1 from '../../../../images/owner.png'

// import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Table from '../../../Utilities/Tables/Table2';
import { Link } from 'react-router-dom'

export default function ViewWorkout() {
    const [requestData, setState] = useState({
        text: '',
        occupation: '',
        phone: '',
        number: '',
        // emergency: '',
        address: '',
        email: '',
        gender: false,
    });

    const handleChange = (key) => (value) => {
        setState({
            ...requestData,
            [key]: value
        });
    };
    const handleRadio = (event) => {

        setState({ selectedOption: event.target.value });
    };

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
    const [announcementDetailsTableHead] = useState([
        { id: "Date_Time", label: "Date & Time", numeric: false },
        { id: "Topic", label: "Topic", numeric: false },
        { id: "Note", label: "Note", numeric: false },
        
      ]);
      const [announcementDetails] = useState([
        {
          Date_Time: "2022/08/15 09.30 AM",
          Topic: "Center Closure",
          Note: "Fitness center is closed on 20 th August 2022",
          
        },
        {
          Date_Time: "2022/08/15 09.30 AM",
          Topic: "Center Closure",
          Note: "Fitness center is closed on 20 th August 2022",
          
        },
        {
          Date_Time: "2022/08/15 09.30 AM",
          Topic: "Center Closure",
          Note: "Fitness center is closed on 20 th August 2022",
          
        },
        {
          Date_Time: "2022/08/15 09.30 AM",
          Topic: "Center Closure",
          Note: "Fitness center is closed on 20 th August 2022"
           
        
        },
        {
          Date_Time: "2022/08/15 09.30 AM",
          Topic: "Center Closure",
          Note: "Fitness center is closed on 20 th August 2022",
        },
        
      ]);

    return (
        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="New Trainer" />
                <div className="content-container">

                    <div className="workout-container">
                        <div className="workout-profile-card">profile card
                            <div className='own-dashboard-card profile-cards'>
                                <div className='own-dashboard-card-img-container'>
                                    <img src={Pic1} alt="" />
                                </div>
                                <div className='own-dashboard-card-content'>
                                    <div className='staffID'>T00001</div>
                                    <div className='staffName'>Sanjana Rajapaksha</div>
                                </div>
                            </div>

                        </div>
                        <div className="workout-button-card">buttons here
                            <button>New Workout</button>
                            <button>Progress</button>
                        </div>
                        <div className="workout-calendar-card">Calendar
                            <SampleCal /></div>
                        <div className="trainee-basic-details-card">

                            <div className='trainee-workout-basic-details-container'>
                                <div className="login-form-content-left">
                                    <div className="login-form-in-container">
                                        <div className="form-inputs">

                                            <div className="form-row">
                                                <div className="form-col1">
                                                    <InputField
                                                        value={requestData.fullname}
                                                        type='text'
                                                        name='userId'
                                                        label="Full Name"
                                                        placeholder='Type'
                                                        validators={[
                                                            { check: Validators.required, message: 'This field is required' }
                                                        ]}
                                                        onChange={handleChange('fullname')} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-col1">
                                                    <InputField
                                                        value={requestData.fullname}
                                                        type='text'
                                                        name='userId'
                                                        label="NIC"
                                                        placeholder='Type'
                                                        validators={[
                                                            { check: Validators.required, message: 'This field is required' }
                                                        ]}
                                                        onChange={handleChange('fullname')} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-col1">
                                                    <InputField
                                                        value={requestData.fullname}
                                                        type='text'
                                                        name='userId'
                                                        label="Phone"
                                                        placeholder='Type'
                                                        validators={[
                                                            { check: Validators.required, message: 'This field is required' }
                                                        ]}
                                                        onChange={handleChange('fullname')} />
                                                </div>
                                            </div>

                                            <div className='form-row'>
                                                <div className="form-col1">
                                                    <InputField
                                                        value={requestData.password}
                                                        type='text'
                                                        name='password'
                                                        label="DOB"
                                                        placeholder='Type'
                                                        validators={[
                                                            { check: Validators.required, message: 'This field is required' }
                                                        ]}
                                                        onChange={handleChange('password')} />
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className="trainee-workout-schedule-view-card">

                            <div className='own-dashboard-table-container'>
                                <div className='own-dashboard-card table-cards'>
                                    <Table
                                        rows={announcementDetails}
                                        headCells={announcementDetailsTableHead}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="button-container">
                                <Link to='/OupdateWorkout'>
                                    <button type="button" class="btn" style={{ backgroundColor: '#3DA2FF', width: '100px' }}>Update Workout</button>
                                </Link>
                            </div>
                    </div>



                </div>

            </div>
        </div>
    )
}
