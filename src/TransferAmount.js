import React,{useEffect} from 'react'
import './TransferAmount.css'

function TransferAmount() {
    useEffect(()=>{
        fetch('http://localhost:8080/banking_app/availableCustomers')
            .then(res => res.json())
            .then(data=>{
                console.log(data);
            })
    })
    function handleTransfer(event){
        event.preventDefault();
        var data = new FormData(event.target);
        var amount = data.get("transferAmount");
        var acc1 = data.get("account_number1");
        var acc2 = data.get("account_number1");
        if(acc1!==acc2||acc1===''||acc2=='')
        {
            alert("account numbers entered doesnt match the record");
        }
         if(amount<1000 && amount > 100000)
            {
                alert("It is possible to depoist amount only within the given range: Rs. 1000 to Rs. 999999");
                return;
            }
            var type = "transfer";
        var transfer_data = {
      'accountNumber' : sessionStorage.getItem("accountNo"),
      'customerId' : sessionStorage.getItem("customerId"),
      'amount' : amount,
      'balance': sessionStorage.getItem("balance"),
      'transactionType' : type,
      'receiverAccountNumber' : data.get("")
    }

    }
  return (
    <div className='TransferAmount__container'>
        <form onSubmit={handleTransfer}>
        <div className='line1'>
            <p>Transfer money online instantly</p>
        </div>
        <div className='line2'>
            <p>Available balance : Rs.{sessionStorage.getItem("balance")}</p>
            <p>Please Note that the minimum balance of Rs.1000 must be maintained after the cash transfer</p>
        </div>
        <div className='line3'>
            <p>Enter the receiver account number </p>
            <input type = 'text' className='accountNumber_input uinput' placeholder='Account number ' name = 'account_number1'></input>
        </div>
        <div className='line4'>
            <p>Re-enter the account number for transaction</p>
            <input type = 'text' className='accountNumber_input uinput' placeholder='Re-enter account number' name = 'account_number2'></input>
        </div>
        
        <div className='line5'>
            <p>Enter the amount to transfer</p>
            <input type = 'number' className='transfer_amount uinput' placeholder='Enter the amount' name = 'transferAmount'></input>
        </div>
        <div className='line6'>
            <p>Enter the password</p>
            <input type = 'password' className='password_field uinput' placeholder='Your password' name = 'password'></input>
        </div>
        
        <div className='line7'>
            <button className='proceed'>Proceed</button>
        </div>
        </form>
    </div>
  )
}

export default TransferAmount