import React, {useState} from 'react';
import styles from './Table.module.css';
import { Col, Row } from 'antd';

const SidlabTable = ({ cols, data, methods}) => {

    const [setSelectedRowId] = useState(null)


    const handleClick = (selectedItem) => {
        setSelectedRowId(selectedItem.id)
        if (methods) {
            methods.handleCurrentVariable(selectedItem)
        }
    }

    return (
        <Row style={{width:'100%'}}>
            <Row style={{width:'100%'}} className={styles.tHeader}>
                    {cols.map((headerItem, index) => (
                        <Col key={index} className={styles.tHeaderCell} style={{width: headerItem.width}}>{headerItem.title}</Col>
                    ))}
            </Row>
                {data.map((item) => (
                    <Row
                        onClick={() => handleClick(item)}  
                        // style={{backgroundColor: selectedRowId === item.id ? "#f3f3f3" : "#fff"}} 
                        className={styles.tRow}>
                        {cols.map((col, key) => (
                            <Col key={key} className={styles.tRowCell} style={{width: col.width}}>
                                {col.render(item)}
                            </Col>
                        ))}
                    </Row>
                ))}
            </Row>
    )
}

export default SidlabTable;