const express = require("express");
const { User, Show } = require("../../models");

// const Restaurant = require("../models/")
const userRouter = express.Router();


userRouter.get("/", async (req,res,next) => {
    try {
        const user = await User.findAll();
        res.json(user)
    } catch (error) {
        next(error)
    }

})

userRouter.get("/:id", async (req,res,next) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        res.json(user)
    } catch (error) {
        next(error)
    }

})


userRouter.get("/:id/shows", async (req, res, next) => {
    try {
      const id = req.params.id;
      const userid = await User.findByPk(id);
      if (!userid) {
        return res.status(404).send("User not found");
      }
      const shows = await userid.getShows();
      console.log("shows:", shows);
      res.json(shows);
    } catch (error) {
      next(error);
    }
  });













module.exports = userRouter;