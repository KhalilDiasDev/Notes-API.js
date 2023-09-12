const Sequelize = require('sequelize');
const configDB = require('../config/database')

const Note = require ('../models/Note')

const connection = new Sequelize.Sequelize(configDB)

Note.init(connection)

module.exports = connection