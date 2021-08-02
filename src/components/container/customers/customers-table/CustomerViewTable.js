import React, {useState} from 'react';
import {Row, Col, Button, Tooltip} from 'antd';
import './CustomerViewTable.css'
import { EditOutlined } from '@ant-design/icons';

const CustomerViewTable = (props) => {

    const [currentCustomer] = useState(props.currentCustomer)

    let content = null 
    if (currentCustomer.licenseInfo.licenseType === 'CPU' || 
    currentCustomer.licenseInfo.licenseType === 'FNL' || 
    currentCustomer.licenseInfo.licenseType === 'Monthly lease') 
    {
        content = 
         [
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Purchase date</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.purchaseDate}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Subscription years</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.subscribtionYears}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Renewal date</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.renewalDate}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Eligible version</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.eligibleVersion}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Modules</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.modules.join(', ')}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>MAC address</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.macAddress}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Activation SN</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.activationSN}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>MATLAB files</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.codeAccess}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Number of seats</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.numberOfSeats}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Number of months</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.numberOfMonths}</Col>,
        ]
    } else if (currentCustomer.licenseInfo.licenseType === 'Trial') {
        content = 
        [
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Start date</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.startDate}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>End date</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.endDate}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Eligible version</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.eligibleVersion}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>MAC address</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.macAddress}</Col>
        ]
    } else if (currentCustomer.licenseInfo.licenseType === 'Student') {
        content = 
        [
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Start date</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.startDate}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>End date</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.endDate}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Eligible version</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.eligibleVersion}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>MAC address</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.macAddress}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Modules</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.modules}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Course code</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.courseCode}</Col>,
        ]
    } 

        return (
            <React.Fragment>
                 <div className='scrolling' 
                 //style={{height:'45rem', overflowY:'scroll'}}
                 >
                <Row className='tViewRowHeader'>
                  Personal Information
                </Row>
                <Row className='tViewRow'>
                    {/* <Col style={{display: 'flex', flexDirection: 'row-reverse'}} span={24}>klk,kkmkmkm</Col> */}
                  <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Name</Col>
                  <Col span={15} className='tViewRowCell' style={{display: 'flex', justifyContent: 'space-between'}}>
                      <span>{currentCustomer.name}</span>
                        <Tooltip placement="top" title='Edit Personal Information'>
                            <i style={{cursor: 'pointer', fontSize: '1.4rem'}} onClick={props.handleEditPersonalForm}><EditOutlined /></i>
                        </Tooltip>
                </Col>
                  <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Email</Col>
                  <Col span={15} className='tViewRowCell'>{currentCustomer.email}</Col>
                  <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Organization</Col>
                  <Col span={15} className='tViewRowCell'>{currentCustomer.organization}</Col>
                  <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Country</Col>
                  <Col span={15} className='tViewRowCell'>{currentCustomer.country}</Col>
                  <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Phone</Col>
                  <Col span={15} className='tViewRowCell'>{currentCustomer.phone}</Col>
                </Row>
                {/* <div style={{marginTop:'1.5rem'}}> 
                    <Button style={{backgroundColor: '#2d3e83', color: '#fff', borderRadius: '5px'}} onClick={props.handleEditPersonalForm}>Edit personal information</Button>
                </div> */}
                <Row className='tViewRowHeader'>
                   License Information
                </Row>
                <Row className='tViewRow'>
                  <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>License Type</Col>
                  <Col span={15} className='tViewRowCell' style={{display: 'flex', justifyContent: 'space-between'}}>
                      <span>{currentCustomer.licenseInfo.licenseType}</span>
                        <Tooltip placement="top" title='Edit License Information'>
                            <i style={{cursor: 'pointer', fontSize: '1.4rem'}} onClick={props.handleEditLicenseForm}><EditOutlined /></i>
                        </Tooltip>
                </Col>
                  {content}
                </Row>
                {/* <div style={{marginTop:'1rem'}}> 
                    <Button style={{backgroundColor: '#2d3e83', color: '#fff', borderRadius: '5px'}} onClick={props.handleEditLicenseForm}>Edit license information</Button>
                </div> */}
                </div>
                <Button style={{marginRight:'5px', marginTop:'1rem'}} onClick={props.handleViewCustomer}>Cancel</Button>
            </React.Fragment>
        )
    }

export default CustomerViewTable
