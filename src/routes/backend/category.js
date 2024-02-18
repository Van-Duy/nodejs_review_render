const express = require('express')

const router = express.Router()
const categoryController = require('../../controllers/category_controller')

router
    .route('/')
    .get(categoryController.list)

router
    .route('/form')
    .get(categoryController.getForm)
    .post(categoryController.saveItems)

module.exports = router;