import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./homePage.js";
import RentPage1 from "./rentPage1";
import RentPage2 from "./rentPage2";
import BuyPage from "./buyPage1";
import BuyPage2 from "./buyPage2";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import SignUp from "./RenderSignUp";
import Changepassword from "./Components/Changepassword";
import ProfileInfo from "./Components/Profile_info";
import React from "react";
import UserDashboard from "./Components/UserDashboard";
import PropertyTray from "./Components/PropertytTray";

function App() {
  return (
    <div className="App">
      {/* <PropertyTray /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/01-rentpage" element={<RentPage1 />} />
          <Route path="/rentproperty/:id" element={<RentPage2 />} />
          <Route path="/buyPage1" element={<BuyPage />} />
          <Route path="/holddata/:id" element={<BuyPage2 />} />
          <Route path="/Profile_info" element={<ProfileInfo />} />
          <Route path="/Changepassword" element={<Changepassword />} />
          <Route path="/Dashboard/" element={<Dashboard />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
