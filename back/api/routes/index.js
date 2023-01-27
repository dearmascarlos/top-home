const router = require('express').Router()

const userRouter = require('./user.routes')
const homeRouter = require('./home.routes')

router.use('/user', userRouter)
router.use('/home', homeRouter)

module.exports = router