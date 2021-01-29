import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import products from './routes/products.js';
import auth from './routes/auth.js';
import orders from './routes/orders.js';
import { notFound, errorHandler } from './middlewares/error.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.use('/api/products', products);
app.use('/api/auth', auth);
app.use('/api/orders', orders);

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
