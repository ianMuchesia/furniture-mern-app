const mongoose = require('mongoose')

const Schema = mongoose.Schema


const contactSchema = new Schema ({
    name: {
        type: String,
        trim: true
      },
      email: {
        type: String
      },
      message: {
        type: String,
        trim: true
      },
      updated: Date,
      created: {
        type: Date,
        default: Date.now
      }
})

const Contact =  mongoose.model('Contact', contactSchema);
module.exports = Contact