import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token)
  }
  return (
    <div className="login-wrapper">
      <div className="image-wrapper">

      </div>
      <div className="content-wrapper">
        <div className="form-wrapper">
          <div className="login-text">
            <h1>Welcome.</h1>
            <h4>Sign in below to access the dashboard</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-fields">
              <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)}/>
              </label>
              <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
              </label>
            </div>
            <div>
              <button type="submit">Login</button>
              <div className="request">
                <p>Missing your credentials? Request access <a href="#">here</a> from an administrator</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
