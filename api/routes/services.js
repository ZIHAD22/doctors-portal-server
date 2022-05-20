const { Router } = require('express')
const Services = require('../models/Services')

const services = Router()

// getAll service

services.get('/', async (req, res) => {
  const allServices = await Services.find({})

  res.json(allServices)
})

module.exports = services
