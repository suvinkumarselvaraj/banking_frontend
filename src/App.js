import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import PreLogin from './PreLogin';
import Login from './Login';
import OpenAccountPage from './OpenAccountPage';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path = "/openaccount" element= {<OpenAccountPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path = "/" element ={<><PreLogin/></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
