import React, {useState} from 'react';
import {Button, Input} from 'antd';
import ReleasesTableHeader from './releases-table/ReleasesTableHeader';
import ReleasesTableRow from './releases-table/ReleasesTableRow';
import AddReleaseForm from './releases-table/AddReleaseForm';
import UpdateReleaseForm from './releases-table/UpdateReleaseForm';

const Releases = () => {

    const { Search } = Input;

    const [releasesData, setReleasesData] = useState([
        {
            id: 1,
            name: 'version.4',
            date:'1/1/2015',
            note:'test1 test1 test1 test1 test1 test1 test1 test1 test1 test1'
        },
        {
            id: 2,
            name: 'version.4.4',
            date:'1/1/2018',
            note:'test2 test2 test2 test2 test2 test2 test2 test2 test2 test2'
        },
        {
            id: 3,
            name: 'version.5',
            date:'1/1/2020',
            note:'test3 test3 test3 test3 test3 test3 test3 test3 test3 test3'
        },
    ])

    const initialFormState = { 
        id: null, 
        name: '',
        date: '',
        note: ''
        }
    const [currentRelease, setCurrentRelease] = useState(initialFormState)

    const [showAddForm, setShowAddForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)

    const handleShowAddForm = () => {
        setShowAddForm(!showAddForm)
    }

    const handleShowEditForm = () => {
        setShowEditForm(!showEditForm)
    }

    const editRow = release => {
        setCurrentRelease({ 
            id: release.id, 
            name: release.name,
            date: release.date,
            note: release.note  
        })
        }
    
        const updateRelease = (id, updatedRelease) => {
            setReleasesData(releasesData.map(release => (release.id === id ? updatedRelease : release)))
        }

    const addRelease = (release) => {
        release.id = releasesData.length+1
        setReleasesData([...releasesData, release])
        }

    const deleteRelease = (id) => {
        setReleasesData(releasesData.filter(release => release.id !== id))
        }

    let content = null 
    if (showAddForm) {
        content = <AddReleaseForm addRelease={addRelease} handleShowAddForm={handleShowAddForm}/>
    } else if (showEditForm) {
        content = <UpdateReleaseForm 
        currentRelease={currentRelease}
        updateRelease={updateRelease} 
        handleShowEditForm={handleShowEditForm} />
    }
    else {
        content = [
            <Search
            placeholder="input search text"
            style={{ width: 200, marginBottom:'1rem' }}
        />, 
            <Button onClick={handleShowAddForm} style={{margin:'0 5px'}}>Add</Button>,
            <Button>Export</Button>,
        <ReleasesTableHeader/>,
        releasesData.map((release) => {
           return <ReleasesTableRow 
                    id={release.id} 
                    release={release}
                    name={release.name} 
                    date={release.date} 
                    note={release.note}
                    deleteRelease={deleteRelease}
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

export default Releases
