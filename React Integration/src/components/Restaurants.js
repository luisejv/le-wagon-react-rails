import React, { useState, useEffect } from 'react'
//.....
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
//....
import RestaurantsTable from './RestaurantsTable';
import Edit from './Edit';
import Create from './Create';

const Restaurants = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    //....
    const [current, setCurrent] = useState([]);
    //....
    const [edit, setEdit] = useState(false);
    const [create, setCreate] = useState(false);

    useEffect(() => {
        initData()
    }, [])

    const initData = async () => {
        setLoading(true);
        var url = process.env.REACT_APP_API_URL;

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            const json = await response.json();
            console.log(json)
            setData(json);
            setLoading(false);
        } else {
            setError(true);
            setLoading(false);
        }
    }

    const handleShow = (restaurant) => {
        console.log(restaurant);
    }

    const handleEdit = (restaurant) => {
        console.log(restaurant);
        setCurrent(restaurant);
        setEdit(true);
    }

    const handleDelete = async (restaurant) => {

        var url = process.env.REACT_APP_API_URL + '/' + restaurant.id;

        var requestOptions = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'X-User-Email': process.env.REACT_APP_USER_EMAIL,
                'X-User-Token': process.env.REACT_APP_USER_TOKEN
            },
            redirect: 'follow'
        };

        const response = await fetch(url, requestOptions);

        initData();
    }


    return (
        <div>
            <h1 className='main-title'>
                Restaurants Finder 🔍
            </h1>
            <RestaurantsTable
                data={data}
                handleShow={handleShow}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <Edit edit={edit} setEdit={setEdit} current={current} refresh={initData} />
            <Create create={create} setCreate={setCreate} refresh={initData} />

            <Fab
                color="primary"
                aria-label="add"
                style={{ position: 'fixed' }}
                sx={{ bottom: 16, right: 16, zIndex: '100' }}
                onClick={() => setCreate(true)}>
                <AddIcon />
            </Fab>

        </div>
    )
}

export default Restaurants;
