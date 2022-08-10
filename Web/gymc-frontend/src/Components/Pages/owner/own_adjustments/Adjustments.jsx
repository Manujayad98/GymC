import React, { useState } from "react";
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import Table from '../../../Utilities/Tables/Table2'
import Edit from '../../../../images/Icons/pen-solid.svg'

export default function Meals() {
    const [trainerDetails] = useState([
        {
            MealID: "M001",
            MealName: "Meal 01",
            Calories: "45",
            Proteins: "84",
            Carbs: "8",
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn  mt-0"
                        style={{
                            backgroundColor: "#000",
                            color: "#FFF",
                            border: "none",
                            borderRadius: "20px"
                        }}
                    >
                        HOLD
                    </button>
                </span >

            ),
        },
        {
            MealID: "M001",
            MealName: "Meal 01",
            Calories: "45",
            Proteins: "84",
            Carbs: "8",
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn  mt-0"
                        style={{
                            backgroundColor: "#000",
                            color: "#FFF",
                            border: "none",
                            borderRadius: "20px"
                        }}
                    >
                        HOLD
                    </button>
                </span >

            ),
        },
        {
            MealID: "M001",
            MealName: "Meal 01",
            Calories: "45",
            Proteins: "84",
            Carbs: "8",
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn  mt-0"
                        style={{
                            backgroundColor: "#000",
                            color: "#FFF",
                            border: "none",
                            borderRadius: "20px"
                        }}
                    >
                        HOLD
                    </button>
                </span >

            ),
        },
        {
            MealID: "M001",
            MealName: "Meal 01",
            Calories: "45",
            Proteins: "84",
            Carbs: "8",
            Actions: (
                <span >
                    <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
                    <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn  mt-0"
                        style={{
                            backgroundColor: "#000",
                            color: "#FFF",
                            border: "none",
                            borderRadius: "20px"
                        }}
                    >
                        HOLD
                    </button>
                </span >

            ),
        },
    ]);
    const [trainerDetailsTableHead] = useState([
        { id: "MealID", label: "MEAL ID", numeric: false },
        { id: "MealName", label: "MEAL NAME", numeric: false },
        { id: "Calories", label: "CALORIES", numeric: false },
        { id: "Proteins", label: "PROTEINS", numeric: false },
        { id: "Carbs", label: "CARBS", numeric: false },
        // { id: "Actions", label: "ACTIONS", numeric: false },
    ]);
    return (

        <div className='main-container'>
        <SidebarO/>
        <div className='body-container'> 
            <HeaderO title="Adjustments"/>
            <div className="content-container">
            
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
