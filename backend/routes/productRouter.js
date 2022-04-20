import express from 'express';
import Product from '../models/Product.js';
import expressAsyncHandler from 'express-async-handler';
import productRepo from '../repositories/productRepo.js';
const productRouter = express.Router();

productRouter.get(
    '/seed', 
    expressAsyncHandler(async(req, res) => {
        const createProduct = await productRepo.insertProductSeed();
        res.send({product: createProduct});
}))

productRouter.get(
    '/:id', 
    expressAsyncHandler(async(req, res) => {
        const product = await productRepo.findById(req.params.id)
        if(product){
           res.send(product);
        }
        else {
           res.status(404).send({message: 'Product not found'}); 
        }
    })
)

productRouter.get(
    '/', 
    expressAsyncHandler(async(req, res) => {
        const products = await productRepo.getApiProduct();
        res.send(products);
}))

export default productRouter;