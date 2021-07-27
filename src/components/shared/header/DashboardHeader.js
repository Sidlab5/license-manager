import React from 'react';
import { Typography } from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import styles from './DashboardHeader.module.css';

const DashboardHeader = () => {

    const {Title} = Typography;

    return (
        <nav className={styles.header}>
            <div className={styles.headerTitle}>
                <Title className={styles.headerTitle} style={{color:'#fff'}} level={5}>License Manager</Title>
            </div>
            <div className={styles.userName}>
                <LogoutOutlined style={{fontSize:'2rem'}} /> Logout
            </div>
        </nav>
    )
}

export default DashboardHeader;
