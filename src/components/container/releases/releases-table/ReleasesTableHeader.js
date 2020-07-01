import React from 'react';
import {Row, Col} from 'antd';

const ReleasesTableHeader = () => {
    return (

        <Row className='tHeader'>
            <Col className='tHeaderCell' span={7}>Name</Col>
            <Col className='tHeaderCell' span={7}>Release date</Col>
            <Col className='tHeaderCell' span={8}>Notes</Col>
            <Col style={{padding:'5px'}} span={2}>Actions</Col>
        </Row>
    )
}

export default ReleasesTableHeader
