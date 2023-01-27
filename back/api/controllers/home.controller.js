const Home = require('../models/home.model.js')

const postHome = async (req, res) => {
    try {
        const home = await Home.create(req.body)
        return res.status(200).json(home)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getAllHomes = async (req, res) => {
    try {
        const homes = await Home.findAll({})
        return res.status(200).json(homes)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const updateHome = async (req, res) => {
    try {
        const [,home] = await Home.update(req.body, {
                returning: true,
                where: {
                    id: req.params.id
                }
        })
        return res.status(200).json(home)

    } catch (error) {
        return res.status(500).send(error)
    }
}

const deleteHome = async (req, res) => {
    try {
        const home = await Home.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.status(200).send('Project deleted!')

    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {
    postHome,
    getAllHomes,
    updateHome,
    deleteHome
}
