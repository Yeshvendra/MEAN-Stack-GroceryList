const mongoose = require('mongoose');

const GrocerySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

const Grocery = module.exports = mongoose.model('Grocery', GrocerySchema);