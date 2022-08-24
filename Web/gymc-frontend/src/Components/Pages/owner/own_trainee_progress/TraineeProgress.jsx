import React, { useState } from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import T1 from '../../../../images/t1.png'
import Pic1 from '../../../../images/owner.png'
import Card from 'react-bootstrap/Card'


import './TraineeProgress.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
 
  
  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Trainee Progress" />
        <div className="own-trainee-progress-content-container">
          <div className="own-trainee-progress-left">
              <div className="own-trainee-progress-profile">
                    <div className="otpp-card">
                      <div className="own-trainee-progress-profile-pic">
                         <img src={Pic1} alt="" />
                          
                      </div>
                      <div className="own-trainee-progress-profile-content">
                            <h6>Sanjana Rajapakse</h6>
                            <h5>T0001</h5>
                      </div>
                      
                      
                    
                     
                    </div>
              </div>
                <div className="own-trainee-progress-chart">
                    <div className="otpc-card">
                      chart
                    </div>
                </div>
          </div>
          <div className="own-trainee-progress-right">
              <div className="own-trainee-progress-workout">
                        <div className="otpw-card">
                            <h4 className="progress-workout-head">Workout No-W003</h4>
                        </div>
                      
              </div>
              <div className="own-trainee-progress-btn">
                      <button className="otp-btn">Compare</button>
              </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Dashboard
