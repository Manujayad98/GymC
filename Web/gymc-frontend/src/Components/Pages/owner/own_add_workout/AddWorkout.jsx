import React, { useState, useEffect } from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
// import Table from '../../../Utilities/Tables/Table1'

// import Add from '../../../../images/Add.svg'
// import Clear from '../../../../images/clear.svg'
// import T1 from '../../../../images/t1.png'
import Pic1 from '../../../../images/owner.png'
// import Card from 'react-bootstrap/Card'
// import Plus from '../../../../images/plus.svg'
// import Minus from '../../../../images/minus.svg'

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'
import SampleCal from '../../../Utilities/CalendarComp/SampleCal'

import InputField from "../../../Utilities/Form/InputField";
import '../../../Utilities/Form/Form.css'
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Dropdown from "../../../Utilities/Form/Dropdown";
// import Table from '../../../Utilities/Tables/Table2'
import { Link, useParams } from 'react-router-dom'

// import Button1 from '@mui/material/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddWorkout.css'

import { Calendar } from 'react-calendar'
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { getTrainerData, addWorkoutDetails, addWorkoutDateExerciseDetails, addDietPlanDetails, getAvailableSlots, getExerciseDetails } from "../../../../services/WorkoutService";

const AddWorkout = () => {

    const { id } = useParams();

    const [requestData, setState] = useState({
        traineeId: id,
        height: '',
        weight: '',
        diseases: '',
        biceps: '',
        forearms: '',
        chest: '',
        hips: '',
        thighs: '',
        workoutType: '',
        staff_id: '',
        start_date: '',
        end_date: '',
        workoutName: 'Fitness 5'

    });
    const [mainpopup, setMainPopUp] = useState("");
    const [popup, setPopUp] = useState("");
    const [click, setClick] = useState(false);
    const [showWorkoutDive, setShowWorkoutDive] = useState("");

    const handleChange = (key) => (value) => {
        setState({
            ...requestData,
            [key]: value
        });
    };

    const closePopUp = () => {
        setPopUp("");
    };

    const handleDropdownTrainer = (trainer_id) => (value) => {
        console.log(trainer_id, value);
        setState({ ...requestData, [trainer_id]: value });
    };

    const handleDropdownPayment = (paymentPlan) => (value) => {
        console.log(paymentPlan, value);
        setState({ ...requestData, [paymentPlan]: value });
    };

    const handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    const addWorkout = (evt) => {
        console.log(requestData);
        evt.preventDefault();


        if (!requestData.traineeId || !requestData.height || !requestData.weight || !requestData.biceps || !requestData.forearms || !requestData.chest || !requestData.hips || !requestData.thighs || !requestData.workoutType || !requestData.start_date || !requestData.end_date) {
            console.log('Please fill out the form correctly');
            setClick({ click: true, })
            toast.warning('Please fill out the form correctly');
        }

        else {

            addWorkoutDetails(requestData, id)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        // setPopUp("show");
                        // setMainPopUp("hide");
                        moveToMoreView(id, response.data, requestData.staff_id);
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

    const moveToMoreView = (trainee_id, schedule_id, trainer_id) => {
        window.location.href = `/AddWorkout2/${trainee_id}/${schedule_id}/${trainer_id}`;
    }

    return (
        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="New Workout" />

                {mainpopup === "" && (
                    <form className="" onSubmit={addWorkout} noValidate={false}>
                        <div className='add-workout-main-topics'>Basic Info
                            <hr />
                        </div>
                        <div className="own-addworkout-content-container">
                            <div className="own-addworkout-left">
                                {/* <div className="own-addworkout-profile">

                                    <div className='own-dashboard-card own-dashboard-profile-cards'>
                                        <div className='own-dashboard-card-img-container'>
                                            <img src={Pic1} alt="" />
                                        </div>
                                        <div className='own-dashboard-card-content'>
                                            <div className='staffID'>T00001</div>
                                            <div className='staffName'>Sanjana Rajapaksha</div>
                                        </div>
                                    </div>

                                </div> */}
                                <div className="addworkout_card1">


                                    <div className="update-workout-form">
                                        <div className="add-workout-form-inputs">
                                            <h4 className='update-workout-form-subHeading'>Body Measures</h4>
                                            <hr className="add-trainer-hr" />

                                            <div className="form-row">
                                                <div className="form-col1">
                                                    <InputField
                                                        value={requestData.height}
                                                        type='text'
                                                        label="Height"
                                                        placeholder='Type'
                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
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

                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
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
                                                        type='textarea'
                                                        label='Deceases'
                                                        placeholder='Type'
                                                        validators={[
                                                            { check: Validators.required, message: 'This field is required' }
                                                        ]}
                                                        onChange={handleChange('diseases')}
                                                    />
                                                    {!requestData.diseases && click && <span className='text-danger'>This Field is required</span>}

                                                </div>
                                                <div className="form-col2">

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
                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
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
                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
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
                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
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
                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
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
                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
                                                        ]}
                                                        onChange={handleChange('thighs')} />
                                                    {!requestData.thighs && click && <span className='text-danger'>This Field is required</span>}
                                                </div>
                                                <div className="form-col2">

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="own-addworkout-right">
                                <div className="addworkout_card2">
                                    <div className="update-workout-form-inputs">
                                        <h4 className='add-trainer-form-subHeading' style={{ marginTop: '10px' }}>Payment Plan</h4>
                                        <hr className="add-trainer-hr" />
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <Dropdown
                                                    data={[
                                                        { value: 1, label: 'Monthly-Personal' },
                                                        { value: 2, label: 'Monthly-NonPersonal' },
                                                        { value: 3, label: 'Daily' },

                                                    ]}
                                                    value={requestData.workoutType}
                                                    placeholder='Select'
                                                    onChange={handleDropdownPayment('workoutType')}
                                                />
                                                {!requestData.workoutType && click && <span className='text-danger'>This Field is required</span>}

                                            </div>
                                            <div className="form-col2">

                                            </div>
                                        </div>

                                    </div>

                                    <div className="update-workout-form-inputs">
                                        <h4 className='add-trainer-form-subHeading' style={{ marginTop: '10px' }}>Trainer</h4>
                                        <hr className="add-trainer-hr" />
                                        <div className="form-row">
                                            <div className="form-col1">
                                                {(requestData.workoutType == 2) ?
                                                    <Dropdown
                                                        data={[
                                                            { value: 1, label: 'N.P.Kumara' },
                                                            { value: 2, label: 'S.Saantha' },
                                                            { value: 3, label: 'R.P.Nishantha' },

                                                        ]}
                                                        value={requestData.staff_id == 0}
                                                        placeholder='Select'
                                                        readonly
                                                    />
                                                    :
                                                    <Dropdown
                                                        data={[
                                                            { value: 1, label: 'N.P.Kumara' },
                                                            { value: 2, label: 'S.Saantha' },
                                                            { value: 3, label: 'R.P.Nishantha' },

                                                        ]}
                                                        value={requestData.staff_id}
                                                        placeholder='Select'
                                                        onChange={handleDropdownTrainer('staff_id')}
                                                    />
                                                }
                                                {!requestData.staff_id && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">

                                            </div>
                                        </div>

                                    </div>

                                    <div className="update-workout-form-inputs">
                                        <h4 className='add-trainer-form-subHeading' style={{ marginTop: '10px' }}>Duration</h4>
                                        <hr className="add-trainer-hr" />
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={requestData.start_date}
                                                    type='date'
                                                    label="Start Date"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('start_date')} />
                                                {!requestData.start_date && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={requestData.end_date}
                                                    type='date'
                                                    label="End Date"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('end_date')} />
                                                {!requestData.end_date && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <button type="submit" className="own_add_workout-btn" >Schedule</button>
                                    {/* <input type="submit" onClick={setPopUp('show')} /> */}
                                </div>

                            </div>

                        </div>
                    </form>
                )}
                {popup === "show" && (
                    <ShowWorkoutDates
                    />
                )}

            </div>

        </div>
    )
}

const ShowWorkoutDates = () => {

    useEffect(() => {
        getExerciseDetailsForView();
    }, []);

    const getExerciseDetailsForView = async () => {
        const res = await getExerciseDetails();
        console.log(res.data);
        setExcerciseDetails(
            [...res.data]
        );
    };



    const { id } = useParams();

    const [workoutDates, setWorkoutDates] = useState({
        trainee_id: id,
        trainer_id: '',
        exercices: [],
        trainingDate: '',
        startTime: '',
        endTime: '',
        // workoutScheduleID: '',
    });

    const [dietPlanDetails, setDietPlanDetails] = useState({
        carbohydrate: '',
        fats: '',
        proteins: '',
    });
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChangeDate = (key) => (value) => {
        console.log(key, value);
        setSelectedDate({
            ...selectedDate,
            [key]: dayjs(value).format('YYYY-MM-DD')
        });
        // const res = await getWorkoutDetails(selectedDate, id);
        // console.log(res.data);
        // setTraineeWorkoutDetails(
        //     res.data
        // );
    };
    dietPlanDetails.trainingDate = selectedDate;
    console.log(dietPlanDetails.trainingDate);

    const addDates = (evt) => {
        console.log(workoutDates);
        console.log(dietPlanDetails);
        evt.preventDefault();


        // if (!workoutDates.exercices || !workoutDates.startTime || !workoutDates.endTime) {
        //     console.log('Please fill out the form correctly');
        //     setClick({ click: true, })
        //     toast.warning('Please fill out the form correctly');
        // }

        // else {
        //     addWorkoutDateExerciseDetails(workoutDates)
        //         .then((response) => {
        //             if (response.status === 200) {
        //                 console.log(response.data);
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
    }

    const next = () => {
        setPopUp("diet");
        setMainPopUp("hide");
    }

    const [popup, setPopUp] = useState("");
    const [mainpopup, setMainPopUp] = useState("");


    const [click, setClick] = useState(false);

    const handleChangeDiet = (key) => (value) => {
        console.log(value);
        setDietPlanDetails({
            ...dietPlanDetails,
            [key]: value
        });
    };
    const [excerciseDetails, setExcerciseDetails] = useState([]);
    // const [excerciseDetails, setExcerciseDetails] = useState([
    //     {
    //         Name: "Incline Press",
    //         Repititions: 0
    //     },
    //     {
    //         Name: "Incline Press",
    //         Repititions: 0

    //     },
    //     {
    //         Name: "Incline Press",
    //         Repititions: 0

    //     },
    //     {
    //         Name: "Incline Press",
    //         Repititions: 0

    //     },
    //     {
    //         Name: "Incline Press",
    //         Repititions: 0

    //     },

    // ]);

    const handleDropdownStartTime = (startTime) => (value) => {
        console.log('hi');
        // console.log(startTime, value);
        setWorkoutDates({ ...workoutDates, [startTime]: value });
    };
    const handleDropdownEndtTime = (endTime) => (value) => {
        // console.log(endTime, value);
        setWorkoutDates({ ...workoutDates, [endTime]: value });
    };

    return (
        <>
            {/* {mainpopup === "" && ( */}
            <div>
                <div className='add-workout-main-topics'>Workout Info
                    <hr />
                </div>
                <form className="" onSubmit={addDates} noValidate={false}>
                    <div className="own-addworkout-content-container">

                        <div className="own-addworkout-right">
                            <div >

                                {/* <h4 className='update-workout-form-subHeading'>Workout Dates</h4> */}
                                {/* <hr className="add-trainer-hr" /> */}
                                <div className="own-addworkout-calender" style={{ marginTop: '10px' }}>
                                    <div className="own-viewworkout-calender-card">
                                        {/* <CalendarComp /> */}
                                        <Calendar
                                            onChange={handleChangeDate('selectedDate')}
                                        // data={myEvents}
                                        // value={value}
                                        // minDate={mindate}
                                        // maxDate={maxdate}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="addworkout_card4">
                                <div className="update-workout-form-inputs">
                                    <h4 className='add-trainer-form-subHeading' style={{ marginTop: '10px' }}>Time Slot</h4>
                                    <hr className="add-trainer-hr" />
                                    <div className="form-row">
                                        <div className="form-col1">
                                            {/* <Dropdown
                                                    data={[
                                                        { value: 1, label: 'Monthly-Personal' },
                                                        { value: 2, label: 'Monthly-NonPersonal' },
                                                        { value: 3, label: 'Daily' },
                                                    ]}
                                                    value={requestData.workoutType}
                                                    placeholder='Select'
                                                    onChange={handleDropdownPayment('workoutType')}
                                                /> */}
                                            <Dropdown
                                                data={[
                                                    { value: 1, label: '6.00 AM' },
                                                    // { value: 2, label: '6.30 AM' },
                                                    // { value: 3, label: '7.00 AM' },
                                                    // { value: 4, label: '7.30 Am' },
                                                    // { value: 5, label: '8.00 AM' },
                                                    // { value: 6, label: '8.30 AM' },

                                                    // { value: 7, label: '9.00 Am' },
                                                    // { value: 8, label: '9.30 AM' },
                                                    // { value: 9, label: '10.00 AM' },
                                                    // { value: 10, label: '10.30 Am' },
                                                    // { value: 11, label: '11.00 AM' },
                                                    // { value: 12, label: '11.30 AM' },

                                                    // { value: 13, label: '12.00 PM' },
                                                    // { value: 14, label: '12.30 PM' },
                                                    // { value: 15, label: '13.00 PM' },
                                                    // { value: 16, label: '13.30 PM' },
                                                    // { value: 17, label: '14.00 PM' },
                                                    // { value: 18, label: '14.30 PM' },

                                                    // { value: 19, label: '15.00 PM' },
                                                    // { value: 20, label: '15.30 PM' },
                                                    // { value: 21, label: '16.00 PM' },
                                                    // { value: 22, label: '16.30 PM' },
                                                    // { value: 23, label: '17.00 PM' },
                                                    // { value: 24, label: '17.30 PM' },

                                                    // { value: 25, label: '18.00 PM' },
                                                    // { value: 26, label: '18.30 PM' },
                                                    // { value: 27, label: '19.00 PM' },
                                                    // { value: 28, label: '19.30 PM' },
                                                    // { value: 29, label: '20.00 PM' },
                                                    // { value: 30, label: '20.30 PM' },

                                                    // { value: 31, label: '21.00 PM' },
                                                    // { value: 32, label: '21.30 PM' },
                                                ]}

                                                label="Start Time"
                                                value={workoutDates.startTime}
                                                placeholder='Select'
                                                onChange={handleDropdownStartTime['startTime']}
                                            />
                                            {!workoutDates.startTime && click && <span className='text-danger'>This Field is required</span>}

                                        </div>
                                        <div className="form-col2">
                                            <Dropdown
                                                data={[
                                                    { value: 1, label: '6.30 AM' },
                                                    // { value: 2, label: '7.00 AM' },
                                                    // { value: 3, label: '7.30 Am' },
                                                    // { value: 4, label: '8.00 AM' },
                                                    // { value: 5, label: '8.30 AM' },

                                                    // { value: 6, label: '9.00 Am' },
                                                    // { value: 7, label: '9.30 AM' },
                                                    // { value: 8, label: '10.00 AM' },
                                                    // { value: 9, label: '10.30 Am' },
                                                    // { value: 10, label: '11.00 AM' },
                                                    // { value: 11, label: '11.30 AM' },

                                                    // { value: 12, label: '12.00 PM' },
                                                    // { value: 13, label: '12.30 PM' },
                                                    // { value: 14, label: '13.00 PM' },
                                                    // { value: 15, label: '13.30 PM' },
                                                    // { value: 16, label: '14.00 PM' },
                                                    // { value: 17, label: '14.30 PM' },

                                                    // { value: 18, label: '15.00 PM' },
                                                    // { value: 19, label: '15.30 PM' },
                                                    // { value: 20, label: '16.00 PM' },
                                                    // { value: 21, label: '16.30 PM' },
                                                    // { value: 22, label: '17.00 PM' },
                                                    // { value: 23, label: '17.30 AM' },

                                                    // { value: 24, label: '18.00 PM' },
                                                    // { value: 25, label: '18.30 PM' },
                                                    // { value: 26, label: '19.00 PM' },
                                                    // { value: 27, label: '19.30 PM' },
                                                    // { value: 28, label: '20.00 PM' },
                                                    // { value: 29, label: '20.30 PM' },

                                                    // { value: 30, label: '21.00 PM' },
                                                    // { value: 31, label: '21.30 PM' },
                                                    // { value: 32, label: '22.00 PM' },
                                                ]}
                                                label="End Time"
                                                value={workoutDates.endTime}
                                                placeholder='Select'
                                                onChange={handleDropdownEndtTime['endTime']}
                                            />
                                            {!workoutDates.startTime && click && <span className='text-danger'>This Field is required</span>}

                                        </div>
                                    </div>
                                    {/* <div className="form-row">
                                        <div className="form-col1"></div>
                                        <div className="form-col2">
                                            <button className="own_add_workout-btn" >Add Date</button>
                                        </div>
                                    </div> */}

                                </div>

                            </div>
                            {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: '20px' }}>
                                <button className="own_next_workout-btn" > Finish</button>
                            </div> */}

                        </div>
                        <div className="own-addworkout-left">
                            <div className="addworkout_card1">
                                {/* <form className onSubmit={addDates} noValidate={false}> */}
                                <div className="update-workout-form">
                                    <div className="add-workout-form-inputs" style={{ marginTop: '-35px' }}>
                                        <h4 className='update-workout-form-subHeading'>Workout Plan</h4>
                                        <hr className="add-trainer-hr" />
                                        <div style={{ margin: '20px 0px' }}>
                                            <MaterialTable
                                                title="Exersices"
                                                columns={[
                                                    { title: "Exercice ID", field: "exerciseid", editable: 'never' },
                                                    { title: "Name", field: "name", editable: 'never' },
                                                    { title: "Repitition Count", field: "repCount", editable: 'onUpdate', type: 'numeric' },
                                                ]}
                                                icons={TableIcons}
                                                data={excerciseDetails}
                                                editable={{
                                                    onRowUpdate: (newData, oldData, rowData) =>
                                                        new Promise((resolve, reject) => {
                                                            setTimeout(() => {
                                                                const dataUpdate = [...excerciseDetails];
                                                                const index = oldData.tableData.id;
                                                                dataUpdate[index] = newData;
                                                                setExcerciseDetails([...dataUpdate]);

                                                                resolve();
                                                            }, 1000)

                                                            // const found = workoutDates.exercices.find(obj => {
                                                            //     return obj.exerciseid === newData.id;
                                                            //   });

                                                            if (newData.repCount != 0) {
                                                                console.log(workoutDates);
                                                                console.log(id);
                                                                console.log(newData.repCount);
                                                                workoutDates.exercices.push({ ...newData })

                                                            } else {
                                                                workoutDates.exercices.pop({ ...newData })
                                                            }

                                                        }),
                                                }}
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
                                        <h4 className='update-workout-form-subHeading'>Diet Plan</h4>
                                        <hr className="add-trainer-hr" />
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={dietPlanDetails.carbohydrate}
                                                    type='text'
                                                    label="Carbs"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'NIC is not valid' }
                                                    ]}
                                                    onChange={handleChangeDiet('carbohydrate')} />
                                                {!dietPlanDetails.carbohydrate && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={dietPlanDetails.fats}
                                                    type='text'
                                                    label="Facts"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'NIC is not valid' }
                                                    ]}
                                                    onChange={handleChangeDiet('fats')} />
                                                {!dietPlanDetails.fats && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={dietPlanDetails.proteins}
                                                    type='text'
                                                    label="Protein"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'NIC is not valid' }
                                                    ]}
                                                    onChange={handleChangeDiet('proteins')} />
                                                {!dietPlanDetails.proteins && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                        <div style={{ justifyContent: 'flex-start', margin: '20px' }}>
                            <div className="form-col1"></div>
                            <div className="form-col2">
                                <button className="own_add_workout-btn" >Add Date</button>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px' }}>
                            <button className="own_next_workout-btn" > Finish</button>
                        </div>

                    </div>

                </form>

            </div>

            {/* )} */}
            {/* {popup === "diet" && (
                <ShowDiet
                />
            )} */}
        </>
    )
}

// const ShowDiet = () => {
//     const { id } = useParams();

//     const [click, setClick] = useState(false);

//     const [dietPlan, setDietPlan] = useState({
//         trainee_id: id,
//         carbs: '',
//         facts: '',
//         protein: '',
//     });

//     const handleChange = (key) => (value) => {
//         setDietPlan({
//             ...dietPlan,
//             [key]: value
//         });
//     };


//     const addDietPlan = (evt) => {
//         console.log(dietPlan);
//         evt.preventDefault();




//         // if (!dietPlan.carbs || !dietPlan.facts || !dietPlan.protein) {
//         //     console.log('Please fill out the form correctly');
//         //     setClick({ click: true, })
//         //     toast.warning('Please fill out the form correctly');
//         // }

//         // else {
//         //     addDietPlanDetails(requestData)
//         //         .then((response) => {
//         //             if (response.status === 200) {
//         //                 console.log(response.data);
//         //                 if (response.data === "You have already an account!") {
//         //                     toast.warning('You have already an account!');
//         //                 } else {
//         //                     window.location.href = "/";
//         //                     toast.success("successfully registered!!!");
//         window.location.href = `/ViewWorkout/${id}`;

//         //                 }
//         //             }
//         //         })
//         //         .catch((err) => {
//         //             if (err && err.response) {
//         //                 console.log(err);
//         //                 toast.error('Failed!!!');
//         //             }
//         //         });
//         // }

//     }

//     return (
//         <>

//             <form className="" onSubmit={addDietPlan} noValidate={false}>
//                 <div className="own-addworkout-content-container">
//                     <div className="own-addworkout-left">
//                         <div className="addworkout_card1">
//                             {/* <form className onSubmit={addDates} noValidate={false}> */}
//                             <div className="update-workout-form">
//                                 <div className="add-workout-form-inputs" style={{ marginTop: '-35px' }}>
//                                     <h4 className='update-workout-form-subHeading'>Diet Plan</h4>
//                                     <hr className="add-trainer-hr" />
//                                     <div className="form-row">
//                                         <div className="form-col1">
//                                             <InputField
//                                                 value={dietPlan.carbs}
//                                                 type='text'
//                                                 label="Carbs"
//                                                 placeholder='Type'
//                                                 validators={[
//                                                     { check: Validators.required, message: 'NIC is not valid' }
//                                                 ]}
//                                                 onChange={handleChange('carbs')} />
//                                             {!dietPlan.carbs && click && <span className='text-danger'>This Field is required</span>}
//                                         </div>
//                                         <div className="form-col2">
//                                             <InputField
//                                                 value={dietPlan.facts}
//                                                 type='text'
//                                                 label="Facts"
//                                                 placeholder='Type'
//                                                 validators={[
//                                                     { check: Validators.required, message: 'NIC is not valid' }
//                                                 ]}
//                                                 onChange={handleChange('facts')} />
//                                             {!dietPlan.facts && click && <span className='text-danger'>This Field is required</span>}
//                                         </div>
//                                     </div>
//                                     <div className="form-row">
//                                         <div className="form-col1">
//                                             <InputField
//                                                 value={dietPlan.protein}
//                                                 type='text'
//                                                 label="Protein"
//                                                 placeholder='Type'
//                                                 validators={[
//                                                     { check: Validators.required, message: 'NIC is not valid' }
//                                                 ]}
//                                                 onChange={handleChange('protein')} />
//                                             {!dietPlan.protein && click && <span className='text-danger'>This Field is required</span>}
//                                         </div>
//                                         <div className="form-col2">

//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: '20px 0 0 20px' }}>
//                                 <button className="own_next_workout-btn"> Finish</button>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </form>

//         </>
//     )
// }

export default AddWorkout