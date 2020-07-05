import React from 'react';
import {Row, Col, Popconfirm, Typography, Tooltip, Card} from 'antd';
import {CloseOutlined} from '@ant-design/icons'

const UsersTableRow = (props) => {

    const {Text} = Typography

    const handleEdit = () => {
        props.handleShowEditForm()
        props.editRow(props.user)
    }

    return (
        <Row className='tRow' style={{borderTop:'0'}}>
        <Col className='tRowCell' span={7}>{props.name}</Col>
        <Col className='tRowCell' span={7}>{props.email}</Col>
        <Col className='tRowCell' span={8}>
            <Card className='noteArea' style={{padding:'0'}}>{props.role}</Card>
        </Col>
        <Col style={{padding:'5px'}} span={2}>
            <Text style={{marginRight:'1rem', cursor:'pointer'}} strong  onClick={handleEdit}>Edit</Text> 
            <Tooltip title="delete">
                <Popconfirm title="Sure to delete?" onConfirm={() => props.deleteUser(props.id)}>
                    <CloseOutlined /> 
                </Popconfirm>
            </Tooltip>
        </Col>
    </Row>
    )
}

export default UsersTableRow
