const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', UserController.getUsers);

router.get('/:id', UserController.getUser);

router.post('/add', UserController.addUser);

router.patch('/update', UserController.updateUser);

router.delete('/delete', UserController.deleteUser);

module.exports = router;
