import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import categoryRoute from './routes/categoryRoute.js'
import connectDB from './connectDB/connectDB.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());  // Enable cookie parsing

const PORT = process.env.PORT || 8000;
// routes
app.use('/user', userRoute);
app.use('/api', categoryRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
