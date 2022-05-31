import React from 'react'

function UserAccount() {
  return (
    <div className='UserAccount__container'>
        <div className='line1'>
                <p>Name : {sessionStorage.getItem("username").toUpperCase()}</p>
        </div>
        <div className='line2'>
                <p>Account number : {sessionStorage.getItem("accountNo")}</p>
        </div>
        <div className='line3'>
                <p>Phone number : {sessionStorage.getItem("phoneNo")}</p>
        </div>
        <div className='line4'>
                <p>Available balance : Rs {sessionStorage.getItem("balance")}</p>
        </div>
        
        
    </div>
  )
}

export default UserAccount