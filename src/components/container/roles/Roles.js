import React from 'react';
import {Card, Col, Row, Checkbox, Select, Button} from 'antd';

const Roles = () => {

    const {Option} = Select

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }

      function handleChange(value) {
        console.log(`selected ${value}`);
      }

    return (
        <div className='scrolling' style={{width:'100%', marginTop:'5rem', height:'50rem', overflowY:'scroll', }}>
            <Row style={{marginBottom:'1rem'}} gutter={16}>
                <Col className="gutter-row" span={5}>
                    <Select placeholder='Select Role' style={{ width: '100%' }} onChange={handleChange}>
                        <Option value="users">Users</Option>
                        <Option value="customers">Customers</Option>
                        <Option value="releases">Releases</Option>
                        <Option value="generateLicenese">Generate License</Option>
                        <Option value="log">Log</Option>
                    </Select>
                </Col>
                <Col className="gutter-row" style={{display:'flex', justifyContent:'space-between'}} span={5}>
                    <Button>Add</Button>
                    <Button>Update</Button>
                    <Button>Delete</Button>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={4}>
                    <Card size="small" title="Users">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <Checkbox style={{marginLeft:'8px'}} onChange={onChange}>Create</Checkbox>
                            <Checkbox onChange={onChange}>Edit</Checkbox>
                            <Checkbox onChange={onChange}>Delete</Checkbox>
                        </div>
                    </Card>
                </Col>
                <Col className="gutter-row" span={4}>
                    <Card size="small" title="customers">
                         <div style={{display:'flex', flexDirection:'column'}}>
                            <Checkbox style={{marginLeft:'8px'}} onChange={onChange}>Create</Checkbox>
                            <Checkbox onChange={onChange}>Edit</Checkbox>
                            <Checkbox onChange={onChange}>View</Checkbox>
                            <Checkbox onChange={onChange}>Export</Checkbox>
                            <Checkbox onChange={onChange}>Delete</Checkbox>
                        </div>
                    </Card>
                </Col>
                <Col className="gutter-row" span={4}>
                    <Card size="small" title="Releases">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <Checkbox style={{marginLeft:'8px'}} onChange={onChange}>Create</Checkbox>
                            <Checkbox onChange={onChange}>Edit</Checkbox>
                            <Checkbox onChange={onChange}>View</Checkbox>
                            <Checkbox onChange={onChange}>Export</Checkbox>
                            <Checkbox onChange={onChange}>Delete</Checkbox>
                        </div>
                    </Card>                
                </Col>
                <Col className="gutter-row" span={4}>
                    <Card size="small" title="Generate License">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <Checkbox style={{marginLeft:'8px'}} onChange={onChange}>Trial</Checkbox>
                            <Checkbox onChange={onChange}>Student</Checkbox>
                            <Checkbox onChange={onChange}>Perpetual</Checkbox>
                        </div>
                    </Card>                
                </Col>
                <Col className="gutter-row" span={4}>
                    <Card size="small" title="Log">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <Checkbox style={{marginLeft:'8px'}} onChange={onChange}>View</Checkbox>
                            <Checkbox onChange={onChange}>Export</Checkbox>
                        </div>
                    </Card>                
                </Col>
            </Row>
            
        </div>
    )
}

export default Roles
