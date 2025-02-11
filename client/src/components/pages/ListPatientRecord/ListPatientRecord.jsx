import { useState } from 'react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
// import Sidebar from "../../Sidebar/Sidebar";

// import "./list.css"
import './list.css'
import { Server } from '../../Server/Server';
const b = 'null'
function ListPatientRecord() {
          const [Patients,setPatient] = useState([]);
          const getPatient =async() => {
                    try { await axios.get(`${Server}/Pat/Patients`).then((res) =>setPatient(res.data));}
                     catch (error) {console.log(error);}        
          }
          useEffect(()=>{
            // eslint-disable-next-line
            getPatient()},[])
  return (
          <>
          {/* <Sidebar/> */}
    <div className="admin">
          <div className='patient-list'>
                    
                    <details>
                    <summary>Here are the list of all patient</summary>
                    <table id="customers" >
                    <tr>
                              <th>Patient Name</th><th>Patient Age</th><th>Patient Sex</th><th>Patient BloodGroup</th><th>Patient Area</th><th>Patient Disease</th><th>Patient Number</th><th>Patient Email-ID</th>
                    </tr>
                                        {
                                        Patients.map((pat=>
                                         <tr>
                                                            {/* <td>{pat.patientName}</td>
                                                            <td>{pat.patientAge}</td>
                                                            <td>{pat.patientSex}</td> */}

                                                            {/* {(pat.patientBlood == null) ?  <td>null</td> : <td>{pat.patientBlood}</td>} */}
                                                            {(pat.patientName == null) ?  <td>{b}</td> : <td>{pat.patientName}</td>}
                                                            {(pat.patientAge == null) ?  <td>null</td> : <td>{pat.patientAge}</td>}
                                                            {(pat.patientSex == null) ?  <td>null</td> : <td>{pat.patientSex}</td>}
                                                            {(pat.patientBlood == null) ?  <td>null</td> : <td>{pat.patientBlood}</td>}
                                                            {(pat.patientPlace == null) ?  <td>nill</td> : <td>{pat.patientPlace}</td>}
                                                            {(pat.patientDisease == null) ?  <td>nill</td> : <td>{pat.patientDisease}</td>}
                                                            {(pat.patientNumber == null) ?  <td>0</td> : <td>{pat.patientNumber}</td>}
                                                            {(pat.patientEmail == null) ?  <td>null</td> : <td>{pat.patientEmail}</td>}
                                                          
                                        </tr>
                                        ))}

                    </table>
                    </details>
                    
                </div>
          </div>
          </>
  )
}

export default ListPatientRecord;
