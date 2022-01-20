const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);

router.post('/create-task',homeController.createTask);

router.get('/delete-contact',homeController.deleteTask);

console.log("router Loaded");

module.exports = router;