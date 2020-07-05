import React from 'react';
import {Row, Col} from 'antd';
import * as variable from '../../../Variables';

const UsersTableHeader = () => {
    return (

        <Row className='tHeader'>
            <Col className='tHeaderCell' span={7}>{variable.Name}</Col>
            <Col className='tHeaderCell' span={7}>{variable.Email}</Col>
            <Col className='tHeaderCell' span={8}>{variable.Role}</Col>
            <Col style={{padding:'5px'}} span={2}>{variable.Actions}</Col>
        </Row>
    )
}

export default UsersTableHeader
