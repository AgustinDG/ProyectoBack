const cronogramaModel = require("../models/cronogramaModel");


module.exports={
    getAll: async function(req, res, next) {
        const cronograma = await cronogramaModel.find()
        res.json(cronograma)
    },
    getById: async function(req, res, next){
        const clase = await cronogramaModel.findById(req.params.id)
        res.json(clase)
    },
    create: async function(req, res, next) {
        console.log(req.body) //recibe lo enviado en el body del request
        try{
        const clase = new cronogramaModel({
            horario: req.body.horario,
            carrera: req.body.carrera,
            materia: req.body.materia,
            aula: req.body.aula,
            docente: req.body.docente,
            estado: req.body.estado
        })
        const documento = await clase.save()
        res.json(documento)
    }catch(e){
        console.log(e);
        next(e)
    }
    },

        update: async function(req, res, next) {
        console.log(req.params.id) //recibe parametros por medio de la URL y tambien (en la linea de abajo) el body
        console.log(req.body) //recibe lo enviado en el body del request
        try{
        const clase = await cronogramaModel.updateOne({_id:req.params.id}, req.body)
        res.json(clase)
        }catch(e){

        }
        
    },
    delete: async function(req, res, next) {
         //recibe parametros por medio de la URL y no recibe el body
        try{
            const clase = await cronogramaModel.deleteOne({_id:req.params.id})
            res.json(clase)
            }catch(e){
    
            }
    },
}