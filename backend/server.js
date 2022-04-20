import express from 'express';
import db from './config/db/connect.js';
import route from './routes/index.js';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
app.use(cors({
    origin:'*',
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE"
}));
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
dotenv.config();
db.connect();

route(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})