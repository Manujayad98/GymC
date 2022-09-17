import React, { useState, useEffect } from "react";
import '../recept_sidebar/Sidebar.css'
import SidebarO from '../recept_sidebar/Sidebar'
import HeaderO from '../recept_header/Header'
import Table from '../../../Utilities/Tables/Table1'

import Edit from '../../../../images/Icons/pen-solid.svg'
import Arrow from '../../../../images/Icons/arrow-square-right.svg'
import T1 from '../../../../images/t1.png'
import gihanpic from "../../../../images/receptionistinterim/gihan.png"
import kalindupic from "../../../../images/receptionistinterim/piyath.png"
import piyathpic from "../../../../images/receptionistinterim/kalindu.png"
import trumppic from "../../../../images/receptionistinterim/trump.png"
import lahirupic from "../../../../images/receptionistinterim/lahiru.png"
import lelanipic from "../../../../images/receptionistinterim/lelani.png"
import DeleteModal from '../../../Utilities/Popups/DeletionModal'
import AdjustModal from "../../../Utilities/Popups/adjustmentModal";
import LeaveModal from "../../../Utilities/Popups/LeaveModal";

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

import { getTrainerTableDetails} from "../../../../services/UserService";


import './Trainers.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";



export default function Trainers() {

    useEffect(() => {
        checkValidate();
        getTrainers();
    }, []);

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

    const [openModal, setOpenModal] = useState(false)
    const [openadjustModal, setadjustModal] = useState(false)
    const [openleaveModal, setleaveModal] = useState(false)
    const [trainers, setTrainers] = useState([]);

   
    return (

        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="Trainers" />
                <div className="content-container">
                   
                <div className="table-div">
            <MaterialTable
              title="Trainers"
              columns={[
                { title: "Trainer ID", field: "trainer_id" },
                { title: "Trainer Name", field: "full_name" },
                { title: "Phone", field: "phone" },
                { title: "Address", field: "address" },
                { title: "Status", field: "status" },

              ]}
              icons={TableIcons}
              data={trainers}
              actions={[
                {
                  icon: () => {
                    return (

                      <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Arrow} alt="" height={20} width={20} /></span>
                    );
                  },
                  onClick: (event, rowData) => {

                  },
                },

                {
                    icon: () => {
                        return (

                            <button
                                type="button"
                                className="btn mt-0"
                                style={{
                                    backgroundColor: "#FF2121",
                                    border: "none",
                                }}
                            >
                                Leave
                            </button>
                        );
                    }}
                

              ]}

              
              options={{
                headerStyle: {
                  backgroundColor: '#1F0106',
                  color: '#FFF',
                  hover: '#FFF'
                }
              }}
            />
            {/* <DeleteModal open={openModal} onClose={() => setOpenModal(false)} /> */}
          </div>
                    {/* <Button onClick={() => setadjustModal(true)}>Add Next Amount</Button> */}
                    {/* <AdjustModal open={openadjustModal} onClose={() => setadjustModal(false)} />
                    <DeleteModal open={openModal} onClose={() => setOpenModal(false)} />
                    <LeaveModal open={openleaveModal} onClose={() => setleaveModal(false)} /> */}
                </div>
            </div >
        </div >
    )
}
