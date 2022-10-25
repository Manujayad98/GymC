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
import { getTrainerData, getWorkoutDetails, getTraineeDiet } from "../../../../services/WorkoutService";
import Moment from 'moment';
import { Calendar } from 'react-calendar'
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";

export default function ViewWorkout() {

    const { id } = useParams();

    useEffect(() => {
        checkValidate();
        getTraineeDetails();
        getTraineeWorkoutDetails();
        getTraineeDietPlanDetails();
    }, []);

    const checkValidate = async () => {
        console.log(id);
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    // const current = new Date();

    // console.log(`${current.getMonth() + 1}` / 10);
    // const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;


    var MyDate = new Date();
    var dateToday;

    dateToday = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);

    console.log(dateToday);

    const [traineeDetails, setTraineeDetails] = useState([]);
    const [traineeWorkoutDetails, setTraineeWorkoutDetails] = useState([]);
    const [traineeDietDetails, setTraineeDietDetails] = useState([]);

    const [value, onChange] = useState(new Date());
    const now = new Date();
    const day = now.getDay();
    const monday = now.getDate() - day + (day == 0 ? -6 : 1);

    const [selectedDate, setSelectedDate] = useState(null);


    const handleChange = (key) => async (value) => {
        console.log(key, value);
        setSelectedDate({
            ...selectedDate,
            [key]: dayjs(value).format('YYYY-MM-DD')
        });
        const res = await getWorkoutDetails(dateToday, id);
        console.log(res.data);
        setTraineeWorkoutDetails(
            res.data
        );
    };

    // var dateSelected = dayjs(selectedDate).format('YYYY-MM-DD')

    console.log(selectedDate);

    // console.log(dayjs(selectedDate).format('YYYY-MM-DD'));

    const getTraineeDetails = async () => {
        const res = await getTrainerData(id);
        console.log(res.data);
        setTraineeDetails(
            res.data[0]
        );
    };

    const getTraineeWorkoutDetails = async () => {
        const res = await getWorkoutDetails(dateToday, id);
        console.log(res.data);
        setTraineeWorkoutDetails(
            res.data
        );
    };
    const getTraineeDietPlanDetails = async () => {
        const res = await getTraineeDiet(dateToday, id);
        console.log(res.data);
        setTraineeDietDetails(
            res.data
        );
    };

    const moveToMoreView = () => {
        window.location.href = `/AddWorkout/${id}`;
    }

    // const handleChange = (key) => (value) => {
    //     setState({
    //         ...requestData,
    //         [key]: value
    //     });
    // };

    // const [workoutDetailsTableHead] = useState([
    //     { label: "exercise", id: "incline", numeric: false },
    //     { label: "Repitions", id: "reps", numeric: false },
    //     { id: "delete", numeric: false },

    // ]);
    // const [workoutDetails] = useState([
    //     {
    //         incline: "Incline Press",
    //         reps: "15 Reps",
    //         delete: <img src={Edit} alt="" height={20} width={20} />,

    //     },
    //     {
    //         incline: "Incline Press",
    //         reps: "15 Reps",
    //         delete: <img src={Edit} alt="" height={20} width={20} />,

    //     },
    //     {
    //         incline: "Incline Press",
    //         reps: "15 Reps",
    //         delete: <img src={Edit} alt="" height={20} width={20} />,

    //     },



    // ]);
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
                                                value={traineeDetails.firstName}
                                                type='text'
                                                name='userId'
                                                label="First Name"
                                                // placeholder='Type'
                                                readonly
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fullname')}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={traineeDetails.lastName}
                                                type='text'
                                                name='userId'
                                                label="Last Name"
                                                // placeholder='Type'
                                                readonly
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fullname')} 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-col1">
                                            <InputField
                                                value={traineeDetails.dob}
                                                type='text'
                                                name='DOB'
                                                label="DOB"
                                                // placeholder='Type'
                                                readonly
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('fullname')} 
                                            />
                                        </div>
                                    </div>

                                    <div className='form-row'>
                                        <div className="form-col1">
                                            <InputField
                                                value={traineeDetails.phoneNumber}
                                                type='text'
                                                name='Phone Number'
                                                label="Phone Number"
                                                // placeholder='Type'
                                                readonly

                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('password')}
                                            />
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className="form-col1">
                                            <InputField
                                                value={traineeDetails.emergencyNumber}
                                                type='text'
                                                name='emergencyNumber'
                                                label="Emergency Number"
                                                // placeholder='Type'
                                                readonly
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('password')}
                                            />
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className="form-col1">
                                            <InputField
                                                value={traineeDetails.address}
                                                type='text'
                                                name='address'
                                                label="Address"
                                                // placeholder='Type'
                                                readonly
                                            // validators={[
                                            //     { check: Validators.required, message: 'This field is required' }
                                            // ]}
                                            // onChange={handleChange('password')}
                                            />
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
                                    <Calendar
                                        onChange={handleChange('selectedDate')}
                                        // data={myEvents}
                                        value={value}
                                    // minDate={mindate}
                                    // maxDate={maxdate}
                                    />
                                </div>
                            </div>
                            {/* <div className="viewBtnDiv">
                                <button class="viewD">View Details</button>
                            </div> */}
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
                                                    { title: "Name", field: "name" },
                                                    { title: "Repitition Count", field: "noOfRepetitions" },
                                                ]}
                                                icons={TableIcons}
                                                data={traineeWorkoutDetails}
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
                                                data={traineeDietDetails}
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


