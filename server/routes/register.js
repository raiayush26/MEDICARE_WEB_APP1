const router = require('express').Router();
const bcrypt = require("bcrypt");
const register = require('../models/register');

// Insert item
router.post('/post', async (req, res)=>{
    try{
        console.log(req.body);
        const plainPassword = req.body.password;
        
        const hashPassword = bcrypt.hashSync(plainPassword, 7);
        let FullName = req.body.fName + " " + req.body.lName;
        const newItem = new register({
            FullName : FullName,
            username: req.body.email,
            Password: hashPassword
        })
        // save
        const save = await newItem.save()
        

        res.status(200).json({success: true,message:"Add_success" });
    } catch (error) {
       
        console.log(error);
        if(error.code === 11000){
            res.json({success: false,message:"Email already exist"});
        }
    }
})

router.get("/", async(req, res) => {
    try {
        const entries = await register.find({})
        res.status(200).json(entries);
    } catch (error) {
        res.json(error);
    }
})
router.get("/:email", async(req, res) => {
    try {
        const entries = await register.find({username:req.params.email})
        res.status(200).json(entries);
    } catch (error) {
        res.json(error);
    }
})
router.post("/login", async (req, res) => {
    console.log("login");
    try {
        const reqEmail = req.body.email;
        const reqPassword = req.body.password;
        console.log(reqPassword);
        const item = await register.findOne({username: reqEmail});
        const {username, Password} = item;
        console.log("username:- "+username);
        console.log("Password "+ Password);
        if(item === null){
            res.json("no")
        }else{
        
        if(bcrypt.compareSync(reqPassword, Password) === true){
            console.log("true");
                res.status(200).json(reqEmail)
        }else if(bcrypt.compareSync(reqPassword, Password) === false){
            console.log("false");
            res.json("false");
        }
    }
        
    } catch (error) {
        res.json(error);
    }
})


router.delete("/:id", async(req, res) => {
    try {
        console.log(req.params.id);
        const deleteItem = await register.deleteOne({_id:req.params.id});
        res.status(200).json('Item deleted');
    } catch (error) {
        res.json(error);
    }
})



module.exports = router;
