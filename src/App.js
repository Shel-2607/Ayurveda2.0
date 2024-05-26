import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Goals from './components/Goals';
import Guide from './components/Guide';
import Need from './components/Need';
import About from './components/About';
import DoctorRegistrationForm from './components/DoctorRegistrationForm'; // Import the DoctorRegistrationForm component
import RunApplication from './components/RunApplication';
import RegisterDoctor from './components/RegisterDoctor';
import RegisterPatient from './components/RegisterPatient';
import Login from './components/Login';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/need" element={<Need />} />
          <Route path="/about" element={<About />} />
          <Route path="/register-doctor" element={<RegisterDoctor />} />
          <Route path="/register-patient" element={<RegisterPatient />} />
       
          <Route path="/run-application" element={<RunApplication />} /> {/* Add the new route */}
          <Route path="/login" element={<Login />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
