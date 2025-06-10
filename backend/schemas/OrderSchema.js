const {Schema} = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String, //represents buy or sell
});

module.exports = {OrderSchema};