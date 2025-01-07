import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Sidebar from '../../Sidebar/Sidebar'
import { Server } from '../../Server/Server';
function ListDoctorRecord() {
          const [Doctors,setDoctor]= useState([]);
          const getDoctor =async() =>{
                    try {
                        await axios.get(`${Server}/Doc/api/doctors`).then((res)=> setDoctor(res.data))
                           
                    } catch (error) {
                              console.log("rffgg"+error);
                              
                    }
          }
          useEffect(()=>{
                    getDoctor()
          },[])
  return (
          <>
          <Sidebar/>

        <div className='admin'>
                <div className="patient-list">
                        <details>
                        <summary>Here are the list of all Doctor</summary>
                        <table id="customers" >
                        <tr><th>Doctor Full name</th><th>Specialization</th><th>Year of Experience</th><th>Doctor Email</th><th>Doctor Number</th><th>Doctor Area </th></tr>
                        {Doctors.map((doc=>
                        <tr>     
                        {(doc.docName == null) ?  <td>null</td> : <td>{doc.docName}</td>}
                        {(doc.docSpecialization == null) ? <td>null</td> : <td>{doc.docSpecialization}</td>}
                        {(doc.Year == null) ?  <td>null</td> : <td>{doc.Year}</td>}
                        {(doc.docEmail == null) ?  <td>null</td> : <td>{doc.docEmail}</td>}
                        {(doc.docNumber == null) ?  <td>null</td> : <td>{doc.docNumber}</td>}
                        {(doc.docplace == null) ?  <td>null</td> : <td>{doc.docplace}</td>}
                        </tr> 
                        ))}
                        </table>
                        </details>
                </div>    
        </div>


          </>
  )
}

export default ListDoctorRecord
