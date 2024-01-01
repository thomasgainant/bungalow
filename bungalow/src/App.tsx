import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

import { config } from './config';
import './App.css'

import { Messages } from './pages/Messages';
import { RegistrationForm } from './pages/Registration';
import { Parameters } from './pages/Parameters';

function App(){
  const [state, setState] = useState('');

  const getState = async () => {
    try {
      // Implement reset password logic here
      const response = await axios.get(config.backend+"state");
      setState(response.data);
    } catch (error) {
      console.error('Failed:', error);
    }
  };

  useEffect(() => {
    getState();
  }, []);

  return (
  <Router>
    <div className="app">
      <nav id="menu">
        <ul>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/parameters">Parameters</Link>
          </li>
        </ul>
      </nav>

      <div id="main">
        <Routes>
          <Route path="/messages" element={<Messages setState={setState} subs={state.subs}/>}/>
          <Route path="/registration" element={<RegistrationForm/>}/>
          <Route path="/parameters" element={<Parameters/>}/>
        </Routes>
      </div>
    </div>
  </Router>
  );
};

export default App
