import React, {useState} from 'react';
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    UserOutlined,
    DropboxOutlined,
    LoginOutlined
  } from '@ant-design/icons';

const Sidebar = (props) => {

    const[toggle, setToggle] = useState(false)

    return (
        <div style={{ width: '190px', height:'100vh'}}>
            <Menu
            onClick={(e) => props.handleClick(e.key)}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            style={{height:'100%'}}
            inlineCollapsed={toggle}
            >
        <center >
            <Button type='primary'  onClick={() => setToggle(!toggle)} 
            style={{ margin:'2rem 0' }}
            >
                {toggle ? <MenuUnfoldOutlined style={{fontSize:'2rem'}}/> : <MenuFoldOutlined style={{fontSize:'2rem'}}/>}
            </Button>
        </center>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    Customers
                </Menu.Item>
                <Menu.Item key="2" icon={<DropboxOutlined />}>
                    Releases
                </Menu.Item>
                <Menu.Item key="3" icon={<LoginOutlined />}>
                   Log
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Sidebar
