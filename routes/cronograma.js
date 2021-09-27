var express = require('express');
var router = express.Router();
const cronogramaController = require("../controllers/cronogramaController");

/* GET users listing. */
router.get('/', cronogramaController.getAll);

router.get('/:id', cronogramaController.getById);

//Para crear un nuevo cronograma - Inserta en la base de datos
router.post('/', cronogramaController.create);

//Para actualizar un cronograma 
router.put('/:id', cronogramaController.update);

//Para eliminar un cronograma
router.delete('/:id', cronogramaController.delete);
module.exports = router;