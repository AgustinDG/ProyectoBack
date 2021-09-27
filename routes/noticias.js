var express = require('express');
var router = express.Router();
const noticiasController = require("../controllers/noticiasController");

/* GET users listing. */
router.get('/', noticiasController.getAll);

router.get('/:id', noticiasController.getById);

//Para crear un nuevo cronograma - Inserta en la base de datos
router.post('/', noticiasController.create);

//Para actualizar un cronograma 
router.put('/:id', noticiasController.update);

//Para eliminar un cronograma
router.delete('/:id', noticiasController.delete);

module.exports = router;