import React, {useContext, useState} from 'react';
import {Form, Button, Input, Checkbox} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import icon from '../../../assets/sidlabicon.png';
import { useHistory } from "react-router-dom";
import LangContext from '../../LangContext';
import {connect} from 'react-redux';
import { login } from '../../../actions/Profile';
import {Base} from '../../API/Base';
import './Login.css';

const Login = (props) => {

    const lang = useContext(LangContext)

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
    })

    const history = useHistory();
    const formData = new FormData();
        formData.append("username", userInfo.username);
        formData.append("password", userInfo.password);
        formData.append("grant_type", userInfo.grant_type);

    const onFinish = () => {
        // Base.post('users/login', userInfo)
        // .then((res) => {
        //     return (
        //        // setLocalStorage('token', res.data.access_token), 
        //         console.log(res.data)
        //     )

        // } ).catch((err) => console.log(err))
        props.dispatch(login(userInfo));

        history.push('/home')
      };

    //   const handleClick = () => {
    //       history.push('/admin')
    //      props.handleLogin()
    //   }
    return (
        <div style={{width:'100%', display:'flex'}}>
        <div className='loginWrapper'>
            <img style={{marginBottom:'2rem', width:'5rem'}} src={icon} alt=""/>
            <div className='loginBox'>
               <div className='loginForm'>
               <Form
               style={{width:'100%'}}
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name='email'
                        rules={[
                        {
                            type: 'email',
                            required: true,
                            message: lang.userNameReq,
                        },
                        ]}
                    >
                        <Input 
                            prefix={<UserOutlined className="site-form-item-icon" />} 
                            type= 'email'
                            onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}
                            placeholder={lang.userNamePlaceholder} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: lang.passwordReqMsg,
                        },
                        ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}

                        placeholder={lang.passwordPlaceholder}
                        />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" >
                            <Checkbox>{lang.rememberMeCheck}</Checkbox>
                        </Form.Item>
                      
                        <Form.Item>
                            <Button 
                            // onClick={handleClick}
                                style={{width:'100%'}} 
                                type="primary" htmlType="submit" className="login-form-button">
                                {lang.loginBtn}
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

export default connect()(Login)
