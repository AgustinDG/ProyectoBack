const mongoose = require("../bin/mongoDb");
const errorMessage = require("../util/errorMessage")
const validators = require("../util/validators")
const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
    },
    email:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        unique:true
        
    },
    password:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        validate:{
            validator:function(value){
                return validators.passwordValidado(value)
            },
            message:errorMessage.USERS.passwordIncorrecto
        }
    }
});
module.exports = mongoose.model("users", usersSchema)