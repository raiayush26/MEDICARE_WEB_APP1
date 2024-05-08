import axios from "axios";
import React, {useState, useEffect} from "react";
import {useLocation} from 'react-router-dom';
import './succes.css'
import SuccessHeader from "./successHeader";
import Item from "./listItem";
import DocPlace from "./docPlace"
import ClinicPlace from "./ClinicPlace";
import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";


let foundEntry = {};

function Success() {
    const location = useLocation();
    const [entries,setEntries] = useState([]);
    const [docAreas,setdocArea] = useState([]);
    const [cilAreas,setcilArea] = useState([]);
    const [Area,setArea] = useState(null);
    const [Area2,setArea2] = useState(null);
    const emails = location.state.UserName ;
    const [doitem,setitem] = useState(1)
    const [cilitem,setcilitem] = useState(1)
    const [isLoading, setIsLoading] = useState(false);
    // const loading = () => setIsLoading(!isLoading);
    useEffect(() => {
        async function getEntry() {
            try {
                console.log(emails);    
                const res = await axios.get(`http://localhost:4000/Pat/Patients/${emails}`)
                if(res.data.success ){
                    console.log("yes");
                    setArea(res.data.query[0].patientPlace);
                    setEntries(res.data.query[0]);
                }else{
                    toast.error("No Entry Found")
                }
                console.log(res.data);
                // setEntries(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getEntry();
    }, [])

    useEffect(() => {
        setIsLoading(true);
        const timeID = setTimeout(() => {
        async function getCinicPlace() {
            try {
                if (Area === null) {
                    setcilitem(0)
                } else {
                    const cils = await axios.get(`http://localhost:4000/reacherDept/dept/${Area}`)
                    console.log(cils.data)
                    if (cils.data === "Empty") {
                        console.log("yes");
                        setcilitem(0)
                    } else {
                        if (cils.data.length === 0) {
                            console.log("Array is null");
                            setcilitem(0)
                        } else {
                            setcilArea(cils.data)
                            setcilitem(1)
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        // console.log(Area.length);
        async function getDoctorPlace() {
            // console.log(Area);
            try {
                if (Area === null) {
                    setitem(0)
                } else {
                    const res = await axios.get(`http://localhost:4000/Doc/doc/${Area}`)
                    if (res.data === "Empty") {
                        setitem(0)
                    } else {
                        if (res.data.length === 0) {
                            console.log("Array is null");
                            setitem(0)
                        } else {
                            setdocArea(res.data)
                            setitem(1)
                        }
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
        getDoctorPlace();
        getCinicPlace()
        setIsLoading(false);
    }, 2000);
    return () => {clearTimeout(timeID);  };
       
    }, [Area]);
useEffect(() => {
    console.log(entries);
}, [foundEntry])
    const Search = (e) => {
        setArea("");
        setArea(e.target.value);

    }
    
    return (

        <div className="success">
            <ToastContainer position="top-center" limit={1}/>
            <SuccessHeader name={(entries.patientName) || null}  lName ={entries.lName || null}/>
            <div className="row fex">
                <div className="col-lg-4">
                    <Card
                        fName={entries.patientName}
                        phoneNumber={entries.patientNumber}
                        email={entries.patientEmail}/>
                </div>
            </div>
            <div className="area-selector">
                <div className="search-btn">
                    <div>
                        <h5>Setect the State</h5>
                    </div>
                </div>
                <select
                    name="state"
                    id="state"
                    onChange={(e) => Search(e)}
                    class="form-control bottom ">
                    <option value="">State / UT *
                    </option>
                    <Item key="1" name="Andhra Pradesh"/><Item key="2" name="Andaman"/>
                    <Item key="3" name="Arunachal Pradesh"/>
                    <Item key="4" name="Assam"/>
                    <Item key="5" name="Bihar"/>
                    <Item key="6" name="Chhaittisgarh"/>
                    <Item key="7" name="Goa"/>
                    <Item key="8" name="Gujarat"/>
                    <Item key="9" name="Hariyana"/>
                    <Item key="10" name="Himachal Pradesh"/>
                    <Item key="11" name="Jharkhand"/>
                    <Item key="12" name="Karnataka"/>
                    <Item key="13" name="Kerala"/>
                    <Item key="14" name="Madhya Pradesh"/>
                    <Item key="15" name="Maharashtra"/>
                    <Item key="16" name="Manipur"/>
                    <Item key="17" name="Meghalaya"/>
                    <Item key="18" name="Mizoram"/>
                    <Item key="19" name="Nagaland"/>
                    <Item key="20" name="Odisha"/>
                    <Item key="21" name="Punjab"/>
                    <Item key="22" name="Puducherry"/>
                    <Item key="23" name="Rajasthan"/>
                    <Item key="24" name="Sikkim"/>
                    <Item key="25" name="Tamil Nadu"/>
                    <Item key="26" name="Telangana"/>
                    <Item key="27" name="Uttar Pradesh"/>
                    <Item key="28" name="Uttarakhand"/>
                    <Item key="29" name="West Bengal"/>
                    <Item key="30" name="Andaman & Nicobar"/>
                    <Item key="31" name="Chandigarh"/>
                    <Item key="32" name="Dadra & Nagar Haveli and Daman & Diu"/>
                    <Item key="33" name="Delhi"/>
                    <Item key="34" name="Jammu & Kashmir"/>
                    <Item key="35" name="Ladakh"/>
                    <Item key="36" name="Lakshadweep"/>

                </select>
            </div>
            {(isLoading) ? <div className="loading">Loading...</div> : 
            
            <>
            <DocPlace place={(Area)}/>
            <div className="doc-place">
                {(doitem === 1)
                    ? <table id="cust">
                            <tr>
                                <th>Doctor Full name</th>
                                <th>Specialization</th>
                                <th>Year of Experience</th>
                                <th>Doctor Email</th>
                                <th>Doctor Number</th>
                                <th>Doctor Area
                                </th>
                            </tr>
                            {docAreas.map((doc => <tr>
                                {(doc.docName == null)
                                    ? <td>null</td>
                                    : <td>{doc.docName}</td>}
                                {(doc.docSpecilization == null)
                                    ? <td>null</td>
                                    : <td>{doc.docSpecilization}</td>}
                                {(doc.Year == null)
                                    ? <td>null</td>
                                    : <td>{doc.Year}</td>}
                                {(doc.docEmail == null)
                                    ? <td>null</td>
                                    : <td>{doc.docEmail}</td>}
                                {(doc.docNumber == null)
                                    ? <td>null</td>
                                    : <td>{doc.docNumber}</td>}
                                {(doc.docplace == null)
                                    ? <td>null</td>
                                    : <td>{doc.docplace}</td>}
                            </tr>))}
                        </table>
                    : <h5>
                        Not Found</h5>
}
            </div>
            <ClinicPlace place ={(Area)}/>
            <div className="doc-place">
                {(cilitem === 1)
                    ? <table id="cust">
                            <tr>
                                <th>Name of Department</th>
                                <th>Department Head</th>
                                <th>Department Area</th>
                                <th>No of Employment</th>
                                <th>Department Phoneno</th>
                                <th>Opening Time</th>
                                <th>ClosingTime</th>
                            </tr>
                            {cilAreas.map((cil => <tr>
                                {(cil.departmentName == null)
                                    ? <td>null</td>
                                    : <td>{cil.departmentName}</td>}
                                {(cil.departmentHead == null)
                                    ? <td>null</td>
                                    : <td>{cil.departmentHead}</td>}
                                {(cil.departmentArea == null)
                                    ? <td>null</td>
                                    : <td>{cil.departmentArea}</td>}
                                {(cil.departmentEmployment == null)
                                    ? <td>null</td>
                                    : <td>{cil.departmentEmployment}</td>}
                                {(cil.departmentphoneno == null)
                                    ? <td>null</td>
                                    : <td>{cil.departmentphoneno}</td>}
                                {(cil.DepartmentOpeningtime == null)
                                    ? <td>Unavailable</td>
                                    : <td>{cil.DepartmentOpeningtime}</td>}
                                {(cil.DepartmentClosingtime == null)
                                    ? <td>Unavailable
                                        </td>
                                    : <td>{cil.DepartmentClosingtime}</td>}
                            </tr>))}
                        </table>
                    : <h5>
                        Not Found</h5>
}
            </div>
            </>

}
        </div>
    )
}

export default Success;