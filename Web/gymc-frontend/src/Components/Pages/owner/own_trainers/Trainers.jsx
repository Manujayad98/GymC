import React, { useState, useEffect } from "react";
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'

import Trash from '../../../../images/Icons/trash-solid.svg'

import Hold from '../../../../images/Icons/hand-solid.svg'

import './Trainers.css'
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'
import DeleteModal from '../../../Utilities/Popups/DeletionModal'
import HoldModal from '../../../Utilities/Popups/HoldModel'
import ActiveModal from '../../../Utilities/Popups/ActiveModel'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

import { getTrainerTableDetails, deleteTrainer, holdTrainer, activeTrainer } from "../../../../services/UserService";

export default function Trainers() {

    useEffect(() => {
        checkValidate();
        getTrainers();
    }, []);

    const [trainers, setTrainers] = useState([]);
    const [selectedTrainerData, setSelectedTrainerData] = useState({});
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

    const getTrainers = async () => {
        const res = await getTrainerTableDetails();
        console.log(res.data);
        setTrainers(
            [...res.data]
        );
        console.log(trainers);
    };

    const deleteSelectedTrainer = () => {
        console.log("deleted " + selectedTrainerData.trainer_id);
        deleteTrainer(selectedTrainerData.trainer_id)
            .then((response) => {
                if (response.status === 200 && response.data == 1) {
                    window.location.href = "/Otrainers";
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

    const holdSelectedTrainer = () => {
        console.log("hold " + selectedTrainerData.trainer_id);
        holdTrainer(selectedTrainerData.trainer_id)
            .then((response) => {
                if (response.status === 200 && response.data == 1) {
                    window.location.href = "/Otrainers";
                    toast.success("Trainer has hold !");
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
    const activeSelectedTrainer = () => {
        console.log("hold " + selectedTrainerData.trainer_id);
        activeTrainer(selectedTrainerData.trainer_id)
            .then((response) => {
                if (response.status === 200 && response.data == 1) {
                    window.location.href = "/Otrainers";
                    toast.success("Trainer has activated !");
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

    

    return (

        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="Trainers" />
                <div className="content-container">
                    <form action="">
                        <div className="filter-container">
                            <div className="inputFields-container">
                                
                            </div>
                            <div className="button-container">
                                <Link to='/OaddTrainer'>
                                    <button type="button" class="btn" style={{ backgroundColor: '#3DA2FF', width: '100px' }}>Add</button>
                                </Link>
                            </div>

                        </div>
                    </form>
                    
                    <div className="table-div">
                        <MaterialTable
                            title="System Users"
                            columns={[
                                
                                { title: "TrainerID", field: "trainer_id" },
                                { title: "name", field: "full_name" },
                                { title: "phone", field: "phone" },
                                { title: "address", field: "address" },
                                { title: "status", field: "status" },

                            ]}
                            icons={TableIcons}
                            data={trainers}
                            actions={[
                                
                                {
                                    icon: () => {
                                        return (
                                            <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash}  alt="" height={20} width={20} /></span>
                                        );
                                    },
                                   
                                    onClick: (event, rowData) => {
                                        console.log(rowData.trainer_id);
                                        setSelectedTrainerData(rowData);
                                        {
                                            setPopUp("delete");
                                        }
                                        setMsg(
                                            rowData.trainer_id
                                        );
                                    },
                                },
                                rowData => ({
                                    icon: () => {
                                        return (
                                            <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Hold} alt="" height={20} width={20} /></span>
                                        );
                                    },
                                    onClick: (event, rowData) => {
                                        console.log(rowData.trainer_id);

                                        setSelectedTrainerData(rowData);
                                        {
                                            setPopUp("hold");
                                        }
                                        setMsg(
                                            rowData.trainer_id
                                        );
                                    },
                                    disabled: rowData.status == "Hold"
                                }),
                                rowData => ({

                                    icon: () => {
                                        return (

                                            <button
                                                type="button"
                                                className="btn mt-0"
                                                style={{
                                                    backgroundColor: "#32E04E",
                                                    border: "none",
                                                    // marginRight: "2px",
                                                }}
                                            >
                                                Active
                                            </button>
                                        );
                                    },
                                    onClick: (event, rowData) => {
                                        setSelectedTrainerData(rowData);
                                        {
                                            setPopUp("active");
                                        }
                                        setMsg(
                                            rowData.trainee_id
                                        );
                                    },
                                    disabled: rowData.status == "Active"
                                }),
                            ]}
                            detailPanel={[
                                {
                                  tooltip: 'Show Name',
                                  render: rowData => {
                                    return (
                                      <div
                                        style={{
                                          fontSize: 16,
                                          textAlign: 'center',
                                          color: 'black',
                                          backgroundColor: 'white',
                                        }}
                                      >
                                        Qualifications : 
                                        {rowData.qualifications}
                                      </div>
                                    )
                                  },
                                },
                               
                              ]}
                            options={{
                                headerStyle: {
                                    backgroundColor: '#1F0106',
                                    color: '#FFF',
                                    hover: '#FFF'
                                }
                            }}
                        />
                    </div>
                </div>
            </div >
            {popup === "delete" && (
                <DeleteModal
                    msg={msg}
                    closePopUp={closePopUp}
                    handleSubmit={deleteSelectedTrainer}
                />
            )}

            {popup === "hold" && (
                <HoldModal
                    msg={msg}
                    closePopUp={closePopUp}
                    handleSubmit={holdSelectedTrainer}
                />
            )}

            {popup === "active" && (
                <ActiveModal
                    msg={msg}
                    closePopUp={closePopUp}
                    handleSubmit={activeSelectedTrainer}
                />
            )}
        </div >
    )
}
