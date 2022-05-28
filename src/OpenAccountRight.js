import React from 'react';
import './OpenAccountRight.css';
function OpenAccountRight() {
  return (
    <div className='OpenAccountRight__containter'>
       <div className='line11'>
        <input className = "username_input uinput" type="text" placeholder="Username"></input>
        </div>
        <div>
        <input className = "password_input uinput" type="password" placeholder="password"></input>
        </div>
        <div>
        <input className = "re_password_input uinput" type="password" placeholder="re-enter passowrd"></input>
        </div>
        <div className='OpenAccountRight__submit__button'>
        <button className='OpenAccount__submit__button'>Submit</button>
        </div>
        
    </div>
  )
}

export default OpenAccountRight