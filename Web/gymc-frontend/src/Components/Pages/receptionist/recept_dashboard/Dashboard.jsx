import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import Pic1 from '../../../../images/owner.png'
import gihanpic from "../../../../images/receptionistinterim/gihan.png"
import kalindupic from "../../../../images/receptionistinterim/piyath.png"
import piyathpic from "../../../../images/receptionistinterim/kalindu.png"
import trumppic from "../../../../images/receptionistinterim/trump.png"
import lahirupic from "../../../../images/receptionistinterim/lahiru.png"
import lelanipic from "../../../../images/receptionistinterim/lelani.png"

import trainer1 from '../../../../images/owner/tr1.png'
import trainer2 from '../../../../images/owner/tr2.png'
import trainer3 from '../../../../images/owner/tr3.png'
import trainer4 from '../../../../images/owner/tr4.png'
import trainer5 from '../../../../images/owner/tr5.png'
import trainee1 from '../../../../images/owner/te1.png'


import Table from '../../../Utilities/Tables/Table2'
import './Dashboard.css'
import { margin } from '@mui/system'
import { getUpcomingAppointmentTableDetails} from "../../../../services/AppointmentService";



const Dashboard = () => {

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
        const res = await getUpcomingAppointmentTableDetails();
        console.log(res.data);
        setAppointments(
            [...res.data]
        );
        console.log(appointments);
    };

  return (
    <div className='main-container'>
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Dashboard" />
        <div className="content-container" >
          <div className='rec-split-left'>
            <div className='rec-dashboard-card-container'>
              <div className='rec-dashboard-card1 rec-dashboard-cards'>
                <div className='rec-dashboard-card-content'>
                  <div className='rec-dashboard-card-title'>Payments Due</div>
                  <div className='rec-dashboard-card-text'>5</div>
                </div>
              </div>
              <div className='rec-dashboard-card1 rec-dashboard-cards'>
                <div className='rec-dashboard-card-content'>
                  <div className='rec-dashboard-card-title'>Now in</div>
                  <div className='rec-dashboard-card-text'>3</div>
                </div>
              </div>
            </div>
              <div className='rec-dashboard-chart-container'>
                <div className='rec-dashboard-container-head'>Trainers Today</div>
                <div className='rec-dashboard-card1 rec-dashboard-trainers-card'>
                  <div className='rec-dashboard-pic-card'>
                    <img src={trainer1} alt="" className='recept-dashboard-images' />
                    <p className='rec-card-subtitle'>Manujaya</p>
                  </div>
                  <div className='rec-dashboard-pic-card'>
                    <img src={trainer2} alt="" className='recept-dashboard-images' />
                    <p className='rec-card-subtitle'>Chathura</p>
                  </div>
                  <div className='rec-dashboard-pic-card'>
                    <img src={trainer5} alt="" className='recept-dashboard-images' />
                    <p className='rec-card-subtitle'>Sewmini</p>
                  </div>
                  <div className='rec-dashboard-pic-card'>
                    <img src={trainer4} alt="" className='recept-dashboard-images' />
                    <p className='rec-card-subtitle'>Sanjana</p>
                  </div>
                </div>
              </div>
          </div>
          <div className='rec-split-right'>
              <div className='rec-dashboard-chart-container'>
                <div className='rec-dashboard-container-head'>Upcoming Appointments</div>
                
                  
                  <MaterialTable
                    title="Upcoming Appointments"
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
                
              </div>
          </div>
        </div>

    //   </div>
    // </div>
  )
}

export default Dashboard


