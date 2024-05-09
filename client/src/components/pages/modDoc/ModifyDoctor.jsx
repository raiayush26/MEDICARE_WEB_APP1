import React, { useState ,useEffect} from 'react'
import axios from 'axios';

import { useLocation ,useNavigate} from 'react-router-dom';

import './mod.css'
function ModifyDoctor(){
  
  
  const location =useLocation();
  const [Doctors,setDoctor]= useState([]);
  const [ChangeText,setChangeText] = useState('')
  const [UpdatedText,setUpdatedText] = useState(" ")
  const [DoctorID,setDoctorID] = useState('');
  
  const navigate = useNavigate();
  // const [isChecked, setIsChecked] = useState(false)

 
  const  handleChange=(e)=>{
    e.preventDefault(e);
        const Value = e.target.value
        setChangeText(Value)
  }
  const getDoctorDetails =async() =>{
    try {const id = location.state.id;
      setDoctorID(id)
         const res= await axios.get(`http://localhost:4000/Doc/api/doctor/${id}`).then((res)=> setDoctor(res.data))}
          catch (error) {console.log(error);alert("id is not found!")}
}
useEffect(()=>{
    getDoctorDetails()
},[])
const UpdateDoctor = async(e)=>{
 
  try {  const placeholder= ChangeText;
    console.log("place "+placeholder);
    
    switch (placeholder) {
      case ("docName"):
        await axios.put(`http://localhost:4000/Doc/updated/doctors/${DoctorID}`,{docName:UpdatedText}).then(navigate("/modifyDoc"))
        break;
      case "docplace":
        await axios.put(`http://localhost:4000/Doc/updated/doctors/${DoctorID}`,{docplace:UpdatedText}).then(navigate("/modifyDoc"))
        break;
      case "docSpecialization":
        await axios.put(`http://localhost:4000/Doc/updated/doctors/${DoctorID}`,{docSpecialization:UpdatedText}).then(navigate("/modifyDoc"))
        break;   
      case "Year":
        await axios.put(`http://localhost:4000/Doc/updated/doctors/${DoctorID}`,{Year:UpdatedText}).then(navigate("/modifyDoc"))        
          break;     
      default:
          console.log("no");
          break;
  } 

  } catch (error) {
          console.log(error);
  }
}
      
  return (

    <>
    {/* <div className='admin'> */}
    
   
    <div className="patient-list">
    <h5> Modify the particular item</h5>
      <form className='form-doc'>
            <label for="docname">docName</label>
            <input type="radio" value="docName"  id='docname' onClick={handleChange} name="docName" />

            <label for="docplace">docplace</label>
            <input type="radio" value="docplace" onChange={handleChange} name="docplace"/>

            <label for="docSpecialization">docSpecialization</label>
            <input type="radio" value="docSpecialization" onChange={handleChange} name="docSpecilization"/>

            <label for="docSpecialization">Year</label>
            <input type="radio" value="Year" onChange={handleChange} name="docSpecilization"/>
         </form>
    </div>    
    <div className="sumit-form">
        <form className=''>
        <h1>Modify</h1>
        <label for="unique">This Text is have to Modify:-</label>
        <input type="text" className="text-flied" id='uniqe' name ="ayush" onChange={e=>{setUpdatedText(e.target.value)}} placeholder ={ChangeText} autoComplete="false"/>
        <button type="submit" className='del' onClick={e=>{e.preventDefault() ; UpdateDoctor()}} >Submit</button>
      
        </form>
         <p>what is your press is --{'>'} {ChangeText}</p>
         <p>You type  --{'>'} {UpdatedText}</p>
    </div>
    
  {/* </div> */}
    </>
  )
}

export default ModifyDoctor
