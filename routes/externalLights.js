const express = require('express')

const { getExternalLights, getExternalLight, createExternalLight } = require('../controllers/externalLights')

const router = require('express').Router()

router.route('/')
    .get(getExternalLights)
    .post(createExternalLight)

router.route('/:id')
    .get(getExternalLight)

module.exports = router