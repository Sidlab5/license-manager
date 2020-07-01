import React, {useState} from 'react';
import {Row, Col, Button} from 'antd';
import './CustomerViewTable.css'

const CustomerViewTable = (props) => {

    const [currentCustomer, setCurrentCustomer] = useState(props.currentCustomer)

    let content = null 
    if (currentCustomer.licenseInfo.licenseType == 'CPU' || 
    currentCustomer.licenseInfo.licenseType == 'FNL' || 
    currentCustomer.licenseInfo.licenseType == 'Monthly lease') 
    {
        content = 
         [
            <Col span={9}  className='tViewRowCell'>Purchase date</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.purchaseDate}</Col>,
            <Col span={9}  className='tViewRowCell'>Subscription years</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.subscribtionYears}</Col>,
            <Col span={9}  className='tViewRowCell'>Renewal date</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.renewalDate}</Col>,
            <Col span={9}  className='tViewRowCell'>Eligible version</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.eligibleVersion}</Col>,
            <Col span={9}  className='tViewRowCell'>Modules</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.modules.join(', ')}</Col>,
            <Col span={9}  className='tViewRowCell'>MAC address</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.macAddress}</Col>,
            <Col span={9}  className='tViewRowCell'>Activation SN</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.activationSN}</Col>,
            <Col span={9}  className='tViewRowCell'>MATLAB files</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.codeAccess}</Col>,
            <Col span={9}  className='tViewRowCell'>Number of seats</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.numberOfSeats}</Col>,
            <Col span={9}  className='tViewRowCell'>Number of months</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.numberOfMonths}</Col>,
        ]
    } else if (currentCustomer.licenseInfo.licenseType == 'Trial') {
        content = 
        [
            <Col span={9}  className='tViewRowCell'>Start date</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.startDate}</Col>,
            <Col span={9}  className='tViewRowCell'>End date</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.endDate}</Col>,
            <Col span={9}  className='tViewRowCell'>Eligible version</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.eligibleVersion}</Col>,
            <Col span={9}  className='tViewRowCell'>MAC address</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.macAddress}</Col>
        ]
    } else if (currentCustomer.licenseInfo.licenseType == 'Student') {
        content = 
        [
            <Col span={9}  className='tViewRowCell'>Start date</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.startDate}</Col>,
            <Col span={9}  className='tViewRowCell'>End date</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.endDate}</Col>,
            <Col span={9}  className='tViewRowCell'>Eligible version</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.eligibleVersion}</Col>,
            <Col span={9}  className='tViewRowCell'>MAC address</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.macAddress}</Col>,
            <Col span={9}  className='tViewRowCell'>Modules</Col>,
            <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.modules}</Col>,
            <Col span={9}  className='tViewRowCell'>Course code</Col>,
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
                  <Col span={9}  className='tViewRowCell'>Name</Col>
                  <Col span={15} className='tViewRowCell'>{currentCustomer.name}</Col>
                  <Col span={9}  className='tViewRowCell'>Email</Col>
                  <Col span={15} className='tViewRowCell'>{currentCustomer.email}</Col>
                  <Col span={9}  className='tViewRowCell'>Organization</Col>
                  <Col span={15} className='tViewRowCell'>{currentCustomer.organization}</Col>
                  <Col span={9}  className='tViewRowCell'>Country</Col>
                  <Col span={15} className='tViewRowCell'>{currentCustomer.country}</Col>
                  <Col span={9}  className='tViewRowCell'>Phone</Col>
                  <Col span={15} className='tViewRowCell'>{currentCustomer.phone}</Col>
                </Row>
                <div style={{marginTop:'1rem'}}> 
                    <Button onClick={props.handleEditPersonalForm}>Edit personal information</Button>
                </div>
                <br/>
                <Row className='tViewRowHeader'>
                   License Information
                </Row>
                <Row className='tViewRow'>
                  <Col span={9}  className='tViewRowCell'>License Type</Col>
                  <Col span={15} className='tViewRowCell'>{currentCustomer.licenseInfo.licenseType}</Col>
                  {content}
                </Row>
                <div style={{marginTop:'1rem'}}> 
                    <Button onClick={props.handleEditLicenseForm}>Edit license information</Button>
                </div>
                </div>
                <Button style={{marginRight:'5px', marginTop:'1rem'}} onClick={props.handleViewCustomer}>Cancel</Button>
            </React.Fragment>
        )
    }

export default CustomerViewTable
