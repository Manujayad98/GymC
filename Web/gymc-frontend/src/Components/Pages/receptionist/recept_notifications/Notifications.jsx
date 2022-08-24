import React, { useEffect } from 'react'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import './Recept_Notifications.css'

const RNotification = () => {

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  return (
    <div className='main-container'>
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Notifications" />
        <div className="adm-notification-content-container">
          <h6 className="adm-text"><b>New</b></h6>
          <hr width='100%' />
          <div className="adm-noti-card-container">
            <div className="notification-body">
              <p class="adm-noti-title">Appoinment cancellation</p>
              <p class="adm-noti-body">Client cancelled the appoinment on Tuesday 24th of July..................</p>
              <p class="adm-noti-time">34 minutes ago</p>
            </div>
            <div className="adm-read-btn">
              <button className="mark-as-read-btn">mark as read</button>
            </div>
          </div>
          <div className="adm-noti-card-container">
            <div className="notification-body">
              <p class="adm-noti-title">Appoinment cancellation</p>
              <p class="adm-noti-body">Client cancelled the appoinment on Tuesday 24th of July..................</p>
              <p class="adm-noti-time">34 minutes ago</p>
            </div>
            <div className="adm-read-btn">
              <button className="mark-as-read-btn">mark as read</button>
            </div>
          </div>




          <h6 className="adm-text"><b>Earlier</b></h6>
          <hr width='100%' />
          <div className="adm-noti-card-container">
            <div className="notification-body">
              <p class="adm-noti-title">Appoinment cancellation</p>
              <p class="adm-noti-body">Client cancelled the appoinment on Tuesday 24th of July..................</p>
              <p class="adm-noti-time">34 minutes ago</p>
            </div>

          </div>
          <div className="adm-noti-card-container">
            <div className="notification-body">
              <p class="adm-noti-title">Appoinment cancellation</p>
              <p class="adm-noti-body">Client cancelled the appoinment on Tuesday 24th of July..................</p>
              <p class="adm-noti-time">34 minutes ago</p>
            </div>

          </div>
          <div className="adm-noti-card-container">
            <div className="notification-body">
              <p class="adm-noti-title">Appoinment cancellation</p>
              <p class="adm-noti-body">Client cancelled the appoinment on Tuesday 24th of July..................</p>
              <p class="adm-noti-time">34 minutes ago</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default RNotification
