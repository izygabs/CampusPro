import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./homePage.js";
import RentPage1 from "./rentPage1";
import RentPage2 from "./rentPage2";
import BuyPage from "./buyPage1";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import SignUp from "./RenderSignUp";
import Changepassword from "./Components/Changepassword";
import ProfileInfo from "./Components/Profile_info";

function App() {
  return (
    <div className="App">
      <Changepassword />
      <ProfileInfo />
      <SignUp />
      <Login />
      <Dashboard />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/01-rentpage" element={<RentPage1 />} />
          <Route path="/02-rentpage" element={<RentPage2 />} />
          <Route path="/buyPage1" element={<BuyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
