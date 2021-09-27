const mongoose= require ("../bin/mongoDb");

const cronogramaSchema = new mongoose.Schema({
    horario: String,
    carrera: String,
    materia: String,
    aula: Number,
    docente: String,
    estado: String,
})

module.exports = mongoose.model("cronograma",cronogramaSchema)