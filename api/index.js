require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const homeRoutes = require('../routes/homeRoutes');
const loginRoutes = require('../routes/loginRoutes');
const registerRoutes = require('../routes/registerRoutes');
const taskRoutes = require('../routes/taskRoutes');
const { isAuthenticated } = require('../middleware/authMiddleware');

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

const url = 'mongodb+srv://'+process.env.DBNAME+':'+process.env.DBPASS+'@cluster0.qrtll88.mongodb.net/ToDoList'


connectDB().then(() => {
    console.log("Connected to DB");
}).catch(err => console.log(err));

async function connectDB() {
    try {
        await mongoose.connect(url);   
    } 
    catch (error) {
        throw new Error('Error connecting to MongoDB: ' + error.message);
    }
    
}


app.use(homeRoutes);
app.use(loginRoutes);
app.use(registerRoutes);
app.use(taskRoutes);


app.get('/logout',function(req,res){
  res.cookie('jwt','', {maxAge:1});
  res.redirect('/');
})


app.listen(process.env.PORT || 4000,function(){
    console.log("server is running on port 4000");
})

