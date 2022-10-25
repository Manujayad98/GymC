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
import { getTrainerData, addWorkoutDetails, addWorkoutDateExerciseDetails, addDietPlanDetails, getExerciseDetails } from "../../../../services/WorkoutService";

export default function AddWorkout2() {
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

    const { traineeid, scheduleid, trainerid } = useParams();

    const [workoutDates, setWorkoutDates] = useState({
        trainee_id: traineeid,
        exercices: [],
        trainingDate: '',
        startTime: '',
        endTime: '',
        workoutScheduleID: scheduleid,
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
    workoutDates.trainingDate = selectedDate;
    console.log(dietPlanDetails.trainingDate);

    const addDates = (evt) => {
        console.log(workoutDates);
        console.log(dietPlanDetails);
        evt.preventDefault();

        if (!workoutDates.exercices || !workoutDates.trainingDate || !workoutDates.startTime || !workoutDates.endTime) {
            console.log('Please fill out the form correctly');
            setClick({ click: true, })
            toast.warning('Please fill out the form correctly');
        }

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
                                            onChange={handleChangeDate('selectedDate')}
                                        // data={myEvents}
                                        // value={value}
                                        // minDate={mindate}
                                        // maxDate={maxdate}
                                        />
                                        {!workoutDates.trainingDate && click && <span className='text-danger'>This is required</span>}
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

                                            {!workoutDates.trainingDate && workoutDates.startTime && click && <span className='text-danger'>Please select a date first</span>}

                                        </div>
                                        <div className="form-col2">
                                            <Dropdown
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
                                            />
                                            {!workoutDates.endTime && click && <span className='text-danger'>This Field is required</span>}

                                            {!workoutDates.trainingDate && workoutDates.endTime && click && <span className='text-danger'>Please select a date first</span>}

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
                                                                console.log(traineeid);
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
                                            {!workoutDates.exercices[0] && click && <span className='text-danger'>Please select exercises</span>}
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
        </div>
    )
}