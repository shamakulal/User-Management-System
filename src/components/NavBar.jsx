import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
  background: #111;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

const Tabs = styled(NavLink)(({ theme }) => ({
  color: '#fff',
  marginRight: '20px',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 500,
  position: 'relative',
  padding: '8px 0',
  transition: '0.3s all ease-in-out',

  '&:hover': {
    color: '#90caf9',
  },
  '&.active': {
    color: '#90caf9',
    borderBottom: '2px solid #90caf9',
  },
}));

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Home</Tabs>
        <Tabs to="/all">All Users</Tabs>
        <Tabs to="/add">Add User</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
