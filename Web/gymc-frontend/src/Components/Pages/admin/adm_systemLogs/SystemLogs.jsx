import React from 'react'
import '../adm_sidebar/Sidebar.css'
import SidebarO from '../adm_sidebar/Sidebar'
import HeaderO from '../adm_header/header'
import './SystemLogs.css'
import Download from '../../../Utilities/DownloadButton/Download';


const Dashboard = () => {
  return (
    <div className='main-container'>
      <SidebarO/>
      <div className='body-container'> 
          <HeaderO title="System Logs"/>
          <div className="content-container">
            <div className="content">
              <p>click on below button to download the system log file.</p>
              <Download/>
            </div>
            
          </div>
        
          
      </div>
    </div>
  )
}

export default Dashboard
