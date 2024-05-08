import React, {useState} from 'react';
import axios from 'axios';
import "./register.css"
import Header from "../home/navbar";
import {useNavigate} from 'react-router-dom';
import { Server } from '../../Server/Server';
import  Toast  from "../toast";
import ToastContainer from "../toastContai"

function Register (){
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email,setEmail] = useState();
  const [password, setPassword] = useState();
  const [entries, setEntries] = useState([]);
 
  const navigate = useNavigate();
// Add Food Item
   const addItem = async() => {
  console.log(fName,lName,email,password)
     try {
       const res = await axios.post(`${Server}/register/post`,{fName: fName, lName: lName, email: email, password: password})
       console.log(res);
        setEntries((prev) => [...prev, res.data]);
        
      if(res.data.success === true){
        // navigate("/login")
         navigate("/Patient",{state:{Email:email,firstName:fName,lastName:lName}})
        console.log("success")
      }
      if(res.data.success === false){
        Toast.error("email already exist")
      }      
        

     } catch (error) {
       console.error(error);
     }
   }


  return (
    
    
    <div className="register">
      <Header />
      <ToastContainer position="bottom-center" limit={1}/>
      

      <form className="register-form">
      <h1 className='heading-h1'>Register</h1>
        <input className = "form-input" type="text" placeholder="First Name" name="fName" onChange={(e)=>{setFname(e.target.value)}}/>
        <input className = "form-input" type="text" placeholder="Last Name" name="lName" onChange={(e)=>{setLname(e.target.value)}}/>
        <input className = "form-input" type="email" placeholder="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <input className = "form-input" type="password" placeholder="Password" name="password" onChange={(e)=>{setPassword(e.target.value)}} autoComplete = "false"/>
        <button className = " btn btn-sm btn-primary" type="submit" onClick={e => {addItem(e.preventDefault())}}>Submit</button>
        {/* ><NavLink to = "/Patient">submit</NavLink> */}
      </form>
      
    </div>
    
      
    
    
    
  );
}
export default Register;
