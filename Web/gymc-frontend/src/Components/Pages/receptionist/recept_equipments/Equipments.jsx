import React from 'react'

import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import { Card } from 'react-bootstrap';
import Treadmill from '../../../../images/treadmill.png'
import Dumbbell from '../../../../images/dumbbells.jpg'
import Bench from '../../../../images/bench.jpg'
import Plus from '../../../../images/Icons/circle-plus-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import './Equipments.css'


const Equipments = () => {
  return (
    <div className='main-container'>
      <SidebarR/>
      <div className='body-container'> 
          <HeaderR title="Equipments"/>
          {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem cum laudantium ipsa laborum esse! Atque temporibus asperiores veritatis ipsum enim ratione quia. Accusantium nesciunt, necessitatibus quaerat ea rerum aliquid minus?</p> */}
          
          <div className="content-container">
            <button type="button" class="btn" style={{ backgroundColor: '#3DA2FF', width: '100px', margin: '20px' }}>Add</button>
            <div className='Ecard'>
              <Card className='rec-equipment-card'>
                <Card.Title><img src={Treadmill} alt="" height={250} width={250}/></Card.Title>
                <Card.Subtitle>Treadmills</Card.Subtitle>
                <Card.Body className='content-row'>
                <button className='equipment-button'><img src={View} alt="" height={20} width={20} /></button>
                <button className='equipment-button'><img src={Plus} alt="" height={20} width={20} /></button>
                </Card.Body>
              </Card>
              <Card className='rec-equipment-card'>
                <Card.Title><img src={Dumbbell} alt="" height={250} width={250}/></Card.Title>
                <Card.Subtitle>Dumbbells</Card.Subtitle>
                <Card.Body className='content-row'>
                <button className='equipment-button'><img src={View} alt="" height={20} width={20} /></button>
                <button className='equipment-button'><img src={Plus} alt="" height={20} width={20} /></button>
                </Card.Body>
              </Card>
              <Card className='rec-equipment-card'>
                <Card.Title><img src={Bench} alt="" height={250} width={250}/></Card.Title>
                <Card.Subtitle>Benches</Card.Subtitle>
                <Card.Body className='content-row'>
                <button className='equipment-button'><img src={View} alt="" height={20} width={20} /></button>
                <button className='equipment-button'><img src={Plus} alt="" height={20} width={20} /></button>
                </Card.Body>
              </Card>
              <Card className='rec-equipment-card'>
                <Card.Title><img src={Treadmill} alt="" height={250} width={250}/></Card.Title>
                <Card.Subtitle>Treadmills</Card.Subtitle>
                <Card.Body className='content-row'>
                <button className='equipment-button'><img src={View} alt="" height={20} width={20} /></button>
                <button className='equipment-button'><img src={Plus} alt="" height={20} width={20} /></button>
                </Card.Body>
              </Card>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default Equipments