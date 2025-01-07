import React from 'react'
import { useState } from 'react';
// Implement the photo upload
//  import { useRef } from "react";
import {ref,  getDownloadURL, uploadBytes} from "firebase/storage";
// import {uploadBytesResumable} from "firebase/storage";
import { storage } from "../../../Firebase/firebase";

import {useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import Sidebar from "../../Sidebar/Sidebar";
import './Patient.css';
import Item from '../../ListItem/ListItem';
function Patient() {
  const location =useLocation();
  const firstName = location.state.firstName;
  const lastName = location.state.lastName
  const [PatientName,SetPatientName]= useState(firstName+" "+lastName);
  const [PatientAge,setPatientAge]= useState( );
  const [PatientSex,setPatientSex]= useState('');
  const [PatientBloodGroup,setPatientBloodGroup]= useState('');
  // const [patEmail,setpatEmail]= useState(location.state.email1);
  const [patDisease,setPatientDisease]= useState('');
  const [PatientPhoneNo,setPatientPhoneNo]= useState();
  const [PatientState,setPatientState]= useState();
  const [,setEntry]= useState([]);
  // Implement The UserPhoto
  const [UserPhoto, SetUserPhoto] = useState("");
 

  const UserPhotoFile = (e) => {
    SetUserPhoto(e.target.files[0])
  }

  const navigate = useNavigate();
  const Email = location.state.Email;     
 
  const Search = (e) => {
    setPatientState("");
    setPatientState(e.target.value);

}

  // const addItem = async() => {
  //   //  e.preventDefault();
  //    try {
  //     console.log(PatientBloodGroup);
  //     console.log(Email);
  //     console.log(PatientState);
  //      const res = await axios.post(`http://localhost:4000/Pat/Patient`,
  //      {
  //       PatientName: PatientName,
  //       PatientAge:PatientAge,
  //       PatientSex:PatientSex,
  //       PatientBlood:PatientBloodGroup,
  //       PatientEmail:Email,
  //       PatientDisease:patDisease,
  //       PatientPhoneNumber:PatientPhoneNo,
  //       PatientState:PatientState
  //     })
  //       setEntry((prev) => [...prev, res.data]);
       
  //       navigate("/success",{state: {UserName : Email}});
  //    } catch (error) {
  //      console.error(error);
  //    }
  //  }
  const addItem = async() => {
    //  e.preventDefault();
     try {
      console.log(PatientBloodGroup);
      console.log(Email);
      console.log(PatientState);
      const imageRef = ref(storage, `images/${Email}/${UserPhoto.name}`);
         console.log(imageRef);
        await uploadBytes(imageRef, UserPhoto).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (downloadURL) => {
          const res = await axios.post(`http://localhost:4000/Pat/Patient`,
       {
        PatientName: PatientName,
        PatientAge:PatientAge,
        PatientSex:PatientSex,
        PatientBlood:PatientBloodGroup,
        PatientEmail:Email,
        PatientDisease:patDisease,
        PatientPhoneNumber:PatientPhoneNo,
        PatientState:PatientState,
        photolink:downloadURL
      })
      setEntry((prev) => [...prev, res.data]);
      navigate("/success",{state: {UserName : Email}})
        })
        
      })
      
     } catch (error) {
       console.error(error);
     }
   }
  
  return (
    <>
      {/* <Sidebar/> */}
    <main class="form-signin">
    <form>    
      <h1 class="h3 mb-3 mb-4 fw-normal">Patient Form </h1>   
  
      <div class="form-floating">
        <input type="text" name="PatientName" value={firstName+" "+lastName}  class="form-control bottom inputWithFullName" id="floatingInput1" placeholder="Patient Full name:" onChange={(e)=>{SetPatientName(e.target.value)}}required autoFocus/>
        <label htmlFor="floatingInput1">Patient Full name:</label>
      </div>
      <div class="form-floating">
        <input type="text" name="PatientAge"  class="form-control bottom inputWithMargin" id="floatingInput2" placeholder="Patient's Age" onChange={(e)=>{setPatientAge(e.target.value)}}required/>
        <label htmlFor="floatingInput2">Patient's Age</label>
      </div>
      <div class="form-floating">
        <input type="text" name="PatientSex" class="form-control bottom inputWithMargin" id="floatingInput2" placeholder="Sex"  onChange={(e)=>{setPatientSex(e.target.value)}}required/>
        <label htmlFor="floatingInput2">Patient's Sex</label>
      </div>
      <div class="form-floating">
          <input type="text" name="PatientBloodGroup"class="form-control bottom inputWithMargin" id="floatingBlood " onChange={(e)=>{setPatientBloodGroup(e.target.value)}}placeholder="Blood group"required/>
          <label htmlFor="floatingBlood ">Blood group</label>
      </div>
      <div class="form-floating">
        <input type="text" name="patDisease"class="form-control bottom inputWithMargin" id="floatingdisease" onChange={(e)=>{setPatientDisease(e.target.value)}}placeholder="Patient Disease"required/>
        <label htmlFor="floatingdisease">Patient Disease</label>
    </div>
    <div class="form-floating">
      <input type="tel" name="patNumber"class="form-control bottom inputWithphone" id="floatingPhone"  onChange={(e)=>{setPatientPhoneNo(e.target.value)}} placeholder="Patient Phone Number:-"required />
      <label htmlFor="floatingPhone">Patient Phone Number:-</label>
  </div>
    <div class="form-floating">
      <label htmlFor="floatingPhone">Patient Photo:-</label>
      <input type="file" name="photo"class="form-control bottom inputWithphone" id="floatingPhone" value={UserPhoto.src} onChange={UserPhotoFile} placeholder="Patient Phone Number:-"required />
  </div>


      <div class="form-floating ">
      <label htmlFor="state">Patient State:-</label>
      <select
                    name="state"
                    id="state"
                    onChange={(e) => Search(e)}
                    class="form-control bottom inputWithstate">
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
      
  
     
      <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={e => {addItem(e.preventDefault())}}>Add as Patient </button>
      <p class="mt-5 mb-3 text-muted">&copy; hospital</p>
    </form>
  </main>
 
   
    </>
  )
}

export default Patient;
