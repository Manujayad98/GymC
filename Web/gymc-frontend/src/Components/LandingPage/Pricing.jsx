import React from 'react'
import Pricingbox from './Pricingbox'
import './LandingPage.css'
// import fimage1 from '../images/1.svg'
// import fimage2 from '../images/2.svg'
// import fimage3 from '../images/3.svg'
// import fimage4 from '../images/4.svg'

function Pricing() {
  return (
    <div id='features'>
        <h1>PRICING</h1>
        <div className='p-container'>
            <Pricingbox title="AFFORDABLE PRICING FOR YOUR WORKOUTS" />
            <Pricingbox title="Monthly Plan" />
            <Pricingbox title="Daily Plan" />
            {/* <Pricingbox title="Mobile App" /> */}
        </div>
    </div>
  )
}

export default Pricing