const express = require('express');
const UserController = require('../controllers/user.controller');
const Validate = require('../validate/user.validate');
const db = require('../db');

var router = express.Router();


router.get('/', UserController.index);

router.get('/search', UserController.search);

router.get('/create',UserController.create);

router.post('/create', Validate.postValidate, UserController.createPost);

router.get('/:id', UserController.viewDetail);


module.exports = router;