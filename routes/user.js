const express = require('express');
const router = require('express-promise-router')();

const controller = require('../controller/users');


router.route('/create',)
    .post(controller.create)

router.route('/all')
    .post(controller.all)



module.exports = router;

