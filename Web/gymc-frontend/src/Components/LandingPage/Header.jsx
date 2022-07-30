import React from 'react'
import './LandingPage.css'

export const Header = () => {
  return (
    <div id='main'>
        <div className='name'>
            <h2>DON'T BE AFRAID OF</h2>
            <h1><span>FAILURE</span></h1>
            <h2>THIS IS THE WAY TO</h2>
            <h1><span>SUCCESS</span></h1>
            {/* <p className='details'>Build Your Body And Fitness With Professional Touch</p> */}
            <div className='header-btns'>
                <a href="#" className='header-btn'>JOIN US</a>
            </div>
        </div>
    </div>
  )
}
