import React, { useState, useEffect } from 'react'
import SidebarO from '../../owner/own_sidebar/Sidebar'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import owner from '../../../../images/owner.png'
import './ProfileViewNew.css'
import Edit from '../../../../images/Icons/pen-solid.svg'


import { fetchUserData } from "../../../../services/AuthenticationService";
import { getProfile } from "../../../../services/UserService";

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import Dropdown from "../../../Utilities/Form/Dropdown";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Checkbox from "../../../Utilities/Form/Checkbox";

export default function () {

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };



    // const [data, setData] = useState({});

    const [userdata, setData] = useState([]);

    const [profile, setProfile] = useState({
        user_id: "",
        user_name: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        address: "",
        gender: "",
        nic: "",
    });

    useEffect(() => {
        userProfileData();
    }, []);

    // console.log(data);

    const userProfileData = async () => {
        const res = await fetchUserData();
        console.log(res.data.userName);
        setData(res.data);
        // setUserRoles(res.data.userName);
        console.log(res.data.userName);
        getUserProfileData(res.data.userName);
        // console.log(res.data);
    };

    const getUserProfileData = async (userName) => {
        console.log('res1');
        const res = await getProfile(userName);

        console.log(res);
        setProfile(res.data);
        // setMyEmail(res.data.email);

    };

    return (
        <div>
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
                            <div class="container profile-main-container">
                                <form>
                                    <div class="row">
                                        <div class="col-sm profile-container">

                                            <div className='profile-card1'>

                                                <div class="form-row profile-form-row">
                                                    <div class="form-group col-md-6">
                                                        <img src={owner} alt="" style={{ borderRadius: '80%', width: '100px', height: '100px' }} />
                                                        <img src={Edit} alt="" height={20} width={20} style={{ marginLeft: '10px', cursor: 'pointer' }} />
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="userid">UserID</label>
                                                        <input type="text" class="form-control profile-input-field" value={profile.user_id} id="" placeholder="Email"></input>
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="username">Username</label>
                                                        <input type="text" class="form-control profile-input-field" value={profile.user_name} id="" ></input>


                                                        {/* <InputField
                                                            value={profile.user_name}
                                                            type='text'
                                                            label="User Name"

                                                        /> */}
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="firstname">First Name</label>
                                                        <input type="text" class="form-control profile-input-field" value={profile.first_name} id="" ></input>
                                                    </div>

                                                </div>



                                            </div>
                                        </div>
                                        <div class="col-sm">

                                            <div className='profile-card1'>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="lastname">Last Name</label>
                                                        <input type="text" class="form-control profile-input-field" id="" value={profile.last_name} ></input>
                                                    </div>

                                                </div>
                                                {/* <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="gender">Gender</label>
                                                    </div>
                                                </div> */}
                                                <div class="form-row">

                                                    <div class="form-group col-md-6">
                                                        <label for="gender" style={{ marginBottom: '5px' }}>Gender</label><br />
                                                        {/* <div class="form-check form-check-inline"> */}
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="" value="M" checked={profile.gender === "M"} ></input>
                                                        <label class="form-check-label" for="inlineRadio1">Male</label>
                                                        {/* </div> */}
                                                        {/* <div class="form-check form-check-inline"> */}
                                                        <input class="form-check-input" style={{ marginLeft: '30px' }} type="radio" name="inlineRadioOptions" id="" value="F" checked={profile.gender === "F"}></input>
                                                        <label class="form-check-label" for="inlineRadio2">Female</label>
                                                        {/* </div> */}
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="dob">DOB</label>
                                                        <input type="date" class="form-control profile-input-field" id="" value={profile.dob} ></input>
                                                    </div>

                                                </div>

                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="phone">Phone</label>
                                                        <input type="email" class="form-control profile-input-field" value={profile.phone_number} id="" ></input>
                                                    </div>

                                                </div>



                                            </div>
                                        </div>
                                        <div class="col-sm">

                                            <div className='profile-card1'>

                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="email">Email</label>
                                                        <input type="email" class="form-control profile-input-field" value={profile.email} id="" ></input>
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="nic">NIC</label>
                                                        <input type="email" class="form-control profile-input-field" value={profile.nic} id="" ></input>
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="address">Address</label>
                                                        <input type="email" class="form-control profile-input-field" value={profile.address} id="" ></input>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile-submit-btn1'>
                                        <button type="submit" class="btn btn-primary" disabled>Update</button>
                                    </div>

                                </form>
                            </div>
                        </Tab>
                        <Tab eventKey="changePassword" title="Change password" >
                            <div class="container profile-main-container">
                                <form>
                                    <div class="row">
                                        <div class="col-sm profile-container">

                                            <div className='profile-card1'>

                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">Current Password</label>
                                                        <input type="email" class="form-control profile-input-field" id="" placeholder="Type"></input>
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">New Password</label>
                                                        <input type="email" class="form-control profile-input-field" id="" placeholder="Type"></input>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">Confirm Password</label>
                                                        <input type="email" class="form-control profile-input-field" id="" placeholder="Type"></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile-submit-btn2'>
                                        <button type="submit" class="btn btn-primary" >Save</button>
                                    </div>
                                </form>
                            </div>
                        </Tab>
                    </Tabs>
                </div >
            </div >
        </div >
    )
}
