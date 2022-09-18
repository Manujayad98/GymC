import React, { useState, useEffect } from "react";
import '../own_sidebar/Sidebar.css'
import './AddTrainer.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'

import Pic1 from '../../../../images/owner.png'
import Edit from '../../../../images/Icons/pen-solid.svg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import Dropdown from "../../../Utilities/Form/Dropdown";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Checkbox from "../../../Utilities/Form/Checkbox";
import Radiobutton from "../../../Utilities/Form/Radiobutton";
import PictureUploader from "../../../Utilities/Form/PictureUploader/PictureUploader";

import { registerUser, registerTrainer } from "../../../../services/UserService";

export default function AddTrainer() {

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const [requestData, setState] = useState({

        firstName: '',
        lastName: '',
        nic: '',
        dob: '',
        gender: '',
        address: '',
        email: '',
        phoneNumber: '',
        qualification: '',
        staffType: 3,
        shiftMonday: '',
        shiftTuesday: '',
        shiftWednesday: '',
        shiftThursday: '',
        shiftFriday: '',
        shiftSaturday: '',

    });


    const [click, setClick] = useState(false);
    const [shiftDay, setShiftDay] = useState();

    const handleChange = (key) => (value) => {
        console.log(key, value);
        setState({
            ...requestData,
            [key]: value
        });
    };
    const handleRadio = (event) => {

        setState({
            ...requestData,
            gender: event.target.value
        });
        console.log(requestData.gender)
    };

    const handleRadioShiftDays = (key) => (event) => {
        if (key == '1') {
            console.log(key);
            setState({
                ...requestData,
                shiftMonday: event.target.value
            });
            console.log(requestData.shiftMonday)
        }
        else if (key == '2') {
            console.log(key);
            setState({
                ...requestData,
                shiftTuesday: event.target.value
            });
        }
        else if (key == '3') {
            console.log(key);
            setState({
                ...requestData,
                shiftWednesday: event.target.value
            });
        }
        else if (key == '4') {
            console.log(key);
            setState({
                ...requestData,
                shiftThursday: event.target.value
            });
        }
        else if (key == '5') {
            console.log(key);
            setState({
                ...requestData,
                shiftFriday: event.target.value
            });
        }
        else if (key == '6') {
            console.log(key);
            setState({
                ...requestData,
                shiftSaturday: event.target.value
            });
        }
    };

    // const handleClick = (event) => {
    //     event.preventDefault();
    //     alert('Button Clicked');
    // };

    const handleSubmit = (evt) => {
        console.log(requestData);
        evt.preventDefault();

        if (!requestData.firstName || !requestData.lastName || !requestData.nic || !requestData.dob || !requestData.address || !requestData.email || !requestData.phoneNumber || !requestData.gender || !requestData.qualification || !requestData.shiftMonday || !requestData.shiftTuesday || !requestData.shiftWednesday || !requestData.shiftThursday || !requestData.shiftFriday || !requestData.shiftSaturday) {
            console.log('Please fill out the form correctly');
            setClick({ click: true, })
            toast.warning('Please fill out the form correctly');
        }
        else {
            console.log(requestData);

            registerTrainer(requestData)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        // setMessage(response.data);
                        if (response.data === "Already has an account!") {
                            toast.warning('Already has an account!');
                        } else {
                            window.location.href = "/Otrainers";
                            toast.success("successfully registered the trainer!!!");
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
        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="New Trainer" />
                <div className="content-container">
                    <div className="add-trainer-form-div">
                        <form className="login-form" onSubmit={handleSubmit} noValidate={false}>
                            <div className="add-trainer-form-container">

                                <div className="add-trainer-form-inputs">
                                    <h4 className='add-trainer-form-subHeading'>Basic Info</h4>
                                    <hr className="add-trainer-hr" />
                                    <div className="form-row profile-form-row">
                                        {/* <div class="form-row profile-form-row"> */}
                                        <div class="form-group col-md-6">
                                            <img src={Pic1} alt="" style={{ borderRadius: '80%', width: '100px', height: '100px' }} />
                                            <img src={Edit} alt="" height={20} width={20} style={{ marginLeft: '10px', cursor: 'pointer' }} />
                                        </div>

                                        {/* </div> */}
                                    </div>
                                    <div className="form-row">
                                        {/* <div className="form-col1"> */}
                                        {/* <div className='add-trainer-card add-trainer-profile-cards'>
                                                <div className='own-dashboard-card-img-container'>
                                                    <img src={Pic1} alt="" />
                                                </div>
                                            </div> */}
                                        {/* <div className='add-tariner-userID'>T00001</div> */}
                                        {/* <PictureUploader label="Add Photo" /> */}
                                        {/* </div> */}
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
                                            {!requestData.firstName && click && <span className='text-danger'>This Field is required</span>}
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
                                            {!requestData.lastName && click && <span className='text-danger'>This Field is required</span>}
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
                                            {!requestData.nic && click && <span className='text-danger'>This Field is required</span>}
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
                                            {!requestData.dob && click && <span className='text-danger'>This Field is required</span>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <label> Gender</label>
                                            <div className='radio-div' onChange={handleRadio}>
                                                <input type="radio" className='form-radio' value="M" name="gender" /> Male
                                                <input type="radio" className='form-radio' value="F" name="gender" style={{ marginLeft: '10px' }} /> Female
                                            </div>
                                            {!requestData.gender && click && <span className='text-danger'>This Field is required</span>}

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

                                        </div>
                                    </div>

                                    <h4 className='add-trainer-form-subHeading'>Contact Info</h4>
                                    <hr className="add-trainer-hr" />
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
                                            {!requestData.address && click && <span className='text-danger'>This Field is required</span>}

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
                                            {!requestData.email && click && <span className='text-danger'>This Field is required</span>}

                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.phoneNumber}
                                                type='text'
                                                label="Phone Number"
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.number, message: 'Number is not valid' }
                                                ]}
                                                onChange={handleChange('phoneNumber')} />
                                            {!requestData.phoneNumber && click && <span className='text-danger'>This Field is required</span>}

                                        </div>
                                        <div className="form-col2">

                                        </div>

                                    </div>
                                    <h4 className='add-trainer-form-subHeading'>Qualifications</h4>
                                    <hr className="add-trainer-hr" />
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.qualification}
                                                type='textarea'
                                                label='Qualification'
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('qualification')} />
                                            {!requestData.qualification && click && <span className='text-danger'>This Field is required</span>}

                                            <br></br>

                                        </div>
                                    </div>

                                    <h4 className='add-trainer-form-subHeading'>Shift Details</h4>
                                    <hr className="add-trainer-hr" />
                                    <div className="form-row">
                                        <div className="form-col111">
                                            <InputField
                                                type='text'
                                                label="Day"
                                                placeholder='Monday'
                                                readonly
                                            />
                                        </div>
                                        <div className="form-col112">
                                            <div className='radio-div-addTrainer' onChange={handleRadioShiftDays('1')}>
                                                <input type="radio" className='form-radio' value="1" name="shiftMonday" /> Shift 01
                                                <input type="radio" className='form-radio' value="2" name="shiftMonday" style={{ marginLeft: '10px' }} /> Shift 02
                                            </div>
                                        </div>

                                    </div>

                                    <div className="form-row">
                                        <div className="form-col111">
                                            <InputField
                                                type='text'
                                                placeholder='Tuesday'
                                                readonly
                                            />
                                        </div>
                                        <div className="form-col112">
                                            <div className='radio-div' onChange={handleRadioShiftDays('2')}>
                                                <input type="radio" className='form-radio' value="1" name="shiftTuesday" /> Shift 01
                                                <input type="radio" className='form-radio' value="2" name="shiftTuesday" style={{ marginLeft: '10px' }} /> Shift 02
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-col111">
                                            <InputField
                                                type='text'
                                                placeholder='Wednesday'
                                                readonly
                                            />
                                        </div>
                                        <div className="form-col112">
                                            <div className='radio-div' onChange={handleRadioShiftDays('3')}>
                                                <input type="radio" className='form-radio' value="1" name="shiftWednesday" /> Shift 01
                                                <input type="radio" className='form-radio' value="2" name="shiftWednesday" style={{ marginLeft: '10px' }} /> Shift 02
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-col111">
                                            <InputField
                                                type='text'
                                                placeholder='Thursday'
                                                readonly
                                            />
                                        </div>
                                        <div className="form-col112">
                                            <div className='radio-div' onChange={handleRadioShiftDays('4')}>
                                                <input type="radio" className='form-radio' value="1" name="shiftThursday" /> Shift 01
                                                <input type="radio" className='form-radio' value="2" name="shiftThursday" style={{ marginLeft: '10px' }} /> Shift 02
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-col111">
                                            <InputField
                                                type='text'
                                                placeholder='Friday'
                                                readonly
                                            />
                                        </div>
                                        <div className="form-col112">
                                            <div className='radio-div' onChange={handleRadioShiftDays('5')}>
                                                <input type="radio" className='form-radio' value="1" name="shiftFriday" /> Shift 01
                                                <input type="radio" className='form-radio' value="2" name="shiftFriday" style={{ marginLeft: '10px' }} /> Shift 02
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-col111">
                                            <InputField
                                                type='text'
                                                placeholder='Saterday'
                                                readonly
                                            />
                                            {(!requestData.shiftMonday || !requestData.shiftTuesday || !requestData.shiftWednesday || !requestData.shiftThursday || !requestData.shiftFriday || !requestData.shiftSaturday) && click && <span className='text-danger'>Tik radios correctly</span>}

                                        </div>
                                        <div className="form-col112">
                                            <div className='radio-div' onChange={handleRadioShiftDays('6')}>
                                                <input type="radio" className='form-radio' value="1" name="shiftSaturday" /> Shift 01
                                                <input type="radio" className='form-radio' value="2" name="shiftSaturday" style={{ marginLeft: '10px' }} /> Shift 02
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-col1"></div>
                                        <div className="form-col2">
                                        </div>
                                        <button type="submit" className="register-button">
                                            Add
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </form>
                        <ToastContainer />
                    </div>


                </div>

            </div>
        </div>
    )
}
