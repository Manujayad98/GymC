import React, { useState } from "react";
import '../recept_sidebar/Sidebar.css'
import SidebarO from '../recept_sidebar/Sidebar'
import HeaderO from '../recept_header/Header'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import Arrow from '../../../../images/Icons/arrow-square-right.svg'
import T1 from '../../../../images/t1.png'

import './Trainers.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Trainers() {

    const [trainerDetails] = useState([
        {
            TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
            TrainerID: "T001",
            TrainerName: "RMN Ruwan",
            RegDate: "2021-10-24",
            NextShift: "2022-10-17 10.00a.m",
            Status: (
                <span >
                    <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Leave</button>
                </span>),
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    
                </span >
            ),
        },
        {
            TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
            TrainerID: "T002",
            TrainerName: "KG Hasara",
            RegDate: "2020-11-11",
            NextShift: "2022-10-17 10.00a.m",
            Status: (
                <span >
                    <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Leave</button>
                </span>),
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>

                </span >
            ),
        },
        {
            TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
            TrainerID: "T002",
            TrainerName: "KG Hasara",
            RegDate: "2020-11-11",
            NextShift: "2022-10-17 10.00a.m",
            Status: (
                <span >
                    <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Leave</button>
                </span>),
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>

                </span >
            ),
        },
        {
            TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
            TrainerID: "T002",
            TrainerName: "KG Hasara",
            RegDate: "2020-11-11",
            NextShift: "2022-10-17 10.00a.m",
            Status: (
                <span >
                    <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Leave</button>
                </span>),
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>

                </span >
            ),
        },
        {
            TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
            TrainerID: "T002",
            TrainerName: "KG Hasara",
            RegDate: "2020-11-11",
            NextShift: "2022-10-17 10.00a.m",
            Status: (
                <span >
                    <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Leave</button>
                </span>),
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>

                </span >
            ),
        },
        {
            TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
            TrainerID: "T002",
            TrainerName: "KG Hasara",
            Phone: "0765584751",
            Address: "No. 46/4, Church road, Giriulla",
            RegDate: "2020-11-11",
            Status: (
                <span >
                    <button type="button" class="btn" disabled style={{ backgroundColor: '#74E486', width: '90px', padding: '0 5px 0 5px', border: 'none' }}>Leave</button>
                </span>),
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Arrow} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>

                </span >
            ),
        },

    ]);

    const [trainerDetailsTableHead] = useState([
        { id: "TrainerImg", label: "", numeric: false },
        { id: "TrainerID", label: "TRAINER ID", numeric: false },
        { id: "TrainerName", label: "TRAINER NAME", numeric: false },
        { id: "RegDate", label: "REG DATE", numeric: false },
        { id: "NextShift", label: "NEXT SHIFT", numeric: false },
        { id: "Status", label: "LEAVE", numeric: false },
        { id: "Actions", label: "ACTIONS", numeric: false },
    ]);

    return (

        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="Trainers" />
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
                            </div>
                            <div className="button-container">
                                <button type="button" class="btn" style={{ backgroundColor: '#3DA2FF', width: '100px' }}>Add</button>
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
