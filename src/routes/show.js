const express = require("express");
const { Show } = require("../../models");
// const Restaurant = require("../models/")
const showRouter = express.Router();


showRouter.get("/", async (req,res,next) => {
    try {
        const show = await Show.findAll();
        res.json(show)
    } catch (error) {
        next(error)
    }

})


module.exports = showRouter;