const Patroute = require('express').Router();
const Patient = require('../models/patiModel');
const _ = require('lodash');
Patroute.post('/Patient', async (req, res)=>{
          try {
            // console.log("Patient port is clicked");
            console.log(req.body);
           var  place =  _.toLower(req.body.place);

          const newPatient = new Patient({
                    patientName: req.body.PatientName,
                    patientAge: req.body.PatientAge,
                    patientSex: req.body.PatientSex,
                    patientDisease: req.body.PatientDisease,
                    patientEmail: req.body.PatientEmail,
                    patientBlood: req.body.PatientBlood,
                    patientNumber: req.body.PatientPhoneNumber,
                    patientPlace: req.body.PatientState
                    })    
                    // save
          const save = await newPatient.save()
                    res.status(200).json("Patient added successfully");
                    console.log(newPatient);
          } catch (error) {
          console.log(error); 
          }

})
Patroute.get('/Patients', async (req, res)=>{
          
         try{
            // console.log('get function is clicked ');
             const reqPatient = await Patient.find({ });
             res.json(reqPatient)
             // save
            
         } catch (error) {
             res.json(error)
             
         }
})
Patroute.get('/Patients/:email', async (req, res)=>{
          
         try{
            // console.log('get function is clicked ');
             const reqPatient = await Patient.find({patientEmail:req.params.email});
                res.json({success: true, query:reqPatient})
            } catch (error) {
                res.json({success: false, message:error})
            }
})
Patroute.put('/api/Patients/:id', async (req, res)=>{
          console.log(req.params.id);
          try {
              const updateDept = await Patient.findByIdAndUpdate(req.params.id, {$set: req.body});
              console.log(updateDept);
              res.status(200).json("Update successfully");
          } catch (error) {
              res.json(error)
          }
})
Patroute.put('/updated/patient/:id', async(req,res)=>{
    console.log("Patient updated request is working");
    console.log(req.params.id);
    console.log(req.body);
    try {
         const updatePat= await Patient.findByIdAndUpdate(req.params.id,{$set: req.body})
         console.log(updatePat);
    } catch (error) {
        console.log(error);
    }
})
Patroute.delete('/api/Patients/:_id', async (req,res)=>{
        //   console.log(req.params._id);
          
          try {
              const deleteItem = await Patient.deleteOne({_id:req.params._id});
              res.status(200).json('Patient deleted');
          } catch (error) {
              res.json(error)
          }
})
module.exports = Patroute;