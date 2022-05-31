import React from 'react'
import './Header.css'
import useStateValue from './StateProvider';
function Header() {
  
  
  return (
    <div className='Header__container'>
        <div className='Header__bankLogo__div'>
        <img className = 'Header__bankLogo' src="https://logomakercdn.truic.com/ux-flow/industry/bank-meta.png" alt="bank__logo"></img>
        <p className='Header__logo__name'>ZOHO BANKING</p>
        </div>
        <div className='Header__info'>
        <strong>YOUR ONE-STOP ONLINE BANKING APPLICATION</strong>
        </div>
        <div className='Header__login'>
            <a className = "Header__login__link" href='/login'>{sessionStorage.getItem("username") ? 'Sign out' : 'Sign in'}</a>
        </div>
        </div>
  )
}

export default Header