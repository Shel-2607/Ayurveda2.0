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
          <Route path="/register-doctor" element={<DoctorRegistrationForm />} /> {/* Add a new route for the DoctorRegistrationForm */}
          <Route path="/run-application" element={<RunApplication />} /> {/* Add the new route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
