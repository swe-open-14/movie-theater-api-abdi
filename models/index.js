const Show = require('./Show')
const User = require('./User')

// Show.belongsTo(User)
// User.hasMany(Show)

User.belongsToMany(Show, {through: "userShows"} )
Show.belongsToMany(User, {through: "userShows"})

module.exports = {
    Show, 
    User,
}
