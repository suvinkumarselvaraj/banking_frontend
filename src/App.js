import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import PreLogin from './PreLogin';
import Login from './Login';
import OpenAccountPage from './OpenAccountPage';
import Header from './Header';
import UserPage from './UserPage';
import UserAccount from './UserAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import TransferAmount from './TransferAmount';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path = "/transfer" element = {<><Header/><TransferAmount/></>} />
        <Route path = "/withdraw" element = {<><Header/><Withdraw/></>} />
        <Route path = "/deposit" element= {<><Header/><Deposit/></>} />
        <Route path = "/accountDetails" element = {<><Header/><UserAccount/></>} />
        <Route path = "/home" element = {<><Header/><UserPage/></>} />
        <Route path = "/openaccount" element= {<OpenAccountPage />} />
        <Route path ="/login" element={<Login/>} />
        <Route path = "/" element ={<><PreLogin/></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
