import React from 'react'
import '../adm_sidebar/Sidebar.css'
import SidebarO from '../adm_sidebar/Sidebar'
import HeaderO from '../adm_header/header'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Dasboard" />
        <div className="content-container">

          <div className='adm-dashboard-card-container'>

            <div className='adm-dashboard-card profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>Active Web Users</div>
                <div className='staffName'>20</div>
              </div>
            </div>

            <div className='adm-dashboard-card profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>Active Mobile Users</div>
                <div className='staffName'>24</div>
              </div>
            </div>

            <div className='adm-dashboard-card profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>On hold accounts</div>
                <div className='staffName'>11</div>
              </div>
            </div>

            <div className='adm-dashboard-card profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>Active Mobile Users</div>
                <div className='staffName'>11</div>
              </div>
            </div>

            <div className='adm-dashboard-card profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>Trainers</div>
                <div className='staffName'>8</div>
              </div>
            </div>

          </div>

          <div className='adm-dashboard-card-container'>

            <div className='adm-dashboard-card profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>Trainees</div>
                <div className='staffName'>32</div>
              </div>
            </div>

            <div className='adm-dashboard-card profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>On hold accounts</div>
                <div className='staffName'>12</div>
              </div>
            </div>

            <div className='adm-dashboard-card profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>Active Mobile Users</div>
                <div className='staffName'>11</div>
              </div>
            </div>

            <div className='adm-dashboard-card profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>Active Mobile Users</div>
                <div className='staffName'>11</div>
              </div>
            </div>

            <div className='adm-dashboard-card profile-cards'>
              <div className='adm-dashboard-card-content'>
                <div className='staffID'>Active Mobile Users</div>
                <div className='staffName'>7</div>
              </div>
            </div>

          </div>
          <div className='own-dashboard-chart-table-container'>



            <div className='adm-dashboard-announcement-container'>
              <div className='own-dashboard-container-head'>Site Announcements</div>
              <div className='adm-dashboard-card announcement-cards'>
                <div className='AnnounceID'>Gym closure</div>
                <span id='Announceby'>by Admin. Monday, 18 July 2022, 3:47 PM.</span>
                <div className='AnnounceName'>Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM.Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM.Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM</div>
              </div>

              <div className='adm-dashboard-card announcement-cards'>
                <div className='AnnounceID'>Gym closure</div>
                <span id='Announceby'>by Admin. Monday, 18 July 2022, 3:47 PM.</span>
                <div className='AnnounceName'>Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM.Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM.Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM</div>
              </div>

              <div className='adm-dashboard-card announcement-cards'>
                <div className='AnnounceID'>Gym closure</div>
                <span id='Announceby'>by Admin. Monday, 18 July 2022, 3:47 PM.</span>
                <div className='AnnounceName'>Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM.Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM.Gym C will be closed on Saturday 23rd of July for a planned activity from 8 AM - 12 AM</div>
              </div>

            </div>
          </div>



        </div>

      </div>
    </div>
  )
}

export default Dashboard