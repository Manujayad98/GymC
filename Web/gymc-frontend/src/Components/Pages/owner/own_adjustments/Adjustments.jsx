import React, { useState } from "react";
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

    //INCREMENT DECREMENT COUNT

    const [count, setCount] = useState(5); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

    function increment() {
      //setCount(prevCount => prevCount+=1);
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }
  
    function decrement() {
      setCount(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1); 
        } else {
          return (prevCount = 0);
        }
      });
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
                        <div className="btn_div">    
                            <button id="countButton" onClick={increment}>{<FaPlusCircle/>}</button>
                            <h2 >{count}</h2>
                            <button id="countButton" onClick={decrement}>{<FaMinusCircle/>}</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          
      </div>
    </div>
    )
}
