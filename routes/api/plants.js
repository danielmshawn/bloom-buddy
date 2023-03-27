const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/api/plants')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


// All paths start eith '/api/plants'


//GET  /api/plants
router.get('/', ensureLoggedIn, plantsCtrl.index);

module.exports = router;