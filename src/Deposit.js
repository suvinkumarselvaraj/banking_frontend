import React from 'react'

function Deposit() {
  function handleSubmit(event){
    event.preventDefault();
    var data = new FormData(event.target);
    var amount = data.get("deposit_amount");
    if(amount<1000 && amount > 999999)
    {
      alert("It is possible to depoist amount only within the given range: Rs. 1000 to Rs. 999999");
      return;
    }
    var type = "deposit";
    var deposit_data = {
      'accountNumber' : sessionStorage.getItem("accountNo"),
      'customerId' : sessionStorage.getItem("customerId"),
      'amount' : amount,
      'balance': sessionStorage.getItem("balance"),
      'transactionType' : type
    }
    fetch('http://localhost:8080/banking_app/transactions',{
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(deposit_data)
    })
    .then(res => res.json())
    .then(data => {
      if(data.status === "success"){
        console.log("succesfully inserted");
        sessionStorage.removeItem("balance");
        sessionStorage.setItem("balance",data.balance);
        alert("successfully deposited");
      }else
      alert("something wrong, try again later");
    })
}
  return (
     <div className = 'Deposit__container'>
    <p>Deposit</p>
        <form onSubmit = {handleSubmit}>
        <div className = 'line1'>
        <p>Enter the amount to be deposited</p>
        <input type="number" min = '1000' max = '9999999' name = "deposit_amount"></input>      
        </div>
        <div className = 'line2'>
        <p>Enter the password</p>
        <input type="password" name = "password"></input>      
        </div>
        <button type = "submit" className = "deposit_submit">Deposit</button>
        </form>
    </div>
    
  )
}

export default Deposit