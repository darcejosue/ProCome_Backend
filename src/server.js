import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import stockRoutes from './routes/stockRoutes.js';

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
//Routes
app.use('/api/stock',stockRoutes)

export default app