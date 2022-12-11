import logo from './logo.svg';
import './App.css';
import Home from './Login/Home';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import PersonalArea from './PersonalArea/PersonalArea';
import ManagePage from './ManagePage/ManagePage';


function App() {
  return (
    <div dir='rtl'>
      <Router>
           <div >
            <ul >
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
              {/* <li>
                <Link to="/about">About Us</Link>
              </li> */}
              {/* <li>
                <Link to="/contact">Contact Us</Link>
              </li> */}
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/ManagePage' element={< ManagePage />}></Route>
                 <Route exact path='/PersonalArea' element={< PersonalArea />}></Route>
          </Routes>
          </div>
       </Router>
   
    </div>
  );
}

export default App;
