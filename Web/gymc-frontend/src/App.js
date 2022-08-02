import React from 'react';
import { Navbar } from './Components/LandingPage/Navbar';
import { Header } from './Components/LandingPage/Header';
import Features from './Components/LandingPage/Features';
import Pricing from './Components/LandingPage/Pricing';
import About from './Components/LandingPage/About'
import ContactUs from './Components/LandingPage/ContactUs'
import Contact from './Components/LandingPage/Contact';
import Trainers from './Components/LandingPage/Trainers';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Trainers/>
      <Pricing />
      <About />
      <ContactUs />
    </div>
  );
}

export default App;
