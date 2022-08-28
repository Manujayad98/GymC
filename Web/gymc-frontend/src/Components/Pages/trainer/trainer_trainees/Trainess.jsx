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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const [trainerDetails] = useState([
    {
      TrainerImg: (<img src={trainer1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TrainerID: "M001",
      TrainerName: "Nilupul Madhuwantha",
      Phone: "0714558741",
      RegDate: "2018-10-24",
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><Link to='/OviewWorkout'><img src={Arrow} alt="" height={20} width={20} /></Link></span>
          <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      TrainerImg: (<img src={trainer2} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TrainerID: "M002",
      TrainerName: "Ishara Rodrigo",
      Phone: "0765145632",
      RegDate: "2018-12-11",
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      TrainerImg: (<img src={trainer3} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TrainerID: "M002",
      TrainerName: "Ruwan Gamage",
      Phone: "0775145632",
      RegDate: "2019-06-22",
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      TrainerImg: (<img src={trainer4} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TrainerID: "M002",
      TrainerName: "Imesh Kasthurirathna",
      Phone: "0774564751",
      RegDate: "2020-08-19",
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      TrainerImg: (<img src={trainer5} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TrainerID: "M002",
      TrainerName: "Mayori Ekanayake",
      Phone: "0765545127",
      RegDate: "2021-10-31",
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      TrainerImg: (<img src={trainer6} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TrainerID: "M002",
      TrainerName: "KG Hasara",
      Phone: "0765584751",
      RegDate: "2020-11-11",
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },

  ]);

  const [trainerDetailsTableHead] = useState([
    { id: "TraineeImg", label: "", numeric: false },
    { id: "TraineeID", label: "TRAINEE ID", numeric: false },
    { id: "TrainerName", label: "TRAINEe NAME", numeric: false },
    { id: "Phone", label: "PHONE", numeric: false },
    { id: "RegDate", label: "REG ON", numeric: false },
    { id: "Actions", label: "ACTIONS", numeric: false },
  ]);
  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Trainees" />
        <div className="content-container">
          <form action="">
            <div className="filter-container">
              <div className="inputFields-container">
                <div className='searchbar-container'>
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Trainee ID</label>
                  </div>
                  <div class="input-group">
                    <button type="button" class="btn btn-dark" style={{ height: '38px', width: '50px' }}>
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <div class="form-outline">
                      <input type="search" id="form1" class="form-control" placeholder='Search here' />
                    </div>
                  </div>

                </div>
                <div className="dropdown-container">
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Trainee Type</label>
                  </div>
                  <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                    <option> select 1</option>
                    <option> select 2</option>
                    <option> select 3</option>
                    <option> select 4</option>
                  </select>
                </div>
              </div>

            </div>
          </form>
          <Table
            rows={trainerDetails}
            headCells={trainerDetailsTableHead}
            tableName={"Trainers"}
          />
        </div>

      </div>
    </div>
  )
}

export default Dashboard