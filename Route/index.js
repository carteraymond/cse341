const routes = require('express').Router();

const baseController = require('../Controller');

routes.get('/', baseController.getName);

module.exports = routes;