import React, { useState, useEffect } from "react";
import '../own_sidebar/Sidebar.css'
import './Adjustments.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import Table from '../../../Utilities/Tables/Table2'
import Edit from '../../../../images/Icons/pen-solid.svg'
import trash from '../../../../images/Icons/trash-solid.svg'
import Button1 from '@mui/material/Button';
import {FaPlusCircle,FaMinusCircle} from "react-icons/fa";



export default function Exercises() {

    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const [excerciseDetails] = useState([
        {
            Name: "Incline Press",
            Repetitions: "15 Reps",
           
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={trash} alt="" height={20} width={20} /></span>
              
                </span >

            ),
        },
        {
            Name: "Incline Press",
            Repetitions: "15 Reps",
         
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={trash} alt="" height={20} width={20} /></span>
              
                </span >

            ),
        },
        {
            Name: "Incline Press",
            Repetitions: "15 Reps",
           
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <span style={{ paddingRight: "20px" }}><img src={trash} alt="" height={20} width={20} /></span>
                
                </span >

            ),
        },
        {
            Name: "Incline Press",
            Repetitions: "15 Reps",
           
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>


                    <span style={{ paddingRight: "20px" }}><img src={trash} alt="" height={20} width={20} /></span>
                
                </span >

            ),
        },
    ]);
    const [excerciseDetailsTableHead] = useState([
        { id: "Name", label: "NAME", numeric: false },
        { id: "Repetitions", label: "REPETITIONS", numeric: false },
        
    ]);

    const [paymentPlanDetails] = useState([
        {
            Type: "Daily",
            Price: "Rs.550",
            NextAmount: "-",
            Actions: (
                <span >
                    <span style={{ paddingRight: "0px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                </span >

            ),
        },
        {
            Type: "Monthly-Personal",
            Price: "Rs.550",
            NextAmount: "Rs.650",
            Actions: (
                <span >
                    <span style={{ paddingRight: "0px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                </span >

            ),
        },
        {
            Type: "Monthly-NonPersonal",
            Price: "Rs.550",
            NextAmount: "-",
            Actions: (
                <span >
                    <span style={{ paddingRight: "0px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                </span >

            ),
        },

    ]);
    const [paymentPlanDetailsTableHead] = useState([
        { id: "Type", label: "TYPE", numeric: false },
        { id: "Price", label: "PRICE", numeric: false },
        { id: "NextAmount", label: "NEXT AMOUNT", numeric: false },
        // { id: "Actions", label: "ACTIONS", numeric: false },
    ]);


    
    let [num, setNum]= useState(5);
    let incNum =()=>{
        if(num<10)
        {
        setNum(Number(num)+1);
        }
    };
    let decNum = () => {
        if(num>0)
        {
        setNum(num - 1);
        }
    }
    let handleChange = (e)=>{
    setNum(e.target.value);
    }

    return (
        <div className='main-container'>
        <SidebarO/>
        <div className='body-container'> 
            <HeaderO title="Adjustments"/>
            <div className="content-container">
                <div className="ex">
                    <div className="header">
                        <h3 id="own-adjustment-titles">Exercises</h3>
                        <Button1 variant="contained" className="Hbutton">New Exercise</Button1>
                    </div>
                    <div className='own-adjustment-card '>
                    <Table
                        rows={excerciseDetails}
                        headCells={excerciseDetailsTableHead}
                        tableName={"Exercises"} 
                    />
                    </div>
                </div>
                <div className="ex">
                    <div className="header">
                        <h3 id="own-adjustment-titles">Payment Plans</h3>
                        <Button1 variant="contained" className="Hbutton">New Payment</Button1>
                    </div>
                    <div className='own-adjustment-card '>
                    <Table
                        rows={paymentPlanDetails}
                        headCells={paymentPlanDetailsTableHead}
                        tableName={"PaymentPlans"} 
                    />
                    </div>
                </div>
                <div className="ex">
                    <h3 id="own-adjustment-titles">No of appoinments per timeslot</h3>
                    
                    <div className="main_div">
                        <div className="center_div">
                        {/* <h2 id="count">{count}</h2> */}
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                            </div>
                            <div className="adjustments-count">
                            <input id="count" type="text" class="form-control" value={num} onChange={handleChange}/>
                            </div>
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          
      </div>
    </div>
    )
}
