import React, {useState} from 'react';
import { Button, Input } from 'antd';
import CustomersTableHeader from './customers-table/CustomersTableHeader';
import CustomersTableRow from './customers-table/CustomersTableRow';
import AddCustomerForm from './customers-table/AddCustomerForm';
import UpdateCustomersForm from './customers-table/UpdateCustomerForm';
import CustomerViewTable from './customers-table/CustomerViewTable';
import '../../../App.css'
import CustomerCourseCodes from './customer-codes/CustomerCourseCodes';
import SidlabTable from '../../shared/table/SidlabTable';
import { customersConstants } from './customersConstants';

const Customers = () => {

    const { Search } = Input;

    const [showAddForm, setShowAddForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [editPersonalForm, setEditPersonalForm] = useState()
    const [editLicenseForm, setEditLicenseForm] = useState()
    const [viewCustomer, setViewCustomer] = useState(false)
    const initialFormState = { 
        id: null, 
        name : '',
        email: '',
        organization:'',
        Country:'',
        phone:'',
        licenseInfo: {},
        }
    const [currentCustomer, setCurrentCustomer] = useState(initialFormState)
    const [customersData, setCustomersData] = useState([
        {
            id : 1,
            name : 'John doe',
            email: 'test1@gmail.com',
            organization:'ASU',
            country:'Egypt',
            phone:'01125252525',
            licenseInfo : {
                licenseType: 'CPU',
                renewalDate:'2/11/2020',
                purchaseDate:'2/11/2019',
                subscribtionYears: 1,
                eligibleVersion: 'version.5',
                modules:['module 1, module 2'],
                macAddress:'00-10a-125',
                activationSN:'11a4gnk5',
                // numberOfSeats: 5,
                // numberOfMonths:7,
                codeAccess:'MATLAB'
            }
        },
        {
            id : 2,
            name : 'Samppa Nori',
            email: 'test2@gmail.com',
            organization:'GUC',
            country:'Egypt',
            phone:'01200000555',
            licenseInfo: {
                licenseType:'Trial',
                startDate:'1/1/2019',
                endDate:'1/3/2019',
                eligibleVersion: 'version.4',
                macAddress:'02-10a-12',
            }
        },
        {
            id : 3,
            name : 'Quintin Ed',
            email: 'test3@gmail.com',
            organization:'BUE',
            country:'Egypt',
            phone:'01022152252',
            licenseInfo: {
                licenseType:'Student',
                startDate:'1/1/2019',
                endDate:'1/4/2019',
                eligibleVersion: 'version.4.4',
                macAddress:'02-10a-12',
                modules:['module 1'],
                courseCode:'11wkj90'
            }
        },
        
    ]);

    const handleShowAddForm = () => {
        setShowAddForm(!showAddForm)
    }

    const handleShowEditForm = () => {
        setShowEditForm(!showEditForm)
        setEditPersonalForm(false)
        setEditLicenseForm(false)
    }

    const handleEditPersonalForm = () => {
        setShowEditForm(!showEditForm)
        setEditPersonalForm(true)
    }

    const handleEditLicenseForm = () => {
        setShowEditForm(!showEditForm)
        setEditLicenseForm(true)
    }

    const handleViewCustomer = () => {
        setViewCustomer(!viewCustomer)
    }

    const addCustomer = (customer) => {
      customer.id = customersData.length+1
         setCustomersData([...customersData, customer])
      }

    const deleteCustomer = (id) => {
    setCustomersData(customersData.filter(customer => customer.id !== id))
    }

    const editRow = customer => {
    
    setCurrentCustomer({ 
        id: customer.id, 
        name: customer.name, 
        email: customer.email,
        organization: customer.organization,
        country: customer.country,
        phone: customer.phone,
        licenseInfo: customer.licenseInfo,
    })
    }

    const updateCustomer = (id, updatedCustomer) => {
        setCustomersData(customersData.map(customer => (customer.id === id ? updatedCustomer : customer)))
    }

    let content = null;
    let content1 = null;
    if (showAddForm) {
        content = <AddCustomerForm 
                    addCustomer={addCustomer} 
                    handleShowAddForm={handleShowAddForm}/>
    } else if (showEditForm) {
        content = <UpdateCustomersForm 
                    currentCustomer={currentCustomer} 
                    editPersonalForm={editPersonalForm}
                    editLicenseForm={editLicenseForm}
                    updateCustomer={updateCustomer} 
                    handleShowEditForm={handleShowEditForm}
                    handleViewCustomer={handleViewCustomer}/>
                    
    } else if (viewCustomer) {
    content = <CustomerViewTable 
                currentCustomer={currentCustomer}
                handleEditPersonalForm={handleEditPersonalForm}
                handleViewCustomer={handleViewCustomer}
                handleEditLicenseForm={handleEditLicenseForm}/>
    content1 = <CustomerCourseCodes />
    } else {
        content = [
            <Search
                placeholder="input search text"
                style={{ width: 200, marginBottom:'2rem' }}
            />,   
                <SidlabTable 
                    data={customersData}
                    cols={customersConstants(deleteCustomer, handleViewCustomer, editRow)}
                />,
                <div style={{marginTop: '2rem'}}>
                    <Button type='primary' style={{marginRight: '1rem', borderRadius: '7px', backgroundColor: '#008acd'}} onClick={handleShowAddForm}>Add</Button>
                    <Button type='primary' style={{borderRadius: '7px', backgroundColor: '#008acd'}}>Export</Button>
                </div>
                
        //  <CustomersTableHeader/>,
        //     customersData.map(customer => {
        //         return <CustomersTableRow 
        //                 key={customer.id} 
        //                 id={customer.id}
        //                 customer={customer}
        //                 name={customer.name} 
        //                 email={customer.email} 
        //                 date={customer.licenseInfo}
        //                 editRow={editRow}
        //                 handleShowEditForm={handleShowEditForm}
        //                 deleteCustomer={deleteCustomer}
        //                 handleViewCustomer={handleViewCustomer}
        //                 />})
                    ]
                     }

    return (
        <div style={{display: 'flex'}}>
        <div 
        className='scrolling' 
        style={
            {
                width:'65%',
                paddingTop: '2rem',
                marginRight: '2rem'
           // height:'50rem', overflowY:'scroll'
        }}
        >
            {content}
        </div>
        <div
        className='scrolling' 
        style={
            {
                width:'30%',
                paddingTop: '2rem'
           // height:'50rem', overflowY:'scroll'
        }}>
            {content1}
        </div>
        </div>
    )
}

export default Customers
