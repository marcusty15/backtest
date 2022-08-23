const {allvapes} = require('../models/users');
const express = require('express')
const {allvapescontrollers, vapebyIDcontroller,
    createVapeController,
    updateVapeController,
    deleteAllVapeController,
    deleteVapeController} = require('../controllers/controllers');

const {validate} = require('../midleware/validate');

const router = express.Router()


router.get("/", allvapescontrollers)

router.get('/:id', validate, vapebyIDcontroller)

router.post('/', createVapeController)

router.put("/:id", validate, updateVapeController)

router.delete('/', deleteAllVapeController)

router.delete('/:id',validate, deleteVapeController)


module.exports = router