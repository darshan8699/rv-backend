const express = require('express')

const { getToolboxes, getToolBox, createToolbox } = require('../controllers/toolboxes')

const router = require('express').Router()

router.route('/')
    .get(getToolboxes)
    .post(createToolbox)

router.route('/:id')
    .get(getToolBox)                                                                                                            

module.exports = router