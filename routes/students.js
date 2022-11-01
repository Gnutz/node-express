var express = require('express');
var StudentController = require('../controllers/StudentController')
var router = express.Router();

/* GET home page. */
router.get('/', StudentController.overview);
router.get('/create', StudentController.create_get)
router.post('/create', StudentController.create);

module.exports = router;
