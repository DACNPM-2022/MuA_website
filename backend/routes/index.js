import userRouter from "./userRouter.js";
import siteRouter from "./siteRouter.js";
import productRouter from "./productRouter.js";
import orderRouter from "./orderRouter.js";
import paypalRouter from "./paypalRouter.js";

function route(app) {
    app.use('/api/products', productRouter);
    app.use('/api/users', userRouter);
    app.use('/api/orders', orderRouter);
    app.use('/api/config/paypal', paypalRouter);
    app.use('/', siteRouter);
    app.use((err, req, res, next) => {
        res.status(500).send({message:err.message});
    });
}

export default route;