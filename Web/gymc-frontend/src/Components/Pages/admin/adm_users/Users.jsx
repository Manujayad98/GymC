import React, { useState, useEffect } from "react";
import '../adm_sidebar/Sidebar.css'
import SidebarO from '../adm_sidebar/Sidebar'
import HeaderO from '../adm_header/header'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import Hold from '../../../../images/Icons/hand-solid.svg'
import T1 from '../../../../images/t1.png'

import './Users.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

export default function Trainers() {

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
            TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
            TrainerID: "T001",
            TrainerName: "RMN Ruwan",
            Status: (
                <span >
                    <button type="button" class="btn" disabled style={{ backgroundColor: '#E4E074', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Hold</button>
                </span>),
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Hold} alt="" height={20} width={20} /></span>
                </span >
            ),
        },
        {
            TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
            TrainerID: "T002",
            TrainerName: "KG Hasara",
            Status: (
                <span >
                    <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Active</button>
                </span>),
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Hold} alt="" height={20} width={20} /></span>

                </span >
            ),
        },
        {
            TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
            TrainerID: "T002",
            TrainerName: "KG Hasara",
            Status: (
                <span >
                    <button type="button" class="btn" disabled style={{ backgroundColor: '#E47474', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Remove</button>
                </span>),
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Hold} alt="" height={20} width={20} /></span>

                </span >
            ),
        },
        {
            TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
            TrainerID: "T002",
            TrainerName: "KG Hasara",
            Status: (
                <span >
                    <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Active</button>
                </span>),
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Hold} alt="" height={20} width={20} /></span>

                </span >
            ),
        },
        {
            TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
            TrainerID: "T002",
            TrainerName: "KG Hasara",
            Status: (
                <span >
                    <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Active</button>
                </span>),
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Hold} alt="" height={20} width={20} /></span>

                </span >
            ),
        },
        {
            TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
            TrainerID: "T002",
            TrainerName: "KG Hasara",
            Status: (
                <span >
                    <button type="button" class="btn" disabled style={{ backgroundColor: '#E47474', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Remove</button>
                </span>),
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Hold} alt="" height={20} width={20} /></span>

                </span >
            ),
        },

    ]);

    const [trainerDetailsTableHead] = useState([
        { id: "TrainerImg", label: "", numeric: false },
        { id: "TrainerID", label: "TRAINER ID", numeric: false },
        { id: "TrainerName", label: "TRAINER NAME", numeric: false },
        { id: "Status", label: "STATUS", numeric: false },
        { id: "Actions", label: "ACTIONS", numeric: false },
    ]);

    return (

        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="System Users" />
                <div className="content-container">
                    <form action="">
                        <div className="filter-container">
                            <div className="inputFields-container">
                                <div className='searchbar-container'>
                                    <div className="form-label-container">
                                        <label class="form-label" for="form1">Trainer ID</label>
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
                                        <label class="form-label" for="form1">Status</label>
                                    </div>
                                    <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                                        <option> select 1</option>
                                        <option> select 2</option>
                                        <option> select 3</option>
                                        <option> select 4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="button-container">
                                <Link to='/AaddUsers'>
                                    <button type="button" class="btn" style={{ backgroundColor: '#3DA2FF', width: '100px' }}>New User</button>
                                </Link>
                            </div>

                        </div>
                    </form>
                    <Table
                        rows={trainerDetails}
                        headCells={trainerDetailsTableHead}
                        tableName={"Trainers"}
                    />
                </div>
            </div >
        </div >
    )
}
