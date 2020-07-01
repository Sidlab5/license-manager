import React from 'react';
import {Row, Col, Popconfirm, Typography, Tooltip, Input, Card} from 'antd';
import {CloseOutlined, EyeOutlined} from '@ant-design/icons'

const ReleasesTableRow = (props) => {

    const {Text} = Typography
    const { TextArea } = Input;

    const handleEdit = () => {
        props.handleShowEditForm()
        props.editRow(props.release)
    }

    return (
        <Row className='tRow' style={{borderTop:'0'}}>
        <Col className='tRowCell' span={7}>{props.name}</Col>
        <Col className='tRowCell' span={7}>{props.date}</Col>
        <Col className='tRowCell' span={8}>
            <Card className='noteArea' style={{padding:'0'}}>{props.note}</Card>
        </Col>
        <Col style={{padding:'5px'}} span={2}>
            <Text style={{marginRight:'1rem', cursor:'pointer'}} strong  onClick={handleEdit}>Edit</Text> 
            <Tooltip title="delete">
                <Popconfirm title="Sure to delete?" onConfirm={() => props.deleteRelease(props.id)}>
                    <CloseOutlined /> 
                </Popconfirm>
            </Tooltip>
        </Col>
    </Row>
    )
}

export default ReleasesTableRow
