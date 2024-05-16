import React, { useState ,useEffect} from 'react'
import axios from 'axios';
// import Sidebar from '../../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';
import { useLocation} from 'react-router-dom';
function ModifyPatientRecord() {
          const location =useLocation();
         
          const [,setPatient] = useState([]);
          const [ChangeText,setChangeText] = useState('')
          const [UpdateText,SetUpdateText] = useState(" ")
          const [PatientID,setPatientID] = useState('');
          const navigate = useNavigate();

          const  handleChange=(e)=>{
                    e.preventDefault(e);
                        const Value = e.target.value
                        setChangeText(Value)
          }
          const UpdatePatient = async(e)=>{
                    try {  const placeholder= ChangeText;
                              console.log("place "+placeholder);
                    switch (placeholder) {
                              case ("patientName"):
                                await axios.put(`http://localhost:4000/Pat/updated/patient/${PatientID}`,{patientName:UpdateText}).then(navigate("/Delpatient"))
                                break;
                              case ("patientAge"):
                                await axios.put(`http://localhost:4000/Pat/updated/patient/${PatientID}`,{patientAge:UpdateText}).then(navigate("/Delpatient"))
                                break;
                              case ("patientDisease"):
                                await axios.put(`http://localhost:4000/Pat/updated/patient/${PatientID}`,{patientDisease:UpdateText}).then(navigate("/Delpatient"))
                                break;
                              case ("patientPhoneNo"):
                                await axios.put(`http://localhost:4000/Pat/updated/patient/${PatientID}`,{patientNumber:UpdateText}).then(navigate("/Delpatient"))
                                break;   
                              case ("patientBlood"):
                                await axios.put(`http://localhost:4000/Pat/updated/patient/${PatientID}`,{patientBlood:UpdateText}).then(navigate("/Delpatient"))
                                break;     
                              case ("patientPlace"):
                                await axios.put(`http://localhost:4000/Pat/updated/patient/${PatientID}`,{patientPlace:UpdateText}).then(navigate("/Delpatient"))
                                break
                              default:
                                console.log("no");
                                break;
                          }
          }catch(error){
            console.log(error);
          }         
}
          
          const getPatientDetails =async() => {
                    try {const id =location.state.id;
                              setPatientID(id)
                              const res = await axios.get('http://localhost:4000/Pat/Patients').then((res) =>setPatient(res.data));}
                     catch (error) {console.log(error);alert("id is not found!")}}
          useEffect(()=>{getPatientDetails()},[])
  return (
          <>
        

          {/* <div className='admin'> */}
          
         
          <div className="patient-list">
          <h5> Modify the particular item</h5>
            <form className='form-doc'>
                    
              <label for="patientName">Patient Name</label>
              <input type="radio" value="patientName"  id='patientName' onClick={handleChange} name="patientName"/>                  
                    
              <label for="patientAge">Patient Age</label>
              <input type="radio" value="patientAge" onChange={handleChange} name="patientAge"/>

              <label for="patientDisease">Patient Disease</label>
              <input type="radio" value="patientDisease" onChange={handleChange} name="patientDisease"/>

              <label for="patientPhoneNo">Patient Phoneno</label>
              <input type="radio" value="patientPhoneNo"onChange={handleChange} name="patientPhoneNo"/>

               <label for="patientBlood">Patient Blood</label>
              <input type="radio" value="patientBlood"onChange={handleChange} name="patientBlood"/>

              <label for="patientPlace">Patient Place</label>
              <input type="radio" value="patientPlace"onChange={handleChange} name="patientPlace"/>
               </form>
          </div>    
          <div className="sumit-form" style={{marginTop: "67px"}}>
              <form className=''>
              {/* <input type="text" className="bottom"  name ="ayush"  placeholder ={ChangeText} autoComplete="false"/> */}
              <label for="unique">This Text is have to Modify:-</label>
              <input type="text" className="text-flied" id='unique' name ="ayush" onChange={e=>{SetUpdateText(e.target.value)}} placeholder ={ChangeText} autoComplete="false"/>
              <button type="submit" className='del' onClick={e=>{e.preventDefault() ; UpdatePatient()}} >Submit</button>
            
              </form>
               <p>what is your press is --{'>'} {ChangeText}</p>
               <p>You type  --{'>'} {UpdateText}</p>
          </div>
          
        {/* </div> */}
          </>
  )
}

export default ModifyPatientRecord
