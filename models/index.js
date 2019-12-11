const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const MoviesModel = require('./movies')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
})

const Movies = MoviesModel(connection, Sequelize)

module.exports = {
  Movies,
}
