import React from 'react';
import { Navbar } from './Components/LandingPage/Navbar';
import { Header } from './Components/LandingPage/Header';
import Features from './Components/LandingPage/Features';
import Pricing from './Components/LandingPage/Pricing';
import About from './Components/LandingPage/About';
import Contact from './Components/LandingPage/ContactUs';
import Trainers from './Components/LandingPage/Trainers';
import Login from './Components/LandingPage/Login';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      {/* <Header/>
      <Features/>
      <Trainers/>
      <Pricing/>
      <About/>
      <Contact/> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

const Home = () =>(
  <div>
      <Navbar/>
      <Header/>
      <Features/>
      <Trainers/>
      <Pricing/>
      <About/>
      <Contact/>
  </div>
)

export default App;
