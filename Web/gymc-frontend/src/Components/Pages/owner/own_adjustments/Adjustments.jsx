import React, { useState, useEffect } from "react";
import '../own_sidebar/Sidebar.css'
import './Adjustments.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import Table from '../../../Utilities/Tables/Table2'
import Edit from '../../../../images/Icons/pen-solid.svg'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Button1 from '@mui/material/Button';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import DeleteModal from '../../../Utilities/Popups/DeletionModal'
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

import { getExerciseTableDetails, deleteExercise } from "../../../../services/ExerciseService";
import { getPaymentPlanTableDetails, deletePaymentPlan } from "../../../../services/PaymentService";
import { getAdjustmentCountDetails } from "../../../../services/AdjustmentCountService";


export default function Exercises() {

    useEffect(() => {
        checkValidate();
        getExercises();
        getPaymentPlans();
        getAdjustmentCounts();

    }, []);

    const [exercices, setExercises] = useState([]);
    const [paymentPlans, setPaymentPlans] = useState([]);
    const [adjustmentCounts, setadjustmentCounts] = useState([]);
    const [selectedExerciseData, setSelectedExerciseData] = useState({});
    const [selectedPaymentPlanData, setSelectedPaymentPlanData] = useState({});
    const [popup, setPopUp] = useState("");
    const [msg, setMsg] = useState("");

    const closePopUp = () => {
        setPopUp("");
    };

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const getExercises = async () => {
        const res = await getExerciseTableDetails();
        console.log(res.data);
        setExercises(
            [...res.data]
        );
        console.log(exercices);
    };

    const getPaymentPlans = async () => {
        const res = await getPaymentPlanTableDetails();
        console.log(res.data);
        setPaymentPlans(
            [...res.data]
        );
        console.log(paymentPlans);
    };

    const deleteSelectedExercise = () => {
        console.log("deleted " + selectedExerciseData.exercise_id);
        deleteExercise(selectedExerciseData.exercise_id)
            .then((response) => {
                if (response.status === 200 && response.data == 1) {
                    window.location.href = "/Oadjustments";
                    // evt.preventDefault();
                    toast.success("User has deleted !");
                } else {
                    toast.error("Failed !!!");
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log(err.message);
                    toast.error("Failed !!!");
                }
            });
        setPopUp("");
    };

    const deleteSelectedPaymentPlan = () => {
        console.log("ko");
        console.log("deleted " + selectedPaymentPlanData.plan_id);
        deletePaymentPlan(selectedPaymentPlanData.plan_id)
            .then((response) => {
                if (response.status === 200 && response.data == 1) {
                    window.location.href = "/Oadjustments";
                    // evt.preventDefault();
                    toast.success("User has deleted !");
                } else {
                    toast.error("Failed !!!");
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log(err.message);
                    toast.error("Failed !!!");
                }
            });
        setPopUp("");
    };

    const getAdjustmentCounts = async () => {
        const res = await getAdjustmentCountDetails();
        console.log(res.data);
        setadjustmentCounts(
            [...res.data]
        );
        console.log(adjustmentCounts);
    };

    const [openModal, setOpenModal] = useState(false);

    const [columns, setColumns] = useState([
  
        { title: 'Appoinment Count', field: 'appoinment_count', initialEditValue: 'numeric' },
        { title: 'Leave Count', field: 'leave_count', type: 'numeric' },
      ]);
    

    return (
        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="Adjustments" />
                <div className="content-container">
                    <div className="ex">
                        <div className="header">
                            <h3 id="own-adjustment-titles">Exercises</h3>
                            <Link to='/ONewExercise' style={{ textDecoration: 'none' }}>
                                <Button1 variant="contained" className="Hbutton">New Exercise</Button1>
                            </Link>
                        </div>
                        <div className='own-adjustment-card'>
                           
                            <MaterialTable
                                title="Exercices"
                                columns={[
                                    { title: "Exercise ID", field: "exercise_id" },
                                    { title: "Exercise Name", field: "exercise_name" },
                                    { title: "Primary Muscle", field: "primary_muscle" },
                                    { title: "Secondary Muscle", field: "secondary_muscle" },
                                ]}
                                icons={TableIcons}
                                data={exercices}
                                actions={[
                                    {
                                        icon: () => {
                                            return (
                                                <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash}  alt="" height={20} width={20} /></span>
                                            );
                                        },
                                       
                                        onClick: (event, rowData) => {
                                            console.log(rowData.exercise_id);
                                            setSelectedExerciseData(rowData);
                                            {
                                                setPopUp("delete");
                                            }
                                            setMsg(
                                                rowData.exercise_id
                                            );
                                        },
                                    },
                                ]}
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
                    <div className="ex">
                        <div className="header">
                            <h3 id="own-adjustment-titles">Payment Plans</h3>
                            <Link to='/ONewPaymentPlan' style={{ textDecoration: 'none' }}>
                            <Button1 variant="contained" className="Hbutton">New Payment</Button1>
                            </Link>
                        </div>
                        <div className='own-adjustment-card '>
                           
                            <MaterialTable
                                title="Payment Plans"
                                columns={[
                                    { title: "Payment ID", field: "plan_id" },
                                    { title: "Payment Type", field: "type" },
                                    { title: "Price", field: "amount" },
                                ]}
                                icons={TableIcons}
                                data={paymentPlans}
                                actions={[
                                    {
                                        icon: () => {
                                            return (
                                                <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash}  alt="" height={20} width={20} /></span>
                                            );
                                        },
                                       
                                        onClick: (event, rowData) => {
                                            console.log(rowData.paymentPlan_id);
                                            setSelectedPaymentPlanData(rowData);
                                            {
                                                setPopUp("delete1");
                                            }
                                            setMsg(
                                                rowData.paymentPlan_id
                                            );
                                        },
                                    },
                                ]}
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
                    
                             <div className="ex">
                    <div className="header">
                        <h3 id="own-adjustment-titles">Adjustment Counts</h3>
                       
                    </div>
                {/* <div className='own-adjustment-card '>
                    <MaterialTable
                        title="Adjustment Count"
                        columns={columns}
                        data={adjustmentCounts}
                        icons={TableIcons}
                        editable={{
                        
                            onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                const dataUpdate = [...adjustmentCounts];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setadjustmentCounts([...dataUpdate]);

                                resolve();
                                }, 1000)
                            }),
                            
                        }}
                        options={{
                            pageSize: 1,
                            pageSizeOptions: [6, 12, 15],
                            headerStyle: {
                                backgroundColor: '#1F0106',
                                color: '#FFF',
                                hover: '#FFF',
                                // textAlign:'center'
                            },
                           
                        }}
                        />
    </div> */}
    </div>
                </div>
                {/* <DeleteModal open={openModal} onClose={() => setOpenModal(false)} /> */}
       
            </div>

            {popup === "delete" && (
                <DeleteModal
                    msg={msg}
                    closePopUp={closePopUp}
                    handleSubmit={deleteSelectedExercise}
                />
            )}
             {popup === "delete1" && (
                <DeleteModal
                    msg={msg}
                    closePopUp={closePopUp}
                    handleSubmit={deleteSelectedPaymentPlan}
                />
                
            )}
        </div>
    )
}