const { Schema, model } = require('mongoose')

const BookingSchema = new Schema({
  treatmentId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  treatmentName: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  slot: {
    type: String,
    trim: true,
    required: true,
  },
  patientEmail: {
    type: String,
    trim: true,
    required: true,
  },
  patientName: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
})

const Booking = model('booking', BookingSchema)

module.exports = Booking
