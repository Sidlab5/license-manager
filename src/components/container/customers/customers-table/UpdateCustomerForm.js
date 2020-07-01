import React, {useState} from 'react';
import { Form, Input, Button, Select, DatePicker} from 'antd';
import moment from 'moment';


const { Option } = Select;


const UpdateCustomersForm = (props) => {

    const [currentCustomer, setCurrentCustomer] = useState(props.currentCustomer)

    const [form] = Form.useForm();

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const handleInputChange = event => {
        const { name, value } = event.target
        setCurrentCustomer({ ...currentCustomer, [name]: value })
      }

      const handleLicenseInputChange = event => {
        const { name, value } = event.target
        setCurrentCustomer({ ...currentCustomer, licenseInfo: {...currentCustomer.licenseInfo, [name] : value} })
      }

      const handleLicenseMultipleSelectChange = value => {
        setCurrentCustomer({ ...currentCustomer, licenseInfo: {...currentCustomer.licenseInfo, modules : value} })
      }

      const handleLicenseSelectCodeChange = value => {
        setCurrentCustomer({ ...currentCustomer, licenseInfo: {...currentCustomer.licenseInfo, codeAccess : value} })
      }

      const handleSelectYearsChange = value => {
        setCurrentCustomer({ ...currentCustomer, licenseInfo: {...currentCustomer.licenseInfo, subscribtionYears : value} })
      }

      const handleRenewalDateChange = (date,dateString) => {
        setCurrentCustomer({ ...currentCustomer, licenseInfo: {...currentCustomer.licenseInfo, renewalDate : dateString} })
      }

      const handlePurchaseDateChange = (date,dateString) => {
        setCurrentCustomer({ ...currentCustomer, licenseInfo: {...currentCustomer.licenseInfo, purchaseDate : dateString} })
      }

      const handleStartDateChange = (date,dateString) => {
        setCurrentCustomer({ ...currentCustomer, licenseInfo: {...currentCustomer.licenseInfo, startDate : dateString} })
      }

      const handleEndDateChange = (date,dateString) => {
        setCurrentCustomer({ ...currentCustomer, licenseInfo: {...currentCustomer.licenseInfo, endDate : dateString} })
      }

      const onFinish = () => {
        props.updateCustomer(currentCustomer.id ,currentCustomer)
        form.resetFields();
        props.handleShowEditForm()
      }  

      const handleClick = () => {
        props.handleViewCustomer()
      }

      let content

    if (props.editPersonalForm) {
        content = [
            <span style={{fontWeight:'500'}}>Name</span>,
            <Form.Item
                name="name">
                <Input name="name" defaultValue={currentCustomer.name} value={currentCustomer.name} 
                onChange={handleInputChange} />
            </Form.Item>,

            <span style={{fontWeight:'500'}}>Organization</span>,
            <Form.Item
                name="organization">
                <Input name="organization" defaultValue={currentCustomer.organization} value={currentCustomer.organization} onChange={handleInputChange} />
            </Form.Item>,

            <span style={{fontWeight:'500'}}>Country</span>,
            <Form.Item
                name="country">
                <Input name="country" defaultValue={currentCustomer.country} value={currentCustomer.country} 
                onChange={handleInputChange} />
            </Form.Item>,

            <span style={{fontWeight:'500'}}>Phone</span>,
            <Form.Item
                name="phone">
                <Input name="phone"  defaultValue={currentCustomer.phone} value={currentCustomer.phone} 
                onChange={handleInputChange} />
            </Form.Item>,

            <span style={{fontWeight:'500'}}>Email</span>,
            <Form.Item
               name="email" 
                rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid Email!',
                    },
                  ]}>
                <Input name="email" defaultValue={currentCustomer.email} value={currentCustomer.email} onChange={handleInputChange} />
            </Form.Item>
        ]
    } 
    else if (props.editLicenseForm && 
    currentCustomer.licenseInfo.licenseType === 'CPU') {
        content = 
        [
            // <span style={{fontWeight:'500'}}>Renewal date</span>,
            // <Form.Item
            //     name="renewalDate"
            // >
            //     <DatePicker name="renewalDate" 
            //     defaultValue={moment(currentCustomer.licenseInfo.renewalDate, dateFormatList[0])} 
            //     format={dateFormatList}  value={currentCustomer.licenseInfo.renewalDate} 
            //     onChange={handleRenewalDateChange} 
            //     placeholder="" style={{ width: '100%' }}  />
            // </Form.Item>,
            
            <span style={{fontWeight:'500'}}>Purchase date</span>,
            <Form.Item
                name="purchaseDate"
            >
                <DatePicker name="purchaseDate" 
                defaultValue={moment(currentCustomer.licenseInfo.purchaseDate, dateFormatList[0])} 
                format={dateFormatList} value={currentCustomer.licenseInfo.purchaseDate} 
                onChange={handlePurchaseDateChange}
                placeholder="" style={{ width: '100%' }}  />
            </Form.Item>,

             <span style={{fontWeight:'500'}}>Subscription years</span>,
                    <Form.Item
                    name="subscribtionYears"
                    >
                        <Select name="subscribtionYears" defaultValue={currentCustomer.licenseInfo.subscribtionYears} 
                        value={currentCustomer.licenseInfo.subscribtionYears} 
                        style={{ width: '100%' }}
                        onChange={handleSelectYearsChange}>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                        </Select>
                    </Form.Item>,

            <span style={{fontWeight:'500'}}>Eligable Version</span>,
            <Form.Item
                name="eligibleVersion">
                <Input name="eligibleVersion" 
                defaultValue={currentCustomer.licenseInfo.eligibleVersion} 
                value={currentCustomer.licenseInfo.eligibleVersion} 
                onChange={handleLicenseInputChange}/>
            </Form.Item>,

            <span style={{fontWeight:'500'}}>MAC address</span>,
            <Form.Item
                name="macAddress">
                <Input name="macAddress" 
                defaultValue={currentCustomer.licenseInfo.macAddress} value={currentCustomer.licenseInfo.macAddress} 
                onChange={handleLicenseInputChange}/>
            </Form.Item>,

            <span style={{fontWeight:'500'}}>Activation SN</span>,
            <Form.Item
                name="activationSN">
                <Input name="activationSN" 
                defaultValue={currentCustomer.licenseInfo.activationSN} 
                value={currentCustomer.licenseInfo.activationSN} 
                onChange={handleLicenseInputChange}/>
            </Form.Item>,

            <span style={{fontWeight:'500'}}>Code access</span>,
            <Form.Item
            name="codeAccess">
                <Select 
                name="licenseType" 
                style={{ width: '100%' }} 
                defaultValue={currentCustomer.licenseInfo.codeAccess}
                onChange={handleLicenseSelectCodeChange}> 
                    <Option value="Combiled">Combiled</Option>
                    <Option value="MATLAB">MATLAB</Option>
                </Select>
            </Form.Item>,

            <span style={{fontWeight:'500'}}>Purchased modules</span>,
            <Form.Item
                name="modules"
                >
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        defaultValue={[currentCustomer.licenseInfo.modules]}
                        value={[currentCustomer.licenseInfo.modules]}
                        onChange={handleLicenseMultipleSelectChange}
                        >
                            <Option value="Acoustics LF">Acoustics LF</Option>
                            <Option value="Acoustics HF">Acoustics HF</Option>
                            <Option value="Flow">Flow</Option>
                            <Option value="Measurement">Measurement</Option>
                            <Option value="Acquisition">Acquisition</Option>
                    </Select>
            </Form.Item>
        ]
    } 
    else if (props.editLicenseForm && currentCustomer.licenseInfo.licenseType === 'FNL' ) {
            content = 
            [
                // <span style={{fontWeight:'500'}}>Renewal date</span>,
                // <Form.Item
                //     name="renewalDate"
                // >
                //     <DatePicker name="renewalDate" 
                //     defaultValue={moment(currentCustomer.licenseInfo.renewalDate, dateFormatList[0])} 
                //     format={dateFormatList}  value={currentCustomer.licenseInfo.renewalDate} 
                //     onChange={handleRenewalDateChange} 
                //     placeholder="" style={{ width: '100%' }}  />
                // </Form.Item>,
                
                <span style={{fontWeight:'500'}}>Purchase date</span>,
                <Form.Item
                    name="purchaseDate"
                >
                    <DatePicker name="purchaseDate" 
                    defaultValue={moment(currentCustomer.licenseInfo.purchaseDate, dateFormatList[0])} 
                    format={dateFormatList} value={currentCustomer.licenseInfo.purchaseDate} 
                    onChange={handlePurchaseDateChange}
                    placeholder="" style={{ width: '100%' }}  />
                </Form.Item>,

                <span style={{fontWeight:'500'}}>Subscription years</span>,
                <Form.Item
                name="subscribtionYears"
                >
                    <Select name="subscribtionYears" defaultValue={currentCustomer.licenseInfo.subscribtionYears} 
                    value={currentCustomer.licenseInfo.subscribtionYears} 
                    style={{ width: '100%' }}
                    onChange={handleSelectYearsChange}>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                    </Select>
                </Form.Item>,
    
                <span style={{fontWeight:'500'}}>Eligable Version</span>,
                <Form.Item
                    name="eligibleVersion">
                    <Input name="eligibleVersion" 
                    defaultValue={currentCustomer.licenseInfo.eligibleVersion} 
                    value={currentCustomer.licenseInfo.eligibleVersion} 
                    onChange={handleLicenseInputChange}/>
                </Form.Item>,
    
                <span style={{fontWeight:'500'}}>MAC address</span>,
                <Form.Item
                    name="macAddress">
                    <Input name="macAddress" 
                    defaultValue={currentCustomer.licenseInfo.macAddress} value={currentCustomer.licenseInfo.macAddress} 
                    onChange={handleLicenseInputChange}/>
                </Form.Item>,
    
                <span style={{fontWeight:'500'}}>Activation SN</span>,
                <Form.Item
                    name="activationSN">
                    <Input name="activationSN" 
                    defaultValue={currentCustomer.licenseInfo.activationSN} 
                    value={currentCustomer.licenseInfo.activationSN} 
                    onChange={handleLicenseInputChange}/>
                </Form.Item>,
    
                <span style={{fontWeight:'500'}}>Number of Seats</span>,
                <Form.Item
                    name="numberOfSeats">
                    <Input name="numberOfSeats" 
                    defaultValue={currentCustomer.licenseInfo.numberOfSeats} 
                    value={currentCustomer.licenseInfo.numberOfSeats} 
                    onChange={handleLicenseInputChange}/>
                </Form.Item>,
    
                <span style={{fontWeight:'500'}}>Code access</span>,
                <Form.Item
                name="codeAccess">
                    <Select 
                    name="licenseType" 
                    style={{ width: '100%' }} 
                    defaultValue={currentCustomer.licenseInfo.codeAccess}
                    onChange={handleLicenseSelectCodeChange}> 
                        <Option value="Combiled">Combiled</Option>
                        <Option value="MATLAB">MATLAB</Option>
                    </Select>
                </Form.Item>,
    
                <span style={{fontWeight:'500'}}>Purchased modules</span>,
                <Form.Item
                    name="modules"
                    >
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            defaultValue={[currentCustomer.licenseInfo.modules]}
                            value={[currentCustomer.licenseInfo.modules]}
                            onChange={handleLicenseMultipleSelectChange}
                            >
                                <Option value="Acoustics LF">Acoustics LF</Option>
                                <Option value="Acoustics HF">Acoustics HF</Option>
                                <Option value="Flow">Flow</Option>
                                <Option value="Measurement">Measurement</Option>
                                <Option value="Acquisition">Acquisition</Option>
                        </Select>
                </Form.Item>
            ]
        } 
        else if (props.editLicenseForm && currentCustomer.licenseInfo.licenseType === 'Monthly lease' ) {
                content = 
                [
                    <span style={{fontWeight:'500'}}>Renewal date</span>,
                    <Form.Item
                        name="renewalDate"
                    >
                        <DatePicker name="renewalDate" 
                        defaultValue={moment(currentCustomer.licenseInfo.renewalDate, dateFormatList[0])} 
                        format={dateFormatList}  value={currentCustomer.licenseInfo.renewalDate} 
                        onChange={handleRenewalDateChange} 
                        placeholder="" style={{ width: '100%' }}  />
                    </Form.Item>,
                    
                    <span style={{fontWeight:'500'}}>Purchase date</span>,
                    <Form.Item
                        name="purchaseDate"
                    >
                        <DatePicker name="purchaseDate" 
                        defaultValue={moment(currentCustomer.licenseInfo.purchaseDate, dateFormatList[0])} 
                        format={dateFormatList} value={currentCustomer.licenseInfo.purchaseDate} 
                        onChange={handlePurchaseDateChange}
                        placeholder="" style={{ width: '100%' }}  />
                    </Form.Item>,
        
                    <span style={{fontWeight:'500'}}>Eligable Version</span>,
                    <Form.Item
                        name="eligibleVersion">
                        <Input name="eligibleVersion" 
                        defaultValue={currentCustomer.licenseInfo.eligibleVersion} 
                        value={currentCustomer.licenseInfo.eligibleVersion} 
                        onChange={handleLicenseInputChange}/>
                    </Form.Item>,
        
                    <span style={{fontWeight:'500'}}>MAC address</span>,
                    <Form.Item
                        name="macAddress">
                        <Input name="macAddress" 
                        defaultValue={currentCustomer.licenseInfo.macAddress} value={currentCustomer.licenseInfo.macAddress} 
                        onChange={handleLicenseInputChange}/>
                    </Form.Item>,
        
                    <span style={{fontWeight:'500'}}>Activation SN</span>,
                    <Form.Item
                        name="activationSN">
                        <Input name="activationSN" 
                        defaultValue={currentCustomer.licenseInfo.activationSN} 
                        value={currentCustomer.licenseInfo.activationSN} 
                        onChange={handleLicenseInputChange}/>
                    </Form.Item>,
        
                    <span style={{fontWeight:'500'}}>Number of Months</span>,
                    <Form.Item
                        name="numberOfMonths">
                        <Input name="numberOfMonths" 
                        defaultValue={currentCustomer.licenseInfo.numberOfMonths} 
                        value={currentCustomer.licenseInfo.numberOfMonths} 
                        onChange={handleLicenseInputChange}/>
                    </Form.Item>,
        
                    <span style={{fontWeight:'500'}}>Purchased modules</span>,
                    <Form.Item
                        name="modules"
                        >
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                defaultValue={[currentCustomer.licenseInfo.modules]}
                                value={[currentCustomer.licenseInfo.modules]}
                                onChange={handleLicenseMultipleSelectChange}
                                >
                                    <Option value="Acoustics LF">Acoustics LF</Option>
                                    <Option value="Acoustics HF">Acoustics HF</Option>
                                    <Option value="Flow">Flow</Option>
                                    <Option value="Measurement">Measurement</Option>
                                    <Option value="Acquisition">Acquisition</Option>
                            </Select>
                    </Form.Item>
                ]
            } 
    else if (props.editLicenseForm && 
        currentCustomer.licenseInfo.licenseType === 'Trial') {
            content = 
            [
                <span style={{fontWeight:'500'}}>Start date</span>,
                <Form.Item
                    name="startDate"
                >
                    <DatePicker name="startDate" 
                    defaultValue={moment(currentCustomer.licenseInfo.startDate, dateFormatList[0])} 
                    format={dateFormatList}  value={currentCustomer.licenseInfo.startDate} 
                    onChange={handleStartDateChange} 
                    placeholder="" style={{ width: '100%' }}  />
                </Form.Item>,
                
                <span style={{fontWeight:'500'}}>End date</span>,
                <Form.Item
                    name="endDate"
                >
                    <DatePicker name="endDate" 
                    defaultValue={moment(currentCustomer.licenseInfo.endDate, dateFormatList[0])} 
                    format={dateFormatList} value={currentCustomer.licenseInfo.endDate} 
                    onChange={handleEndDateChange}
                    placeholder="" style={{ width: '100%' }}  />
                </Form.Item>,
    
                <span style={{fontWeight:'500'}}>Eligable Version</span>,
                <Form.Item
                    name="eligibleVersion">
                    <Input name="eligibleVersion" 
                    defaultValue={currentCustomer.licenseInfo.eligibleVersion} 
                    value={currentCustomer.licenseInfo.eligibleVersion} 
                    onChange={handleLicenseInputChange}/>
                </Form.Item>,
    
                <span style={{fontWeight:'500'}}>MAC address</span>,
                <Form.Item
                    name="macAddress">
                    <Input name="macAddress" 
                    defaultValue={currentCustomer.licenseInfo.macAddress} value={currentCustomer.licenseInfo.macAddress} 
                    onChange={handleLicenseInputChange}/>
                </Form.Item>,
            ]
        }
    else if (props.editLicenseForm && 
        currentCustomer.licenseInfo.licenseType === 'Student') {
            content = 
            [
                <span style={{fontWeight:'500'}}>Start date</span>,
                <Form.Item
                    name="startDate"
                >
                    <DatePicker name="startDate" 
                    defaultValue={moment(currentCustomer.licenseInfo.startDate, dateFormatList[0])} 
                    format={dateFormatList}  value={currentCustomer.licenseInfo.startDate} 
                    onChange={handleStartDateChange} 
                    placeholder="" style={{ width: '100%' }}  />
                </Form.Item>,
                
                <span style={{fontWeight:'500'}}>End date</span>,
                <Form.Item
                    name="endDate"
                >
                    <DatePicker name="endDate" 
                    defaultValue={moment(currentCustomer.licenseInfo.endDate, dateFormatList[0])} 
                    format={dateFormatList} value={currentCustomer.licenseInfo.endDate} 
                    onChange={handleEndDateChange}
                    placeholder="" style={{ width: '100%' }}  />
                </Form.Item>,
    
                <span style={{fontWeight:'500'}}>Eligable Version</span>,
                <Form.Item
                    name="eligibleVersion">
                    <Input name="eligibleVersion" 
                    defaultValue={currentCustomer.licenseInfo.eligibleVersion} 
                    value={currentCustomer.licenseInfo.eligibleVersion} 
                    onChange={handleLicenseInputChange}/>
                </Form.Item>,
    
                <span style={{fontWeight:'500'}}>MAC address</span>,
                <Form.Item
                    name="macAddress">
                    <Input name="macAddress" 
                    defaultValue={currentCustomer.licenseInfo.macAddress} value={currentCustomer.licenseInfo.macAddress} 
                    onChange={handleLicenseInputChange}/>
                </Form.Item>,

                <span style={{fontWeight:'500'}}>Course code</span>,
                <Form.Item
                    name="courseCode">
                    <Input name="courseCode" 
                    defaultValue={currentCustomer.licenseInfo.courseCode} value={currentCustomer.licenseInfo.courseCode} 
                    onChange={handleLicenseInputChange}/>
                </Form.Item>,

                <span style={{fontWeight:'500'}}>Modules</span>,
                <Form.Item
                    name="modules"
                    >
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            defaultValue={[currentCustomer.licenseInfo.modules]}
                            value={[currentCustomer.licenseInfo.modules]}
                            onChange={handleLicenseMultipleSelectChange}
                            >
                            <Option value="Acoustics LF">Acoustics LF</Option>
                            <Option value="Acoustics HF">Acoustics HF</Option>
                            <Option value="Flow">Flow</Option>
                            <Option value="Measurement">Measurement</Option>
                            <Option value="Acquisition">Acquisition</Option>
                        </Select>
                </Form.Item>
            ]
        }
    return (
        <React.Fragment>
        <div  
        style={{ backgroundColor:'#fff', border:'1px solid #d3d3d3', borderRadius:'5px',
           padding:'1.5rem'
            }}>
        <Form
        //style={{height:'40rem', overflowY:'scroll'}}
            name="basic"
            initialValues={{ remember: true }}
            form={form}
            onFinish={onFinish}>
        {content}
        <Button onClick={handleClick} style={{paddingRight:'3rem', paddingLeft:'3rem', borderRadius:'5px'}} 
        type="primary" htmlType="submit">
                        Update Customer
        </Button>
            <Button style= {{marginLeft:'5px'}} onClick={props.handleShowEditForm}>Cancel</Button>
       
    </Form>
    </div>
       
    </React.Fragment>
    )
}

export default UpdateCustomersForm;

 