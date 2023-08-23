import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./homePage.js";
import RentPage1 from "./rentPage1";
import RentPage2 from "./rentPage2";
import BuyPage from "./buyPage1";
import BuyPage2 from "./buyPage2";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import SignUp from "./RenderSignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/01-rentpage" element={<RentPage1 />} />
          <Route path="/data11/:id" element={<RentPage2 />} />
          <Route path="/buyPage1" element={<BuyPage />} />
          <Route path="/buyPage2" element={<BuyPage2 />} />
          <Route path="/login-page" element={<Login />} />
          <Route path="/merchant-dashboard" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
