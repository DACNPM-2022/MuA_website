import express from 'express';
const paypalRouter = express.Router();

paypalRouter.get('/', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})

export default paypalRouter;