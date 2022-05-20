const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const services = require('./api/routes/services')
require('dotenv').config()

// server

main().catch((err) => console.log(err))

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c5ssn.mongodb.net/doctors-portal?retryWrites=true&w=majority`,
    )
  } finally {
    console.log('database connected')
  }
}

// app
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(express.json())
app.use(cors())

// services router
app.use('/services', services)

// route
app.get('/', (req, res) => {
  res.send('all ok ')
})

// server running

app.listen(port, () => {
  console.log(`doctors server running on http://localhost:${port}`)
})
