import React from 'react';

// This is the table constant/settings which needed to render table elements

export const tableConstants = () => {
  return [
    {
      title: 'Name',
      width:'33.33%',
      render: (rowData) => {
        return <span>{rowData.name}</span>;
      },
    },
    {
      title: 'Email',
      width:'33.33%',
      render: rowData => {
        return <span>{rowData.email}</span>;
      },
    },
    {
      title: 'Mobile',
      width:'3.33%',
      render: rowData => {
        return <span>{rowData.mobile}</span>;
      },
    },
    // {
    //   title: '',
    //   width:'9.5%',
    //   render: rowData => {
    //     return <Popconfirm title="Sure to delete?" onConfirm={() => {handleDelete(rowData.id)}}>
    //     <CloseOutlined /> 
    // </Popconfirm>
    //   },
    //},
  ];
};
