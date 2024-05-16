import React from "react";
import Home from "./pages/home/home";
import Register from "./pages/Register/register";
import Login from "./pages/login/login";
import Failure from "./pages/failure/failure";
import Success from "./pages/success/success";
// import Admin from "./pages/admin/admin";
import AdLogin from "./pages/admin/Login";
import Patient from "./pages/patient/Patient";
import AddClinicRecord from "./pages/AddClinic/AddClinicRecord";
import Doctor from "./pages/doctor/doctor";
import Footer from "./Footer/footer";
import NoPage from "./pages/NoPage/nopage";
import ListDoctorRecord from "./pages/ListDoctorRecord/ListDoctorRecord";
import ListClinicRecord from "./pages/ListClinicRecord/ListClinicRecord";
import DeletePatientRecords from "./pages/DeletePatientRecords/ModifyPatientList";
import DeleteDoctorRecords from "./pages/DeleteDoctorRecords/DeleteDoctorRecords";
import Delclinic from "./pages/ModifyClinic/DeleteClinicRecord";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListPatientRecord from "./pages/ListPatientRecord/ListPatientRecord";
import ModifyPatientRecord from "./pages/DeletePatientRecords/ModifyPatientRecord";
import ModifyClinic from "./pages/ModifyClinic/ModifyClinic";
import ModifyDoctor from "./pages/modDoc/ModifyDoctorRecord";
import About from "./pages/About/About";
import ModDocTable from "./pages/modDoc/ModifyDoctorTable";

function App(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path = "/" element = {<Home />}/>
                    <Route path = "/register" element = {<Register />} />
                    <Route path = "/login" element = {<Login />} />
                    <Route path = "/fail" element = {<Failure />} />
                    <Route path= "/success" element = {<Success />} />
                    <Route path= "/about" element = {<About />} />
                    <Route path= "/admin" element = {<AdLogin />} />
                   
                    {/* Doctor Section */}
                    <Route path = "/LisDoc" element={<ListDoctorRecord/>}/>
                    <Route path= "/addDoc" element ={<Doctor/>}/>
                    <Route path = "DeleteDoctorRecords" element={<DeleteDoctorRecords/>}/>
                    <Route path = "/modifyDocTable" element={<ModDocTable/>}/>
                    <Route path = "/modifyDoc" element={<ModifyDoctor/>}/>

                    {/* Clinic Section */}
                    <Route path = "/ListClinicRecord" element={<ListClinicRecord/>}/>
                    <Route path = "/modifyClinic" element={<ModifyClinic />}/>
                    <Route path= "/AddClinicRecord" element ={<AddClinicRecord/>}/>
                    <Route path = "/Delclinic" element={<Delclinic/>}/>
                    <Route path = "/Modclinic" element={<Delclinic/>}/>


                    <Route path = "/Modpatient" element={<DeletePatientRecords/>}/>                   
                    <Route path= "/Patient" element = {<Patient />}/>
                    <Route path = "/Lispatient" element={<ListPatientRecord/>}/>
                    <Route path = "/Delpatient" element={<DeletePatientRecords/>}/>
                   <Route path = "/modifyPatient" element={<ModifyPatientRecord />}/>


                    <Route path= '*' element ={<NoPage/>}/>
                    
                    
                </Routes>
                <Footer/> 
      
            </Router>
        </>        
    )
}

export default App;
// App