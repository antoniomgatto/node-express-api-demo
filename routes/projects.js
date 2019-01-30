const projectsController = require('../controllers/projects');
var express = require('express');
var router = express.Router();

router.get('/', projectsController.index);
router.post('/', projectsController.create);
router.get('/:id', projectsController.show);
router.put('/:id', projectsController.update);
router.delete('/:id', projectsController.delete);

module.exports = router;
