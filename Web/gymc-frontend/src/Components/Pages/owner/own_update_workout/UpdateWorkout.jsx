import React, { useState, useEffect } from "react";
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import InputField from "../../../Utilities/Form/InputField";
import '../../../Utilities/Form/Form.css'
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Dropdown from "../../../Utilities/Form/Dropdown";
import Table from '../../../Utilities/Tables/Table2'
import Pic1 from '../../../../images/owner.png'

// icons
import Add from '../../../../images/Add.svg'
import Clear from '../../../../images/clear.svg'
import T1 from '../../../../images/t1.png'
import Card from 'react-bootstrap/Card'
import Plus from '../../../../images/plus.svg'
import Minus from '../../../../images/minus.svg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UpdateWorkout.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'


import { Calendar } from 'react-calendar'
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import { getBodyFactorsForUpdate } from "../../../../services/WorkoutService";
import { Link, useParams } from 'react-router-dom'


export default function UpdateWorkout() {

    const { id } = useParams();


    useEffect(() => {
        checkValidate();
        getBodyFactorsForToday();
    }, []);

    var MyDate = new Date();
    var dateToday;
    dateToday = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
    console.log(dateToday);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const [selectedDate, setSelectedDate] = useState({
        selectedDate: ''
    });

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
        bones: ''
    });
    const [click, setClick] = useState(false);
    const [traineeBodyFactors, setTraineeBodyFactors] = useState([]);

    const handleChange = (key) => (value) => {
        setState({
            ...requestData,
            [key]: value
        });
    };
    const handleChangeDate = (key) => (value) => {
        console.log(value);
        setSelectedDate({
            ...selectedDate,
            [key]: dayjs(value).format('YYYY-MM-DD')
        });
    }

    const getBodyFactorsForToday = async () => {
        const res = await getBodyFactorsForUpdate(dateToday, id);
        console.log(res.data);
        setTraineeBodyFactors(
            res.data
        );
    };

    console.log(traineeBodyFactors);

    const updateWOrkout = (evt) => {
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
                <HeaderO title="Update Workout" />
                <div style={{ margin: '20px' }}>
                    <div className="workout-profile-card">
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
                    <form className="" onSubmit={updateWOrkout} noValidate={false}>

                        <div className="own_update_workout_content-container">

                            <div className="own_update_workout_div1">

                                <div className="own-updateworkout-calender" style={{ marginTop: '10px' }}>
                                    <div className="own-viewworkout-calender-card">
                                        {/* <CalendarComp /> */}
                                        <Calendar
                                            onChange={handleChangeDate['selectedDate']}
                                        // data={myEvents}
                                        // value={value}
                                        // minDate={mindate}
                                        // maxDate={maxdate}
                                        />
                                        {!selectedDate.selectedDate && click && <span className='text-danger'>This is required</span>}

                                        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '9px 0px' }}>
                                            <button className="own_next_workout-btn" > Check </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="own_update_workout_card1">

                                    {/* <form className onSubmit={handleSubmit} noValidate={false}> */}

                                    <div className="update-workout-form">
                                        <div className="update-workout-form-inputs">
                                            <h4 className='update-workout-form-subHeading'>Body Measures</h4>
                                            <hr className="add-trainer-hr" />

                                            <div className="form-row">
                                                <div className="form-col1">
                                                    <InputField
                                                        value={traineeBodyFactors.height}
                                                        type='text'
                                                        label="Height(Inches)"
                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
                                                        ]}
                                                        onChange={handleChange('height')} />
                                                    {!requestData.height && click && <span className='text-danger'>This Field is required</span>}
                                                </div>
                                                <div className="form-col2">
                                                    <InputField
                                                        value={traineeBodyFactors.weight}
                                                        type='text'
                                                        label="Weight(Kg)"
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
                                                        value={traineeBodyFactors.diseases}
                                                        type='textarea'
                                                        label="Diseases"
                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
                                                        ]}
                                                        onChange={handleChange('diseases')} />
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
                                                        value={traineeBodyFactors.biceps}
                                                        type='text'
                                                        label="Biceps"
                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
                                                        ]}
                                                        onChange={handleChange('biceps')} />
                                                    {!requestData.biceps && click && <span className='text-danger'>This Field is required</span>}
                                                </div>
                                                <div className="form-col2">
                                                    <InputField
                                                        value={traineeBodyFactors.forearms}
                                                        type='text'
                                                        label="Forearms"
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
                                                        value={traineeBodyFactors.chest}
                                                        type='text'
                                                        label="Chest"
                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
                                                        ]}
                                                        onChange={handleChange('chest')} />
                                                    {!requestData.chest && click && <span className='text-danger'>This Field is required</span>}
                                                </div>
                                                <div className="form-col2">
                                                    <InputField
                                                        value={traineeBodyFactors.hips}
                                                        type='text'
                                                        label="Hips"
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
                                                        value={traineeBodyFactors.thighs}
                                                        type='text'
                                                        label="Thighs"
                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
                                                        ]}
                                                        onChange={handleChange('thighs')} />
                                                    {!requestData.thighs && click && <span className='text-danger'>This Field is required</span>}
                                                </div>
                                                <div className="form-col2">

                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-col1">

                                                </div>
                                                <div className="form-col2">

                                                </div>
                                                {/* <button onClick={handleSubmit} className="suggest-button">Suggest</button> */}
                                            </div>
                                        </div>
                                    </div>



                                    {/* </form> */}
                                    <ToastContainer />
                                    {/* </div> */}

                                </div>
                            </div>
                            <div className="own_update_workout_div2">
                                <div className="own_update_workout_card2">
                                    {/* <Table
                                    rows={excerciseDetails}
                                    headCells={excerciseDetailsTableHead}
                                    tableName={"Exercises"}
                                /> */}
                                    <div style={{ padding: '20px' }}>
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
                                                        // if (newData.Repititions != 0) {
                                                        //     console.log(requestData);
                                                        //     console.log(id);
                                                        //     console.log(newData);
                                                        //     requestData.exercices.push({ ...newData })

                                                        // }

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
                                </div>
                                <div className="own_update_workout_card3">
                                    <div className="update-workout-form">
                                        <div className="update-workout-form-inputs">
                                            <h4 className='update-workout-form-subHeading'>Diet Plan</h4>
                                            <hr className="add-trainer-hr" />

                                            <div className="form-row">
                                                <div className="form-col1">
                                                    <InputField
                                                        value={requestData.height}
                                                        type='text'
                                                        label="Carbs"
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
                                                        label="Fats"
                                                        placeholder='Type'
                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
                                                        ]}
                                                        onChange={handleChange('weight')} />
                                                    {!requestData.weight && click && <span className='text-danger'>This Field is required</span>}
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="form-col1">
                                                    <InputField
                                                        value={requestData.height}
                                                        type='text'
                                                        label="Protein"
                                                        placeholder='Type'
                                                        validators={[
                                                            { check: Validators.number, message: 'Type is not valid' }
                                                        ]}
                                                        onChange={handleChange('height')} />
                                                    {!requestData.height && click && <span className='text-danger'>This Field is required</span>}
                                                </div>
                                                <div className="form-col2">
                                                </div>
                                            </div>
                                        </div>

                                        <ToastContainer />
                                        {/* </div> */}

                                    </div>
                                </div>
                                <div style={{ marginRight: '-36px', display: 'flex' }}>
                                    <button style={{ justifyContent: 'flex-end' }} className="own_update_workout-btn">Update</button>

                                </div>

                                {/* <div className="own_update_workout_btn"> */}



                                {/* </div> */}


                            </div>
                        </div>
                    </form>

                </div >
            </div >
        </div>
    )
}