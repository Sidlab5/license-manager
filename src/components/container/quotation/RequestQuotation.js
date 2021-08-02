import React from 'react';
import { Button, Select, Form, Input, Checkbox } from 'antd';

const RequestQuotation = () => {
    const [form] = Form.useForm();
    const { Option } = Select;

    return (
        <div  
        style={{ backgroundColor:'#fff', 
        //border:'1px solid #d3d3d3', 
        borderRadius:'5px',padding:'1.5rem', marginTop: '2rem'}}>
            <Form
            //style={{height:'40rem'}}
            name="basic"
            initialValues={{ remember: true }}
            form={form}
            // onFinish={onFinish}
            >

                <Form.Item
                    name="firstName"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your first name',
                    },
                    ]}
                >
                    <Input name="firstName" placeholder='First Name' />
                </Form.Item>

                <Form.Item
                    name="lastName"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your last name',
                    },
                    ]}
                >
                    <Input name="lastName" placeholder='Last Name' />
                </Form.Item>

                <Form.Item
                    name="email" 
                    rules={[
                    {
                    type: 'email',
                    message: 'The input is not valid Email!',
                    },
                    {
                    required: true,
                    message: 'Please input your email',
                    },
                    ]}
                >
                    <Input name="email" placeholder='Email' />
                </Form.Item>

                <Form.Item
                    name="company"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your company/university',
                    },
                    ]}
                >
                    <Input name="company" placeholder='Company/University' />
                </Form.Item>

                <Form.Item
                    name="department"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your Department/Faculty',
                    },
                    ]}
                >
                    <Input name="department" placeholder='Department/Faculty' />
                </Form.Item>

                <Form.Item
                    name="position"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your position',
                    },
                    ]}
                >
                    <Input name="position" placeholder='Position' />
                </Form.Item>

                <Form.Item
                    name="phone"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your phone number',
                    },
                    ]}
                >
                    <Input name="phone" placeholder='Phone' />
                </Form.Item>

                <Form.Item
                    name="address"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your address',
                    },
                    ]}
                >
                    <Input name="address" placeholder='Address' />
                </Form.Item>

                <Form.Item
                    name="state"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your state',
                    },
                    ]}
                >
                    <Input name="state" placeholder='State' />
                </Form.Item>

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
                    placeholder='Country'
                    style={{ width: '100%' }} 
                    optionFilterProp="children"
                    // placeholder='Country'
                    // onChange={handleSelectCountryChange}
                    // onFocus={onFocus}
                    // onBlur={onBlur}
                    // onSearch={onSearch}
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
                    <p style={{fontWeight: '500'}}>Please choose SIDLAB modules of interests: </p>
                <Form.Item>
                    <Checkbox>SIDLAB Acoustics LF</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Checkbox>SIDLAB Acoustics HF</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Checkbox>SIDLAB Flow</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Checkbox>SIDLAB Flow</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Checkbox>SIDLAB Acquisition</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Checkbox>SIDLAB Measurement</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Checkbox>SIDLAB Measurement Rig</Checkbox>
                </Form.Item>
                <p style={{color: '#aaa'}}>For more information about products please visit: <a>https://sidlab.se/products</a></p>
                <Form.Item
                    name="licenseValidity"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your license validity',
                    },
                    ]}
                >
                <Select name='licenseValidity' placeholder='License Validity'>
                    <Option value='Monthly Lease'>
                        Monthly Lease
                    </Option>
                    <Option value='Permanent'>
                        Permanent
                    </Option>
                </Select>
                </Form.Item>
                <p style={{color: '#aaa'}}>Monthly Lease: One month access to all SIDLAB modules, compiled version. Full technical support included.</p>
                <p style={{color: '#aaa'}}>Permanent: lifetime access to the purchased modules. Maintanence subscription is included for one year.</p>
                <Form.Item
                    name="accessToSourceCode"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your access to source code',
                    },
                    ]}
                >
                <Select name='accessToSourceCode' placeholder='Access To Source Code'>
                    <Option value='Full license'>
                        Full license
                    </Option>
                    <Option value='Compiled License'>
                        Compiled License
                    </Option>
                </Select>
                </Form.Item>

                <p style={{color: '#aaa'}}>Full license: Possible access to the MATLAB source codes.</p>
                <p style={{color: '#aaa'}}>Compiled License: No access to the MATLAB source codes.</p>

                <Form.Item
                    name="licenseUse"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your license use',
                    },
                    ]}
                >
                <Select name='licenseUse' placeholder='License Use'>
                    <Option value='Computer Locked'>
                        Computer Locked
                    </Option>
                    <Option value='Floating Network License'>
                        Floating Network License
                    </Option>
                </Select>
                </Form.Item>
                <p style={{color: '#aaa'}}>CPU locked single user license: SIDLAB mau be installed and operate on up two individual computers, provided it is only accessible to, and operate by single license user.</p>
                <p style={{color: '#aaa'}}>Floating Network license: licensed per concurrent user. SIDLAB can be installed on as many machines on the same network (VPN).</p>
                <p style={{color: '#aaa'}}>SIDLAB runs on local computers with the network used only for a license authentìcation.</p>
                <p style={{color: '#aaa'}}>SIDLAB FNL manager is installed on a server and provides this authentication.</p>

                <Form.Item
                    name="numberOfUsers"
                    rules={[
                    {
                    required: true,
                    message: 'Please input the number of users',
                    },
                    ]}
                >
                    <Input name="numberOfUsers" placeholder='Number Of Users' />
                </Form.Item>
                <p>Is this for academic use?</p>
                <Form.Item>
                    <Checkbox>Yes</Checkbox>
                </Form.Item><Form.Item>
                    <Checkbox>No</Checkbox>
                </Form.Item>

                    <Button 
                    style={{paddingRight:'3rem', paddingLeft:'3rem', borderRadius:'5px', backgroundColor: '#008acd'}} 
                    type="primary" htmlType="submit">
                        Submit
                    </Button>
            </Form>
            </div>
    )
}

export default RequestQuotation
