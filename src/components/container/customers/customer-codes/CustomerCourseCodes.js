import React, {useState} from 'react';
import { Button, Row, Modal, DatePicker, Form, Input } from 'antd';
import SidlabTable from '../../../shared/table/SidlabTable'
import { codesConstants } from './codesConstants';

const CustomerCourseCodes = () => {
    const [codes, setCodes] = useState([
        {id: 1, code: 'bg45', startDate: '22/5/2021', endDate: '30/5/2021'},
        {id: 2, code: 'dvf55', startDate: '2/6/2022', endDate: '30/6/2022'},
        {id: 3, code: '214', startDate: '6/9/2019', endDate: '30/9/2019'},
    ]);
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return (
        <>
        <Row className='tViewRowHeader'>
            Codes
        </Row>
        <div style={{backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px #ddd', padding: '1rem', width: '100%', marginTop: '1rem'}}>
           {/* <span style={{fontWeight: '500', fontSize: '1.5rem'}}>Codes</span> */}
           <div style={{paddingTop: '2rem', width: '100%'}}>
           <SidlabTable
                data={codes} 
                cols={codesConstants()}
           />
           </div>
           <Modal title="Choose Your Start Date" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form.Item
                    name="startDate"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your start date',
                    },
                    ]}
                    >
                        <DatePicker name="startDate" placeholder='Start date'
                            style={{ width: '100%' }} format='DD/MM/YYYY' 
                        />
                </Form.Item>
                <Form.Item
                    name="numberOfDays"
                    rules={[
                    {
                    required: true,
                    message: 'Please input the number of days',
                    },
                    ]}
                    >
                        <Input name="numberOfDays" placeholder='Number of days' />
                    </Form.Item>
            </Modal>
           <center>
            <Button 
                style={{marginTop: '2rem', display: 'flex', justifyContent: 'space-between', borderRadius: '7px'}} type='primary'
                onClick={showModal}>
                    Generate Course Code
                </Button>
           </center>
        </div>
        </>
    )
}

export default CustomerCourseCodes
