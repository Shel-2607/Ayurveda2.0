import { SignUp } from '@clerk/clerk-react';
import './RegisterPatient.css';
const RegisterPatient = () => {
  return (
    
    <div className="login-container">
      <h2 className="hname">Register as Patient</h2>
      <SignUp path="/register-patient" routing="path" />
    </div>
  );
};

export default RegisterPatient;
