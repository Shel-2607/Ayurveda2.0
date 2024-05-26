import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import './Login.css';
const Login = () => {
  return (
    <div className="login-container">
      <h2 className="hname">Login</h2>
      <div className="signin-container">
        <SignIn path="/login" routing="path" />
      </div>

    </div>
  );
};

export default Login;
