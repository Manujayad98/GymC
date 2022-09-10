import React, { useState, useEffect } from 'react'
import '../trainer_sidebar/Sidebar.css'
import SidebarO from '../trainer_sidebar/Sidebar'
import HeaderO from '../trainer_header/Header'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import T1 from '../../../../images/t1.png'
import Arrow from '../../../../images/Icons/arrow-square-right.svg'

import trainer1 from '../../../../images/owner/tr1.png'
import trainer2 from '../../../../images/owner/te1.png'
import trainer3 from '../../../../images/owner/tr2.png'
import trainer4 from '../../../../images/owner/tr3.png'
import trainer5 from '../../../../images/owner/tr4.png'
import trainer6 from '../../../../images/owner/tr5.png'

import './Trainees.css'

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { getTrainees } from "../../../../services/UserService";

const Dashboard = () => {

  const [openModal, setOpenModal] = useState(false);
  const [trainees, setTrainees] = useState([]);
  const [selectedTraineeData, setSelectedTraineeData] = useState({});
  const [popup, setPopUp] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    checkValidate();
    getAllTrainees();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const getAllTrainees = async () => {
    const res = await getTrainees();
    console.log(res.data);
    setTrainees(
      [...res.data]
    );
  };

  const closePopUp = () => {
    setPopUp("");
  };

  const moveToMoreView = (trainee_id) => {
    window.location.href = `/ViewWorkout/${trainee_id}`;
  }

  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Trainees" />
        <div className="content-container">
          <div className="table-div">
            <MaterialTable
              title="Trainees"
              columns={[
                { title: "Trainee ID", field: "trainee_id" },
                { title: "Trainee Name", field: "full_name" },
                { title: "Phone", field: "phone_number" },
                { title: "Reg Date", field: "registered_date" },
                { title: "Address", field: "address" },

              ]}
              icons={TableIcons}
              data={trainees}
              actions={[
                {
                  icon: () => {
                    return (

                      <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Arrow} alt="" height={20} width={20} /></span>
                    );
                  },
                  onClick: (event, rowData) => {
                    moveToMoreView(rowData.trainee_id);
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

      </div>
    </div>
  )
}

export default Dashboard