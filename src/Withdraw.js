import React from 'react'

function Withdraw() {
    function handleWithdrawlSubmit(event){
        event.preventDefault();
        var data = new FormData(event.target);
        if((sessionStorage.getItem("balance")-data.get("withdrawlAmount"))<1000)
        {   alert("Perform a withdrawl such that your minimum balance will be maintained over Rs. 1000");
            return;
        }
        var type = "withdrawl";
        
        const datas = {
            'accountNumber' : sessionStorage.getItem("accountNo"),
      'customerId' : sessionStorage.getItem("customerId"),
      'amount' :data.get("withdrawlAmount") ,
      'balance': sessionStorage.getItem("balance"),
      'transactionType' : type
        }
    
        fetch('http://localhost:8080/banking_app/transactions',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(datas)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.status === "success"){
                console.log("succesfully inserted");
                sessionStorage.removeItem("balance");
                sessionStorage.setItem("balance",data.balance);
                alert("withdrawl successful");
              }else
              alert("something wrong, try again later");
        })


    }
  return (
    <div className = 'Withdraw__container'>Withdraw
        <div className = 'line1'>
            <p>Your available balance {sessionStorage.getItem("balance")}</p>
            <p>Please note that a minimum balance of 1000 must be maintained once after the withdrawl</p>
        </div>
        <form onSubmit = {handleWithdrawlSubmit}>
        <div className='line2'>
            <p>Enter the amount for withdrawl</p>
            <input type = "number" min = '1000' max = '100000' name = 'withdrawlAmount' placeholder='Enter the amount to be withdrawn'></input>
        </div>
        <div className='line2'>
            <p>Enter your password</p>
            <input type = "password" name = 'password' placeholder='Enter your password'></input>
        </div>
        <div className='line3'>
            <button className='withdrawl_submit'>Proceed</button>
        </div>
        </form>
    </div>
  )
}

export default Withdraw