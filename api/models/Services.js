const { Schema, model } = require('mongoose')

const ServicesSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  slots: {
    type: [String],
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
})

const Services = model('services', ServicesSchema)

module.exports = Services
