import React from 'react';
import {Row, Col, Button, Popconfirm, Typography, Tooltip} from 'antd';
import {CloseOutlined, EyeOutlined} from '@ant-design/icons'
import './CustomersTableRow.css'


const CustomersTableRow = (props) => {

    const {Text} = Typography

    // const handleEdit = () => {
    //     props.handleShowEditForm()
    //     props.editRow(props.customer)
    // }

    const handleView = () => {
        props.handleViewCustomer()
        props.editRow(props.customer)
    }

    return (
        <Row className='tRow' style={{borderTop:'0'}}>
            <Col className='tRowCell' span={7}>{props.name}</Col>
            <Col className='tRowCell' span={7}>{props.email}</Col>
            <Col className='tRowCell' span={7}>{props.date.renewalDate||props.date.endDate}</Col>
            <Col style={{padding:'5px'}} span={3}>
                <Tooltip title="view">
                    <EyeOutlined style={{marginRight:'1rem', cursor:'pointer'}} onClick={handleView} />
                </Tooltip>
                <Tooltip title="delete">
                    <Popconfirm title="Sure to delete?" onConfirm={() => props.deleteCustomer(props.id)}>
                        <CloseOutlined /> 
                    </Popconfirm>
                </Tooltip>
            </Col>
        </Row>
    )
}

export default CustomersTableRow
