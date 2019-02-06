const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrewerySchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    rating: {
        type: Number,
        min: [0, 'Ratingmust be a number between 0 and ten (inclusive)'],
        max: [10, 'Ratingmust be a number between 0 and ten (inclusive)'],
        required: true
    }
})

module.exports = mongoose.model('Brewery', BrewerySchema)