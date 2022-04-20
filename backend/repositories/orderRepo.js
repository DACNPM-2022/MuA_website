import Order from "../models/Order.js";

async function createOrder(body, user) {
    const order = new Order({
        orderItems: body.orderItems,
        shippingAddress: body.shippingAddress,
        paymentMethod: body.paymentMethod,
        itemsPrice: body.itemsPrice,
        shippingPrice: body.shippingPrice,
        taxPrice: body.taxPrice,
        totalPrice: body.totalPrice,
        user: user._id,
    });
    return await order.save();
}

async function findById(id) {
    return await Order.findById(id);
}


export default { createOrder, findById };