const express = require('express')

const { getWaterTanks, createWaterTank, getWaterTank } = require('../controllers/waterTanks')

const router = require('express').Router()

router.route('/')
    .get(getWaterTanks)
    .post(createWaterTank)

router.route('/:id')
    .get(getWaterTank)

module.exports = router