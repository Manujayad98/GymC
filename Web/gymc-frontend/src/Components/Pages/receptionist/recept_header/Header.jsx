import React, { useState, useEffect } from 'react'
import './Header.css'
import owner from '../../../../images/owner.png'
import { fetchUserData } from "../../../../services/AuthenticationService";

function Header(props) {

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const [data, setData] = useState({});
  React.useEffect(() => {
    console.log('response');
    fetchUserData()
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((e) => {
        localStorage.clear();
      });
  }, []);

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
            <h1 id='name'>{`${data.userName} `}</h1>
            <h2 id='level'>{`${data.userLevel} `}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header