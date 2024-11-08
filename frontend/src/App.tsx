import './App.css';
import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CreateMovie from './pages/CreateMovie';

import { useNavigate } from 'react-router-dom';
import EditMovie from './pages/EditMovie';


function App() {
  //@ts-ignore
  const [token, setToken] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token') || '';
    setToken(storedToken);

    if (!storedToken) {
      navigate('/register');
    } else {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateMovie />} />
        <Route path="/edit/:id" element={<EditMovie />} />
      </Routes>
    </div>
  );
}

export default App;
