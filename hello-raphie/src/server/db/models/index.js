const Doggy = require('./doggy')
const Behavior = require('./behavior')


// Associations

Doggy.hasMany(Behavior)
Behavior.hasMany(Doggy)

module.exports = {
  Doggy,
  Behavior
}