import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import stockRoutes from './routes/stockRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import userRoutes from './routes/userRouter.js';
import menuRoutes from './routes/menuRoutes.js';

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
//Routes
app.use('/api/stock',stockRoutes)
app.use('/api/recipe',recipeRoutes)
app.use('/api/user', userRoutes)
app.use('/api/menu', menuRoutes)

export default app