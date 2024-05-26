import { SignUp } from '@clerk/clerk-react';
import './RegisterDoctor.css';
const RegisterDoctor = () => {
  return (
    
    <div className="login-container">
      <h2 className= "hname">Register as Doctor</h2>
      <SignUp path="/register-doctor" routing="path" />
    </div>
  );
};

export default RegisterDoctor;
