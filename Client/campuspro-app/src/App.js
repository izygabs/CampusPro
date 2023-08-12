import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import css from './App.css'
import HomePage from "./homePage.js";
import RentPage1 from './rentPage1';
import RentPage2 from './rentPage2';
import BuyPage from './buyPage1';
import Signup from './signUp';
// import Signup2 from './newsignup';
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

export default App
          
          
                
              
            