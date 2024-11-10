//AllUsers.jsx
import { useState, useEffect } from 'react';

import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';//for navigation to user editing page.

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const AllUsers = () => {
    const [users, setUsers] = useState([]);//users will hold the list of users fetched from the server.
    
    useEffect(() => {
        getAllUsers();//fetch the user data from the server 
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();//refreshes the user list by calling getAllUsers.
    }

    const getAllUsers = async () => { //Fetches the list of users from the server
        let response = await getUsers();//updates the users state with the response data.
        setUsers(response?.data);//This ensures that if response is undefined 
        //or doesn't contain a data property, 
        //JavaScript won’t throw an error.
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users?.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;