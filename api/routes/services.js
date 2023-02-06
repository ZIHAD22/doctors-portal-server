const { Router } = require('express')
const Booking = require('../models/Booking')
const stripe = require('stripe')(
  'sk_test_51L2f8xAFp5v3RslH9V4LuSdwpCcIjjdmFOEKJcxG5C6FQD6HUhD6viMTHarct9x0IuGxvkqZzpbRULtsy32SMTIX002H9PMVOe',
)
const Services = require('../models/Services')

const services = Router()

// getAll service

services.get('/', async (req, res) => {
  const allServices = await Services.find({})

  res.json(allServices)
})

services.get('/available', async (req, res) => {
  const date = req.query.date || 'May 22, 2022'
  console.log(date)

  // get all services
  const services = await Services.find({})

  // get booking
  const bookings = await Booking.find({ date })

  // get bookings for that services
  services.forEach((service) => {
    const servicesBookings = bookings.filter(
      (b) => b.treatmentName === service.name,
    )
    const booked = servicesBookings.map((s) => s.slot)
    const available = service.slots.filter((s) => !booked.includes(s))
    service.slots = available
  })

  console.log('ok')

  res.json(services)
})

// payment methord
services.post('/create-payment-intent', async (req, res) => {
  const service = req.body
  const price = service.price
  const amount = price * 100

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
    payment_method_types: ['card'],
  })
  res.send({
    clientSecret: paymentIntent.client_secret,
  })
})

module.exports = services
