// import modules
const express = require('express');
const dotenv = require('dotenv').config();
const connectDb = require('./connectDb');
const cors = require('cors');

// connect to MongoDB
connectDb();

// middleware functions
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', require('./routes'));

// set up & listen on port
const port = process.env.PORT || 4447;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});