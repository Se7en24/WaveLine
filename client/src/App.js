import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import Track from "./Pages/Track";
import Booking from "./Pages/Booking";
import Schedule from "./Pages/Schedule";
import AdminDashboard from "./Pages/AdminPages/AdminDashboard";
import AppLayout from "./Components/AppLayout/AppLayout";
import Ship from "./Pages/AdminPages/Ship";
import ScheduledShips from "./Pages/AdminPages/ScheduledShips";
import AddShipFormPage from "./Pages/AdminPages/AddShipFormPage";
import Profile from "./Pages/Profile";
import LoginNavbar from "./Pages/LoginNavbar";
import UsersList from "./Pages/AdminPages/UsersList";
import ShipSchedules from "./Pages/ShipSchedules";
import BookingPage from "./Pages/AdminPages/BookingPage";
import Contact from "./Pages/Contact"; // Added import for Contact page

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/track" element={<Track />} />
          <Route path="/make-a-booking" element={<Booking />} />
          <Route path="/ebookings" element={<Booking />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login-navbar" element={<LoginNavbar />} />
          <Route path="/shipschedules" element={<ShipSchedules />} />
          <Route path="/contact" element={<Contact />} /> {/* Added route for Contact page */}
          <Route element={<AppLayout />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin-dashboard/ships" element={<Ship />} />
            <Route path="/admin-dashboard/ships-form" element={<AddShipFormPage />} />
            <Route path="/admin-dashboard/schedules" element={<ScheduledShips />} />
            <Route path="/admin-dashboard/users" element={<UsersList />} />
            <Route path="/admin-dashboard/bookings" element={<BookingPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
