require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

connectDB().then(console.log("connected to DB Online")).catch(err => console.log(err));
async function connectDB() {
    await mongoose.connect('mongodb+srv://'+ process.env.DBNAME + ':' + process.env.DBPASS+'@cluster0.qrtll88.mongodb.net/ToDoList');
  
  }
connectDB();

app.listen(4000,function(){
    console.log("server is running on port 4000");
})