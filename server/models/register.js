const mongoose = require('mongoose');
const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    username: {
        type: String,
        
    },
    password: {
        type: String,
       
    }
    });
module.exports = mongoose.model('register', registerSchema);