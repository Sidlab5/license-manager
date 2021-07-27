import React, {useState} from 'react'
import Sidebar from '../shared/side-bar/SideBar'
import Customers from './customers/Customers';
import Releases from './releases/Releases';
import Log from './log/Log';
import Users from './users/Users';
import Roles from './roles/Roles';
import SideNav from '../shared/side-nav/SideNav';
import Header from '../shared/header/Header';

const Container = (props) => {

    const [view, setView] = useState(1);

   const handleClick = num => {
        console.log('click ', num);
        setView(num)
      };

      let content 

      if (view === 1) {
          content = <Customers/>
      } else if (view === 2) {
          content = <Releases/>
      } else if (view === 3) {
          content = <Log/>
      } else if (view === 4) {
        content = <Users/>
    } else if (view === 5) {
        content = <Roles/>
    }

    return (
        <div style={{display:'flex'}}>
                <SideNav handleClick={handleClick} view={view}/>
            <div style={{width: '100%', padding: '0 2rem'}}>
                <Header isAuth={props.isAuth} handleLogin={props.handleLogin}/>
                {content}
            </div>
        </div>
    )
}

export default Container
