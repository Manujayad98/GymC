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
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'
import Image from 'react-random-image'
import Table from '../../../Utilities/Tables/Table2'
import './Dashboard.css'
import { margin } from '@mui/system'
import { getUpcomingAppointmentTableDetails } from "../../../../services/AppointmentService";
import { getTodaysTrainers } from "../../../../services/StaffService";


const Dashboard = () => {

  useEffect(() => {
    checkValidate();
    getAppointments();
    getTodayAvailableTrainers();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const [appointments, setAppointments] = useState([]);
  const [todayTrainers, setTodayTrainers] = useState({});

  const getAppointments = async () => {
    const res = await getUpcomingAppointmentTableDetails();
    console.log(res.data);
    setAppointments(
      [...res.data]
    );
    console.log(appointments);
  };

  const getTodayAvailableTrainers = async () => {
    const res = await getTodaysTrainers();
    console.log(res.data);
    setTodayTrainers(
      [...res.data]
    );
  };

  return (
    <div className='main-container'>
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Dashboard" />
        <div className="content-container" >
          <div>
            <div className='rec-trainee-titles'> Trainers Today</div>
            <div className='rec-trainee-profile-card-container'>
              {/* <div className='rec-train-card'>
                <div className='rec-dashboard-card-img-container'>
                  <img className='recept-dashboard-images' src={Pic1} alt="" />
                  <Image width={100} height={100} className='owner-dashboard-images' />

                </div>
                <div className='traineeID'>S0001</div>
                <div className='traineeName'>Manujaya Dasanayaka</div>
              </div>
              <div className='rec-train-card'>
                <div className='rec-dashboard-card-img-container'>
                  <img className='recept-dashboard-images' src={Pic1} alt="" />
                  <Image width={100} height={100} className='owner-dashboard-images' />

                </div>
                <div className='traineeID'>S0001</div>
                <div className='traineeName'>Manujaya Dasanayaka</div>
              </div>
              <div className='rec-train-card'>
                <div className='rec-dashboard-card-img-container'>
                  <img className='recept-dashboard-images' src={Pic1} alt="" />
                </div>
                <div className='traineeID'>S0001</div>
                <div className='traineeName'>Manujaya Dasanayaka</div>
              </div>
              <div className='rec-train-card'>
                <div className='rec-dashboard-card-img-container'>
                  <img className='recept-dashboard-images' src={Pic1} alt="" />
                </div>
                <div className='traineeID'>S0001</div>
                <div className='traineeName'>Manujaya Dasanayaka</div>
              </div>
              <div className='rec-train-card'>
                <div className='rec-dashboard-card-img-container'>
                  <img className='recept-dashboard-images' src={Pic1} alt="" />
                </div>
                <div className='traineeID'>S0001</div>
                <div className='traineeName'>Manujaya Dasanayaka</div>
              </div> */}
              {Object.values(todayTrainers).map((trainer) => (
                // <div className='own-dashboard-card own-dashboard-profile-cards'>
                //   <div className='own-dashboard-card-img-container'>
                //     <img src={trainer5} className='owner-dashboard-images' alt="" />
                //   </div>
                //   <div className='own-dashboard-card-content'>
                //     <div className='staffID'>{trainer.trainer_id}</div>
                //     <div className='staffName'>{trainer.full_name}</div>
                //   </div>
                // </div>

                <div className='rec-train-card'>
                  <div className='rec-dashboard-card-img-container'>
                    <img className='recept-dashboard-images' src={Pic1} alt="" />
                  </div>
                  <div className='traineeID'>{trainer.trainer_id}</div>
                  <div className='traineeName'>{trainer.full_name}</div>
                </div>
              ))}
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

      </div>
    </div>
  )
}

export default Dashboard


