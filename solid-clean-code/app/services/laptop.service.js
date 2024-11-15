const LaptopRepository = require('../repositories/laptop.repository')

class LaptopService {
    constructor(laptopRepository) {
        this.laptopRepository = LaptopRepository
    }

    async createLaptop(data) {
        return await this.laptopRepository.createLaptop(data)
    }

    async getLaptops() {
        return await this.laptopRepository.getLaptops()
    }

    async getLaptop(id) {
        return await this.laptopRepository.getLaptop(id)
    }

    async updateLaptop(id, data) {
        return await this.laptopRepository.updateLaptop(id, data)
    }

    async deleteLaptop(id) {
        return await this.laptopRepository.deleteLaptop(id)
    }
}

module.exports = LaptopService
