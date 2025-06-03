const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
  type: String,
  intensity: String,
  duration: Number,
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Training', trainingSchema);
