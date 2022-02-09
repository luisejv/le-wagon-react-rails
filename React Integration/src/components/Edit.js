import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Edit({ current, edit, setEdit, refresh }) {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initData();
    }, [current])

    const initData = async () => {
        var url = process.env.REACT_APP_API_URL + '/' + current.id;

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(url, requestOptions);
        const json = await response.json();
        setName(json.name)
        setAddress(json.address)
        setLoading(false);
    }


    const handleSubmit = async () => {
        var url = process.env.REACT_APP_API_URL + '/' + current.id;

        const body = { name, address }

        console.log(body)

        var requestOptions = {
            method: 'PATCH',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                'X-User-Email': process.env.REACT_APP_USER_EMAIL,
                'X-User-Token': process.env.REACT_APP_USER_TOKEN
            },
            body: JSON.stringify(body)
        };

        const response = await fetch(url, requestOptions);
        setEdit(false);
        refresh();
    }

    return (
        <div>
            {loading ? <>Fetching data...</> : <>
                <Modal
                    open={edit}
                    onClose={() => setEdit(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Edit Restaurant ID: {current.id}
                        </Typography>
                        <TextField
                            style={{ marginTop: '25px', width: '93%' }}
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <br />
                        <TextField
                            style={{ marginTop: '25px', width: '93%' }}
                            id="outlined-basic"
                            label="Address"
                            variant="outlined"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} />
                        <br />
                        <Button
                            variant="outlined"
                            style={{ marginTop: '22px', width: '93%' }}
                            onClick={handleSubmit}
                        >Save Changes</Button>
                    </Box>
                </Modal>
            </>}
        </div>
    );
}
