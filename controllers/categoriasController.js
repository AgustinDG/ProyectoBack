const noticiasModel = require ("../models/categoriasModel")
module.exports={
    getAll: async function(req,res,next){
        try{
            const noticias = await noticiasModel.find()
            res.json(noticias)
        }catch(e){
            next(e)
        }
    },
    create: async function(req,res,next){
        try{
            console.log(req.body)
            console.log(req.body.name)
            const categoria = new noticiasModel({
                name:req.body.name
            })
            const response = await noticias.save()
            res.json(response)
        }catch(e){
            next(e)
        }
    }
}