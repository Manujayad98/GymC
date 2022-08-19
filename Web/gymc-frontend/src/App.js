import React from 'react';
import { Navbar } from './Components/Pages/all/landingPage/Navbar';
import { Header } from './Components/Pages/all/landingPage/Header';
import Features from './Components/Pages/all/landingPage/Features';
import Pricing from './Components/Pages/all/landingPage/Pricing';
import About from './Components/Pages/all/landingPage/About';
import Contact from './Components/Pages/all/landingPage/ContactUs';
import Trainers from './Components/Pages/all/landingPage/Trainers';
// import Login from './Components/Pages/all/landingPage/Login';
import Registration from './Components/Pages/all/registrationPage/Registration';
import Sidebar from './Components/Utilities/Sidebar/Sidebar';
import LoginPagePrev from './Components/Pages/all/loginPage/LoginPagePrev';
import SampleLogin from './Components/Pages/all/loginPage/SampleLogin';
import PictureUploader from './Components/Utilities/Form/PictureUploader/PictureUploader';


import SampleReg from './Components/Pages/all/registrationPage/SampleReg';

import Login from './Components/Pages/all/loginPage/LoginPage';
import ResetPassword from './Components/Pages/all/resetPassword/ResetPassword';

import PieChart from './Components/Utilities/Charts/PieChart';
import BarChart from './Components/Utilities/Charts/BarChart';
import LineChart from './Components/Utilities/Charts/LineChart';
import SearchBar from './Components/Utilities/SearchBar/SearchBar';
import Calendar from './Components/Utilities/CalendarComp/CalendarComp';
import SampleCal from './Components/Utilities/CalendarComp/SampleCal';

import Alert from './Components/Utilities/AlertPopup/AlertPopup'


//ADMIN
import SidebarA from './Components/Pages/admin/adm_sidebar/Sidebar';
import DashboardA from './Components/Pages/admin/adm_dashboard/Dashboard';
import UsersA from './Components/Pages/admin/adm_users/Users';
import SystemLogsA from './Components/Pages/admin/adm_systemLogs/SystemLogs';
import NotificationsA from './Components/Pages/admin/adm_notifications/Notifications';

//OWNER
import TrainerO from './Components/Pages/owner/own_trainers/Trainers';
import AdjustmentsO from './Components/Pages/owner/own_adjustments/Adjustments';
import TraineesO from './Components/Pages/owner/own_trainees/Trainees';
import AddTrainer from './Components/Pages/owner/own_add_trainer/AddTrainer';
import DashboardO from './Components/Pages/owner/own_dashboard/Dashboard';
import AnnouncementsO from './Components/Pages/owner/own_announcements/Announcements';
import AnalyticsO from './Components/Pages/owner/own_analytics/Analytics';
import NotificationsO from './Components/Pages/owner/own_notifications/Notifications';
import SidebarO from './Components/Pages/owner/own_sidebar/Sidebar';
import ViewWorkout from './Components/Pages/owner/own_view_workout/ViewWorkout';


// RECEPTIONIST
import AnalyticsR from './Components/Pages/receptionist/recept_analytics/Analytics';
import AnnouncementsR from './Components/Pages/receptionist/recept_announcements/Announcements';
import DashboardR from './Components/Pages/receptionist/recept_dashboard/Dashboard';
import EquipmentsR from './Components/Pages/receptionist/recept_equipments/Equipments';
import NotificationsR from './Components/Pages/receptionist/recept_notifications/Notifications';
import SidebarR from './Components/Pages/receptionist/recept_sidebar/Sidebar';
import TraineesR from './Components/Pages/receptionist/recept_trainees/Trainees';
import TrainersR from './Components/Pages/receptionist/recept_trainers/Trainers';
import AppointmentsR from './Components/Pages/receptionist/recept_appointments/Appointments'
import AddTrainerR from './Components/Pages/receptionist/recept_add_trainer/AddTrainer';

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
          <Route path="/sidebar" element={<SidebarA />}></Route>
          <Route path="/signinPrev" element={<LoginPagePrev />}></Route>
          <Route path="/signupPrev" element={<LoginPagePrev />}></Route>
          <Route path="/samplelogin" element={<SampleLogin />}></Route>

          <Route path="/samplereg" element={<SampleReg />}></Route>


          <Route path="/login" element={<Login />}></Route>
          <Route path="/resetpasswd" element={<ResetPassword />}></Route>
          <Route path="/searchBar" element={<SearchBar />}></Route>
          <Route path="/alert" element={<Alert />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/samplecal" element={<SampleCal />}></Route>
          <Route path="/picup" element={<PictureUploader />}></Route>

          {/* OWNER ROUTES */}
          <Route path="/Otrainers" element={<TrainerO />}></Route>
          <Route path="/OaddTrainer" element={<AddTrainer />}></Route>
          <Route path="/Oadjustments" element={<AdjustmentsO />}></Route>
          <Route path="/Otrainees" element={<TraineesO />}></Route>
          <Route path="/Odashboard" element={<DashboardO />}></Route>
          <Route path="/Onotifications" element={<NotificationsO />}></Route>
          <Route path="/Oannouncements" element={<AnnouncementsO />}></Route>
          <Route path="/Oanalytics" element={<AnalyticsO />}></Route>
          <Route path="/OviewWorkout" element={<ViewWorkout />}></Route>


          {/* ADMIN ROUTES */}
          <Route path="/Adashboard" element={<DashboardA />}></Route>
          <Route path="/Anotifications" element={<NotificationsA />}></Route>
          <Route path="/Ausers" element={<UsersA />}></Route>
          <Route path="/AsystemLogs" element={<SystemLogsA />}></Route>


          {/* RECEPTIONIST ROUTES */}
          <Route path="/Rdashboard" element={<DashboardR />}></Route>
          <Route path="/Ranalytics" element={<AnalyticsR />}></Route>
          <Route path="/Rtrainees" element={<TraineesR />}></Route>
          <Route path="/Rtrainers" element={<TrainersR />}></Route>
          <Route path="/Rannouncements" element={<AnnouncementsR />}></Route>
          <Route path="/Requipments" element={<EquipmentsR />}></Route>
          <Route path="/Rnotifications" element={<NotificationsR />}></Route>
          <Route path="/Rappointments" element={<AppointmentsR />}></Route>
          <Route path="/RaddTrainer" element={<AddTrainerR />}></Route>




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
