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

  );
}                                                                                                                                        

export default App;
