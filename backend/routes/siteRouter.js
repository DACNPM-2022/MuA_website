import express from 'express';
const siteRouter = express.Router();

siteRouter.get('/', (req, res) => {
    res.send("<h1>Server is running</h1>")
})

export default siteRouter;