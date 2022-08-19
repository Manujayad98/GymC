import React, { useState } from 'react'
import SidebarO from '../../owner/own_sidebar/Sidebar'
import './ProfileView.css'
import InputField from "../../../Utilities/Form/InputField";
import Button from '../../../Utilities/Form/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function ProfileView() {

    const [requestData, setState] = useState({
        userID: '',
        username: '',
        firstname: '',
        lastname: '',
        dob: '',
        address: '',
        phone: '',
        email: '',
    });

    return (
        <div className='main-container'>

            <SidebarO />
            <div className='body-container'>
                <div className='Headng'>
                    <h1 id='heading'>Profile</h1>
                </div>
                <Tabs
                    defaultActiveKey="profileDetails"
                    id="uncontrolled-tab-example"
                    className="mb-3">

                    <Tab eventKey="profileDetails" title="Account" >
                        <div className="profile-form-div">
                            <div className="profile-form-container">
                                <div className="profile-form-inputs">
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.userID}
                                                type='text'
                                                label="Usei ID"
                                                placeholder='OW0001'
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fname')} 
                                            />
                                        </div>
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.username}
                                                type='text'
                                                label="User Name"
                                                placeholder='SanjanaR'
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fname')} 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.firstname}
                                                type='text'
                                                label="First Name"
                                                placeholder='Sanjana'
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fname')} 
                                            />
                                        </div>
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.lastname}
                                                type='text'
                                                label="Last Name"
                                                placeholder='Rajapaksha'
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fname')} 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.dob}
                                                type='date'
                                                label="DOB"
                                                placeholder='Type'
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fname')} 
                                            />
                                        </div>
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.address}
                                                type='text'
                                                label="Address"
                                                placeholder='Giriulla, Kurunegala'
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fname')} 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.phone}
                                                type='text'
                                                label="Phone"
                                                placeholder='0714557840'
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fname')} 
                                            />
                                        </div>
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.email}
                                                type='text'
                                                label="Email"
                                                placeholder='abc@gmail.com'
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fname')} 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-col1"></div>
                                    <div className="form-col2">
                                    </div>
                                    <Button

                                        // onClick={handleClick}
                                        value='Save' />
                                </div>
                            </div>

                        </div>
                    </Tab>
                    <Tab eventKey="changePassword" title="Change password" >
                        <div className="profile-form-div">
                            <div className="profile-form-container">
                                <div className="profile-form-inputs">
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.firstname}
                                                type='text'
                                                label="Current password"
                                                placeholder='Type'
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fname')} 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.firstname}
                                                type='text'
                                                label="New password"
                                                placeholder='Type'
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fname')} 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.firstname}
                                                type='text'
                                                label="Confirm New password"
                                                placeholder='Type'
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fname')} 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-col1"></div>
                                        <div className="form-col2">
                                            <Button

                                                // onClick={handleClick}
                                                value='Save' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>

        </div >
    )
}
