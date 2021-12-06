const express = require('express')

const { getOptions } = require('../controllers/options')

const router = require('express').Router()

router.route('/')
    .get(getOptions)

module.exports = router