import React, { useState, useEffect } from "react";
import '../recept_sidebar/Sidebar.css'
import SidebarO from '../recept_sidebar/Sidebar'
import HeaderO from '../recept_header/Header'
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

import './Appointments.css'

import { getAppointmentTableDetails} from "../../../../services/AppointmentService";


export default function Appointments() {

    useEffect(() => {
        checkValidate();
        getAppointments();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const [appointments, setAppointments] = useState([]);

    const getAppointments = async () => {
        const res = await getAppointmentTableDetails();
        console.log(res.data);
        setAppointments(
            [...res.data]
        );
        console.log(appointments);
    };
   

    return (

        <div className='main-container'>
            <SidebarO />
            <div className='body-container'>
                <HeaderO title="Appointments" />
                <div className="content-container">
                <div className="table-div">
                <MaterialTable
              title="Appointments"
              columns={[
                { title: "Appointment ID", field: "appointmentID" },
                { title: "Date", field: "date" },
                { title: "Start Time", field: "start_time" },
                { title: "End Time", field: "end_time" },
                { title: "Staff ID", field: "staff_id" },
                { title: "Trainee ID", field: "trainee_id" },

              ]}
              icons={TableIcons}
              data={appointments}
            

              
              options={{
                headerStyle: {
                  backgroundColor: '#1F0106',
                  color: '#FFF',
                  hover: '#FFF'
                }
              }}
            />
                </div></div>
            </div >
        </div >
    )
}
