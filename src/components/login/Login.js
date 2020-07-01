import React from 'react';
import {Typography, Avatar, Form, Button, Input, Checkbox} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import icon from '../../assets/sidlabicon.png';
import { useHistory } from "react-router-dom";

import './Login.css';

const Login = (props) => {

    const {Title} = Typography
    const history = useHistory();

    const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

      const handleClick = () => {
          history.push('/admin')
          props.handleLogin()
      }

    return (
        <div style={{width:'100%', display:'flex'}}>
        <div className='loginWrapper'>
            <img style={{marginBottom:'2rem', width:'5rem'}} src={icon}/>
            <div className='loginBox'>
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
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                      
                        <Form.Item>
                            <Button 
                                style={{width:'100%'}} 
                                onClick={handleClick} type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>  
                        </Form.Item>                      

                </Form>
               </div>
            </div>
        </div>
            <div className='second'></div>
        </div>
    )
}

export default Login
