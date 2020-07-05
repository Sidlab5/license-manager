import React, {useState} from 'react';
import { Form, Input, Button, Select} from 'antd';


const AddUserForm = (props) => {

    const [form] = Form.useForm();
    const {Option} = Select

    const initialFormState = { 
        id: null, 
        name: '',
        email: '',
        role:'',
        }

const [user, setUser] = useState(initialFormState)

const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

const handleSelectChange = (value) => {
    setUser({ ...user, role: value})
}

const onFinish = () => {
    props.addUser(user)
    form.resetFields();
    props.handleShowAddForm()
    setUser(initialFormState)
  }  

    return (
        <React.Fragment>
            <div  
            style={{ backgroundColor:'#fff', border:'1px solid #d3d3d3', borderRadius:'5px',
            padding:'1.5rem'
            }}>
                <Form
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
                    message: 'Please input user name',
                    },
                    ]}
                    >
                        <Input name="name" value={user.name} onChange={handleInputChange} />
                    </Form.Item>

                    <span style={{fontWeight:'500'}}>Email</span>
                    <Form.Item
                    name="email"
                    rules={[
                    {
                    required: true,
                    message: 'Please input user email',
                    },
                    ]}
                    >
                        <Input name="email" value={user.email} onChange={handleInputChange} />
                    </Form.Item>

                    <span style={{fontWeight:'500'}}>Role</span>
                    <Form.Item
                    name="role"
                    rules={[
                    {
                    required: true,
                    message: 'Please input user role',
                    },
                    ]}
                    >
                    <Select defaultValue="role1" style={{ width: '100%' }} onChange={handleSelectChange}>
                        <Option value="role1">role1</Option>
                        <Option value="role2">role2</Option>
                        <Option value="role3">role3</Option>
                    </Select>
                    </Form.Item>

                        

                        <Button 
                        style={{paddingRight:'3rem', paddingLeft:'3rem', borderRadius:'5px'}} 
                        type="primary" htmlType="submit">
                            Add user
                        </Button>
                </Form>
                </div>
                <div style={{marginTop:'1rem'}}> 
                    <Button onClick={props.handleShowAddForm}>Cancel</Button>
                </div>
            </React.Fragment>
    )
}

export default AddUserForm
