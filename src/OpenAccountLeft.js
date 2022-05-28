import React from 'react'
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import './OpenAccountLeft.css';
function OpenAccountLeft() {
  return (
    <div className='OpenAccountLeft__container'>
        <p className='line1'>Get your online banking account openend within minutes</p>
        <div className='OpenAccountLeft__icon'>
        <Filter1Icon style={{fill: "#92BA92"}}/>
        <p className='OpenAccountLeft__line1 OpenAccountLeftIcon'>Enter username</p>
        </div>
        <div className='OpenAccountLeft__icon'>
        <Filter2Icon style={{fill: "#92BA92"}}/>
        <p className='OpenAccountLeft__line2 OpenAccountLeftIcon'>Enter password</p>
        </div>
        <div className='OpenAccountLeft__icon'>
        <Filter3Icon style={{fill: "#92BA92"}}/>
        <p className='OpenAccountLeft__line3 OpenAccountLeftIcon'>Click on submit</p>
        </div>
        <div className='OpenAccountLeft__icon'>
        <Filter4Icon style={{fill: "#92BA92"}}/>
        <p className='OpenAccountLeft__line4 OpenAccountLeftIcon'>Enjoy our services</p>
        </div>
    </div>
  )
}

export default OpenAccountLeft