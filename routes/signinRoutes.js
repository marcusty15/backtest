const express = require('express')

const {signinLectorController} = require('./../controllers/signin');

const router = express.Router()

router.post('/lector', signinLectorController)

module.exports = router