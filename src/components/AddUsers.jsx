
import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  styled,
  Box,
  Paper
} from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: ''
};

// Styled wrapper container
const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background: #f5f5f5;
  padding-top: 40px;
`;

const StyledPaper = styled(Paper)`
  padding: 40px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border-radius: 12px;
`;

const StyledFormGroup = styled(FormGroup)`
  & > div {
    margin-top: 25px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
  text-transform: none;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
`;

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate('/all');
  };

  return (
    <Wrapper>
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom fontWeight={600}>
          ➕ Add New User
        </Typography>
        <StyledFormGroup>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={onValueChange} name="name" value={name} />
          </FormControl>
          <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={onValueChange} name="username" value={username} />
          </FormControl>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={onValueChange} name="email" value={email} />
          </FormControl>
          <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={onValueChange} name="phone" value={phone} />
          </FormControl>
          <FormControl>
            <StyledButton variant="contained" color="primary" onClick={addUserDetails}>
              Add User
            </StyledButton>
          </FormControl>
        </StyledFormGroup>
      </StyledPaper>
    </Wrapper>
  );
};

export default AddUser;
