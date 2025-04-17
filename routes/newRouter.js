const { Router } = require("express");
const newUserRouter = Router();
const userController = require('../controllers/userController');

newUserRouter.get('/', userController.createUsernameGet);
newUserRouter.post('/', userController.createUsernamePost);

module.exports = newUserRouter;