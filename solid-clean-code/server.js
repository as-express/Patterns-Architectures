const express = require('express')
const databaseConnection = require('./app/config/db')
const { laptopRoutes } = require('./app/routes/laptop.route')
require('colors')

const app = express()
const port = 3000

app.use(express.json())
app.use('/api/laptop', laptopRoutes)
databaseConnection()

app.listen(port, () => {
    console.log(`Server run on port ${port}`.bgGreen)
})
