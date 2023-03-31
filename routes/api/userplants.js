const express = require('express');
const router = express.Router();
const userPlantsCtrl = require('../../controllers/api/userplants')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start eith '/api'

router.put("/userplants/:id", ensureLoggedIn, userPlantsCtrl.update);


module.exports = router;