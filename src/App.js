
import './App.css';
import NavBar from './components/NavBar';
import AddUser from './components/AddUsers';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import Home from './components/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;