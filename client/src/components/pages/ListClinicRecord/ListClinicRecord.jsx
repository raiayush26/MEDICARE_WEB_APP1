import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'

function ListClinicRecord() {
  const [clinic,setClinic]= useState([]);
  const getClinic = async ()=>{
    try {
      await axios.get('http://localhost:4000/clinic/get').then((res)=>setClinic(res.data))
      console.log(clinic);
      
    } catch (error) {
      console.log(error);      
    }
  } 
  useEffect(()=>{
    // eslint-disable-next-line
    getClinic()

  },[])
return (
        <>
          <Sidebar/>
    
          <div className='admin'>
                <div className="patient-list">
                    <details><summary>Here are the list of Clinic</summary>
                   
                    <table id="customers" >
                    <tr><th>Name of Department</th><th>Department Head</th><th>Department Area</th><th>No of Employment</th><th>Department PhoneNo</th><th>Opening Time</th><th>ClosingTime</th></tr>
                  
                    {clinic.map((cil=>
                    
                    <tr>
                    
                      {(cil.departmentName == null) ?  <td>null</td> : <td>{cil.departmentName}</td>}
                      {(cil.departmentHead == null) ?  <td>null</td> : <td>{cil.departmentHead}</td>}
                      {(cil.departmentArea == null) ?  <td>null</td> : <td>{cil.departmentArea}</td>}
                      {(cil.departmentEmployment== null) ?  <td>null</td> : <td>{cil.departmentEmployment}</td>}
                      {(cil.departmentphoneno== null) ?  <td>null</td> : <td>{cil.departmentphoneno}</td>}
                      {(cil.DepartmentOpeningtime== null) ?  <td>Unavailable</td> : <td>{cil.DepartmentOpeningtime}</td>}
                      {(cil.DepartmentClosingtime== null) ?  <td>Unavailable </td> : <td>{cil.DepartmentClosingtime}</td>}
                      
                    </tr> 
                      ))}
                    </table>
                    </details>
                 </div>

          </div>


          </>

  )
}

export default ListClinicRecord
