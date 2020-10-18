require('dotenv').config()
const express = require('express')
const app = express()

process.env.PORT = process.env.PORT || 5000

const { log } = console

let i = 0
log(`Test name: ${process.env.TEST_NAME}`)
setInterval(() => log(i) || i++, 1000)

app.all('/', (req, res) => res.send('I\'m alive'))

app.listen(process.env.PORT, () => log(`Listening to port ${process.env.PORT}`))
