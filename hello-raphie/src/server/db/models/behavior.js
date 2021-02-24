const Sequelize = require('sequelize')
const db = require('../db')


const Behavior = db.define('behavior', {
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})


module.exports = Behavior