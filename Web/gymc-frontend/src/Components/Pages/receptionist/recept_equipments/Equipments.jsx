import React from 'react'

import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import Card from '../../../Utilities/Card/Card'
import './Equipments.css'


const Equipments = () => {
  return (
    <div className='main-container'>
      <SidebarR/>
      <div className='body-container'> 
          <HeaderR title="Equipments"/>
          {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem cum laudantium ipsa laborum esse! Atque temporibus asperiores veritatis ipsum enim ratione quia. Accusantium nesciunt, necessitatibus quaerat ea rerum aliquid minus?</p> */}
          
          <div className="content-container">
            <div className='Ecard'>
              <Card title="Treadmill" para="10"/>
              <Card title="Ellipticals" para="8"/>
              <Card title="Dumbbell sets" para="5"/>
              <Card title="Treadmill" para="10"/>
              <Card title="Ellipticals" para="8"/>
              <Card title="Dumbbell sets" para="5"/>
            </div>
          </div>
            {/* <div>
              <p>10</p>
            </div>
          </Card>  */}
      </div>
      
    </div>
  )
}

export default Equipments