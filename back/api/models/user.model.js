const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index.js')

const User = sequelize.define(
    'user',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Invalid email format'
                }
            }
        }
    },
    { timestamps: false }
)

module.exports = User