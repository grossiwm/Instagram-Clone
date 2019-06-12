const express = require('express');
const PostController = require('./controllers/PostController')

const routes = express.Router();


module.exports = routes;

routes.post('/posts', PostController.store);
