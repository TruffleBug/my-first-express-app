const { Router } = require('express');
const indexRouter = Router();
const userController = require('../controllers/userController');

indexRouter
    .get('/', userController.getUsernames)
    .get('/search', userController.usersSearch)
    .post('/', userController.deleteAllUsers)

module.exports = indexRouter;