import React, {useState} from 'react';
import { Row, Col, Button, Input } from 'antd';

const CustomerLicenses = () => {
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
                numberOfSeats: 5,
                numberOfMonths:7,
                codeAccess:'MATLAB'
            }
        })

    let content = null;
    if (customersData.licenseInfo.licenseType === 'CPU' || 
    customersData.licenseInfo.licenseType === 'FNL' || 
    customersData.licenseInfo.licenseType === 'Monthly lease') 
    {
        content = 
         [
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Purchase date</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.purchaseDate}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Subscription years</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.subscribtionYears}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Renewal date</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.renewalDate}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Eligible version</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.eligibleVersion}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Modules</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.modules.join(', ')}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>MAC address</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.macAddress}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Activation SN</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.activationSN}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>MATLAB files</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.codeAccess}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Number of seats</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.numberOfSeats}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Number of months</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.numberOfMonths}</Col>,
        ]
    } else if (customersData.licenseInfo.licenseType === 'Trial') {
        content = 
        [
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Start date</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.startDate}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>End date</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.endDate}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Eligible version</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.eligibleVersion}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>MAC address</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.macAddress}</Col>
        ]
    } else if (customersData.licenseInfo.licenseType === 'Student') {
        content = 
        [
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Start date</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.startDate}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>End date</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.endDate}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Eligible version</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.eligibleVersion}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>MAC address</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.macAddress}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Modules</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.modules}</Col>,
            <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>Course code</Col>,
            <Col span={15} className='tViewRowCell'>{customersData.licenseInfo.courseCode}</Col>,
        ]
    } 
    return (
        <div style={{marginTop: '2rem'}}>
            <Row className='tViewRowHeader'>
                   License Information
                </Row>
                <Row className='tViewRow'>
                  <Col span={9}  className='tViewRowCell' style={{fontWeight: '500'}}>License Type</Col>
                  <Col span={15} className='tViewRowCell' style={{display: 'flex', justifyContent: 'space-between'}}>
                      <span>{customersData.licenseInfo.licenseType}</span>
                </Col>
                  {content}
                </Row>
                <Row>
                    <Button style={{borderRadius: '7px', backgroundColor: '#008acd', color: '#fff', marginRight: '1rem'}}>Request Trial License</Button>
                    <Button style={{borderRadius: '7px', backgroundColor: '#008acd', color: '#fff', marginRight: '1rem', marginBottom: '1rem'}}>Request Student License</Button>
                    <Input placeholder='Please Input Your Course Code' />
                </Row>
        </div>
    )
}

export default CustomerLicenses
