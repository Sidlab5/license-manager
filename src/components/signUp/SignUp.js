import React from 'react';
import {Form, Button, Input, Select } from 'antd';
import { UserOutlined, LockOutlined, SyncOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";


const SignUp = (props) => {

    const history = useHistory();

    const onFinish = values => {
        console.log('Success:', values);
      };

      const handleClick = () => {
          history.push('/admin')
          props.handleLogin()
          props.setIsCustomer(true);
      }

    return (
        <div className='loginForm'>
            <Form
            style={{width:'100%'}}
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                >
                <Form.Item
                    name="name"
                    rules={[
                    {
                    required: true,
                    message: 'Please input customer name',
                    },
                    ]}
                    >
                        <Input name="name" placeholder='Name'/>
                    </Form.Item>

                    <Form.Item
                    name="organization"
                    rules={[
                    {
                    required: true,
                    message: 'Please input customer organization name',
                    },
                    ]}
                    >
                        <Input name="organization" placeholder="Organization" />
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
                        style={{ width: '100%' }} 
                        optionFilterProp="children"
                        placeholder='Country'
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

                    <Form.Item
                    name="phone"
                    rules={[
                    {
                    required: true,
                    message: 'Please input customer phone number',
                    },
                    ]}
                    >
                        <Input name="phone" placeholder="Phone" />
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
                    message: 'Please input customer Email!',
                    },
                    ]}
                    >
                        <Input name="email" placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ]}
                    >
                        <Input
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button 
                            style={{width:'100%'}} 
                            onClick={handleClick} type="primary" htmlType="submit" className="login-form-button">
                            Sign Up
                        </Button>  
                    </Form.Item>                      

            </Form>
        </div>
    )
}

export default SignUp
