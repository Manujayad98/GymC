import React from 'react'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'

const Trainees = () => {
  return (
    <div className='main-container'>
      <SidebarR/>
      <div className='body-container'> 
          <HeaderR title="Trainees"/>
          <div className="content-container">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem cum laudantium ipsa laborum esse! Atque temporibus asperiores veritatis ipsum enim ratione quia. Accusantium nesciunt, necessitatibus quaerat ea rerum aliquid minus?</p>
          </div>
      </div>
    </div>
  )
}

export default Trainees