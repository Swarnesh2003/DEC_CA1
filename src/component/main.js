import React from 'react'
import axios from 'axios';

export default function Home(){
    function loginFunc(){
        var user = document.getElementById('user').value
        console.log(user)
        axios.post('http://localhost:8000/login',{
            user1: user,
        }).then((response)=>{
            console.log(response.data)
            window.alert("balance: "+response.data.bal)
        })
        
    }
    function Recharge(){
        var user = document.getElementById('user').value
        console.log(user)
        var amt1 = document.getElementById('amt').value
        console.log(user)
        axios.post('http://localhost:8000/creditBalance',{
            user1: user,
            amt:amt1
        }).then((response)=>{
            console.log(response.data)
            window.alert("balance: "+response.data.bal)
        })
    }
    return(
        <div className="name">
            <div>
            <input type="text" id="user" placeholder="Enter vehicle number to login"></input>
            <button type="submit" onClick={loginFunc} >Check Balance</button>
            </div>
            <div>
            <input type="number" id="amt" placeholder="Enter amount to recharge"></input>
            <button type="submit" onClick={Recharge} >Recharge</button>
            </div>
        </div>
    )
}