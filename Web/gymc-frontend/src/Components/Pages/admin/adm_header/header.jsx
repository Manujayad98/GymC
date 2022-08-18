import React from 'react'
import '../adm_header/header.css'
import owner from '../../../../images/owner.png'

function Header(props) {
    return (
      <div className='Headr'>
          <div className='Head'>
              <div className='Headng'>
              <h1 id='heading'>{props.title}</h1>
              </div>
                <div className='profile'>
                    <img src={owner} alt="" />
                    <div className='profileDetails'>
                        <h1 id='name'>Sanjana Rajapaksha</h1>
                        <h2 id='level'>Admin</h2>
                    </div>
                </div>
          </div>
      </div>
    )
  }

export default Header