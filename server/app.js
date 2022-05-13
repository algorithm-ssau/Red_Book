const express = require('express')
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')

const items = require ('./routes/api/items')

const app = express();

//История с cors
let cors = require("cors");
app.use(cors());

// BOdepaeser Middleware
app.use(bodyParser.json());

// DB config
const db = require ('./config/keys').mongoUri;

// Connect to Mongo
mongoose
    .connect(db)
    .then (()=>console.log('MongoDB Connected...'))
    .catch (err => console.log(err));

//Use Routes
app.use('/api/items', items);



const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server started on port ${port}`));