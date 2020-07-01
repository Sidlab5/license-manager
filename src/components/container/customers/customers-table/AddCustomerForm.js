import React, {useState} from 'react';
import { Form, Input, Button, Select, DatePicker, Typography} from 'antd';






const AddCustomerForm = (props) => {
    const [form] = Form.useForm();
    const {Text} = Typography
    const { Option } = Select;

    const initialFormState = { 
                id: null, 
                name : '',
                email: '',
                organization:'',
                country:'',
                phone: '',
                licenseInfo: {
                    licenseType: '',
                    renewalDate:'',
                    purchaseDate:'',
                    eligibleVersion: '',
                    subscribtionYears:'',
                    courseCode:'',
                    startDate:'',
                    modules:[],
                    macAddress:'',
                    activationSN:'',
                    numberOfSeats: null,
                    numberOfMonths:null,
                    codeAccess:''
                }
                }

    const [customer, setCustomer] = useState(initialFormState)
    const [startDate, setStartDate] = useState(false)
    const [showDependantInput, setShowDependantInput] = useState()

    const handleInputChange = event => {
        const { name, value } = event.target
        setCustomer({ ...customer, [name]: value })
      }

      const handleLicenseInputChange = event => {
        const { name, value } = event.target
        setCustomer({ ...customer, licenseInfo: {...customer.licenseInfo, [name] : value} })
      }

      const handleMultipleSelectChange = value => {
        setCustomer({ ...customer, licenseInfo: {...customer.licenseInfo, modules : value} })
      }

      const handleSelectTypeChange = value => {
          if (value === 'Monthly lease') {
              setCustomer({...customer, 
                modules: {...customer.licenseInfo.modules.push('Acoustics LF', 'Acoustics HF', 'Flow', 'Measurement', 'Acquisition')}})
                setCustomer({ ...customer, licenseInfo: {...customer.licenseInfo, licenseType : value} })
                setShowDependantInput(value)
                
          } else {
        setCustomer({ ...customer, licenseInfo: {...customer.licenseInfo, licenseType : value} })
        setShowDependantInput(value)}
      }

      const handleSelectCountryChange = value => {
          setCustomer({...customer, country: value })
      }

      const handleSelectCodeChange = value => {
        setCustomer({...customer, licenseInfo: {...customer.licenseInfo, codeAccess : value} })
    }

      const handleSelectYearsChange = value => {
        setCustomer({ ...customer, licenseInfo: {...customer.licenseInfo, subscribtionYears : value} })
      }

      const handlePurchaseDateChange = (date,dateString) => {
        setCustomer({ ...customer,  licenseInfo: {...customer.licenseInfo, purchaseDate : dateString} })
      }

      const handleStartDateChange = (date,dateString) => {
          setCustomer({...customer,  licenseInfo: {...customer.licenseInfo, startDate : dateString}})
      }

      const onBlur = () => {
        console.log('blur');
      }
      
      const onFocus = () => {
        console.log('focus');
      }
      
      const onSearch = (val) => {
        console.log('search:', val);
      }

      const onFinish = () => {
        props.addCustomer(customer)
        form.resetFields();
        props.handleShowAddForm()
        setCustomer(initialFormState)
      }  

      console.log(startDate)

      let content 

      if (showDependantInput === 'CPU') {
          content = 
          [
            <span style={{fontWeight:'500'}}>MATLAB files</span>,
            <Form.Item
            name="codeAccess"
            rules={[
            {
            required: true,
            message: 'Please input customer Code access',
            },
            ]}
            >
                <Select name="licenseType" style={{ width: '100%' }} 
                onChange={handleSelectCodeChange}> 
                    <Option value="Combiled">Combiled</Option>
                    <Option value="MATLAB">MATLAB</Option>
                </Select>
            </Form.Item>,

                    <span style={{fontWeight:'500'}}>Purchased modules</span>,
                    <Form.Item
                    name="purchasedmodule"
                    >
                        <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        onChange={handleMultipleSelectChange}
                        >
                            <Option value="Acoustics LF">Acoustics LF</Option>
                            <Option value="Acoustics HF">Acoustics HF</Option>
                            <Option value="Flow">Flow</Option>
                            <Option value="Measurement">Measurement</Option>
                            <Option value="Acquisition">Acquisition</Option>
                        </Select>
                    </Form.Item>
          ]
      } else if (showDependantInput === 'FNL') {
        content = 
        [
          <span style={{fontWeight:'500'}}>Code access</span>,
          <Form.Item
          name="codeAccess"
          rules={[
          {
          required: true,
          message: 'Please input customer Code access',
          },
          ]}
          >
              <Select name="licenseType" style={{ width: '100%' }} 
              onChange={handleSelectCodeChange}> 
                  <Option value="Combiled">Combiled</Option>
                  <Option value="MATLAB">MATLAB</Option>
              </Select>
          </Form.Item>,

          <span style={{fontWeight:'500'}}>Number of seats</span>,
                  <Form.Item
                  name="numberOfSeats"
                  rules={[
                  {
                  required: true,
                  message: 'Please input customer number of seats',
                  },
                  ]}
                  >
                      <Input name="numberOfSeats" value={customer.licenseInfo.numberOfSeats} 
                      onChange={handleLicenseInputChange} />
                  </Form.Item>,

                  <span style={{fontWeight:'500'}}>Purchased modules</span>,
                  <Form.Item
                  name="purchasedmodule"
                  >
                      <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      onChange={handleMultipleSelectChange}
                      >
                          <Option value="Acoustics LF">Acoustics LF</Option>
                          <Option value="Acoustics HF">Acoustics HF</Option>
                          <Option value="Flow">Flow</Option>
                          <Option value="Flow">Measurement</Option>
                          <Option value="Flow">Acquisition</Option>
                      </Select>
                  </Form.Item>
        ]
      } else if (showDependantInput === 'Monthly lease') {
        content = 
        [
                    <span style={{fontWeight:'500'}}>Number of months</span>,
                    <Form.Item
                    name="numberOfMonths"
                    rules={[
                    {
                    required: true,
                    message: 'Please input customer number of months',
                    },
                    ]}
                    >
                        <Input name="numberOfMonths" value={customer.licenseInfo.numberOfMonths} 
                        onChange={handleLicenseInputChange} />
                    </Form.Item>
        ]
      }

      const handleGenerateSN = () => {
        setCustomer({ ...customer, licenseInfo: {...customer.licenseInfo, activationSN : 'a8hf8f-adf9-hkk'} })
      }

console.log(customer)
    return (
        <React.Fragment>
            {/* <LeftCircleOutlined style={{marginBottom:'1rem', fontSize:'2.5rem'}} onClick={props.handleShowAddForm} /> */}
            <div  
            style={{ backgroundColor:'#fff', 
            //border:'1px solid #d3d3d3', 
            borderRadius:'5px',padding:'1.5rem'}}>
                <Form
                //style={{height:'40rem'}}
                name="basic"
                initialValues={{ remember: true }}
                form={form}
                onFinish={onFinish}
                >

                    <span style={{fontWeight:'500'}}>Name</span>
                    <Form.Item
                    name="name"
                    rules={[
                    {
                    required: true,
                    message: 'Please input customer name',
                    },
                    ]}
                    >
                        <Input name="name"  value={customer.name} onChange={handleInputChange} />
                    </Form.Item>

                    <span style={{fontWeight:'500'}}>Organization</span>
                    <Form.Item
                    name="organization"
                    rules={[
                    {
                    required: true,
                    message: 'Please input customer organization name',
                    },
                    ]}
                    >
                        <Input name="organization" value={customer.organization} onChange={handleInputChange} />
                    </Form.Item>

                    <span style={{fontWeight:'500'}}>Country</span>
                    <Form.Item
                    name="country"
                    rules={[
                    {
                    required: true,
                    message: 'Please input customer country',
                    },
                    ]}
                    >
                        <Select 
                        showSearch
                        name="country" 
                        style={{ width: '100%' }} 
                        optionFilterProp="children"
                        onChange={handleSelectCountryChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }> 
                            <option value="Egypt">Egypt</option>
                            <option value="Algeria">Algeria</option>
                            <option value="China">China</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antartica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                            <option value="Botswana">Botswana</option>
                        </Select>
                    </Form.Item>

                    <span style={{fontWeight:'500'}}>Phone</span>
                    <Form.Item
                    name="phone"
                    rules={[
                    {
                    required: true,
                    message: 'Please input customer phone number',
                    },
                    ]}
                    >
                        <Input name="phone" value={customer.phone} onChange={handleInputChange} />
                    </Form.Item>

                    <span style={{fontWeight:'500'}}>Email</span>
                    <Form.Item
                    name="email" 
                    rules={[
                    {
                    type: 'email',
                    message: 'The input is not valid Email!',
                    },
                    {
                    required: true,
                    message: 'Please input customer Email!',
                    },
                    ]}
                    >
                        <Input name="email" value={customer.email} onChange={handleInputChange} />
                    </Form.Item>

                    <span style={{fontWeight:'500'}}>Purchase date</span>
                    <Form.Item
                    name="purchaseDate"
                    rules={[
                    {
                    required: true,
                    message: 'Please input customer purchase date',
                    },
                    ]}
                    >
                        <DatePicker name="purchaseDate" value={customer.licenseInfo.purchaseDate} 
                        placeholder="" style={{ width: '100%' }} format='DD/MM/YYYY' 
                        onChange={handlePurchaseDateChange} />
                    </Form.Item>

                    <span style={{fontWeight:'500'}}>Subscription years</span>
                    <Form.Item
                    name="subscribtionYears"
                    rules={[
                    {
                    required: true,
                    message: 'Please input customer Subscription years',
                    },
                    ]}
                    >
                        <Select name="subscribtionYears" value={customer.licenseInfo.subscribtionYears} 
                        style={{ width: '100%' }}
                        onChange={handleSelectYearsChange}>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                        </Select>
                    </Form.Item>

                    <span style={{fontWeight:'500'}}>Eligible version</span>
                    <Form.Item
                    name="eligibleVersion">
                        <Input name="eligibleVersion" value={customer.licenseInfo.eligibleVersion} 
                        onChange={handleLicenseInputChange} />
                    </Form.Item>
                    
                    <span style={{fontWeight:'500'}}>License type</span>
                    <Form.Item
                    name="licenseType"
                    rules={[
                    {
                    required: true,
                    message: 'Please input customer license type',
                    },
                    ]}
                    >
                        <Select name="licenseType" style={{ width: '100%' }} 
                        onChange={handleSelectTypeChange}> 
                            <Option value="CPU">CPU</Option>
                            <Option value="FNL">FNL</Option>
                            <Option value="Monthly lease">Monthly lease</Option>
                        </Select>
                    </Form.Item>

                    {content}

                        <Button 
                        onClick={handleGenerateSN}
                        style={{paddingRight:'3rem', paddingLeft:'3rem', borderRadius:'5px', marginRight:'.7rem'}} 
                        type="primary">
                            Generate SN
                        </Button>
                            <Text style={{marginLeft:'1rem'}}>{customer.licenseInfo.activationSN}</Text>
                        <br/><br/>

                        <span style={{fontWeight:'500'}}>Start date</span>
                        <Form.Item
                        name="startDate"
                        rules={[
                        {
                        required: true,
                        message: 'Please input course code start date',
                        },
                        ]}
                        >
                            <DatePicker name="purchaseDate" value={customer.licenseInfo.startDate} 
                            placeholder="" style={{ width: '100%' }} format='DD/MM/YYYY' 
                            onChange={handleStartDateChange} />
                        </Form.Item>

                        <Button onClick={() => setStartDate(true)} 
                        style={{paddingRight:'3rem', paddingLeft:'3rem', borderRadius:'5px'}} 
                        type="primary" >
                            Generate course Code
                        </Button>
                <br/><br/>
                        <Button 
                        style={{paddingRight:'3rem', paddingLeft:'3rem', borderRadius:'5px'}} 
                        type="primary" htmlType="submit">
                            Add Customer
                        </Button>
                        <Button style={{marginLeft:'1rem'}} onClick={props.handleShowAddForm}>Cancel</Button>
                </Form>
                </div>
     </React.Fragment>
    )
}

export default AddCustomerForm;

