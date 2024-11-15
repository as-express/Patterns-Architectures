const Laptop = require('../models/laptop.model')

class LaptopRepository {
    async createLaptop(data) {
        const laptop = new Laptop(data)
        return await laptop.save()
    }

    async getLaptops() {
        return await Laptop.find()
    }

    async getLaptop(id) {
        return await Laptop.findById(id)
    }

    async updateLaptop(id, data) {
        return await Laptop.findByIdAndUpdate(id, data, { new: true })
    }

    async deleteLaptop(id) {
        return await Laptop.findByIdAndDelete(id)
    }
}

module.exports = new LaptopRepository() // Singletone
