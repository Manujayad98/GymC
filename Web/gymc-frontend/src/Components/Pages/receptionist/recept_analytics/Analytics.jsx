import React, { useState } from 'react'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import BarChart from '../../../Utilities/Charts/BarChart'

import './Analytics.css'

const Analytics = () => {

  const [ChartData] = useState([
    ["Week","Percentage"],
    ["Week1", 20],
    ["Week2", 70],
    ["Week3", 40],
    ["Week4", 50],
   
    

  ]);

  return (
    <div className='main-container'>
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Analytics" />
        <div className="content-container">
            <div className='recept-analytics-card-container'>

                <div className="cardx">
                      <div className='recept-analytics-card analytics-cards'>
                        <div className='recept-analytics-card-content'>
                          <div className='Name'>Number of Trainers</div>
                          <div className='Count'>5</div>
                        </div>
                      </div>
                      <div className='recept-analytics-card analytics-cards'>
                        <div className='recept-analytics-card-content'>
                          <div className='Name'>Number of Trainees</div>
                          <div className='Count'>10</div>
                        </div>
                  </div>
              </div>
              <div className="dropdown">
                                    
                                    <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                    </select>
                                    
                                    <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                                        <option>Jan</option>
                                        <option>Feb</option>
                                        <option>Mar</option>
                                        <option>Apr</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>Jul</option>
                                        <option>Aug</option>
                                        <option>Sep</option>
                                        <option>Oct</option>
                                        <option>Nov</option>
                                        <option>Dec</option>
                                    </select>

              </div>
          </div>

          

          <div className='recept-analytics-card-container'>
          
          </div>

          <div className='recept-analytics-chart-table-container'>

            <div className='recept-analytics-chart-container'>
              {/* <div className='own-dashboard-container-head'>Annual Income</div> */}
              <div className='recept-analytics-card chart-cards'>
                <BarChart data={ChartData} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Analytics
