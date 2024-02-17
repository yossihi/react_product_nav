import React, { useState } from 'react';
import { registerUser } from './data'; // Replace with the path to your user utility functions


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleRegister = () => {
    const result = registerUser(username, password);

    if (result.success) {
      setRegistrationMessage('Registration successful');
      // Optionally, you can redirect the user to the login page or do something else
    } else {
      setRegistrationMessage(result.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleRegister}>
        Register
      </button>
      {registrationMessage && (
        <div className={`mt-3 alert ${registrationMessage.includes('successful') ? 'alert-success' : 'alert-danger'}`}>
          {registrationMessage}
        </div>
      )}
    </div>
  );
};

export default Register;
