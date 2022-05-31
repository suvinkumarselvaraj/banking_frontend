import React from 'react'
import { useStateValue } from './StateProvider'
import './UserPage.css';
import {Link} from 'react-router-dom';
function UserPage() {

    const [{active_user},dispatch] = useStateValue();
  return (
    <div className = 'UserPage__container'>
      <div className = 'service line1'>
        <Link to = '/accountDetails'>
        <button className='userPage__button'>Account Details</button>  
        </Link>
      </div>
      <div className = 'service line2'>
        <Link to = "/deposit">
        <button className='userPage__button'>Cash Deposit</button>  
        </Link>
      </div>
        
      <div className = 'service line3'>
      <Link to = '/withdraw'>
        <button className='userPage__button'>Cash Withdrawal</button>
        </Link>
      </div>
      <div className = 'service line4'>
        <Link to = '/transfer'>
        <button className='userPage__button'>Transfer Amount</button>
        </Link>
      </div>
      <div className = "service line5">
        <button className='userPage__button'>View Transactions</button>
      </div>
      <div className = "service line6">
        <button className='userPage__button'>Maintenance charge details</button>
      </div>
      <div className = "service line7">
        <button className='userPage__button'>Change Password</button>
      </div>
      </div>
  )
}

export default UserPage