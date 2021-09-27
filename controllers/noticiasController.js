const noticiasModel = require ("../models/noticiasModel")
const categoriasModel = require ("../models/noticiasModel") 
/*LOGICA DEL PROYECTO */
module.exports={
    getAll: async function(req, res, next) {
        try{
        const noticias = await noticiasModel.find().populate("categoria")/*POPULATE ES PARA LISTAR LAS CATEGORIAS VINCULADAS*/
        res.json(noticias);
        }catch(e){
        next (e)
        }
    },

    getById : async function(req, res, next) {
        try{
        const noticias = await noticiasModel.findById(req.params.id)
        res.json(noticias);
        }catch(e){
        next (e)
        }
    },

    create: async function(req, res, next) {
        try{
        console.log(req.body)
        const noticia = new noticiasModel({
            titulo: req.body.titulo,
            cuerpo: req.body.cuerpo,
            img: req.body.img,
            fecha_carga: req.body.fecha_carga,
            fecha_inicio: req.body.fecha_inicio,
            fecha_fin: req.body.fecha_fin,
            fecha_modificacion: req.body.fecha_modificacion,
            usr_id_carga: req.body.usr_id_carga,
            categoria: req.body.categoriaId,
            type: req.body.type
            
        })
        const noticias = await noticia.save()
        res.json(noticias)
        }catch(e){
        console.log(e);
        next (e)/*LLAMA A LA FUNCION ERRORS HANDLER de APP OTRA FORMA DE MANEJAR ERRORES*/
        //res.json({error:true,"message":e.message})/*MANEJO DE ERRORES PARA HACER QUE EL CAMPO NAME SEA OBLIGATORIO VER en PRODUCTOCONTROLLERS*/
        }
    },

    update: async function(req, res, next) {
        console.log(req.params.id)
        console.log(req.body) 
        try{
            const noticia =  await noticiasModel.updateOne({_id:req.params.id},req.body)
            res.json(noticia)
            }catch(e){
            next (e)
            }    
    },

delete: async function(req, res, next) {
        try{
            const noticia =  await noticiasModel.deleteOne({_id:req.params.id},req.body)
            res.json(noticia)
            }catch(e){
            next (e)
            }
    }    
}   