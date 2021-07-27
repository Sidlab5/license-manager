import { DropboxOutlined, LoginOutlined, ReconciliationOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';
import sidlabIcon from '../../../assets/sidlabicon.png';
import styles from './SideNav.module.css';


const SideNav = (props) => {

  // const handleNewClick = () => {
  //   history.push("/")
  // }

    return (

        <ul className={styles.sideNav}>
           <div style={{paddingLeft: '1rem', paddingBottom: '4rem', paddingTop: '1rem'}}>
            <Avatar src={sidlabIcon}/>
              <span style={{marginLeft:'8px', color: '#fff', letterSpacing: '1px', fontWeight: '500'}}>SIDLAB</span>
            </div>
            <li 
              className={`${styles.sideNavItem} ${props.view==1? styles.sideNavItemActive : "" }`}>
                <button onClick={() => props.handleClick(1)} className={styles.sideNavBtn}>
                  <i style={{marginRight: '1rem'}}><UserOutlined /></i> Customers
                </button>
            </li>
            <li 
              className={`${styles.sideNavItem} ${props.view==2? styles.sideNavItemActive : "" }`}>
                <button onClick={() => props.handleClick(2)} className={styles.sideNavBtn}>
                <i style={{marginRight: '1rem'}}><DropboxOutlined /></i> Releases
                </button>
            </li>
            <li
              className={`${styles.sideNavItem} ${props.view==3? styles.sideNavItemActive : "" }`}>
              <button onClick={() => props.handleClick(3)} className={styles.sideNavBtn}>
              <i style={{marginRight: '1rem'}}><LoginOutlined /></i> Log
              </button>
            </li>

            <li 
              className={`${styles.sideNavItem} ${props.view==4? styles.sideNavItemActive : "" }`}>
            <button onClick={() => props.handleTabClick(4)} className={styles.sideNavBtn}>
            <i style={{marginRight: '1rem'}}><UserOutlined /></i> Users
            </button>
            </li>

            <li 
              className={`${styles.sideNavItem} ${props.active==5? styles.sideNavItemActive : "" }`}>
                <button onClick={() => props.handleTabClick(5)} className={`${styles.sideNavBtn}`}>
                <i style={{marginRight: '1rem'}}><ReconciliationOutlined /></i> Roles
                </button>
            </li>
        </ul>
    )
}

export default SideNav;
