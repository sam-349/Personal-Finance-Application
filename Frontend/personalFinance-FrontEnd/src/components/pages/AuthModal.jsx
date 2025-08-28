import React, { useState } from 'react';
import './AuthModal.css';
import axios from 'axios';


const backendUrl = 'http://localhost:5000/api';

const AuthModal = ({ type, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userDetails, setUserDetails] = useState([]);
  const [onError, setOnError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post(`${backendUrl}/auth/${type}`, {
      name,
      email,
      password,
    });
    setUserDetails(response.data);  
    console.log("User details:", userDetails);
    // Successful response
    console.log(`User ${type} successful`, response.data);
    onSuccess(); // Navigate to dashboard
  } catch (err) {
    // Error handling
    setOnError(true);
    if (err.response && err.response.data && err.response.data.message) {
      setErrorMessage(err.response.data.message);
    } else {
      setErrorMessage("An unexpected error occurred");
    }
  }
};

// Fake auth success, trigger callback

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{type === 'login' ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit} className='auth-form'>
          {type === 'register' && (
            <div>
              <label>Name:   </label><br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div>
            <label>Email:</label><br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label><br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="CTA-btn">
            {type === 'login' ? 'Login' : 'Register'}
          </button>
          <button type="button" className="btn close-btn" onClick={onClose}>
            Cancel
          </button>
          {onError && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
