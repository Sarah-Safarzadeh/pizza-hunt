const { Schema, model } = require('mongoose');
// create the pizza model using the pizza schema
const Pizza = model('Pizza', PizzaSchema);

const PizzaSchema = new Schema ({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date.UTC,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

module.exports = Pizza;