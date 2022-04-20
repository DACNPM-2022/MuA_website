import Product from '../models/Product.js';
import data from '../data.js';

async function insertProductSeed() {
    await Product.remove({});
    return await Product.insertMany(data.products);
}

async function findById(id) {
    return await Product.findById(id);
}

async function getApiProduct() {
    return await Product.find({});
}

export default { insertProductSeed, findById, getApiProduct };