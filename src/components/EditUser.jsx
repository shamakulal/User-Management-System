// 
import { useState, useEffect } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../service/api';

const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: ''
};

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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    await editUser(id, user);
    navigate('/all');
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom fontWeight={600}>
          ✏️ Edit User Info
        </Typography>
        <StyledFormGroup>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input name="name" value={name} onChange={onValueChange} />
          </FormControl>
          <FormControl>
            <InputLabel>Username</InputLabel>
            <Input name="username" value={username} onChange={onValueChange} />
          </FormControl>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input name="email" value={email} onChange={onValueChange} />
          </FormControl>
          <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input name="phone" value={phone} onChange={onValueChange} />
          </FormControl>
          <FormControl>
            <StyledButton variant="contained" color="primary" onClick={editUserDetails}>
              Save Changes
            </StyledButton>
          </FormControl>
        </StyledFormGroup>
      </StyledPaper>
    </Wrapper>
  );
};

export default EditUser;
