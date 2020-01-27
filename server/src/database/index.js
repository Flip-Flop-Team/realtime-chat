const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const tbl_users = require('../models/tbl_users')

const connection = new Sequelize(dbConfig)

module.exports = connection