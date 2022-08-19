import React, { useEffect } from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import './Notifications.css'

const Notification = () => {

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
        <div className="content-container">
          <h6><b>New</b></h6>
          <hr width='100%' />
          <div className="card-container">
            <p class="line1">Appoinment cancellation</p>
            <p class="line2">Client cancelled the appoinment on Tuesday 24th of July..................</p>
            <p class="line3">34 minutes ago</p>


          </div>



          <h6><b>Earlier</b></h6>
          <hr width='100%' />
          <div className="card-container">
            <p class="line1">Appoinment cancellation</p>
            <p class="line2">Client cancelled the appoinment on Tuesday 24th of July..................</p>
            <p class="line3">34 minutes ago</p>


          </div>
          <div className="card-container">
            <p class="line1">Appoinment cancellation</p>
            <p class="line2">Client cancelled the appoinment on Tuesday 24th of July..................</p>
            <p class="line3">34 minutes ago</p>


          </div>
          <div className="card-container">
            <p class="line1">Appoinment cancellation</p>
            <p class="line2">Client cancelled the appoinment on Tuesday 24th of July..................</p>
            <p class="line3">34 minutes ago</p>


          </div>


        </div>

      </div>
    </div>
  )
}

export default Notification
