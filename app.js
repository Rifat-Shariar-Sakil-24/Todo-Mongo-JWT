require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require('./models/users');

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const url = 'mongodb+srv://'+process.env.DBNAME+':'+process.env.DBPASS+'@cluster0.qrtll88.mongodb.net/ToDoList'
connectDB().then(console.log("connected to DB")).catch(err => console.log(err));
async function connectDB() {
    await mongoose.connect(url);
  
  }
connectDB();



app.get("/",function(req,res){
   
})

app.listen(4000,function(){
    console.log("server is running on port 4000");
})

