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

// RECEPTIONIST
import AnalyticsR from './Components/Pages/receptionist/recept_analytics/Analytics';
import AnnouncementsR from './Components/Pages/receptionist/recept_announcements/Announcements';
import DashboardR from './Components/Pages/receptionist/recept_dashboard/Dashboard';
import EquipmentsR from './Components/Pages/receptionist/recept_equipments/Equipments';
import NotificationsR from './Components/Pages/receptionist/recept_notifications/Notifications';
// import SidebarR from './Components/Pages/receptionist/recept_sidebar/Sidebar';
import TraineesR from './Components/Pages/receptionist/recept_trainees/Trainees';
import TrainersR from './Components/Pages/receptionist/recept_trainers/Trainers';

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
          <Route path="/sidebar" element={<Sidebar/>}></Route>
          <Route path="/signin" element={<LoginPage />}></Route>
          <Route path="/signup" element={<LoginPage />}></Route>

          {/* OWNER ROUTES */}
          <Route path="/trainers" element={<TrainerO />}></Route>
          <Route path="/adjustments" element={<AdjustmentsO />}></Route>

          {/* ADMIN ROUTES */}


          {/* RECEPTIONIST ROUTES */}
          <Route path="/Rdashboard" element={<DashboardR />}></Route>
          <Route path="/Ranalytics" element={<AnalyticsR />}></Route>
          <Route path="/Rtrainees" element={<TraineesR />}></Route>
          <Route path="/Rtrainers" element={<TrainersR />}></Route>
          <Route path="/Rannouncements" element={<AnnouncementsR />}></Route>
          <Route path="/Requipments" element={<EquipmentsR />}></Route>
          <Route path="/Rnotifications" element={<NotificationsR />}></Route>



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
