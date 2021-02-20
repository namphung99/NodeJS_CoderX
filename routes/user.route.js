const express = require('express');
shortid = require('shortid');
const UserController = require('../controllers/user.controller');

const db = require('../db');

var router = express.Router();


router.get('/', UserController.index);

router.get('/search', UserController.search);

router.get('/create',UserController.create);

router.post('/create', UserController.createPost);

router.get('/:id', UserController.viewDetail);


module.exports = router;