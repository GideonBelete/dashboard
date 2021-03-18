import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './App.css';

function App() {
    const [token, setToken] = useState();
    if(!token) {
      return <Login setToken={setToken} />
    }
    return (
      <div className="wrapper">
        <Router>
          <Sidebar />
          <Route path='/' component={Main} />
        </Router>
      </div>
    )
}

export default App
