const express = require('express');
const router = express.Router();
const controller = require('../controllers/index-controller');


router.get('/', controller.home);
router.post('/test', controller.api);



module.exports = router;
