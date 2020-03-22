var express = require('express');
var router = express.Router();

var main_controller = require('../controllers/main_game');

router.get('/', main_controller.get_main);
// router.post('/results', main_controller.post_results);

module.exports = router;