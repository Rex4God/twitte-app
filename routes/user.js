const express = require('express');
const router = express.Router()
const userController = require('../controllers/user.controller');
const {authenticate} = require('../commons/auth')

router.post('/', userController.createUser)
router.post('/login', userController.login)
router.get('/:id', authenticate, userController.getUser)

module.exports = router;


