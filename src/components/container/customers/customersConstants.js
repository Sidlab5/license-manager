import { CloseOutlined, EyeOutlined } from '@ant-design/icons';
import { Popconfirm, Tooltip } from 'antd';
import React from 'react';

export const customersConstants = (deleteCustomer, handleViewCustomer, editRow) => {
    const handleView = (customer) => {
        handleViewCustomer()
        editRow(customer)
    }
  return [
    {
      title: 'Name',
      width:'30%',
      render: (rowData, index) => {
        return <p>{rowData.name}</p>
      },
    },
    {
        title: 'Email',
        width:'30%',
        render: (rowData, index) => {
          return <p>{rowData.email}</p>
        },
      },
    {
    title: 'Renewal Date',
    width:'30%',
    render: (rowData, index) => {
        return <p>{rowData.licenseInfo.renewalDate || rowData.licenseInfo.endDate}</p>
    },      
    },
    {
        title: '',
        width:'10%',
        render: (rowData, index) => {
            return <div>
                 <Tooltip title="view">
                    <EyeOutlined style={{marginRight:'1rem', cursor:'pointer'}} onClick={() => handleView(rowData)} />
                </Tooltip>
                <Tooltip title="delete">
                    <Popconfirm title="Sure to delete?" onConfirm={() => deleteCustomer(rowData.id)}>
                        <CloseOutlined /> 
                    </Popconfirm>
                </Tooltip>
            </div>
        },      
        },
  ]
}
