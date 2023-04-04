const express = require('express');
const router = express.Router();
const userPlantsCtrl = require('../../controllers/api/userplants')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start eith '/api'

router.put("/api/userplants/:id", ensureLoggedIn, userPlantsCtrl.update);

router.delete("/api/userplants/:id", ensureLoggedIn, userPlantsCtrl.deleteUserPlant);

module.exports = router;