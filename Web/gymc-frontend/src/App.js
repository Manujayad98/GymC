import React from 'react';
import { Navbar } from './Components/Pages/all/landingPage/Navbar';
import { Header } from './Components/Pages/all/landingPage/Header';
import Features from './Components/Pages/all/landingPage/Features';
import Pricing from './Components/Pages/all/landingPage/Pricing';
import About from './Components/Pages/all/landingPage/About';
import Contact from './Components/Pages/all/landingPage/ContactUs';
import Trainers from './Components/Pages/all/landingPage/Trainers';
import Footer from './Components/Pages/all/landingPage/Footer';
// import Login from './Components/Pages/all/landingPage/Login';
import Registration from './Components/Pages/all/registrationPage/Registration';
import Sidebar from './Components/Utilities/Sidebar/Sidebar';
// import LoginPagePrev from './Components/Pages/all/loginPage/LoginPagePrev';
// import SampleLogin from './Components/Pages/all/loginPage/SampleLogin';
import PictureUploader from './Components/Utilities/Form/PictureUploader/PictureUploader';
// import SampleReg from './Components/Pages/all/registrationPage/SampleReg';
import Login from './Components/Pages/all/loginPage/LoginPage';
import ResetPassword from './Components/Pages/all/resetPassword/ResetPassword';
import PieChart from './Components/Utilities/Charts/PieChart';
import BarChart from './Components/Utilities/Charts/BarChart';
import LineChart from './Components/Utilities/Charts/LineChart';
import SearchBar from './Components/Utilities/SearchBar/SearchBar';
import Calendar from './Components/Utilities/CalendarComp/CalendarComp';
import SampleCal from './Components/Utilities/CalendarComp/SampleCal';
import Alert from './Components/Utilities/AlertPopup/AlertPopup'
import Profile from './Components/Pages/all/Profile/ProfileVIewNew'
import TableNew from './Components/Utilities/Tables/TableView'

//ADMIN
import SidebarA from './Components/Pages/admin/adm_sidebar/Sidebar';
import AnnouncementsA from './Components/Pages/admin/adm_announcements/Announcements';
import UsersA from './Components/Pages/admin/adm_users/Users';
import SystemLogsA from './Components/Pages/admin/adm_systemLogs/SystemLogs';
// import NotificationsA from './Components/Pages/admin/adm_notifications/Notifications';
import AddUserA from './Components/Pages/admin/adm_add_user/AddUser'
// import EditUserA from './Components/Pages/admin/adm_edit_user/EditUser'


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
import AddWorkoutO from './Components/Pages/owner/own_add_workout/AddWorkout';
import UpdateWorkoutO from './Components/Pages/owner/own_update_workout/UpdateWorkout';
import TraineeProgressO from './Components/Pages/owner/own_trainee_progress/TraineeProgress';
import NewExercise from './Components/Pages/owner/own_adjustments/NewExercise';
import NewPaymentPlan from './Components/Pages/owner/own_adjustments/NewPaymentPlan';
import AddWorkoutPart2O from './Components/Pages/owner/own_add_workout_Part2/AddWorkout2';



// RECEPTIONIST
import AnalyticsR from './Components/Pages/receptionist/recept_analytics/Analytics';
import AnnouncementsR from './Components/Pages/receptionist/recept_announcements/Announcements';
import DashboardR from './Components/Pages/receptionist/recept_dashboard/Dashboard';
//import EquipmentsR from './Components/Pages/receptionist/recept_equipments/Equipments';
import NotificationsR from './Components/Pages/receptionist/recept_notifications/Notifications';
import SidebarR from './Components/Pages/receptionist/recept_sidebar/Sidebar';
import TraineesR from './Components/Pages/receptionist/recept_trainees/Trainees';
import TrainersR from './Components/Pages/receptionist/recept_trainers/Trainers';
import AppointmentsR from './Components/Pages/receptionist/recept_appointments/Appointments'
import AddTrainerR from './Components/Pages/receptionist/recept_add_trainer/AddTrainer';
import UpdateTrainerR from './Components/Pages/receptionist/recept_update_trainer/UpdateTrainer';
import UpdateTraineeR from './Components/Pages/receptionist/recept_update_trainee/UpdateTrainee'
import AddTraineeR from './Components/Pages/receptionist/recept_add_trainee/AddTrainee'
//import MoreEquipmentR from './Components/Pages/receptionist/recept_equipments/Moredetails'



//TRAINEE
import TraineeLogedPage from './Components/Pages/trainee/LogedInPage'

//TRAINER
import TrainerLogedPage from './Components/Pages/trainer/LogedInPage'
import DashboardT from './Components/Pages/trainer/trainer_dashboard/Dashboard'
import NotificationsT from './Components/Pages/trainer/trainer_notifications/Notifications'
import AnnouncementsT from './Components/Pages/trainer/trainer_announcements/Announcements'
import TraineesT from './Components/Pages/trainer/trainer_trainees/Trainess';
import ViewWorkoutT from './Components/Pages/trainer/trainer_view_workout/ViewWorkout';
import UpdateWorkoutT from './Components/Pages/trainer/trainer_update_workout/UpdateWorkout';
import AddWorkoutT from './Components/Pages/trainer/trainer_add_workout/AddWorkout';
import AddWorkoutPart2T from './Components/Pages/trainer/trainer_add_workout_Part2/AddWorkout2';
import TraineeProgressT from './Components/Pages/trainer/trainer_trainee_progress/TraineeProgress';

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
          {/* <Route path="/signinPrev" element={<LoginPagePrev />}></Route> */}
          {/* <Route path="/signupPrev" element={<LoginPagePrev />}></Route> */}
          {/* <Route path="/samplelogin" element={<SampleLogin />}></Route> */}
          {/* <Route path="/samplereg" element={<SampleReg />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/resetpasswd" element={<ResetPassword />}></Route>
          <Route path="/searchBar" element={<SearchBar />}></Route>
          <Route path="/alert" element={<Alert />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/samplecal" element={<SampleCal />}></Route>
          <Route path="/picup" element={<PictureUploader />}></Route>
          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/newtable" element={<TableNew />}></Route>

          {/* OWNER ROUTES */}
          <Route path="/Otrainers" element={<TrainerO />}></Route>
          <Route path="/OaddTrainer" element={<AddTrainer />}></Route>
          <Route path="/Oadjustments" element={<AdjustmentsO />}></Route>
          <Route path="/Otrainees" element={<TraineesO />}></Route>
          <Route path="/Odashboard" element={<DashboardO />}></Route>
          <Route path="/Onotifications" element={<NotificationsO />}></Route>
          <Route path="/Oannouncements" element={<AnnouncementsO />}></Route>
          <Route path="/Oanalytics" element={<AnalyticsO />}></Route>
          <Route path="/ViewWorkout/:id" component={ViewWorkout} element={<ViewWorkout />}></Route>
          <Route path="/AddWorkout/:id" component={AddWorkoutO} element={<AddWorkoutO />}></Route>
          <Route path="/OupdateWorkout/:id" component={UpdateWorkoutO} element={<UpdateWorkoutO />}></Route>
          <Route path="/OtraineeProgress/:id" component={TraineeProgressO} element={<TraineeProgressO />}></Route>
          <Route path="/ONewExercise" element={<NewExercise />}></Route>
          <Route path="/ONewPaymentPlan" element={<NewPaymentPlan />}></Route>
          <Route path="/AddWorkout2/:traineeid/:scheduleid/:trainerid" component={AddWorkoutPart2O} element={<AddWorkoutPart2O />}></Route>

          {/* ADMIN ROUTES */}
          <Route path="/Aannouncements" element={<AnnouncementsA />}></Route>
          <Route path="/Ausers" element={<UsersA />}></Route>
          <Route path="/AsystemLogs" element={<SystemLogsA />}></Route>
          <Route path="/AaddUsers" element={<AddUserA />}></Route>


          {/* RECEPTIONIST ROUTES */}
          <Route path="/Rdashboard" element={<DashboardR />}></Route>
          <Route path="/Ranalytics" element={<AnalyticsR />}></Route>
          <Route path="/Rtrainees" element={<TraineesR />}></Route>
          <Route path="/Rtrainers" element={<TrainersR />}></Route>
          <Route path="/Rannouncements" element={<AnnouncementsR />}></Route>
          {/*<Route path="/Requipments" element={<EquipmentsR />}></Route>*/}
          <Route path="/Rnotifications" element={<NotificationsR />}></Route>
          <Route path="/Rappointments" element={<AppointmentsR />}></Route>
          <Route path="/RaddTrainer" element={<AddTrainerR />}></Route>
          <Route path="/RupdateTrainer" element={<UpdateTrainerR />}></Route>
          <Route path="/RupdateTrainee" element={<UpdateTraineeR />}></Route>
          <Route path="/RaddTrainee" element={<AddTraineeR />}></Route>
          {/* <Route path="RmoreEquipment" element={<MoreEquipmentR />}></Route> */}


          {/* TRAINER ROUTES */}
          <Route path="/TELogedPage" element={<TraineeLogedPage />}></Route>
          <Route path="/Tdashboard" element={<DashboardT />}></Route>
          <Route path="/Tnotifications" element={<NotificationsT />}></Route>
          <Route path="/Tannouncements" element={<AnnouncementsT />}></Route>
          <Route path="/Ttrainees" element={<TraineesT />}></Route>
          <Route path="/TViewWorkout/:id" component={ViewWorkoutT} element={<ViewWorkoutT />}></Route>
          <Route path="/TAddWorkout/:id" component={AddWorkoutT} element={<AddWorkoutT />}></Route>
          <Route path="/TOupdateWorkout/:id" component={UpdateWorkoutT} element={<UpdateWorkoutT />}></Route>
          <Route path="/TAddWorkout2/:traineeid/:scheduleid/:trainerid" component={AddWorkoutPart2T} element={<AddWorkoutPart2T />}></Route>
          <Route path="/TtraineeProgress" element={<TraineeProgressT />}></Route>

          {/* TRAINEE ROUTES */}
          <Route path="/TRLogedPage" element={<TrainerLogedPage />}></Route>


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
    <Footer />
  </div>
)

export default App;
