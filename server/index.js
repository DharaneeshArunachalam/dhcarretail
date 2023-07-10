const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const mysql = require('mysql');
const e = require('express');

const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.json());
app.use(express.static('public'));

let connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'Mysql@1045',
    database:'carretail'
})

connection.connect(function(error){
    if(error){
        console.log("Error");
    }
    else{
        console.log("Database connected");
    }
})

app.post("/register",(request,respose)=>{
    let {personName,email,gender,mobile,username,password} = request.body;

    let sql="insert into car_retail(name,email,mobile,)";
})

app.listen(3002);