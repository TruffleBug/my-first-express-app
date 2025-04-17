const { Router } = require("express");
const newRouter = Router();
const userController = require('../controllers/userController');

newRouter.get('/', userController.createUsernameGet);
newRouter.post('/', userController.createUsernamePost);

module.exports = newRouter;