const express = require('express');
const router = express.Router();
const controller = require('../controllers/trainingController');

router.get('/', controller.index);
router.get('/add', controller.addForm);
router.post('/add', controller.addTraining);
router.get('/edit/:id', controller.editForm);
router.post('/edit/:id', controller.updateTraining);
router.post('/delete/:id', controller.deleteTraining);
router.get('/stats', controller.showStats);

module.exports = router;
