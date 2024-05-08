const mongoose = require('mongoose');
const registerSchema = new mongoose.Schema({
    FullName: {
        type: String,
        
    },
    username: {
        type: String,
        
    },
    Password: {
        type: String,
       
    }
    });
module.exports = mongoose.model('register', registerSchema);