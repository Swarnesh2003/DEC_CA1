const express = require('express')
const bodyparser = require('body-parser')
const mysql = require('mysql')
const app = express()
const cors = require('cors');


app.get('/', (req, res) => {
    res.send("GET Request Called")
})

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "labexam"
});
con.connect();
if(con){
    console.log("connected")
}
else{
    console.log("error")
}


app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true
    })
  );
  app.use(bodyparser.urlencoded({extended: true}))
  app.use(express.json())
dict1={
    TN05A123: 2000,
    TN06A123: 100,
    TN07A234: 200 
}
var user = 1
var balance = 1000
app.post('/login', (req, res)=>{
    console.log("called")
    user = req.body.user1
    console.log(user)
    
    var sql= "SELECT balance FROM users where username= (?)";
    var values=[user];
    con.query(sql, [values], function(err, results, feilds){
        balance = results[0].balance
    })
    
   res.json({msg: "logged", bal:dict1[user]})
})

app.post('/creditBalance', (req, res)=>{
    toRecharge = req.body.amt
    user=req.body.user1
    dict1[user]=Number(dict1[user])+Number(toRecharge)
    res.json({msg: "recharged", bal:dict1[user]})
})

app.get('/checkBalance', (req, res)=>{
    res.json({balance: dict1[user]})
})

app.post('/deduct',(req, res)=>{
    var car = req.body.user
    var amt = req.body.amt
    if(dict1[car]>=amt){
    dict1[car]=Number(dict1[car])-Number(amt)
    res.json({msg: "allowed", bal : dict1[car]})
    }
    else{
        res.json({msg:"not allowed- balance not sufficient", bal : dict1[car]})
    } 
})
port=8000
app.listen(port, ()=>{
    console.log("listening", port)
})