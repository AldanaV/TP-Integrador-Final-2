const express = require('express');
const router = express.Router();
const libroController = require('../controllers/librosController');


router.get('/', libroController.getLibro);
router.get('/:id', libroController.getLibroById);
router.post('/', libroController.createLibro);
router.put('/:id', libroController.updateLibro);
router.delete('/:id', libroController.deleteLibro);


module.exports = router;