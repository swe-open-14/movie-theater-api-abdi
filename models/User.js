//import our db, Model, DataTypes
const { db, DataTypes } = require('../db/connection')
const Show = require("./Show")

//Creating a User child class from the Model parent class
const User = db.define("users", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
});

User.hasMany(Show)
Show.belongsTo(User)

//exports
module.exports = User;