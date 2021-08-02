import React from 'react';

export const codesConstants = () => {
  return [
    {
      title: 'Code',
      width:'30%',
      render: (rowData, index) => {
        return <p>{rowData.code}</p>
      },
    },
    {
        title: 'Start Date',
        width:'35%',
        render: (rowData, index) => {
          return <p>{rowData.startDate}</p>
        },
      },
    {
    title: 'End Date',
    width:'35%',
    render: (rowData, index) => {
        return <p>{rowData.endDate}</p>
    },      
    },
  ]
}
