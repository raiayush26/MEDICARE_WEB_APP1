require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const session = require('express-session');
const Adminroute = require('./routes/User')
const Registroute = require("./routes/register");
const Patroute = require("./routes/patient");
const Docroute = require("./routes/doctor");
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

mongoose.connect(process.env.ADMIN)
.then(()=> console.log('Database connected'))
.catch(err => console.log(err))
mongoose.set('strictQuery', false);

app.use('/', Registroute);
app.use('/Pat',Patroute);
app.use('/Doc',Docroute)
app.use('/reacherDept',DeptRoute)
app.use('/admin',Adminroute)


Port= 4000;
app.listen(Port, function(){
    console.log("Server is running on port  http://localhost:"+Port);
});
