import React from 'react';
import { Navbar } from './Components/Pages/LandingPage/Navbar';
import { Header } from './Components/Pages/LandingPage/Header';
import Features from './Components/Pages/LandingPage/Features';
import Pricing from './Components/Pages/LandingPage/Pricing';
import About from './Components/Pages/LandingPage/About';
import Contact from './Components/Pages/LandingPage/ContactUs';
import Trainers from './Components/Pages/LandingPage/Trainers';
import Login from './Components/Pages/LandingPage/Login';
import Registration from './Components/Pages/RegistrationPage/Registration';
import Sidebar from './Components/Utilities/Sidebar/Sidebar';
import Table1 from './Components/Utilities/Tables/Table1';
import Table2 from './Components/Utilities/Tables/Table2';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

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
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/sidebar" element={<Sidebar />}></Route>
          <Route path="/table1" element={<Table1 />}></Route>
          <Route path="/table2" element={<Table2 />}></Route>
          <Route path="/signin" element={<LoginPage />}></Route>
          <Route path="/signup" element={<LoginPage />}></Route>
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
