import React from 'react'
import { act } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import './Login.css';
import LoginButton from './LoginButton';
import OpenAccount from './OpenAccount';
function Login() {

    function handleLogin(event){
        // event.preventDefault();
        console.log(event.target);
    }
    function handleLoginSubmit(event){
        event.preventDefault();
        var data = new FormData(event.target);
        console.log(data.get("account_no"));
    }
    function handleOpenAccount(event){

    }
  return (
    <div className='Login__container'>
        <form onSubmit = {handleLoginSubmit}>
        <img className = 'Login__container__logo' src="https://logomakercdn.truic.com/ux-flow/industry/bank-meta.png" alt="bank__logo"></img>
        <div className='Login__container__account__no'>
        <p>Account Number</p>
        <input type="text" className='Login__container__input__field' placeholder='Enter your account number' name = "account_no"></input>
        </div>
        <div className='Login__container__account__password'>
        <p>Password</p>
        <input type="password" className='Login__container__input__field' placeholder='Enter your password' name = "account_password"></input>
        </div>
        <div>
        <button className = "Login__button" onClick={handleLogin}>Login</button>
        <div>
            <small>Don't have an account?</small>
            <Link to = "/openaccount">
        <button className = "Login__Open__button" onClick={handleOpenAccount}>Open account</button>
        </Link>
        </div>
        </div>
        </form>
    </div>
  )
}

export default Login