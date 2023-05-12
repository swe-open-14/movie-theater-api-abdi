const Show = require('./Show')
const User = require('./User')

// Show.belongsTo(User)
// User.hasMany(Show)

User.hasMany(Show)
Show.belongsTo(User)

module.exports = {
    Show, 
    User
}
