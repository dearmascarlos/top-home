const router = require('express').Router()

const {
    signup
} = require('../controllers/user.controller')

router.post('/register', signup)

module.exports = router