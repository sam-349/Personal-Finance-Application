import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';
// import './Navbar.css';

function Navbar() {
  const [authType, setAuthType] = useState(null); // 'login' or 'signup'
  const navigate = useNavigate();

  const closeModal = () => setAuthType(null);

  const handleSuccess = () => {
    closeModal();
    navigate('/home');
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">FinancePlanner</div>
        <div className="nav-links">
          <a href="#Demo">Demo</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact Us</a>
          <button className="signup btn" onClick={() => setAuthType('register')}>Register</button>
          <button className="login btn" onClick={() => setAuthType('login')}>Login</button>
        </div>
      </div>

      {authType && (
        <AuthModal type={authType} onClose={closeModal} onSuccess={handleSuccess} />
      )}
    </>
  );
}

export default Navbar;
