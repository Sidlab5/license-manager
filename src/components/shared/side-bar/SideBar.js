import React from 'react';
import {Avatar, Divider} from 'antd';
import {connect} from 'react-redux';
import { 
    UserOutlined, 
    UsergroupAddOutlined, 
    CustomerServiceOutlined, 
    DropboxOutlined, 
    LoginOutlined,
    ReconciliationOutlined
} from '@ant-design/icons';
import sidlabIcon from '../../../assets/sidlabicon.png';
import styles from './SideBar.module.css';
import { setSidebarContent } from '../../../actions/Sidebar';



const SideBar = (props) => {

  // const history = useHistory()
  // const handleClick = () => {
  //   history.goBack('/')
  // }

    return (
      <ul className={styles.sideBar}>
          <li className={styles.sideBarTitle}>
              <Avatar src={sidlabIcon}/>
              <span style={{marginLeft:'8px'}}>Dashboard</span>
          </li>
          <Divider style={{backgroundColor:'#696f77', margin:'0'}}/>
          <li className={styles.sideBarTitle}>
              <Avatar shape="square" icon={<UserOutlined />} />
              <span className={styles.userName}>John Doe</span>
          </li>
          <div style={{display:'flex', justifyContent:'center', marginBottom:'7px',}}>
            <Divider style={{backgroundColor:'#696f77', margin:'0', minWidth:'90%', width:'90%'}}/>
          </div>
          <li className={styles.sideBarItemContainer}>
              <div onClick={()=> props.dispatch(setSidebarContent({num: 1}))} className={styles.sideBarItem}>
                <Avatar size="small" icon={<CustomerServiceOutlined/>} />
                <span style={{marginLeft:'8px'}}>Customers</span>
              </div>
          </li>
          <li className={styles.sideBarItemContainer}>
              <div onClick={()=> props.dispatch(setSidebarContent({num: 2}))} className={styles.sideBarItem}>
                <Avatar size="small" icon={<DropboxOutlined/>} />
                <span style={{marginLeft:'8px'}}>Releases</span>
              </div>
          </li>
          <li className={styles.sideBarItemContainer}>
              <div onClick={()=> props.dispatch(setSidebarContent({num: 3}))} className={styles.sideBarItem}>
                <Avatar size="small" icon={<LoginOutlined />}/>
                <span style={{marginLeft:'8px'}}>Log</span>
              </div>
          </li>
          <li className={styles.sideBarItemContainer}>
              <div onClick={()=> props.dispatch(setSidebarContent({num: 4}))} className={styles.sideBarItem}>
                <Avatar size="small" icon={<UsergroupAddOutlined/>} />
                <span style={{marginLeft:'8px'}}>Users</span>
              </div>
          </li>
          <li className={styles.sideBarItemContainer}>
              <div onClick={()=> props.dispatch(setSidebarContent({num: 5}))} className={styles.sideBarItem}>
                <Avatar size="small" icon={<ReconciliationOutlined/>} />
                <span style={{marginLeft:'8px'}}>Roles</span>
              </div>
          </li>
      </ul>
    )
}

const mapStateToProps = ({sidebar}) => {
  return {
      sidebar
  }

}

export default connect(mapStateToProps)(SideBar)
