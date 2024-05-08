require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const session = require('express-session');
const AdminRoute = require('./routes/User')
const RegisterRoute = require("./routes/register");
const PatientRoute = require("./routes/patient");
const DoctorRoute = require("./routes/doctor");
const DeptRoute = require("./routes/Dept");
const passport = require("passport");
const cors = require("cors");
const app = express();
app.use(cors({origin:'*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1) // trust first proxy

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.ONLINE_ADMIN || process.env.ADMIN)
.then(()=>{
 if(process.env.ONLINE_ADMIN){
     console.log("Connected to online database");
 
}else {
    console.log("Connected to local database");
}
})
.catch(err => console.log(err))
mongoose.set('strictQuery', false);

app.use('/register', RegisterRoute);
app.use('/Pat',PatientRoute);
app.use('/Doc',DoctorRoute)
app.use('/reacherDept',DeptRoute)
app.use('/admin',AdminRoute)
// swxd

Port= 4000;
app.listen(Port, function(){
    console.log("Server is running on port  http://localhost:"+Port);
});
