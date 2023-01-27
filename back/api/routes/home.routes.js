const router = require('express').Router()

const {
    postHome,
    getAllHomes,
    updateHome,
    deleteHome
} = require('../controllers/home.controller')

router.post('/post', postHome)
router.get('/get', getAllHomes)
router.put('/put/:id', updateHome)
router.delete('/delete/:id', deleteHome)

module.exports = router
