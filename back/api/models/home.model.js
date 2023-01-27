const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Home = sequelize.define(
    'home',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT
        }
    },
    { timestamps: false }
)

module.exports = Home