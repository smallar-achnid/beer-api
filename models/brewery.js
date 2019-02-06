const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrewerySchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        // min: [0, 'Ratingmust be a number between 0 and ten (inclusive)'],
        // max: [10, 'Ratingmust be a number between 0 and ten (inclusive)'],
        required: true
    }, 

    favorite: {
        type: Boolean,
        default: false

    }
})

module.exports = mongoose.model('Brewery', BrewerySchema)