const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('DB CONNECTED SUCCESSFUL'.bgGreen)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = databaseConnection
