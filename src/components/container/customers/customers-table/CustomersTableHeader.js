import React from 'react';
import {Row, Col, Button} from 'antd';
import './CustomersTableHeader.css';

const CustomersTableHeader = () => {
    return (
        <Row className='tHeader'>
            <Col className='tHeaderCell' span={7}>Name</Col>
            <Col className='tHeaderCell' span={7}>Email</Col>
            <Col className='tHeaderCell' span={7}>Renewal date</Col>
            <Col style={{padding:'5px'}} span={3}>Actions</Col>

        </Row>
    )
}

export default CustomersTableHeader
