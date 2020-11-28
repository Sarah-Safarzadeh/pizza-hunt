const { Schema, model } = require('mongoose');

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