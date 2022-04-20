import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/Order.js";
import { isAuth } from "../utils.js";
import orderService from "../services/orderServices.js";
import orderRepo from "../repositories/orderRepo.js";

const orderRouter = express.Router();

orderRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        if(orderService.checkEmptyOrder(req.body.orderItems.length) == true) {
            res.status(400).send({message: 'Cart is empty'});
            console.log(typeof(req.body.orderItems.length));
        } else {
            const createdOrder = await orderRepo.createOrder(req.body, req.user);
            res.status(201).send({
                message: 'New order created',
                order: createdOrder});
        }
    })
);

orderRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const order = await orderRepo.findById(req.params.id);
        if(order) {
            res.send(order);
        } else {
            res.status(404).send({message: 'Order Not Found'});
        }
    })
)

export default orderRouter;