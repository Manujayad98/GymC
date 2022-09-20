import React, { useState, useEffect } from "react";
import '../own_sidebar/Sidebar.css'
import './NewExercise.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputField from "../../../Utilities/Form/InputField";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import PictureUploader from "../../../Utilities/Form/PictureUploader/PictureUploader";

import { addNewExercise } from "../../../../services/ExerciseService";


export default function AddnewExercise() {

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

        name: '',
        caloriesPerRep: '',
        primaryMuscle: '',
        secondaryMuscle: '',
        equipmentid: '',
    });


    const [click, setClick] = useState(false);
   

    const handleChange = (key) => (value) => {
        console.log(key, value);
        setState({
            ...requestData,
            [key]: value
        });
    };
   
    const handleSubmit = (evt) => {
        console.log(requestData);
        evt.preventDefault();

        if (!requestData.name || !requestData.caloriesPerRep || !requestData.primaryMuscle || !requestData.secondaryMuscle || !requestData.equipmentid) {
            console.log('Please fill out the form correctly');
            setClick({ click: true, })
            toast.warning('Please fill out the form correctly');
        }
        else {
            console.log(requestData);

            addNewExercise(requestData)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        if (response.data === 'Already exsisting exercise!') {
                            toast.warning('Already exsisting exercise!');
                        } else {
                            window.location.href = "/Oadjustments";
                            toast.success("successfully added the New Exercise!!!");
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
                <HeaderO title="New Exercise" />
                <div className="content-container">
                    <div className="add-newExercise-form-div">
                        <form className="login-form" onSubmit={handleSubmit} noValidate={false}>
                            <div className="add-newExercise-form-container">

                                <div className="add-newExercise-form-inputs">
                                    <h4 className='add-newExercise-form-subHeading'>Exercise Info</h4>
                                    <hr className="add-newExercise-hr" />
                                    <div className="form-row">
                                     
                                     <div className="form-col1">
                                         <InputField
                                             value={requestData.name}
                                             type='text'
                                             label="Exercise Name"
                                             placeholder='Type'
                                             validators={[
                                                 { check: Validators.required, message: 'This field is required' }
                                             ]}
                                             onChange={handleChange('name')} />
                                         {!requestData.firstName && click && <span className='text-danger'>This Field is required</span>}
                                     </div>
                                     
                                 </div>
                                    <div className="form-row">
                                     
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.primaryMuscle}
                                                type='text'
                                                label="Primary Muscle"
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('primaryMuscle')} />
                                            {!requestData.firstName && click && <span className='text-danger'>This Field is required</span>}
                                        </div>
                                        <div className="form-col2">
                                            <InputField
                                                value={requestData.secondaryMuscle}
                                                type='text'
                                                label="Secondary Muscle"
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('secondaryMuscle')} />
                                            {!requestData.lastName && click && <span className='text-danger'>This Field is required</span>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                     
                                     <div className="form-col1">
                                         <InputField
                                             value={requestData.equipmentid}
                                             type='text'
                                             label="Equipment ID"
                                             placeholder='Type'
                                             validators={[
                                                 { check: Validators.required, message: 'This field is required' }
                                             ]}
                                             onChange={handleChange('equipmentid')} />
                                         {!requestData.firstName && click && <span className='text-danger'>This Field is required</span>}
                                     </div>
                                     <div className="form-col2">
                                         <InputField
                                             value={requestData.caloriesPerRep}
                                             type='text'
                                             label="Calories per repetition"
                                             placeholder='Type'
                                             validators={[
                                                 { check: Validators.required, message: 'This field is required' }
                                             ]}
                                             onChange={handleChange('caloriesPerRep')} />
                                         {!requestData.lastName && click && <span className='text-danger'>This Field is required</span>}
                                     </div>
                                 </div>

                                    
                                    {/* <h4 className='add-newExercise-form-subHeading'>Steps</h4>
                                    <hr className="add-newExercise-hr" />
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.qualification}
                                                type='textarea'
                                                label='Step 01'
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('qualification')} />
                                            {!requestData.qualification && click && <span className='text-danger'>This Field is required</span>}

                                            <br></br>

                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.qualification}
                                                type='textarea'
                                                label='Step 02'
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('qualification')} />
                                            {!requestData.qualification && click && <span className='text-danger'>This Field is required</span>}

                                            <br></br>

                                        </div>
                                    </div> */}

                                 

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
