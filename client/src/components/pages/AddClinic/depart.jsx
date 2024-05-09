import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Sidebar from "../../Sidebar/Sidebar";
import './depart.css'
function ReacherDept() {
  const [deptname,setdeptname]= useState('');
  const [deptHead,setdeptHead] = useState(' ');
  const [deptcity,setdeptcity]= useState();
  const [memindept,setmemindept]= useState('')
  const [deptphoneno,setdeptno]= useState('');
  const [opentime, setopen]= useState()
  const [closetime, setclose]= useState()
  const [entries, setEntries] = useState([]);
  const addItem = async() => {
    //  e.preventDefault();
    
     try {
       const res = await axios.post(`http://localhost:4000/reacherDept/api/reacherDept`,
       {
        name: deptname,
        head:deptHead,
        Area:deptcity,
        Enploy:memindept,
        Phoneno:deptphoneno,
        Opentime:opentime,
        Closingtime:closetime

      
      })
        console.log(res.data);
        console.log();
        setEntries((prev) => [...prev, res.data]);
        
        

     } catch (error) {
       console.error(error);
     }
   }
  return (
    <>
      <Sidebar/>
    <main class="form-signin ">
      <form >    
        <h1 class="h3 mb-3 mb-4 fw-normal" >Add Clinic</h1>   

        <div class="form-floating">
          <input type="text" name="deptname" style={{ height: '5px' }} class="form-control bottom inputWithdeptName" id="floatingInput1" placeholder="Department name:" onChange={(e)=>{setdeptname(e.target.value)}} required autoFocus/>
          <label htmlFor="floatingInput1">Department name:</label>
        </div>
      
      <div class="form-floating">
        <input type="text" name="deptHead" style={{ height: '5px' }}class="form-control bottom inputWithDepartHead custom-input" id="floatingInput2"  onChange={(e)=>{setdeptHead(e.target.value)}} placeholder="Department Head"required/>
        
        <label htmlFor="floatingInput2"  >Department Head</label>
      </div>
      <div class="form-floating">
        <div className='box'>
        
            <option value="" className='clinic-state-lable'>State / UT *</option>
          <select name="state" id="state"onChange={(e)=>{setdeptcity(e.target.value)}} class="form-control bottom clinic-state  ">
            <label htmlFor="state">Clinic State:-</label>
                                        <option value="Andaman">Andaman &amp; Nicobar Islands</option>
                                        <option value="Andhra_Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal_Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Chattisgarh">Chattisgarh</option>
                                        <option value="Dadra_Nagar_Haveli">Dadra &amp; Nagar Haveli</option>
                                        <option value="Daman_Diu">Daman &amp; Diu</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal_Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu_Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Ladakh">Ladakh</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Madhya_Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="NCR">NCT OF Delhi</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Puducherry">Puducherry</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil_Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar_Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West_Bengal">West Bengal</option>
                                </select>
                                
        </div>

      </div>
      <div class="form-floating">
        <input type="number" min="0" step="1" style={{ height: '15px' }} onChange={(e)=>{setmemindept(e.target.value)}}name="empl"class="form-control bottom inputWithEMPName" id="floatingNumber1" placeholder="No Of Employement"required/>
        <label htmlFor="floatingNumber1" >No Of Employment</label>
      </div>
      <div class="form-floating">
        <input type="time" min="0" step="1" name="time" style={{ height: '15px' }} onChange={(e)=>{setopen(e.target.value)}}class="form-control bottom inputWithFullName" id="floatingNumber1" required/>
        <label htmlFor="floatingNumber1" >Opening Time</label>
      </div> 
      <div class="form-floating">
        <input type="time" min="0" step="1" name="Cosingtime" style={{ height: '15px' }}  onChange={(e)=>{setclose(e.target.value)}}class="form-control bottom inputWithFullName" id="floatingNumber1" required/>
        <label htmlFor="floatingNumber1" >Closing  Time</label>
      </div> 
      <div class="form-floating">
        <input type="tel" min="0" step="1" name="phone" style={{ height: '15px' }} class="form-control bottom inputWithEMPPhoneno" id="floatingNumber1" onChange={(e)=>{setdeptno(e.target.value)}}placeholder="Department Phoneno"required/>
        <label htmlFor="floatingNumber1" >Department Phoneno</label>
      </div>
      

    
      <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={e => {addItem(e.preventDefault())}}>New Department </button>
      <p class="mt-5 mb-3 text-muted">&copy; Medicare</p>
    </form>
  </main>
    
    </>
  )
}

export default ReacherDept;
