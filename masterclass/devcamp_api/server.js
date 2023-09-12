const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDb = require('./config/db');
// Connect to database
connectDb();


// Load env vars
dotenv.config({ path: './config/config.env' });
const app = express();
// Route files
const bootcamps = require('./routes/bootcamps');

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  console.log('Morgan enabled');
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
