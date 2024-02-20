import React from 'react'
import axios from 'axios';
axios.defaults.withCredentials = true
export default function Check(){
    function loginFunc(){
        var user1 = document.getElementById('user').value
        var amt1 = document.getElementById('amt').value
        axios.post('http://localhost:8000/deduct',{
            user: user1,
            amt: amt1
        }).then((response)=>{
            console.log(response.data)
            window.alert(response.data.msg +"\nbalance:"+ response.data.bal)
        })
        console.log('came')
    }
    return(
        <div className="name">
            <div>
            <input type="text" id="user" placeholder="Enter vehicle number"></input>
            </div>
            <div>
            <input type="text" id="amt" placeholder="Enter amount to reduce"></input>
            </div>
            <button type="submit" onClick={loginFunc}>Continue</button>
        </div>
    )
}