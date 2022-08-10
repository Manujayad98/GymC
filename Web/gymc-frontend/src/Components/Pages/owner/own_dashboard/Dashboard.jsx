import React from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'

const Dashboard = () => {
  return (
    <div className='main-container'>
      <SidebarO/>
      <div className='body-container'> 
          <HeaderO title="Dasboard"/>
          <div className="content-container">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem cum laudantium ipsa laborum esse! Atque temporibus asperiores veritatis ipsum enim ratione quia. Accusantium nesciunt, necessitatibus quaerat ea rerum aliquid minus?</p>
          </div>
          
      </div>
    </div>
  )
}

export default Dashboard