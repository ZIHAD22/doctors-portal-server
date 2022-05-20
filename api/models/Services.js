const { Schema, model } = require('mongoose')

const ServicesSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  slots: {
    type: Array,
  },
})

const Services = model('services', ServicesSchema)

module.exports = Services
