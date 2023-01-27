const User = require ('../models/user.model')
require('dotenv').config()


const signup = async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    signup
}