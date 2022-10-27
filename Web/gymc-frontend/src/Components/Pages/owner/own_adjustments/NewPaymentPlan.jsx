import React, { useState, useEffect } from "react";
import '../own_sidebar/Sidebar.css'
import './NewPaymentPlan.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputField from "../../../Utilities/Form/InputField";
import { Validators } from "../../../Utilities/Form/Validator/Validator";

import { addPaymentPlan } from "../../../../services/PaymentService";

export default function PaymentPlan() {

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

        type: '',
        amount: '',
        nextAmount: '',
        affectedDate: ''

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

        if (!requestData.type || !requestData.amount || !requestData.nextAmount || !requestData.affectedDate) {
            console.log('Please fill out the form correctly');
            setClick({ click: true, })
            toast.warning('Please fill out the form correctly');
        }
        else {
            console.log(requestData);

            addPaymentPlan(requestData)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        // setMessage(response.data);
                        if (response.data === "Already exsisting payment plan!") {
                            toast.warning('Already exsisting payment plan!');
                        } else {
                            window.location.href = "/Oadjustments";
                            toast.success("successfully added a new payment plan!!!");
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
                <HeaderO title="New Payment Plan" />
                <div className="content-container">
                    <div className="add-paymentPlan-form-div">
                        <form className="login-form" onSubmit={handleSubmit} noValidate={false}>
                            <div className="add-paymentPlan-form-container">

                                <div className="add-paymentPlan-form-inputs">
                                    <h4 className='add-paymentPlan-form-subHeading'>Payment Plan Info</h4>
                                    <hr className="add-paymentPlan-hr" />
                                    
                                    <div className="form-row">
                                       
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.type}
                                                type='text'
                                                label="Plan Type"
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('type')} />
                                            {!requestData.firstName && click && <span className='text-danger'>This Field is required</span>}
                                        </div>
                                        <div className="form-col2">
                                            <InputField
                                                value={requestData.amount}
                                                type='text'
                                                label="Amount"
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.number, message: 'Amount is not valid' }
                                                ]}
                                                onChange={handleChange('amount')} />
                                            {!requestData.lastName && click && <span className='text-danger'>This Field is required</span>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.nextAmount}
                                                type='text'
                                                label="Next Amount"
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.number, message: 'Amount is not valid' }
                                                ]}
                                                onChange={handleChange('nextAmount')} />
                                            {!requestData.nic && click && <span className='text-danger'>This Field is required</span>}
                                        </div>
                                        <div className="form-col2">
                                            <InputField
                                                value={requestData.affectedDate}
                                                type='date'
                                                label="Affected Date"
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('affectedDate')} />
                                            {!requestData.dob && click && <span className='text-danger'>This Field is required</span>}
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
