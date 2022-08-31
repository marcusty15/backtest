const express = require('express');

const {signupLectorController, allusercontrollers} = require('./../controllers/signup');

const router = express.Router()

router.post('/lector', signupLectorController)
router.get('/lector', allusercontrollers)

module.exports = router

