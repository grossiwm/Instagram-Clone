const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://user:wordpass@cluster0-8nxsp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.use(require('./routes'));

app.listen(4222);

// mongodb+srv://user:<password>@cluster0-8nxsp.mongodb.net/test?retryWrites=true&w=majority