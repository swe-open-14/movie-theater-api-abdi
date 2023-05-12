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


showRouter.get("/:id", async (req,res,next) => {
    try {
        const id = req.params.id
        const show = await Show.findByPk(id);
        res.json(show)
    } catch (error) {
        next(error)
    }
})

showRouter.get("/genres/:genre", async (req,res,next) => {
    try {
        const showGenre = req.params.genre
        const show = await Show.findAll({where: {genre : showGenre}});
        res.json(show)
    } catch (error) {
        next(error)
    }
})


module.exports = showRouter;