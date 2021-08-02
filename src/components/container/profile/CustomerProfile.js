import React, {useState} from 'react'
import { EditOutlined, UserOutlined } from '@ant-design/icons'
import { Row, Col, Tooltip, Avatar } from 'antd'

const CustomerProfile = () => {
    const [customersData, setCustomersData] = useState(
        {
            id : 1,
            name : 'John doe',
            email: 'test1@gmail.com',
            organization:'ASU',
            country:'Egypt',
            phone:'01125252525',
            licenseInfo : {
                licenseType: 'CPU',
                renewalDate:'2/11/2020',
                purchaseDate:'2/11/2019',
                subscribtionYears: 1,
                eligibleVersion: 'version.5',
                modules:['module 1, module 2'],
                macAddress:'00-10a-125',
                activationSN:'11a4gnk5',
                // numberOfSeats: 5,
                // numberOfMonths:7,
                codeAccess:'MATLAB'
            }
        })
    return (
        <div style={{marginTop: '2rem'}}>
            <Row style={{margin: '2rem 0', justifyContent: 'center'}}>
                    <Avatar size={128} icon={<UserOutlined />} />
                </Row>
            <Row className='tViewRowHeader'>
                  Personal Information
                </Row>
                <Row className='tViewRow'>
                    {/* <Col style={{display: 'flex', flexDirection: 'row-reverse'}} span={24}>klk,kkmkmkm</Col> */}
                  <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Name</Col>
                  <Col span={15} className='tViewRowCell' style={{display: 'flex', justifyContent: 'space-between'}}>
                      <span>{customersData.name}</span>
                        <Tooltip placement="top" title='Edit Personal Information'>
                            <i style={{cursor: 'pointer', fontSize: '1.4rem'}}><EditOutlined /></i>
                        </Tooltip>
                </Col>
                  <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Email</Col>
                  <Col span={15} className='tViewRowCell'>{customersData.email}</Col>
                  <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Organization</Col>
                  <Col span={15} className='tViewRowCell'>{customersData.organization}</Col>
                  <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Country</Col>
                  <Col span={15} className='tViewRowCell'>{customersData.country}</Col>
                  <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Phone</Col>
                  <Col span={15} className='tViewRowCell'>{customersData.phone}</Col>
                </Row>
        </div>
    )
}

export default CustomerProfile
