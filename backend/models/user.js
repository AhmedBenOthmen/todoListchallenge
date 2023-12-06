const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const userSchema = new Schema ({
    nom: {
        type:String,
    },
    prenom:{
        type:String,
    },
    email:{
     type:String,

    },
    password:{
        type:String,
    },
    isActive :{
        type:Boolean,
        default:true
    }
})

module.exports=mongoose.model('User',userSchema);