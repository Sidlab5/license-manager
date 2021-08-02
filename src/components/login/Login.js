import React, {useState} from 'react';
import {Form, Button, Input, Checkbox} from 'antd';
import { UserOutlined, LockOutlined, SyncOutlined } from '@ant-design/icons';
import icon from '../../assets/SidlabIcon-02.png';
import { useHistory } from "react-router-dom";

import './Login.css';
import SignUp from '../signUp/SignUp';

const Login = (props) => {

    const history = useHistory();
    const [isSignUp, setIsSignUp] = useState(false);

    const onFinish = values => {
        console.log('Success:', values);
      };

      const handleClick = () => {
          history.push('/admin')
          props.handleLogin()
          props.setIsCustomer(false)
      }

      const handleSwitch = () => {
        setIsSignUp(!isSignUp);
      }

    return (
        <div style={{width:'100%', display:'flex'}}>
        <div className='loginWrapper'>
            <img style={{marginBottom:'2rem', width:'5rem'}} src={icon} alt='sidlab'/>
            <div className='loginBox'>
                {isSignUp? <SignUp handleLogin={props.handleLogin} setIsCustomer={props.setIsCustomer} /> : 
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
                        <Input placeholder="Username" />
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
                                Sign In
                            </Button>  
                        </Form.Item>                      

                </Form>
               </div>}
               <div onClick={handleSwitch} style={{display: 'flex', justifyContent: 'center', cursor: 'pointer'}}>
                   <i style={{marginRight: '1rem'}}><SyncOutlined /></i><span>{isSignUp? 'Sign In' : 'Sign Up'}</span>
               </div>
            </div>
        </div>
            <div className='second'></div>
        </div>
    )
}

export default Login
