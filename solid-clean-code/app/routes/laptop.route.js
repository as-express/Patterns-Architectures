const express = require('express')
const LaptopController = require('../controllers/laptop.controller')

const router = express.Router()

router.post('/', LaptopController.createLaptop)
router.get('/', LaptopController.getLaptops)
router.get('/:id', LaptopController.getLaptop)
router.put('/:id', LaptopController.updateLaptop)
router.delete('/:id', LaptopController.deleteLaptop)

module.exports.laptopRoutes = router
