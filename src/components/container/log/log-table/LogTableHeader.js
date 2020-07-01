import React from 'react';
import {Row, Col} from 'antd';

const LogTableHeader = () => {
    return (

        <Row className='tHeader'>
            <Col className='tHeaderCell' span={3}>First Name</Col>
            <Col className='tHeaderCell' span={3}>Last Name</Col>
            <Col className='tHeaderCell' span={3}>Email</Col>
            <Col className='tHeaderCell' span={3}>Organization</Col>
            <Col className='tHeaderCell' span={3}>Country</Col>
            <Col className='tHeaderCell' span={3}>License</Col>
            <Col className='tHeaderCell' span={3}>Generation</Col>
            <Col style={{padding:'5px'}} span={3}>Serial Number</Col>



        </Row>
    )
}

export default LogTableHeader
