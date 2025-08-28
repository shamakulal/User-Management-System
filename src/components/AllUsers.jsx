
import { useState, useEffect } from 'react';
import {
  Table, TableHead, TableCell, TableRow,
  TableBody, Button, styled, Paper, Typography, Box
} from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

const Container = styled(Box)`
  padding: 40px;
  display: flex;
  justify-content: center;
  background: #f9f9f9;
  min-height: 100vh;
`;

const TableWrapper = styled(Paper)`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  border-radius: 12px;
  overflow-x: auto;
`;

const StyledTable = styled(Table)`
  min-width: 1000px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 18px;
    font-weight: bold;
    background-color: #1e1e2f;
    color: #ffffff;
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 16px;
    padding: 12px 8px;
    border-bottom: 1px solid #ddd;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ActionButton = styled(Button)`
  text-transform: none;
  font-size: 14px;
  border-radius: 8px;
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response?.data);
  };

  return (
    <Container>
      <TableWrapper>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: 3, fontWeight: 600 }}>
          👥 All Registered Users
        </Typography>
        <StyledTable>
          <TableHead>
            <THead>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell align="center">Actions</TableCell>
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
                <TableCell align="center">
                  <ActionButton
                    variant="contained"
                    color="primary"
                    sx={{ marginRight: 1 }}
                    component={Link}
                    to={`/edit/${user.id}`}
                  >
                    Edit
                  </ActionButton>
                  <ActionButton
                    variant="contained"
                    color="error"
                    onClick={() => deleteUserData(user.id)}
                  >
                    Delete
                  </ActionButton>
                </TableCell>
              </TRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableWrapper>
    </Container>
  );
};

export default AllUsers;

