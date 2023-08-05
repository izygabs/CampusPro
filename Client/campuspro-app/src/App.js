<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import css from './App.css'
import HomePage from "./homePage.js";
import RentPage1 from './rentPage1';
function App() {
  return (
      <div className="App">
    <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/01-rentpage" element={<RentPage1/>}/>
        </Routes>
    </Router>
    </div>
=======
import './App.css';
import HomePage from "./homePage.js";
import BuyPage from './buyPage1.js';
import SellPage from './sellPage1';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Router>
              <Routes>
                <Route path="/" element={<HomePage />}/>  
                <Route path='/buypage1' element={<BuyPage />}/>
                {/* <Route path='/sellPage1' element={<SellPage />}/> */}
              </Routes>
            </Router>
        </div>

>>>>>>> 7ca5b852207c213922b10a329ec1a42809281f82
  );
}                                                                                                                                        

export default App;
