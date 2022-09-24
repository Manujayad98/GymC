import React, { useState } from 'react'
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { getTrainerData, addWorkoutDetails, addWorkoutDateExerciseDetails, addDietPlanDetails } from "../../../../services/WorkoutService";

const AddWorkout = () => {

    const { id } = useParams();

    const [requestData, setState] = useState({
        trainee_id: id,
        height: '',
        weight: '',
        diseases: '',
        biceps: '',
        forearms: '',
        chest: '',
        hips: '',
        thighs: '',
        paymentPlan: '',
        trainer_id: '',
        startDate: '',
        endDate: '',

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

        // setPopUp("show");
        // setMainPopUp("hide");
        if (!requestData.trainee_id || !requestData.height || !requestData.weight || !requestData.diseases || !requestData.biceps || !requestData.forearms || !requestData.chest || !requestData.hips || !requestData.thighs || !requestData.paymentPlan || !requestData.startDate || !requestData.endDate) {
            console.log('Please fill out the form correctly');
            setClick({ click: true, })
            toast.warning('Please fill out the form correctly');
        }

        else {

            // addWorkoutDetails(requestData)
            //     .then((response) => {
            //         if (response.status === 200) {
            //             console.log(response.data);
            //             // setMessage(response.data);
            //             if (response.data === "You have already an account!") {
            //                 toast.warning('You have already an account!');
            //             } else {
            //                 window.location.href = "/";
            //                 toast.success("successfully registered!!!");
            //             }
            //         }
            //     })
            //     .catch((err) => {
            //         if (err && err.response) {
            //             console.log(err);
            //             toast.error('Failed!!!');
            //         }
            //     });
        }
    };


    //reps editor part

    // const [num, setNum] = useState(15);
    // let incNum = () => {
    //     if (num < 20) {
    //         setNum(num + 1);
    //         console.log(num)
    //     }
    // };
    // let decNum = () => {
    //     if (num > 0) {
    //         setNum(num - 1);
    //     }
    // }
    // let handleCounter = (e) => {
    //     setNum(e.target.value);
    // }


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
                                <div className="own-addworkout-profile">

                                    <div className='own-dashboard-card own-dashboard-profile-cards'>
                                        <div className='own-dashboard-card-img-container'>
                                            <img src={Pic1} alt="" />
                                        </div>
                                        <div className='own-dashboard-card-content'>
                                            <div className='staffID'>T00001</div>
                                            <div className='staffName'>Sanjana Rajapaksha</div>
                                        </div>
                                    </div>

                                </div>
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
                                                            { check: Validators.required, message: 'This field is required' }
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
                                                    value={requestData.paymentPlan}
                                                    placeholder='Select'
                                                    onChange={handleDropdownPayment('paymentPlan')}
                                                />
                                                {!requestData.paymentPlan && click && <span className='text-danger'>This Field is required</span>}

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
                                                <Dropdown
                                                    data={[
                                                        { value: 1, label: 'N.P.Kumara' },
                                                        { value: 2, label: 'S.Saantha' },
                                                        { value: 3, label: 'R.P.Nishantha' },

                                                    ]}
                                                    value={requestData.trainer_id}
                                                    placeholder='Select'
                                                    onChange={handleDropdownTrainer('trainer_id')}
                                                />
                                                {!requestData.trainer_id && click && <span className='text-danger'>This Field is required</span>}
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
                                                    value={requestData.startDate}
                                                    type='date'
                                                    label="Start Date"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('startDate')} />
                                                {!requestData.startDate && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={requestData.endDate}
                                                    type='date'
                                                    label="End Date"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'This field is required' }
                                                    ]}
                                                    onChange={handleChange('endDate')} />
                                                {!requestData.endDate && click && <span className='text-danger'>This Field is required</span>}
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
    const { id } = useParams();

    const [workoutDates, setWorkoutDates] = useState({
        trainee_id: id,
        exercices: [],
        startTime: '',
        endTime: '',
    });
    const addDates = (evt) => {
        console.log(workoutDates);
        evt.preventDefault();


        if (!workoutDates.exercices || !workoutDates.startTime || !workoutDates.endTime) {
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
    const handleChange = (key) => (value) => {
        setWorkoutDates({
            ...workoutDates,
            [key]: value
        });
    };
    const [excerciseDetails, setExcerciseDetails] = useState([
        {
            ExerciseID: 1,
            Name: "Incline Press",
            Repititions: 0
        },
        {
            ExerciseID: 2,
            Name: "Incline Press",
            Repititions: 0

        },
        {
            ExerciseID: 3,
            Name: "Incline Press",
            Repititions: 0

        },
        {
            ExerciseID: 4,
            Name: "Incline Press",
            Repititions: 0

        },
        {
            ExerciseID: 5,
            Name: "Incline Press",
            Repititions: 0

        },

    ]);

    const handleDropdownStartTime = (startTime) => (value) => {
        console.log('hi');
        console.log(startTime, value);
        setWorkoutDates({ ...workoutDates, [startTime]: value });
    };
    const handleDropdownEndtTime = (endTime) => (value) => {
        console.log(endTime, value);
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
                                                    { title: "Exercice ID", field: "ExerciseID", editable: 'never' },
                                                    { title: "Name", field: "Name", editable: 'never' },
                                                    { title: "Repitition Count", field: "Repititions", editable: 'onUpdate', type: 'numeric' },
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
                                                            if (newData.Repititions != 0) {
                                                                console.log(workoutDates);
                                                                console.log(id);
                                                                console.log(newData);
                                                                workoutDates.exercices.push({ ...newData })

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
                                                    value={workoutDates.carbs}
                                                    type='text'
                                                    label="Carbs"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'NIC is not valid' }
                                                    ]}
                                                    onChange={handleChange('carbs')} />
                                                {!workoutDates.carbs && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">
                                                <InputField
                                                    value={workoutDates.facts}
                                                    type='text'
                                                    label="Facts"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'NIC is not valid' }
                                                    ]}
                                                    onChange={handleChange('facts')} />
                                                {!workoutDates.facts && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-col1">
                                                <InputField
                                                    value={workoutDates.protein}
                                                    type='text'
                                                    label="Protein"
                                                    placeholder='Type'
                                                    validators={[
                                                        { check: Validators.required, message: 'NIC is not valid' }
                                                    ]}
                                                    onChange={handleChange('protein')} />
                                                {!workoutDates.protein && click && <span className='text-danger'>This Field is required</span>}
                                            </div>
                                            <div className="form-col2">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                        <div className="own-addworkout-right">
                            <div style={{ margin: '20px' }}>

                                {/* <h4 className='update-workout-form-subHeading'>Workout Dates</h4> */}
                                {/* <hr className="add-trainer-hr" /> */}
                                <div className="own-viewworkout-calender" style={{ marginTop: '20px' }}>
                                    <div className="own-viewworkout-calender-card">
                                        {/* <CalendarComp /> */}
                                        <SampleCal
                                        // mindate={requestData.startDate}
                                        // maxdate={requestData.endDate}
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
                                            <Dropdown
                                                data={[
                                                    { value: 1, label: '8.00 Am' },
                                                    { value: 2, label: '8.30 AM' },
                                                    { value: 3, label: '9.00 AM' },
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
                                                    { value: "", label: '8.00 Am' },
                                                    { value: "", label: '8.30 AM' },
                                                    { value: "", label: '9.00 AM' },
                                                ]}
                                                label="End Time"
                                                value={workoutDates.endTime}
                                                placeholder='Select'
                                                onChange={handleDropdownEndtTime['endTime']}
                                            />
                                            {!workoutDates.startTime && click && <span className='text-danger'>This Field is required</span>}

                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-col1"></div>
                                        <div className="form-col2">
                                            <button className="own_add_workout-btn" >Add Date</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: '20px' }}>
                                <button className="own_next_workout-btn" > Finish</button>
                            </div>

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