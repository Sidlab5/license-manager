import React, {useState} from 'react';
import styles from './Table.module.css';
import { Col, Row } from 'antd';

const SidlabTable = ({ cols, data, methods}) => {

    const [selectedRowId, setSelectedRowId] = useState(null)


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
                        <Col key={index} className={styles.tHeaderCell} style={{width: headerItem.width, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{headerItem.title}</Col>
                    ))}
            </Row>
                {data.map((item) => (
                    <Row
                        onClick={() => handleClick(item)}  
                        style={{backgroundColor: "#fff", width: '100%'}} 
                        className={styles.unSortedTableRow}>
                        {cols.map((col, key) => (
                            <Col key={key} className={styles.unSortedTableRowCell} style={{width: col.width, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                {col.render(item)}
                            </Col>
                        ))}
                    </Row>
                ))}
            </Row>
    )
}

export default SidlabTable;