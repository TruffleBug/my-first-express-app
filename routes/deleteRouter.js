const { Router } = require('express');
const deleteRouter = Router();
const userController = require('../controllers/userController');

deleteRouter
    .get('/', (req, res) => {
        res.render('delete', { title: 'Delete all users?' })
    })
    .post('/', userController.deleteAllUsers)

module.exports = deleteRouter;