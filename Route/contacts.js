const express = require('express');
const routes = express.Router();

const contactsController = require('../Controller/contacts');

routes.get('/', contactsController.getAll);

routes.get('/:id', contactsController.getSingle);

module.exports = routes;