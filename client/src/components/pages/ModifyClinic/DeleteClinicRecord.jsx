import React , {useEffect,useState} from 'react'
import axios from 'axios';
import Sidebar from '../../Sidebar/Sidebar'
import {  useNavigate } from 'react-router-dom';
function DeleteClinicRecord() {
          const [Clinics,setClinic]= useState([]);
          const navigate = useNavigate();
          const getClinic = async ()=>{
            try {await axios.get('http://localhost:4000/clinic/get').then((res)=>setClinic(res.data))}
             catch (error) {console.log(error);}}
          useEffect(()=>{getClinic()},[])

          const jump = async(id)=>{
            try {
                    navigate("/modifyClinic",{state: {id : id}});
            } catch (error) {
                    console.log(error);
            }
          } 
          const deletehandle= async(id)=>{
                    try {
                              console.log(id);
                              
                              const res = await axios.delete(`http://localhost:4000/clinic/clinic/${id}`)
                              const newClinics=Clinics.filter(cil=> cil._id !==id);
                              setClinic(newClinics)
                    } catch (error) {
                              console.log(error);
                    }
                    
          }
  return (
    <>
          <Sidebar/>    
          <div className='admin'>
          <div className="patient-list"style={{left: "0px"}}>
              <table id="customers" >
              <tr><th>Name of Department</th><th>Department Head</th><th>Department Area</th><th>No of Employment</th><th>Department Phoneno</th><th>Opening Time</th><th>ClosingTime</th><th>Delete</th><th>Modifly this element</th></tr>
              {Clinics.map((cil=>
              <tr>
                {(cil.departmentName == null) ?  <td>null</td> : <td>{cil.departmentName}</td>}
                {(cil.departmentHead == null) ?  <td>null</td> : <td>{cil.departmentHead}</td>}
                {(cil.departmentArea == null) ?  <td>null</td> : <td>{cil.departmentArea}</td>}
                {(cil.departmentEmployment== null) ?  <td>null</td> : <td>{cil.departmentEmployment}</td>}
                {(cil.departmentphoneno== null) ?  <td>null</td> : <td>{cil.departmentphoneno}</td>}
                {(cil.DepartmentOpeningtime== null) ?  <td>Unavailable</td> : <td>{cil.DepartmentOpeningtime}</td>}
                {(cil.DepartmentClosingtime== null) ?  <td>Unavailable </td> : <td>{cil.DepartmentClosingtime}</td>}
                <td> < button className='del' type="submit" onClick={e =>{deletehandle(cil._id); }} >Delete </button></td>
                <td> <button className='del' onClick={e => {jump(cil._id)}} type="submit" >Modify this element</button></td>
              </tr> 
                ))}
              </table>
          </div>
          </div>

      
    </>
  )
}

export default DeleteClinicRecord
