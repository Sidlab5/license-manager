import React, {useState, useEffect} from 'react'
import Sidebar from '../shared/side-bar/SideBar'
import Customers from './customers/Customers';
import Releases from './releases/Releases';
import Log from './log/Log';
import Users from './users/Users';
import Roles from './roles/Roles';
import SideNav from '../shared/side-nav/SideNav';
import Header from '../shared/header/Header';
import CustomerProfile from './profile/CustomerProfile';
import CustomerLicenses from './licenses/CustomerLicenses';
import RequestQuotation from './quotation/RequestQuotation';

const Container = (props) => {

    const [view, setView] = useState(1);
    const [isCustomer, setIsCustomer] = useState(false);

    useEffect(() => {
        if (props.isCustomer) {
            setView(6);
        }
        
    }, [props.isCustomer])

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
    } else if (view === 6) {
        content = <CustomerProfile />
    } else if (view === 7) {
        content = <CustomerLicenses />
    } else if (view === 8) {
        content = <RequestQuotation />
    }

    return (
        <div style={{display:'flex'}}>
                <SideNav handleClick={handleClick} view={view} isCustomer={props.isCustomer}/>
            <div style={{width: '100%', padding: '0 2rem'}}>
                <Header isAuth={props.isAuth} handleLogin={props.handleLogin}/>
                <div style={{height: '90vh', overflowY: 'scroll'}}>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Container
