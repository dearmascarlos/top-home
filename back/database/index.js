const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false}
)

const checkConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection established')
    } catch (error) {
        throw error
    }
}

const syncModels = async (value) => {
    const state = {
        alter: { alter: true },
        force: { force : true },
    }

    try {
        await sequelize.sync(state[value] || '')
        console.log(`Models were synchronized successfully(${JSON.stringify(state[value]) || ''}).`)
    } catch (error) {
        throw error
    }
}

module.exports = { sequelize, checkConnection, syncModels }