const usersModel = require("../models/usersModel")
module.exports={
    
    create:async function(req, res, next) {
        try{
        const user = new usersModel({
            name: req.body.name,
            email:req.body.email,
            password: req.body.password
        })
        const document = await user.save()
        
        res.json(document)
        }catch(e){
        
        next(e)
        }
        
    },
    login:async function(req, res, next) {
        try{
            
        }catch(e){
            
            next(e)
        }  
    },
    
}