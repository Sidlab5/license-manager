import React, {useState} from 'react';
import {Button, Input} from 'antd';
import UsersTableHeader from './users-table/UsersTableHeader';
import UsersTableRow from './users-table/UsersTableRow';
import AddUserForm from './users-form/AddUserForm';
import UpdateUserForm from './users-form/UpdateUserForm';
import * as variable from '../../Variables';

const Users = () => {

    const { Search } = Input;

    const [usersData, setUsersData] = useState([
        {
            id: 1,
            name: 'Ahmed',
            email:'test1@gmail.com',
            role:'role1'
        },
        {
            id: 2,
            name: 'Mohamed',
            email:'test2@gmail.com',
            role:'role2'
        },
        {
            id: 3,
            name: 'Nour',
            email:'test3@gmail.com',
            role:'role3'
        },
    ])

    const initialFormState = { 
        id: null, 
        name: '',
        email: '',
        role: ''
        }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const [showAddForm, setShowAddForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)

    const handleShowAddForm = () => {
        setShowAddForm(!showAddForm)
    }

    const handleShowEditForm = () => {
        setShowEditForm(!showEditForm)
    }

    const editRow = user => {
        setCurrentUser({ 
            id: user.id, 
            name: user.name,
            email: user.email,
            role: user.role  
        })
        }
    
        const updateUser = (id, updatedUser) => {
            setUsersData(usersData.map(user => (user.id === id ? updatedUser : user)))
        }

    const addUser = (user) => {
        user.id = usersData.length+1
        setUsersData([...usersData, user])
        }

    const deleteUser = (id) => {
        setUsersData(usersData.filter(user => user.id !== id))
        }

    let content = null 
    if (showAddForm) {
        content = <AddUserForm addUser={addUser} handleShowAddForm={handleShowAddForm}/>
    } 
    else if (showEditForm) {
        content = <UpdateUserForm 
        currentUser={currentUser}
        updateUser={updateUser} 
        handleShowEditForm={handleShowEditForm} />
    }
    else {
        content = [
            <Search
            placeholder="input search text"
            style={{ width: 200, marginBottom:'1rem' }}
        />, 
            <Button onClick={handleShowAddForm} style={{margin:'0 5px'}}>{variable.Add}</Button>,
            <Button>{variable.Export}</Button>,
        <UsersTableHeader/>,
        usersData.map((user) => {
           return <UsersTableRow 
                    id={user.id} 
                    user={user}
                    name={user.name} 
                    email={user.email} 
                    role={user.role}
                    deleteUser={deleteUser}
                    handleShowAddForm={handleShowAddForm}
                    handleShowEditForm={handleShowEditForm}
                    editRow={editRow}/>
        })
        ]
    }

    return (
        <div className='scrolling' style={{width:'65%', marginTop:'5rem', height:'50rem', overflowY:'scroll', }}>
            {content}
        </div>
    )
}

export default Users
