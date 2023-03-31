const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/api/plants')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


// All paths start eith '/api/plants'


//GET  /api/plants
router.get('/', ensureLoggedIn, plantsCtrl.index);

// GET /api/plants/available
router.get('/available', ensureLoggedIn, plantsCtrl.available);

// POST /api/plants
router.post('/', ensureLoggedIn, plantsCtrl.create);

// POST /api/plants/:id/user
router.post('/:id/user', ensureLoggedIn, plantsCtrl.addToUser);

// PUT /api/plants/user/:userPlantId
router.put('/user/:userPlantId', ensureLoggedIn, plantsCtrl.updateUserPlant)

module.exports = router;