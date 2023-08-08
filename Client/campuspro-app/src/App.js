<<<<<<< HEAD
import React from 'react'
import Signup2 from './newsignup'
import Signup from './signUp'

function App() {
  return (
    <div>
      <Signup2/>
      <Signup/>
    </div>
  )
}
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import css from './App.css'
import HomePage from "./homePage.js";
import RentPage1 from './rentPage1';
import RentPage2 from './rentPage2';
import BuyPage from './buyPage1';
function App() {
  return (
      <div className="App">
    <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/01-rentpage" element={<RentPage1/>}/>
          <Route path="/02-rentpage" element={<RentPage2/>}/>
          <Route path="/buyPage1" element={<BuyPage/>}/>
        </Routes>
    </Router>
    </div>
  );
}                                                                                                                                        
>>>>>>> 72c25f3a114e89dae4fe4735120d58ba1d6041e0

export default App
          
          
                
              
            