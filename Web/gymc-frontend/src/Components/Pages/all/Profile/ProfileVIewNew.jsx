import React, { useState, useEffect } from 'react'
import SidebarO from '../../owner/own_sidebar/Sidebar'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import owner from '../../../../images/owner.png'
import './ProfileViewNew.css'
import Edit from '../../../../images/Icons/pen-solid.svg'

import { getProfile } from "../../../../services/UserService";
import { fetchUserData } from "../../../../services/AuthenticationService";



export default function () {
    const [userdata, setData] = useState([]);
    const [userrole, setUserRoles] = useState([]);
    const [myEmail, setMyEmail] = useState("");
    const [profile, setProfile] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        gender: "",
        nic: "",
    });

    const userData = async () => {
        const res = await fetchUserData();
        setData(res.data);
        setUserRoles(res.data.userLevel);
        getProfileData(res.data.userName);
        // console.log(res.data);
    };

    const getProfileData = async (userName) => {
        const res = await getProfile(userName);
        setProfile(res.data);
        // setMyEmail(res.data.email);
        // console.log(res.data);
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
                                                        <label for="inputEmail4">UserID</label>
                                                        <input type="email" class="form-control profile-input-field" id="" placeholder="Email"></input>
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">Username</label>
                                                        <input type="email" class="form-control profile-input-field" id="" placeholder="Email"></input>
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">First Name</label>
                                                        <input type="email" class="form-control profile-input-field" id="" placeholder="Email"></input>
                                                    </div>

                                                </div>



                                            </div>
                                        </div>
                                        <div class="col-sm">

                                            <div className='profile-card1'>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">Last Name</label>
                                                        <input type="email" class="form-control profile-input-field" id="" placeholder="Email"></input>
                                                    </div>

                                                </div>

                                                <div class="form-row">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="" value="option1"></input>
                                                        <label class="form-check-label" for="inlineRadio1">Male</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="" value="option2"></input>
                                                        <label class="form-check-label" for="inlineRadio2">Female</label>
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">DOB</label>
                                                        <input type="date" class="form-control profile-input-field" id="" ></input>
                                                    </div>

                                                </div>

                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">Phone</label>
                                                        <input type="email" class="form-control profile-input-field" id="" placeholder="Email"></input>
                                                    </div>

                                                </div>



                                            </div>
                                        </div>
                                        <div class="col-sm">

                                            <div className='profile-card1'>

                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">Email</label>
                                                        <input type="email" class="form-control profile-input-field" id="" placeholder="Email"></input>
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">NIC</label>
                                                        <input type="email" class="form-control profile-input-field" id="" placeholder="Email"></input>
                                                    </div>

                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">Address</label>
                                                        <input type="email" class="form-control profile-input-field" id="" placeholder="Email"></input>
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
