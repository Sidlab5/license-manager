import React from 'react';
import LogTableHeader from './log-table/LogTableHeader';
import {Button, Input} from 'antd';

const Log = () => {

    const {Search} = Input
    return (
        <div className='scrolling' style={{width:'95%', marginTop:'5rem', height:'50rem', overflowY:'scroll', }}>
             <Search
            placeholder="input search text"
            style={{ width: 200, marginBottom:'1rem' }}
        /> 
            <Button style={{marginLeft:'5px'}}>Export</Button>
            <LogTableHeader/>
        </div>
    )
}

export default Log
