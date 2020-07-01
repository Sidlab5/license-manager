import React, {useState} from 'react';
import { Form, Input, Button, Select, DatePicker} from 'antd';


const AddReleaseForm = (props) => {

    const [form] = Form.useForm();
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const {TextArea} = Input

    const initialFormState = { 
        id: null, 
        name: '',
        date: '',
        note:'',
        }

const [release, setRelease] = useState(initialFormState)

const handleInputChange = event => {
    const { name, value } = event.target
    setRelease({ ...release, [name]: value })
  }

const handleDateChange = (date,dateString) => {
    setRelease({ ...release, date: dateString})
}

const onFinish = () => {
    props.addRelease(release)
    form.resetFields();
    props.handleShowAddForm()
    setRelease(initialFormState)
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
                    message: 'Please input release name',
                    },
                    ]}
                    >
                        <Input name="name" value={release.name} onChange={handleInputChange} />
                    </Form.Item>

                    <span style={{fontWeight:'500'}}>Release date</span>
                        <Form.Item
                        name="date"
                        rules={[
                        {
                        required: true,
                        message: 'Please input release date',
                        },
                        ]}
                        >
                            <DatePicker name="date" value={release.renewalDate} 
                            placeholder="" style={{ width: '100%' }} format='DD/MM/YYYY' 
                            onChange={handleDateChange} />
                        </Form.Item>

                    <span style={{fontWeight:'500'}}>Notes</span>
                    <Form.Item
                    name="note"
                    rules={[
                    {
                    required: true,
                    message: 'Please input release notes',
                    },
                    ]}
                    >
                    <TextArea name="note" value={release.note} onChange={handleInputChange} />
                    </Form.Item>

                        

                        <Button 
                        style={{paddingRight:'3rem', paddingLeft:'3rem', borderRadius:'5px'}} 
                        type="primary" htmlType="submit">
                            Add release
                        </Button>
                </Form>
                </div>
                <div style={{marginTop:'1rem'}}> 
                    <Button onClick={props.handleShowAddForm}>Cancel</Button>
                </div>
            </React.Fragment>
    )
}

export default AddReleaseForm
