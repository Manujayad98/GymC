import React, { useState } from "react";
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import T1 from '../../../../images/t1.png'


export default function Trainers() {
    const [trainerDetails] = useState([
        {
            TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
            TrainerID: "T001",
            TrainerName: "RMN Ruwan",
            Phone: "0714558741",
            Address: "No. 46/4, Tample road, Dambadeniya",
            RegDate: "2021-10-24",
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
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
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
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
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
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
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
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
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
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
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
                </span >
            ),
        },

    ]);

    const [trainerDetailsTableHead] = useState([
        { id: "TrainerImg", label: "", numeric: false },
        { id: "TrainerID", label: "TRAINER ID", numeric: false },
        { id: "TrainerName", label: "TRAINER NAME", numeric: false },
        { id: "Phone", label: "PHONE", numeric: false },
        { id: "Address", label: "ADDRESS", numeric: false },
        { id: "RegDate", label: "REG ON", numeric: false },
        { id: "Actions", label: "ACTIONS", numeric: false },
    ]);

    return (
        <div>
            <Table
                rows={trainerDetails}
                headCells={trainerDetailsTableHead}
                tableName={"Trainers"}
            />
        </div>
    )
}
