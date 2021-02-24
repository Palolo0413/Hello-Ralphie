const Sequelize = require('sequelize')
const db = require('../db')


const Doggy = db.define('doggy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  breed:{
    type: Sequelize.STRING
  },
  birthday: {
    type: Sequelize.DATE
  }  
})


module.exports = Doggy