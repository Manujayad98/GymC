import React from 'react';
import { Navbar } from './Components/LandingPage/Navbar';
import { Header } from './Components/LandingPage/Header';
import Features from './Components/LandingPage/Features';
import Pricing from './Components/LandingPage/Pricing';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Features/>
      <Pricing/>
    </div>
  );
}

export default App;
