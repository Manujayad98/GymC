import React from 'react'
import '../adm_header/Header.css'
import owner from '../../../../images/owner.png'
import { fetchUserData } from "../../../../services/AuthenticationService";

function Header(props) {

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
      <div className='Head'>
        <div className='Headng'>
          <h1 id='heading'>{props.title}</h1>
        </div>
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