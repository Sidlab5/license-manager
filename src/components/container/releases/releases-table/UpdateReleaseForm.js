import React, {useState} from 'react';
import { Form, Input, Button, Select, DatePicker} from 'antd';
import moment from 'moment'



const UpdateReleaseForm = (props) => {

    const [form] = Form.useForm();
    const {TextArea} = Input

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const [currentRelease, setCurrentRelease] = useState(props.currentRelease)

    console.log(currentRelease.note)

    const handleInputChange = event => {
        const { name, value } = event.target
        setCurrentRelease({ ...currentRelease, [name]: value })
      }

    const handleDateChange = (date, dateString) => {
        setCurrentRelease({...currentRelease, date: dateString})
    }


    const onFinish = () => {
        props.updateRelease(currentRelease.id, currentRelease)
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
                        <Input name="name" defaultValue={currentRelease.name} value={currentRelease.name} 
                        onChange={handleInputChange} />
                    </Form.Item>

                    <span style={{fontWeight:'500'}}>Release date</span>
                        <Form.Item
                        name="date">
                            <DatePicker name="date" value={currentRelease.date}
                              defaultValue={moment(currentRelease.date, dateFormatList[0])} 
                              format={dateFormatList}
                            placeholder="" style={{ width: '100%' }}
                            onChange={handleDateChange} />
                        </Form.Item>

                    <span style={{fontWeight:'500'}}>Notes</span>
                        <TextArea name="note" style={{marginBottom:'2.4rem'}} defaultValue={currentRelease.note} rows={3} value={currentRelease.note}
                    onChange={handleInputChange}>{currentRelease.note}</TextArea>

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

export default UpdateReleaseForm
