import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import stockRoutes from './routes/stockRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import userRoutes from './routes/userRouter.js';
import menuRoutes from './routes/menuRoutes.js';
import perdidaRoutes from './routes/perdidaRoutes.js';
import supplierRoutes from './routes/supplierRoutes.js'
import personalRoutes from './routes/personalRoutes.js'

dotenv.config();
connectDB();
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
//Routes
app.use('/api/stock',stockRoutes)
app.use('/api/recipe',recipeRoutes)
app.use('/api/user', userRoutes)
app.use('/api/menu', menuRoutes)
app.use('/api/perdida', perdidaRoutes)
app.use('/api/supplier', supplierRoutes)
app.use('/api/personal', personalRoutes)

export default app