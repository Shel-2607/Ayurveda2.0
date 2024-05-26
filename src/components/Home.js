import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Home.css';
import ImageSlider from './ImageSlider';
import RegisterDoctor from './RegisterDoctor';
import { withRouter } from 'react-router-dom';


const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDoctorForm, setShowDoctorForm] = useState(false); // State for doctor registration form visibility
  const [showPatientForm, setShowPatientForm] = useState(false); // State for patient registration form visibility
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleDoctorForm = () => {
    setShowDoctorForm(!showDoctorForm); // Toggle doctor form visibility
    setShowPatientForm(false); // Hide patient form when doctor form is toggled
  };

  const togglePatientForm = () => {
    setShowPatientForm(!showPatientForm); // Toggle patient form visibility
    setShowDoctorForm(false); // Hide doctor form when patient form is toggled
  };
  const handleRunApplicationClick = () => {
    navigate('/run-application'); // Navigate to the new page
  };
  const [isRegisterDoctorVisible, setIsRegisterDoctorVisible] = useState(false);

  const toggleRegisterDoctorVisibility = () => {
    setIsRegisterDoctorVisible(!isRegisterDoctorVisible);
  };


  const handleButtonClick2 = () => {
    navigate('/register-doctor');
  };
  const handleButtonClick3 = () => {
    navigate('/register-patient');
  };



  return (
    <div className="home">
      <h2 className="heading">AI-DASD: Dignosis Annavah Strotas Disorder through AI</h2>
      <div className="slider-container">
        <ImageSlider />
      </div>
      <div className={`content ${isVisible ? 'visible' : ''}`}>
        <div className="options">
        <button className={`register-doctor ${isVisible ? 'visible' : ''}`} onClick={handleButtonClick2}>Register as Doctor</button>
       
        <button className={`register-patient ${isVisible ? 'visible' : ''}`} onClick={handleButtonClick3}>Register as Patient</button>
        </div>
        
    
        {showDoctorForm && (
            <div className="form-container">
              <form className="doctor-registration-form">
                <h3>Doctor Registration Form</h3>
                <div className="form-group">
                  <label htmlFor="doctorName">Doctor Name:</label>
                  <input type="text" id="doctorName" name="doctorName" />
                </div>
                <div className="form-group">
                  <label htmlFor="hospitalName">Hospital Name:</label>
                  <input type="text" id="hospitalName" name="hospitalName" />
                </div>
                <div className="form-group">
                  <label htmlFor="doctorName">Mobile No.:</label>
                  <input type="text" id="doctorName" name="doctorName" />
                </div>
                <div className="form-group">
                  <label htmlFor="doctorName">Email id:</label>
                  <input type="text" id="doctorName" name="doctorName" />
                </div>
                
                {/* Add other form fields here */}
                <button type="Login">Login</button>
                
              </form>
            </div>
          )}
          {/* Patient Registration Form */}
        {showPatientForm && (
            <div className="form-container">
              <form className="registration-form">
                <h3>Patient Registration Form</h3>
                <div className="form-group">
                  <label htmlFor="patientName">Patient Name:</label>
                  <input type="text" id="doctorName" name="doctorName" />
                </div>
                <div className="form-group">
                  <label htmlFor="doctorName">Age:</label>
                  <input type="text" id="doctorName" name="doctorName" />
                </div>
                <div className="form-group">
                  <label htmlFor="doctorName">Sex:</label>
                  <input type="text" id="doctorName" name="doctorName" />
                </div>
                <div className="form-group">
                  <label htmlFor="doctorName">Mobile No.:</label>
                  <input type="text" id="doctorName" name="doctorName" />
                </div>
                <div className="form-group">
                  <label htmlFor="doctorName">Email id:</label>
                  <input type="text" id="doctorName" name="doctorName" />
                </div>
                <button type="Login">Login</button>
               
              </form>
            </div>
          )}
          <button className={`register-patient ${isVisible ? 'visible' : ''}`} onClick={handleRunApplicationClick} >Run the Application</button>
    </div>
    </div>
  );
};

export default Home;