const express = require('express')

const { getWheels, getWheel, createWheel } = require('../controllers/wheels')

const router = require('express').Router()

router.route('/')
    .get(getWheels)
    .post(createWheel)

router.route('/:id')
    .get(getWheel)

module.exports = router