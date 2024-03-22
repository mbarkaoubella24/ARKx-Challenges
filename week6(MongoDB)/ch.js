const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const db = client.db('ProductDB');
const collection = db.collection('products');
const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{type: String , require: true},
    price: {type: Number, required: true, min: 0 },
    description: String,
    inStock: {type: Boolean, default: true},
    createdAt: { type: Date, default: Date.now }
});

const ProductModel = mongoose.model('Product',ProductSchema);

module.exports= ProductModel;










