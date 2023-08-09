import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./homePage.js";
<<<<<<< HEAD
import RentPage1 from './rentPage1';
import RentPage2 from './rentPage2';
import BuyPage from './buyPage1';
import BuyPage2 from './buyPage2';
=======
import RentPage1 from "./rentPage1";
import RentPage2 from "./rentPage2";
import BuyPage from "./buyPage1";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import SignUp from "./RenderSignUp";
>>>>>>> bfa74cfa3b0ce2d40c2c518636c849f71279e883

function App() {
  return (
    <div className="App">
      <SignUp />
      <Login />
      <Dashboard />
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<HomePage/>}/>
          <Route path="/01-rentpage" element={<RentPage1/>}/>
          <Route path="/02-rentpage" element={<RentPage2/>}/>
          <Route path="/buyPage1" element={<BuyPage/>}/>
          <Route path="/buyPage2" element={<BuyPage2/>}/>
=======
          <Route path="/" element={<HomePage />} />
          <Route path="/01-rentpage" element={<RentPage1 />} />
          <Route path="/02-rentpage" element={<RentPage2 />} />
          <Route path="/buyPage1" element={<BuyPage />} />
>>>>>>> bfa74cfa3b0ce2d40c2c518636c849f71279e883
        </Routes>
      </Router>
    </div>
  );
}

export default App;
