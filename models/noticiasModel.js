const mongoose = require ("../bin/mongodb")
const errorMessage = require ("../util/errorMessage")
const noticiasSchema = new mongoose.Schema({
    /*MANEJO DE ERRORES PARA HACER QUE EL CAMPO NAME SEA OBLIGATORIO VER en PRODUCTOCONTROLLERS*/
    titulo: {
        type: String,
        //required: true ERROR EN INGLES
        required: [true, errorMessage.GENERAL.campo_obligatorio],/*ERROR EN CASTELLANO*/
        //minlength: [5, errorMessage.GENERAL.minlength ]
    },
    cuerpo: {
        type: String,
        //required: true ERROR EN INGLES
        required: [true, errorMessage.GENERAL.campo_obligatorio]/*ERROR EN CASTELLANO*/
    },
    img: {
        type: String,
        //required: true ERROR EN INGLES
        required: [true, errorMessage.GENERAL.campo_obligatorio],/*ERROR EN CASTELLANO, {PATH} PARA NO PONER EL NOMBRE DEL CAMPO*/
    },
    fecha_carga: {
        type: String,
        //required: true ERROR EN INGLES
        required: [true, errorMessage.GENERAL.campo_obligatorio]/*ERROR EN CASTELLANO*/
    },
    fecha_inicio: {
        type: String,
        //required: true ERROR EN INGLES
        required: [true, errorMessage.GENERAL.campo_obligatorio]/*ERROR EN CASTELLANO*/
    },
    fecha_fin: {
        type: String,
        //required: true ERROR EN INGLES
        required: [true, errorMessage.GENERAL.campo_obligatorio]/*ERROR EN CASTELLANO*/
    },
    fecha_modificacion: {
        type: String,
        //required: true ERROR EN INGLES
        required: [true, errorMessage.GENERAL.campo_obligatorio]/*ERROR EN CASTELLANO*/
    },
    usr_id_carga: {
        type: String,
        //required: true ERROR EN INGLES
        required: [true, errorMessage.GENERAL.campo_obligatorio]/*ERROR EN CASTELLANO*/
    },
    categoria: {
        type: mongoose.Schema.ObjectId,/*SE VA A RELACIONAR CON EL MODELO CATEGORIAS*/
        ref:"categorias"
    },
    /*TIPO DE NOTICIA*/
    type: {
        type: String,
        enum: ["web","local"]
    }
})


module.exports =  mongoose.model("noticias", noticiasSchema )