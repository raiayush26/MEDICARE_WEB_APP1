import React, { useState ,useEffect} from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { useLocation} from 'react-router-dom';
function ModifyClinic() {
          const location =useLocation();
          const [ChangeText,setChangeText] = useState('')
          const [UpdatedText,setUpdatedText] = useState(" ")
          const [showForm, setShowForm] = useState(false);
          const [ClinicId,setClinicId] = useState('');
          const navigate = useNavigate();
          const  handleChange=(e)=>{
                    e.preventDefault(e);
                        const Value = e.target.value
                        setChangeText(Value)
          }
          const UpdatePatient = async(e)=>{
                    try {
                              const placeholder= ChangeText;
                              console.log("place "+placeholder);
                              switch (placeholder) {
                                case ("departmentName"):
                                     await axios.put(`http://localhost:4000/clinic/${ClinicId}`,{departmentName:UpdatedText}).then(navigate("/Modclinic"))
                                    break;
                                case ("departmentHead"):
                                          await axios.put(`http://localhost:4000/clinic/${ClinicId}`,{patientAge:UpdatedText}).then(navigate("/Modclinic"))
                                    break;
                                case ("departmentEmployment"):
                                          await axios.put(`http://localhost:4000/clinic/${ClinicId}`,{departmentEmployment:UpdatedText}).then(navigate("/Modclinic"))
                                    break;
                                case ("departmentphoneno"):
                                          console.log("patientNumber");
                                         await axios.put(`http://localhost:4000/clinic/${ClinicId}`,{departmentphonenor:UpdatedText}).then(navigate("/Modclinic"))
                                   break;   
                                case ("OpeningTime"):
                                        await axios.put(`http://localhost:4000/clinic/${ClinicId}`,{DepartmentOpeningtime:UpdatedText}).then(navigate("/Modclinic"))
                                      break;     
                                case ("ClosingTime"):
                                          await axios.put(`http://localhost:4000/clinic/${ClinicId}`,{DepartmentClosingtime:UpdatedText}).then(navigate("/Modclinic"))
                                          break
                                default:
                                    console.log("no");
                              }
                    } catch (error) {console.log(error);}
          }
          const getClinic = async ()=>{
                    try {
                    const id =location.state.id;
                    setClinicId(id)
                    await axios.get('http://localhost:4000/clinic/get').then((res)=>console.log(res.data))}
                     catch (error) {console.log(error);}}

                  useEffect(()=>{
                    // eslint-disable-next-line
                    getClinic(); renderUpdateForm1(); renderUpdateForm2()},[])
          const renderUpdateForm1= () => {
            return (<form className = '' >
               <label for="unique">This Text is have to Modify:-</label>
               <input type="text" className="text-flied" id='unique' name ="ayush" onChange={e=>{setUpdatedText(e.target.value)}} placeholder ={ChangeText} autoComplete="false"/> 
               <button type="submit" style={{margin: "12px 12px 12px 12px 12px"}} className='del' onClick={e=>{e.preventDefault() ; UpdatePatient()}} >Submit</button>
            </form>)
          }
          const timeFormate=()=>{
              setShowForm(!showForm)
            
          }
        const renderUpdateForm2= () => {
          return (<form className = '' >
          <label for="unique">This Text is have to Modify:-</label>
          <input type="time" className="text-flied" id='unique' name ="ayush" onChange={e=>{setUpdatedText(e.target.value)}} placeholder ={ChangeText} autoComplete="false"/> 
          <button type="submit" style={{margin: "12px 12px 12px 12px 12px"}} className='del' onClick={e=>{e.preventDefault() ; UpdatePatient()}} >Submit</button>
       </form>)
            
          } 
  return (
    <div>
          <>
      <div className="patient-list">
          <h5> Modify the particular item</h5>
            <form className='form-doc'>
                    
              <label for="departmentName">Department Name</label>
                  <input type="radio" value="departmentName"  id='departmentName' 
                    onClick={handleChange} name="departmentName"/>                  
                    
                    <label for="departmentHead">Department Head</label>
                  <input type="radio" value="departmentHead" 
                    onChange={handleChange} name="departmentHead"/>
                  
                  <label for="departmentArea">Department Area</label>
                  <input type="radio" value="departmentArea" 
                    onChange={handleChange} name="departmentArea"/>
                  
                  <label for="departmentEmployment">Department Employment</label>
                  <input type="radio" value="departmentEmployment" 
                    onChange={handleChange} name="departmentEmployment"/>
                  

                  <label for="departmentphoneno">Department Phoneno</label>
                  <input type="radio" value="departmentphoneno" 
                    onChange={handleChange} name="departmentphoneno"/>

                  <label for="DepartmentOpeningtime">Department Openingtime</label>
                  <input type="radio" value="OpeningTime" 
                    onChange={handleChange} name="DepartmentOpeningtime"/>

                    <label for="DepartmentClosingtime">ClosingTime</label>
                  <input type="radio" value="ClosingTime" 
                    onChange={handleChange} name="Closetim"/>
               </form>
          </div>    
          <div className="sumit-form" style={{margin: "120px 120px 120px 120px"}}>
          {/* { UpdatedText === "OpeningTime" ? renderUpdateForm1():renderUpdateForm()} */}
          <button type="submit"  className='del' onClick={timeFormate} >Updated Time</button>
          {renderUpdateForm1()}
          {showForm && (renderUpdateForm2()) }
               <p>what is your press is --{'>'} {ChangeText}</p>
               <p>You type  --{'>'} {UpdatedText}</p>
          </div>
          
        {/* </div> */}
          </>
    </div>
  )
}

export default ModifyClinic
