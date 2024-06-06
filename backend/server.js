import express from 'express';
import dotenv from 'dotenv';
import { connectdb } from './config/db.js';
dotenv.config();
const app = express();
connectdb()

//routes configuration
app.use("/api/v1/user", userRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} `);
});
