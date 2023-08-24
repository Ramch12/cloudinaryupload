import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors';
import './db/db.js';
import router from './router/router.js';

// console.log(process.env.PORT);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());



app.use(express.json({limit: '50mb'}))
app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});