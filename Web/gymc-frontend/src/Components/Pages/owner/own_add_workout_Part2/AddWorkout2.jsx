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

import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { getTrainerData, addWorkoutDetails, addWorkoutDate, getAvailableSlots, getExerciseDetails } from "../../../../services/WorkoutService";

export default function AddWorkout2() {
    const { traineeid, scheduleid, trainerid } = useParams();

    // const ShowWorkoutDates = () => {
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

    // const checkAvailability = async (workoutDates.trainingDate, trainerid) => {
    //     const res = await getAvailableSlots(trainerid);
    //     console.log(res.data);
    //     setTimeSlots(
    //         [...res.data]
    //     );
    // };

    const [workoutDates, setWorkoutDates] = useState({
        traineeId: traineeid,
        trainingDateList: [],
        trainingDate: '',
        startTime: '',
        endTime: '',
        workoutScheduleId: scheduleid,
    });

    const [dietPlanDetails, setDietPlanDetails] = useState({
        carbohydrate: '',
        fats: '',
        proteins: '',
    });
    const [selectedDate, setSelectedDate] = useState(null);
    const [timeSlots, setTimeSlots] = useState({});
    const [showStartTimeSlots, setStartShowTimeSlots] = useState(false);
    const [showEndTimeSlots, setShowEndTimeSlots] = useState(false);

    const handleChangeDate = (key) => (value) => {
        console.log(value);
        setSelectedDate({
            ...selectedDate,
            [key]: dayjs(value).format('YYYY-MM-DD')
        });

        // moment(dateVal).format('YYYY-MM-DD')

        // const res = await getWorkoutDetails(selectedDate, id);
        // console.log(res.data);
        // setTraineeWorkoutDetails(
        //     res.data
        // );
    };
    dietPlanDetails.trainingDate = selectedDate;

    // console.log(dietPlanDetails.trainingDate['trainingDate']);
    // const getD = async () => {
    //     const res = await getAvailableSlots(dietPlanDetails.trainingDate['trainingDate'], trainerid);
    //     console.log(res.data);
    //     setTimeSlots(res.data);
    //     console.log(timeSlots);
    // }
    const checkAvailability = (evt) => {
        // console.log(workoutDates);
        // console.log(dietPlanDetails);
        evt.preventDefault();



        getAvailableSlots(dietPlanDetails.trainingDate['trainingDate'], trainerid)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setTimeSlots(response.data);
                    console.log(timeSlots);
                    console.log(timeSlots.timeSlot['thirtytwo'])
                    setStartShowTimeSlots(true);
                    console.log(showStartTimeSlots);
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log(err);
                    toast.error('Failed!!!');
                }
            });
        // getD();


    }
    const addDates = (evt) => {
        evt.preventDefault();

        workoutDates.trainingDate = selectedDate['trainingDate'];

        switch (workoutDates.startTime) {
            case '1': return workoutDates.startTime = "06:00:00";
            case '2': return workoutDates.startTime = "06:30:00";
            case '3': return workoutDates.startTime = "07:00:00";
            case '4': return workoutDates.startTime = "07:30:00";
            case '5': return workoutDates.startTime = "08:00:00";
            case '6': return workoutDates.startTime = "08:30:00";
            case '7': return workoutDates.startTime = "09:00:00";
            case '8': return workoutDates.startTime = "09:30:00";
            case '9': return workoutDates.startTime = "10:00:00";
            case '10': return workoutDates.startTime = "10:30:00";
            case '11': return workoutDates.startTime = "11:00:00";
            case '12': return workoutDates.startTime = "11:30:00";
            case '13': return workoutDates.startTime = "12:00:00";
            case '14': return workoutDates.startTime = "12:30:00";
            case '15': return workoutDates.startTime = "13:00:00";
            case '16': return workoutDates.startTime = "13:30:00";
            case '17': return workoutDates.startTime = "14:00:00";
            case '18': return workoutDates.startTime = "14:30:00";
            case '19': return workoutDates.startTime = "15:00:00";
            case '20': return workoutDates.startTime = "15:30:00";
            case '21': return workoutDates.startTime = "16:00:00";
            case '22': return workoutDates.startTime = "16:30:00";
            case '23': return workoutDates.startTime = "17:00:00";
            case '24': return workoutDates.startTime = "17:30:00";
            case '25': return workoutDates.startTime = "18:00:00";
            case '26': return workoutDates.startTime = "18:30:00";
            case '27': return workoutDates.startTime = "19:00:00";
            case '28': return workoutDates.startTime = "19:30:00";
            case '29': return workoutDates.startTime = "20:00:00";
            case '30': return workoutDates.startTime = "20:30:00";
            case '31': return workoutDates.startTime = "21:00:00";
            case '32': return workoutDates.startTime = "21:30:00";
        }
        switch (workoutDates.endTime) {
            case '1': return workoutDates.endTime = "06:30:00";
            case '2': return workoutDates.endTime = "07:00:00";
            case '3': return workoutDates.endTime = "07:30:00";
            case '4': return workoutDates.endTime = "08:00:00";
            case '5': return workoutDates.endTime = "08:30:00";
            case '6': return workoutDates.endTime = "09:00:00";
            case '7': return workoutDates.endTime = "09:30:00";
            case '8': return workoutDates.endTime = "10:00:00";
            case '9': return workoutDates.endTime = "10:30:00";
            case '10': return workoutDates.endTime = "11:00:00";
            case '12': return workoutDates.endTime = "11:30:00";
            case '11': return workoutDates.endTime = "12:00:00";
            case '13': return workoutDates.endTime = "12:30:00";
            case '14': return workoutDates.endTime = "13:00:00";
            case '15': return workoutDates.endTime = "13:30:00";
            case '16': return workoutDates.endTime = "14:00:00";
            case '17': return workoutDates.endTime = "14:30:00";
            case '18': return workoutDates.endTime = "15:00:00";
            case '19': return workoutDates.endTime = "15:30:00";
            case '20': return workoutDates.endTime = "16:00:00";
            case '21': return workoutDates.endTime = "16:30:00";
            case '22': return workoutDates.endTime = "17:00:00";
            case '23': return workoutDates.endTime = "17:30:00";
            case '24': return workoutDates.endTime = "18:00:00";
            case '25': return workoutDates.endTime = "18:30:00";
            case '26': return workoutDates.endTime = "19:00:00";
            case '27': return workoutDates.endTime = "19:30:00";
            case '28': return workoutDates.endTime = "20:00:00";
            case '29': return workoutDates.endTime = "20:30:00";
            case '30': return workoutDates.endTime = "21:00:00";
            case '31': return workoutDates.endTime = "21:30:00";
            case '32': return workoutDates.endTime = "22:00:00";
        }
        if (!workoutDates.trainingDateList || !workoutDates.trainingDate || !workoutDates.startTime || !workoutDates.endTime || !dietPlanDetails.carbohydrate || !dietPlanDetails.fats || !dietPlanDetails.proteins) {
            console.log('Please fill out the form correctly');
            setClick({ click: true })
            toast.warning('Please fill out the form correctly');
        }

        else {
            console.log(traineeid);
            workoutDates.traineeId = traineeid;
            console.log(workoutDates);
            console.log(dietPlanDetails);



            addWorkoutDate(workoutDates, dietPlanDetails.carbohydrate, dietPlanDetails.fats, dietPlanDetails.proteins)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        toast.success("successfully added!!!");
                    } else {
                        toast.warning('Something went wrong!!!');
                    }
                })
                .catch((err) => {
                    if (err && err.response) {
                        console.log(err);
                        toast.error('Failed!!!');
                    }
                });
        }
    }

    const finishSchedule = (e) => {
        e.preventDefault()
        window.location.href = "/Otrainees";
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

    const handleDropdownStartTime = (startTime) => (value) => {
        console.log(startTime, value);
        // console.log(startTime, value);
        setWorkoutDates({ ...workoutDates, [startTime]: value });
    };
    const handleDropdownEndtTime = (endTime) => (value) => {
        // console.log(endTime, value);
        setWorkoutDates({ ...workoutDates, [endTime]: value });
    };

    const [selectedStartTime, setSelectedStartTime] = useState("");


    const handleChange = (e) => {
        e.persist();
        console.log(e.target.name + "-" + e.target.value);
        setWorkoutDates((workoutDates) => ({
            ...workoutDates,
            [e.target.name]: e.target.value,
        }));
        setShowEndTimeSlots(true);
        setSelectedStartTime(e.target.value);
    };
    console.log(selectedStartTime);

    return (
        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="New Workout" />

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
                                            onChange={handleChangeDate('trainingDate')}
                                        // data={myEvents}
                                        // value={value}
                                        // minDate={mindate}
                                        // maxDate={maxdate}
                                        />
                                        {!workoutDates.trainingDate && click && <span className='text-danger'>This is required</span>}
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '18px 0px' }}>
                                            <button className="own_next_workout-btn" onClick={checkAvailability}> Check </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="addworkout_card4">
                                <div className="update-workout-form-inputs">
                                    <h4 className='add-trainer-form-subHeading' style={{ marginTop: '10px' }}>Time Slot</h4>
                                    <hr className="add-trainer-hr" />
                                    <div className="form-row">
                                        <div className="form-col1">

                                            {(showStartTimeSlots == false) ?
                                                <Dropdown
                                                    data={[
                                                    ]}
                                                    label="Start Time"
                                                    placeholder='Select'
                                                    readonly
                                                />
                                                :
                                                <div>
                                                    <div>
                                                        <label>Start Time</label>
                                                    </div>
                                                    <div>
                                                        <select
                                                            type="text"
                                                            onChange={handleChange}
                                                            placeholder='Select'
                                                            name="startTime"
                                                            id="startTime"
                                                            value={workoutDates.startTime}
                                                            className="newDropDown"
                                                        >
                                                            {(timeSlots.timeSlot['one'] <= 3) ? <option value="1">6.00 AM</option> : <option value="1" disabled>6.00 AM</option>}
                                                            {(timeSlots.timeSlot['two'] <= 3) && <option value="2">6.30 AM</option>}
                                                            {(timeSlots.timeSlot['three'] <= 3) && <option value="3">7.00 AM</option>}
                                                            {(timeSlots.timeSlot['four'] <= 3) && <option value="4">7.30 AM</option>}
                                                            {(timeSlots.timeSlot['five'] <= 3) && <option value="5">8.00 AM</option>}
                                                            {(timeSlots.timeSlot['six'] <= 3) && <option value="6">8.30 AM</option>}
                                                            {(timeSlots.timeSlot['seven'] <= 3) && <option value="7">9.00 AM</option>}
                                                            {(timeSlots.timeSlot['eight'] <= 3) && <option value="8">9.30 AM</option>}
                                                            {(timeSlots.timeSlot['nine'] <= 3) && <option value="9">10.00 AM</option>}
                                                            {(timeSlots.timeSlot['ten'] <= 3) && <option value="10">10.30 AM</option>}
                                                            {(timeSlots.timeSlot['eleven'] <= 3) && <option value="11">11.00 AM</option>}
                                                            {(timeSlots.timeSlot['twelve'] <= 3) && <option value="12">11.30 AM</option>}
                                                            {(timeSlots.timeSlot['thirteen'] <= 3) && <option value="13">12.00 PM</option>}
                                                            {(timeSlots.timeSlot['fourteen'] <= 3) && <option value="14">12.30 PM</option>}
                                                            {(timeSlots.timeSlot['fifteen'] <= 3) && <option value="15">01.00 PM</option>}
                                                            {(timeSlots.timeSlot['sixteen'] <= 3) && <option value="16">01.30 PM</option>}
                                                            {(timeSlots.timeSlot['sixteen'] <= 3) && <option value="17">02.00 PM</option>}
                                                            {(timeSlots.timeSlot['seventeen'] <= 3) && <option value="18">02.30 PM</option>}
                                                            {(timeSlots.timeSlot['eighteen'] <= 3) && <option value="19">03.00 PM</option>}
                                                            {(timeSlots.timeSlot['nineteen'] <= 3) && <option value="20">03.30 PM</option>}
                                                            {(timeSlots.timeSlot['twenty'] <= 3) && <option value="21">04.00 PM</option>}
                                                            {(timeSlots.timeSlot['thirtyone'] <= 3) && <option value="22">04.30 PM</option>}
                                                            {(timeSlots.timeSlot['thirtytwo'] <= 3) && <option value="23">05.00 PM</option>}
                                                            {(timeSlots.timeSlot['twentythree'] <= 3) && <option value="24">05.30 PM</option>}
                                                            {(timeSlots.timeSlot['twentyfour'] <= 3) && <option value="25">06.00 PM</option>}
                                                            {(timeSlots.timeSlot['twentyfive'] <= 3) && <option value="26">06.30 PM</option>}
                                                            {(timeSlots.timeSlot['twentysix'] <= 3) && <option value="27">07.00 PM</option>}
                                                            {(timeSlots.timeSlot['twentyseven'] <= 3) && <option value="28">07.30 PM</option>}
                                                            {(timeSlots.timeSlot['twentyeight'] <= 3) && <option value="29">08.00 PM</option>}
                                                            {(timeSlots.timeSlot['twentynine'] <= 3) && <option value="30">08.30 PM</option>}
                                                            {(timeSlots.timeSlot['thirty'] <= 3) && <option value="31">09.00 PM</option>}
                                                            {(timeSlots.timeSlot['thirtyone'] <= 3) && <option value="32">09.30 PM</option>}
                                                            {/* {(timeSlots.timeSlot['thirtytwo'] <= 3) && <option value="32">10.00 PM</option>} */}

                                                        </select>
                                                    </div>
                                                    {!workoutDates.startTime && click && <span className='text-danger'>This Field is required</span>}

                                                    {!workoutDates.trainingDate && workoutDates.startTime && click && <span className='text-danger'>Please select a date first</span>}
                                                </div>
                                            }
                                        </div>
                                        <div className="form-col2">
                                            {/* <Dropdown
                                                data={[
                                                    { value: 1, label: '6.30 AM' },
                                                    { value: 2, label: '7.00 AM' },
                                                    { value: 3, label: '7.30 Am' },
                                                    { value: 4, label: '8.00 AM' },
                                                    { value: 5, label: '8.30 AM' },

                                                    { value: 6, label: '9.00 Am' },
                                                    { value: 7, label: '9.30 AM' },
                                                    { value: 8, label: '10.00 AM' },
                                                    { value: 9, label: '10.30 Am' },
                                                    { value: 10, label: '11.00 AM' },
                                                    { value: 11, label: '11.30 AM' },

                                                    { value: 12, label: '12.00 PM' },
                                                    { value: 13, label: '12.30 PM' },
                                                    { value: 14, label: '13.00 PM' },
                                                    { value: 15, label: '13.30 PM' },
                                                    { value: 16, label: '14.00 PM' },
                                                    { value: 17, label: '14.30 PM' },

                                                    { value: 18, label: '15.00 PM' },
                                                    { value: 19, label: '15.30 PM' },
                                                    { value: 20, label: '16.00 PM' },
                                                    { value: 21, label: '16.30 PM' },
                                                    { value: 22, label: '17.00 PM' },
                                                    { value: 23, label: '17.30 AM' },

                                                    { value: 24, label: '18.00 PM' },
                                                    { value: 25, label: '18.30 PM' },
                                                    { value: 26, label: '19.00 PM' },
                                                    { value: 27, label: '19.30 PM' },
                                                    { value: 28, label: '20.00 PM' },
                                                    { value: 29, label: '20.30 PM' },

                                                    { value: 30, label: '21.00 PM' },
                                                    { value: 31, label: '21.30 PM' },
                                                    { value: 32, label: '22.00 PM' },
                                                ]}
                                                label="End Time"
                                                value={workoutDates.endTime}
                                                placeholder='Select'
                                                onChange={handleDropdownEndtTime['endTime']}
                                            /> */}

                                            {(showEndTimeSlots == false) ?
                                                <Dropdown
                                                    data={[
                                                    ]}
                                                    label="End Time"
                                                    placeholder='Select'
                                                    readonly
                                                />
                                                :
                                                <div>
                                                    <div>
                                                        <label>End Time</label>
                                                    </div>
                                                    <div>
                                                        <select
                                                            type="text"
                                                            onChange={handleChange}
                                                            placeholder='Select'
                                                            name="endTime"
                                                            id="endTime"
                                                            value={workoutDates.endTime}
                                                            className="newDropDown"
                                                        >
                                                            {/* {(timeSlots.timeSlot['one'] <= 3) && <option value="1">6.00 AM</option>} */}
                                                            {(timeSlots.timeSlot['two'] <= 3 && selectedStartTime < 2) ? <option value="1">6.30 AM</option> : <option value="1" disabled>6.30 AM</option>}
                                                            {(timeSlots.timeSlot['three'] <= 3 && selectedStartTime < 3) ? <option value="2">7.00 AM</option> : <option value="2" disabled>7.00 AM</option>}
                                                            {(timeSlots.timeSlot['four'] <= 3 && selectedStartTime < 4) ? <option value="3">7.30 AM</option> : <option value="3" disabled>7.30 AM</option>}
                                                            {(timeSlots.timeSlot['five'] <= 3 && selectedStartTime < 5) ? <option value="4">8.00 AM</option> : <option value="4" disabled>8.00 AM</option>}
                                                            {(timeSlots.timeSlot['six'] <= 3 && selectedStartTime < 6) ? <option value="5">8.30 AM</option> : <option value="5" disabled>8.30 AM</option>}
                                                            {(timeSlots.timeSlot['seven'] <= 3 && selectedStartTime < 7) ? <option value="6">9.00 AM</option> : <option value="6" disabled>9.00 AM</option>}
                                                            {(timeSlots.timeSlot['eight'] <= 3 && selectedStartTime < 8) ? <option value="7">9.30 AM</option> : <option value="7" disabled>9.30 AM</option>}
                                                            {(timeSlots.timeSlot['nine'] <= 3 && selectedStartTime < 9) ? <option value="8">10.00 AM</option> : <option value="8" disabled>10.00 AM</option>}
                                                            {(timeSlots.timeSlot['ten'] <= 3 && selectedStartTime < 10) ? <option value="9">10.30 AM</option> : <option value="9" disabled>10.30 AM</option>}
                                                            {(timeSlots.timeSlot['eleven'] <= 3 && selectedStartTime < 11) ? <option value="10">11.00 AM</option> : <option value="10" disabled>11.00 AM</option>}
                                                            {(timeSlots.timeSlot['twelve'] <= 3 && selectedStartTime < 12) ? <option value="11">11.30 AM</option> : <option value="11" disabled>11.30 AM</option>}
                                                            {(timeSlots.timeSlot['thirteen'] <= 3 && selectedStartTime < 13) ? <option value="12">12.00 PM</option> : <option value="12" disabled>12.00 PM</option>}
                                                            {(timeSlots.timeSlot['fourteen'] <= 3 && selectedStartTime < 14) ? <option value="13">12.30 PM</option> : <option value="13" disabled>12.30 PM</option>}
                                                            {(timeSlots.timeSlot['fifteen'] <= 3 && selectedStartTime < 15) ? <option value="14">01.00 PM</option> : <option value="14" disabled>01.00 PM</option>}
                                                            {(timeSlots.timeSlot['sixteen'] <= 3 && selectedStartTime < 16) ? <option value="15">01.30 PM</option> : <option value="15" disabled>01.30 PM</option>}
                                                            {(timeSlots.timeSlot['sixteen'] <= 3 && selectedStartTime < 17) ? <option value="16">02.00 PM</option> : <option value="16" disabled>02.00 PM</option>}
                                                            {(timeSlots.timeSlot['seventeen'] <= 3 && selectedStartTime < 18) ? <option value="17">02.30 PM</option> : <option value="17" disabled>02.30 PM</option>}
                                                            {(timeSlots.timeSlot['eighteen'] <= 3 && selectedStartTime < 19) ? <option value="18">03.00 PM</option> : <option value="18" disabled>03.00 PM</option>}
                                                            {(timeSlots.timeSlot['nineteen'] <= 3 && selectedStartTime < 20) ? <option value="19">03.30 PM</option> : <option value="19" disabled>03.30 PM</option>}
                                                            {(timeSlots.timeSlot['twenty'] <= 3 && selectedStartTime < 21) ? <option value="20">04.00 PM</option> : <option value="20" disabled>04.00 PM</option>}
                                                            {(timeSlots.timeSlot['thirtyone'] <= 3 && selectedStartTime < 22) ? <option value="21">04.30 PM</option> : <option value="21" disabled>04.30 PM</option>}
                                                            {(timeSlots.timeSlot['thirtytwo'] <= 3 && selectedStartTime < 23) ? <option value="22">05.00 PM</option> : <option value="22" disabled>05.00 PM</option>}
                                                            {(timeSlots.timeSlot['twentythree'] <= 3 && selectedStartTime < 24) ? <option value="23">05.30 PM</option> : <option value="23" disabled>05.30 PM</option>}
                                                            {(timeSlots.timeSlot['twentyfour'] <= 3 && selectedStartTime < 25) ? <option value="24">06.00 PM</option> : <option value="24" disabled>06.00 PM</option>}
                                                            {(timeSlots.timeSlot['twentyfive'] <= 3 && selectedStartTime < 26) ? <option value="25">06.30 PM</option> : <option value="25" disabled>06.30 PM</option>}
                                                            {(timeSlots.timeSlot['twentysix'] <= 3 && selectedStartTime < 27) ? <option value="26">07.00 PM</option> : <option value="26" disabled>07.00 PM</option>}
                                                            {(timeSlots.timeSlot['twentyseven'] <= 3 && selectedStartTime < 28) ? <option value="27">07.30 PM</option> : <option value="27" disabled>07.30 PM</option>}
                                                            {(timeSlots.timeSlot['twentyeight'] <= 3 && selectedStartTime < 29) ? <option value="28">08.00 PM</option> : <option value="28" disabled>08.00 PM</option>}
                                                            {(timeSlots.timeSlot['twentynine'] <= 3 && selectedStartTime < 30) ? <option value="29">08.30 PM</option> : <option value="29" disabled>08.30 PM</option>}
                                                            {(timeSlots.timeSlot['thirty'] <= 3 && selectedStartTime < 31) ? <option value="30">09.00 PM</option> : <option value="30" disabled>09.00 PM</option>}
                                                            {(timeSlots.timeSlot['thirtyone'] <= 3 && selectedStartTime < 32) ? <option value="31">09.30 PM</option> : <option value="31" disabled>09.30 PM</option>}
                                                            {(timeSlots.timeSlot['thirtytwo'] <= 3 && selectedStartTime < 33) ? <option value="32">10.00 PM</option> : <option value="32" disabled>10.00 PM</option>}

                                                        </select>
                                                    </div>
                                                    {!workoutDates.endTime && click && <span className='text-danger'>This Field is required</span>}

                                                    {!workoutDates.trainingDate && workoutDates.endTime && click && <span className='text-danger'>Please select a date first</span>}
                                                </div>
                                            }



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
                                                    { title: "Exercice ID", field: "exerciseId", editable: 'never' },
                                                    { title: "Name", field: "name", editable: 'never' },
                                                    { title: "Repitition Count", field: "noOfRepetitions", editable: 'onUpdate', type: 'numeric' },
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
                                                                console.log(dataUpdate);
                                                                setExcerciseDetails([...dataUpdate]);

                                                                resolve();
                                                            }, 1000)

                                                            // const found = workoutDates.trainingDateList.find(obj => {
                                                            //     return obj.exerciseid === newData.id;
                                                            //   });
                                                            // delete newData.name;
                                                            if (newData.noOfRepetitions != 0) {
                                                                console.log(workoutDates);
                                                                console.log(traineeid);
                                                                console.log(newData.noOfRepetitions);

                                                                workoutDates.trainingDateList.push({ ...newData })

                                                            } else {
                                                                workoutDates.trainingDateList.pop({ ...newData })
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
                                            {!workoutDates.trainingDateList[0] && click && <span className='text-danger'>Please select exercises</span>}
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
                                                        { check: Validators.number, message: 'Type is not valid' }
                                                    ]}
                                                    onChange={handleChangeDiet('carbohydrate')} />
                                                {!dietPlanDetails.carbohydrate && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={dietPlanDetails.fats}
                                                    type='text'
                                                    label="Fats"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.number, message: 'Type is not valid' }
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
                                                        { check: Validators.number, message: 'Type is not valid' }
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
                        {(!workoutDates.trainingDateList || !workoutDates.trainingDate || !workoutDates.startTime || !workoutDates.endTime || !dietPlanDetails.carbohydrate || !dietPlanDetails.fats || !dietPlanDetails.proteins) ?
                            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px' }}>
                                <button className="own_next_workout-btn" > Finish</button>
                            </div>
                            :
                            (workoutDates.trainingDateList && workoutDates.trainingDate && workoutDates.startTime && workoutDates.endTime && dietPlanDetails.carbohydrate && dietPlanDetails.fats && dietPlanDetails.proteins) ?

                                <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px' }}>
                                    <button className="own_next_workout-btn" > Finish</button>
                                </div>
                                :
                                <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px' }}>
                                    <button className="own_next_workout-btn" onClick={finishSchedule}> Finish</button>
                                </div>
                        }

                    </div>
                </form>
            </div>
        </div>
    )
}