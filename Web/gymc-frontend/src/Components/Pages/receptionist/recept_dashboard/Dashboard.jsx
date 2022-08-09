import React from 'react'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import './Dashboard.css'
import HeaderR from '../recept_header/Header'

const Dashboard = () => {
  return (
    <div className='comm'>
      <SidebarR/>
      <div className='dash-container'> 
          <HeaderR title="Dasboard"/>
          {/* <h1 id='dashb'>Dashboard DD</h1>
          <h2>gg</h2> */}
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem cum laudantium ipsa laborum esse! Atque temporibus asperiores veritatis ipsum enim ratione quia. Accusantium nesciunt, necessitatibus quaerat ea rerum aliquid minus?</p>
      </div>
    </div>
  )
}

export default Dashboard