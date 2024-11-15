const LaptopService = require('../services/laptop.service')
const laptopService = new LaptopService(require('../repositories/laptop.repository'))
const { createLaptopValidation, updateLaptopValidation } = require('../validators/laptop.validator')
const { validateRequest } = require('../utils/validation')

class LaptopController {
    async createLaptop(req, res) {
        const validationError = validateRequest(req.body, createLaptopValidation)
        if (validationError) return res.status(400).json({ message: validationError })

        try {
            const laptop = await laptopService.createLaptop(req.body)
            res.status(200).json({ laptop })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async getLaptops(req, res) {
        try {
            const laptops = await laptopService.getLaptops()
            res.status(200).json({ laptops })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async getLaptop(req, res) {
        try {
            const laptop = await laptopService.getLaptop(req.params.id)
            res.status(200).json({ laptop })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async updateLaptop(req, res) {
        const validationError = validateRequest(req.body, updateLaptopValidation)
        if (validationError) return res.status(400).json({ message: validationError })

        try {
            const laptop = await laptopService.updateLaptop(req.params.id, req.body)
            res.status(200).json({ laptop })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async deleteLaptop(req, res) {
        try {
            const laptop = await laptopService.deleteLaptop(req.params.id)
            res.status(200).json({ laptop })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}
module.exports = new LaptopController()
