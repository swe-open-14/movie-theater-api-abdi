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
      const userId = await User.findByPk(id, {include: Show});
      if (!userId) {
        return res.status(404).send("User not found");
      }
      res.json(userId.shows);
    } catch (error) {
      
    }
  });

  userRouter.put("/:id/shows/:showId", async (req, res, next) => {
    try {
      const {id ,showId} = req.params;
      const user = await User.findByPk(id);
// check if user exist
      if (!user) {
        return res.status(404).send("User not found");
      }

// check if show exist
      const existingShow = await Show.findByPk(showId);
      if (!existingShow) {
        return res.status(404).send("Show not found");
      }
      await user.addShows(existingShow)
      res.status(200).send("Show updated successfully");
    } catch (error) {
      next(error);
    }
  });













module.exports = userRouter;