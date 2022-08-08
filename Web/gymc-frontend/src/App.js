import React from 'react';
import { Navbar } from './Components/Pages/all/landingPage/Navbar';
import { Header } from './Components/Pages/all/landingPage/Header';
import Features from './Components/Pages/all/landingPage/Features';
import Pricing from './Components/Pages/all/landingPage/Pricing';
import About from './Components/Pages/all/landingPage/About';
import Contact from './Components/Pages/all/landingPage/ContactUs';
import Trainers from './Components/Pages/all/landingPage/Trainers';
import Login from './Components/Pages/all/landingPage/Login';
import Registration from './Components/Pages/all/registrationPage/Registration';
import Sidebar from './Components/Utilities/Sidebar/Sidebar';
import LoginPage from './Components/Pages/all/loginPage/LoginPage';

import TrainerO from './Components/Pages/owner/own_trainers/Trainers';
import AdjustmentsO from './Components/Pages/owner/own_adjustments/Adjustments';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">

        <Routes>

          {/* ALL ROUTES */}
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/sidebar" element={<Sidebar />}></Route>
          <Route path="/signin" element={<LoginPage />}></Route>
          <Route path="/signup" element={<LoginPage />}></Route>

          {/* OWNER ROUTES */}
          <Route path="/trainers" element={<TrainerO />}></Route>
          <Route path="/adjustments" element={<AdjustmentsO />}></Route>

          {/* ADMIN ROUTES */}


          {/* RECEPTIONIST ROUTES */}


          {/* TRAINER ROUTES */}


          {/* TRAINEE ROUTES */}



        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Navbar />
    <Header />
    <Features />
    <Trainers />
    <Pricing />
    <About />
    <Contact />
  </div>
)

export default App;
