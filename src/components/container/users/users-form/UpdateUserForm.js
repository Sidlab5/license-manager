import React, {useState} from 'react';
import { Form, Input, Button, Select} from 'antd';



const UpdateUserForm = (props) => {

    const [form] = Form.useForm();
    const {Option} = Select


    const [currentUser, setCurrentUser] = useState(props.currentUser)

    const handleInputChange = event => {
        const { name, value } = event.target
        setCurrentUser({ ...currentUser, [name]: value })
      }

    const handleSelectChange = (value) => {
        setCurrentUser({...currentUser, role: value})
    }


    const onFinish = () => {
        props.updateUser(currentUser.id, currentUser)
        form.resetFields();
        props.handleShowEditForm()
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
                    name="name">
                        <Input name="name" defaultValue={currentUser.name} value={currentUser.name} 
                        onChange={handleInputChange} />
                    </Form.Item>

                    <span style={{fontWeight:'500'}}>Email</span>
                    <Form.Item
                    name="email">
                        <Input name="email" defaultValue={currentUser.email} value={currentUser.email} 
                        onChange={handleInputChange} />
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
                    <Select defaultValue={currentUser.role} style={{ width: '100%' }} onChange={handleSelectChange}>
                        <Option value="role1">role1</Option>
                        <Option value="role2">role2</Option>
                        <Option value="role3">role3</Option>
                    </Select>
                    </Form.Item>

                        <Button 
                        style={{paddingRight:'3rem', paddingLeft:'3rem', borderRadius:'5px'}} 
                        type="primary" htmlType="submit">
                            Update release
                        </Button>
                </Form>
                </div>
                <div style={{marginTop:'1rem'}}> 
                    <Button onClick={props.handleShowEditForm}>Cancel</Button>
                </div>
            </React.Fragment>
    )
}

export default UpdateUserForm
