import React, { useEffect } from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import './ONotifications.css'

const ONotification = () => {

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
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Notifications" />
        <div className="own-notification-content-container">
          <h6 className="own-text"><b>New</b></h6>
          <hr width='100%' />
          <div className="own-noti-card-container">
            <div className="notification-body">
              <p class="own-noti-title">Appoinment cancellation</p>     
              <p class="own-noti-body">Client cancelled the appoinment on Tuesday 24th of July..................</p>
              <p class="own-noti-time">34 minutes ago</p>
            </div>
            <div className="own-read-btn">
                <button className="mark-as-read-btn">mark as read</button>
            </div>
          </div>
          <div className="own-noti-card-container">
            <div className="notification-body">
              <p class="own-noti-title">Appoinment cancellation</p>     
              <p class="own-noti-body">Client cancelled the appoinment on Tuesday 24th of July..................</p>
              <p class="own-noti-time">34 minutes ago</p>
            </div>
            <div className="own-read-btn">
                <button className="mark-as-read-btn">mark as read</button>
            </div>
          </div>
         



          <h6 className="own-text"><b>Earlier</b></h6>
          <hr width='100%' />
          <div className="own-noti-card-container">
            <div className="notification-body">
              <p class="own-noti-title">Appoinment cancellation</p>     
              <p class="own-noti-body">Client cancelled the appoinment on Tuesday 24th of July..................</p>
              <p class="own-noti-time">34 minutes ago</p>
            </div>
            
          </div>
          <div className="own-noti-card-container">
            <div className="notification-body">
              <p class="own-noti-title">Appoinment cancellation</p>     
              <p class="own-noti-body">Client cancelled the appoinment on Tuesday 24th of July..................</p>
              <p class="own-noti-time">34 minutes ago</p>
            </div>
            
          </div>
          <div className="own-noti-card-container">
            <div className="notification-body">
              <p class="own-noti-title">Appoinment cancellation</p>     
              <p class="own-noti-body">Client cancelled the appoinment on Tuesday 24th of July..................</p>
              <p class="own-noti-time">34 minutes ago</p>
            </div>
            
          </div>

        </div>

      </div>
    </div>
  )
}

export default ONotification
