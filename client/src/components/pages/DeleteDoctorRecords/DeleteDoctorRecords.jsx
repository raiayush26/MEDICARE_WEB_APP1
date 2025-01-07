import React from 'react'
import { useState ,useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../../Sidebar/Sidebar";
import { Server } from '../../Server/Server';
function DeleteDoctorRecords() {
          const [Doctors,setDoctor]= useState([]);
          
  
          const getDoctor =async() =>{
                    try {
                         const res= await axios.get(`${Server}/Doc/api/doctors`).then((res)=> setDoctor(res.data))
                    } catch (error) {console.log(error);}
          }
          useEffect(()=>{
                    getDoctor()
          },[])
const DeleteDoctorRecord= async(id)=>{
          try {
                    console.log(id);
                    const res = await axios.delete(`${Server}/Doc/api/doctors/${id}`)
                    const newDoctorsItem=Doctors.filter(doc=> doc._id !==id);
                    setDoctor(newDoctorsItem)
          } catch (error) {
                    console.log(error);
          }
          
} 

  return (
    <>
     <Sidebar/>

<div className='admin'>
        <div className="patient-list">
                
                <table id="customers" >
                <tr><th>Doctor Full name</th><th>Specialization</th><th>Year of Experience</th><th>Doctor Email</th><th>Doctor Number</th><th>Doctor Area </th> <th>Delete</th></tr>
                {Doctors.map((doc=>
               
                <tr>     
                {(doc.docName == null) ?  <td>null</td> : <td>{doc.docName}</td>}
                {(doc.docSpecialization == null) ?  <td>null</td> : <td>{doc.docSpecialization}</td>}
                {(doc.Year == null) ?  <td>null</td> : <td>{doc.Year}</td>}
                {(doc.docEmail == null) ?  <td>null</td> : <td>{doc.docEmail}</td>}
                {(doc.docNumber == null) ?  <td>null</td> : <td>{doc.docNumber}</td>}
                {(doc.docplace == null) ?  <td>null</td> : <td>{doc.docplace}</td>}
                <td> < button className='del' type="submit" onClick={e =>{DeleteDoctorRecord(doc._id); }}  >Delete </button></td>
                </tr> 
                
                ))}
                </table>
                
        </div>    
</div>



      
    </>
  )
}

export default DeleteDoctorRecords
