const express = require("express");
const app = express();
// const Restaurant = require("../models/index")
// const restaurantRouter = require("./routes/restaurant")
// const db = require("../db/connection");
const { db } = require('../db/connection')
const showRouter = require("./routes/show");
const userRouter = require("./routes/user");
const { User, Show } = require("../models");



app.use("/user", userRouter)
app.use("/show", showRouter)





module.exports = app;