const User = require('../api/models/user.model.js')
const Home = require('../api/models/home.model.js') 

const addRelationsModels = () => {
    try {

        User.hasMany(Home)
        Home.belongsTo(User)

        console.log('Relations added to models')
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsModels