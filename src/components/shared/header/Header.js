import React from 'react';
import { Typography, Avatar, Button, Divider, Layout } from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import sidlabIcon from '../../../assets/sidlabicon.png'
import { useHistory } from "react-router-dom";

import './Header.css';

const Header = (props) => {

    const {Title, Text} = Typography;
    const history = useHistory();

    const handleClick = () => {
        history.push('/')
        props.handleLogin()
    }

    let content = null
    if (props.isAuth) {
        content = <div className='userName'>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Text style={{color:'#fff', fontWeight:'500'}}>John Doe</Text>
        <Divider type="vertical" style={{height:'3rem', margin:'0 1rem'}} />
        <Button onClick={handleClick} className='logoutBtn'>
            Logout <LogoutOutlined style={{fontSize:'2rem', color: '#2d3e83'}} />
        </Button>
        
    </div>
    }

    return (
        <Layout>
            <nav className='header'>
                <div className='headerTitle'>
                    {/* <Avatar className='headerLogo' size="large" src={sidlabIcon} /> */}
                    <Title className='headerTitle' style={{color:'#fff', letterSpacing: '3px', fontWeight: '500'}} level={4}>License Manager</Title>
                </div>
                {content}
            </nav>
        </Layout>
    )
}
 
export default Header
