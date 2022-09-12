import React, { useState, useEffect } from "react";
import '../own_sidebar/Sidebar.css'
import './ViewWorkout.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import SampleCal from '../../../Utilities/CalendarComp/SampleCal'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Pic1 from '../../../../images/owner.png'
import Edit from '../../../../images/Icons/pen-solid.svg'
// import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Table from '../../../Utilities/Tables/Table2';
import { Link, useParams } from 'react-router-dom'
import CalendarComp from "../../../Utilities/CalendarComp/CalendarComp";
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

export default function ViewWorkout() {

    const { id } = useParams();

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        console.log(id);
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const moveToMoreView = () => {
        window.location.href = `/AddWorkout/${id}`;
    }

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
    const [workoutDetailsTableHead] = useState([
        { label: "exercise", id: "incline", numeric: false },
        { label: "Repitions", id: "reps", numeric: false },
        { id: "delete", numeric: false },

    ]);
    const [workoutDetails] = useState([
        {
            incline: "Incline Press",
            reps: "15 Reps",
            delete: <img src={Edit} alt="" height={20} width={20} />,

        },
        {
            incline: "Incline Press",
            reps: "15 Reps",
            delete: <img src={Edit} alt="" height={20} width={20} />,

        },
        {
            incline: "Incline Press",
            reps: "15 Reps",
            delete: <img src={Edit} alt="" height={20} width={20} />,

        },



    ]);
    // const [dietDetailsTableHead] = useState([
    //     { label: "Nutrition", id: "nutrition", numeric: false },
    //     { label: "Calorie Intake", id: "CalorieIntake", numeric: false },
    //     { id: "delete", numeric: false },

    // ]);
    const [dietDetails] = useState([
        {
            nutrition: "Nutrition 1",
            CalorieIntake: "25",
        },
        {
            nutrition: "Nutrition 1",
            CalorieIntake: "25",
        },
        {
            nutrition: "Nutrition 1",
            CalorieIntake: "25",
        },

    ]);

    const [excerciseDetails, setExcerciseDetails] = useState([
        {
            // ExerciseID: 1,
            Name: "Incline Press",
            Repititions: 0
        },
        {
            // ExerciseID: 2,
            Name: "Incline Press",
            Repititions: 0

        },
        {
            // ExerciseID: 3,
            Name: "Incline Press",
            Repititions: 0

        },
        {
            // ExerciseID: 4,
            Name: "Incline Press",
            Repititions: 0

        },
        {
            // ExerciseID: 5,
            Name: "Incline Press",
            Repititions: 0

        },

    ]);
    return (
        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="Trainees" />
                <div className="own-trainee-content-container">
                    <div className="left">
                        <div className="own-trainee-profile">

                            <div className="workout-profile-card">
                                <div className='own-dashboard-card-profile-cards'>
                                    <div className='own-viewworkout-card-img-container'>
                                        <img src={Pic1} alt="" />
                                    </div>
                                    <div className='own-dashboard-card-content'>
                                        <div className='tname'>S.Rajapakse</div>
                                        <div className='tid'>T0001</div>

                                    </div>
                                </div>

                            </div>
                            <div className="workout-button-card">
                                {/* <Link to='/OaddWorkout/'> */}
                                <button class="newworkoutbtn" onClick={moveToMoreView}>New Workout</button>
                                {/* </Link> */}
                                <Link to='/Otraineeprogress' style={{ textDecoration: 'none' }}>
                                    <button class="progressbtn">Progress</button>
                                </Link>
                                <Link to='/OupdateWorkout' style={{ textDecoration: 'none' }}>
                                    <button className="update_btn">Update</button>
                                </Link>
                            </div>

                        </div>
                        <div className="own-trainee-form">

                            {/* START */}

                            <div className="view_workout_form-inputs">
                                <div className="f-content">



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
                                                readonly
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
                                    <div className='form-row'>
                                        <div className="form-col1">
                                            <InputField
                                                value={requestData.password}
                                                type='text'
                                                name='password'
                                                label="Address"
                                                placeholder='Type'
                                                validators={[
                                                    { check: Validators.required, message: 'This field is required' }
                                                ]}
                                                onChange={handleChange('password')} />
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* END */}



                        </div>
                    </div>
                    <div className="right">
                        <div className="own-trainee-calender">
                            <h6 className="calender_title">Select a Date from Calandar</h6>
                            <div className="own-viewworkout-calender">

                                <div className="own-viewworkout-calender-card">
                                    {/* <CalendarComp /> */}
                                    <SampleCal />
                                </div>
                            </div>



                        </div>
                        <div className="own-trainee-table">
                            <div className="t-content">
                                <Tabs className="dietworkout_tab">
                                    <Tab eventKey="home" title="Workout" >

                                        {/* <Table
                                            rows={workoutDetails}
                                            headCells={workoutDetailsTableHead}
                                        /> */}
                                        {/* <Link to='/OupdateWorkout'>
                                            <button className="update_btn">Update</button>
                                        </Link> */}
                                        <div style={{ padding: '20px' }}>
                                            <MaterialTable
                                                title="Exersices"
                                                columns={[
                                                    // { title: "Exercice ID", field: "ExerciseID" },
                                                    { title: "Name", field: "Name" },
                                                    { title: "Repitition Count", field: "Repititions" },
                                                ]}
                                                icons={TableIcons}
                                                data={excerciseDetails}
                                                options={{
                                                    pageSize: 3,
                                                    pageSizeOptions: [6, 12, 15],
                                                    headerStyle: {
                                                        backgroundColor: '#1F0106',
                                                        color: '#FFF',
                                                        hover: '#FFF'
                                                    }
                                                }}
                                            />
                                        </div>
                                    </Tab>
                                    <Tab eventKey="profile" title="Diet" >
                                        {/* <Table
                                            rows={dietDetails}
                                            headCells={dietDetailsTableHead}
                                        /> */}
                                        <div style={{ padding: '20px' }}>
                                            <MaterialTable
                                                title="Diet Plan"
                                                columns={[
                                                    { title: "nutrition", field: "nutrition" },
                                                    { title: "CalorieIntake", field: "CalorieIntake" },
                                                ]}
                                                icons={TableIcons}
                                                data={dietDetails}
                                                options={{
                                                    pageSize: 3,
                                                    pageSizeOptions: [6, 12, 15],
                                                    headerStyle: {
                                                        backgroundColor: '#1F0106',
                                                        color: '#FFF',
                                                        hover: '#FFF'
                                                    }
                                                }}
                                            />
                                        </div>
                                    </Tab>

                                </Tabs>




                            </div>



                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}


