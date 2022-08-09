import React from 'react'
import './Header.css'
import owner from '../../../../images/owner.png'

function Header(props) {
    return (
      <div className='Headr'>
          {/* <div className='a-b-img'>
              <img src={props.image} alt='' />
          </div> */}
          <div className='Head'>
              <div className='Headng'>
              <h1 id='heading'>{props.title}</h1>
              </div>
              {/* <p>Lorem ipsum dolor sit amet consectetur </p> */}
                <div className='profile'>
                    <img src={owner} alt="" />
                    <div className='profileDetails'>
                        <h1 id='name'>Sanjana Rajapaksha</h1>
                        <h2 id='level'>Owner</h2>
                    </div>
                </div>
          </div>
      </div>
    )
  }

export default Header