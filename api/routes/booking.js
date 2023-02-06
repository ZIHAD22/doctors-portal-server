const { Router } = require('express')
const { ObjectId } = require('mongoose')
const Booking = require('../models/Booking')

const booking = Router()

booking.get('/', async (req, res) => {
  const patientEmail = req.query.patientEmail
  const bookings = await Booking.find({ patientEmail })
  res.json(bookings)
})

booking.get('/:id', async (req, res) => {
  const { id } = req.params
  const bookingForPayment = await Booking.findOne({ _id: id })

  res.json(bookingForPayment)
})

booking.post('/', async (req, res) => {
  const bookingData = req.body
  const query = {
    treatmentName: bookingData.treatmentName,
    date: bookingData.date,
    patientEmail: bookingData.patientEmail,
  }
  const exists = await Booking.findOne(query)
  if (exists) {
    return res.json({ success: false, result: exists })
  }
  const booking = new Booking(bookingData)
  const result = await booking.save()

  res.json({ success: true, result })
})

module.exports = booking
