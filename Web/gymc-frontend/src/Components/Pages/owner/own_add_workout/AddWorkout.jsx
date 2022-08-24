import React, { useState } from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import T1 from '../../../../images/t1.png'
import Pic1 from '../../../../images/owner.png'
import Card from 'react-bootstrap/Card'


import InputField from "../../../Utilities/Form/InputField";
import '../../../Utilities/Form/Form.css'
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Dropdown from "../../../Utilities/Form/Dropdown";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddWorkout.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'





const AddWorkout = () => {

    const [requestData, setState] = useState({

        height: '',
        weight: '',
        biceps: '',
        triceps: '',
        forearms: '',
        thighs: '',
        chest: '',
        hips: '',
        diseases: '',
        bones: '',
        memType:'',
    });
    const [click, setClick] = useState(false);

    const handleChange = (key) => (value) => {
        setState({
            ...requestData,
            [key]: value
        });
    };
    const handleRadio = (event) => {

        setState({
            ...requestData,
            memType: event.target.value
        });
        console.log(requestData.gender)
    };
    const handleDropdown = (memType) => (value) => {
        console.log(memType, value);
        setState({ ...requestData, [memType]: value });
    };

    const handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    const handleSubmit = (evt) => {
        console.log(requestData);
        evt.preventDefault();

        if (!requestData.firstName || !requestData.lastName || !requestData.nic || !requestData.dob || !requestData.occupation || !requestData.address || !requestData.email || !requestData.phoneNumber || !requestData.emergencyNumber || !requestData.gender) {
            console.log('Please fill out the form correctly');
            setClick({ click: true, })
            toast.warning('Please fill out the form correctly');
        }
        // else {

        //     signUp(requestData)
        //         .then((response) => {
        //             if (response.status === 200) {
        //                 console.log(response.data);
        //                 // setMessage(response.data);
        //                 if (response.data === "You have already an account!") {
        //                     toast.warning('You have already an account!');
        //                 } else {
        //                     window.location.href = "/";
        //                     toast.success("successfully registered!!!");
        //                 }
        //             }
        //         })
        //         .catch((err) => {
        //             if (err && err.response) {
        //                 console.log(err);
        //                 toast.error('Failed!!!');
        //             }
        //         });
        // }
    };


    return (
        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="New Workout" />
                <div className="own-addworkout-content-container">
                    <div className="own-addworkout-left">
                        <div className="own-addworkout-profile">

                            <div className="own-addworkout-profile-pic">
                                <img src={Pic1} alt="" />

                            </div>
                            <div className="own-addworkout-profile-content">
                                <h6>Sanjana Rajapakse</h6>
                                <h5>T0001</h5>
                            </div>





                        </div>
                        <div className="addworkout_card1">
                            <form className onSubmit={handleSubmit} noValidate={false}>

                                <div className="update-workout-form">
                                    <div className="update-workout-form-inputs">
                                        <h4 className='update-workout-form-subHeading'>Body Measures</h4>
                                        <hr className="add-trainer-hr" />

                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.height}
                                                    type='text'
                                                    label="Height"
                                                    placeholder='Type'
                                                    readonly
                                                    validators={[
                                                        { check: Validators.required, message: 'NIC is not valid' }
                                                    ]}
                                                    onChange={handleChange('height')} />
                                                {!requestData.height && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={requestData.weight}
                                                    type='text'
                                                    label="Weight"
                                                    placeholder='Type'
                                                    readonly
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('weight')} />
                                                {!requestData.weight && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>


                                        <h4 className='add-trainer-form-subHeading'>Health Conditions</h4>
                                        <hr className="add-trainer-hr" />
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.diseases}
                                                    type='text'
                                                    label="Diseases"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('diseases')} />
                                                {!requestData.diseases && click && <span className='text-danger'>This Field is required</span>}

                                            </div>
                                            <div className="form-col2">
                                                <label htmlFor="">Affected Bone</label>
                                                <Dropdown
                                                    data={[
                                                        { value: "UpperArm", label: 'Upper Arm' },
                                                        { value: "Ankle", label: 'Ankle' },
                                                        { value: "Foot", label: 'Foot' },
                                                        { value: "KneeCap", label: 'KneeCap' },
                                                    ]}
                                                    label="Affected Bone"
                                                    // styleClass='mt-3'
                                                    value={requestData.bones}
                                                    placeholder='Select'
                                                    onChange={handleDropdown}
                                                /><br></br>

                                                {!requestData.bones && click && <span className='text-danger'>This Field is required</span>}

                                            </div>
                                        </div>

                                        <h4 className='update-workout-form-subHeading'>Body Dyno Chart(Inches)</h4>
                                        <hr className="add-trainer-hr" />

                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.biceps}
                                                    type='text'
                                                    label="Biceps"
                                                    placeholder='Type'
                                                    readonly
                                                    validators={[
                                                        { check: Validators.required, message: 'NIC is not valid' }
                                                    ]}
                                                    onChange={handleChange('biceps')} />
                                                {!requestData.biceps && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={requestData.forearms}
                                                    type='text'
                                                    label="Forearms"
                                                    placeholder='Type'
                                                    readonly
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('forearms')} />
                                                {!requestData.forearms && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.chest}
                                                    type='text'
                                                    label="Chest"
                                                    placeholder='Type'
                                                    readonly
                                                    validators={[
                                                        { check: Validators.required, message: 'This Field is not valid' }
                                                    ]}
                                                    onChange={handleChange('chest')} />
                                                {!requestData.chest && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={requestData.hips}
                                                    type='text'
                                                    label="Hips"
                                                    placeholder='Type'
                                                    readonly
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('hips')} />
                                                {!requestData.hips && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.thighs}
                                                    type='text'
                                                    label="Thighs"
                                                    placeholder='Type'
                                                    readonly
                                                    validators={[
                                                        { check: Validators.required, message: 'NIC is not valid' }
                                                    ]}
                                                    onChange={handleChange('thighs')} />
                                                {!requestData.thighs && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">

                                            </div>
                                        </div>







                                    </div>
                                </div>



                            </form>
                        </div>

                    </div>
                    <div className="own-addworkout-right">
                        <div className="addworkout_card2">
                            <div className="update-workout-form-inputs">
                                <h4 className='add-trainer-form-subHeading'>Member Type</h4>
                                <hr className="add-trainer-hr" />
                                <Dropdown
                                    data={[
                                        { value: "Monthly-Personal", label: 'Monthly-Personal' },
                                        { value: "Monthly-NonPersonal", label: 'Monthly-NonPersonal' },
                                        { value: "Daily", label: 'Daily' },
                                        
                                    ]}
                                    label="Member Type"
                                    // styleClass='mt-3'
                                    value={requestData.memType}
                                    placeholder='Select'
                                    onChange={handleDropdown}
                                /><br></br>
                            </div>
                        </div>
                        <div className="addworkout_card3">

                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default AddWorkout