const {Router} = require("express");
const musicianRouter = Router();
const Musician = require("../../models/Musician");

musicianRouter.post("/", async (req, res, next) => {
    try {
      const musician = await Musician.create(req.body); 
      if (!musician) {
        throw new Error("No musician created");
      }
      res.json({musician: musician.name});
    } catch (error) {
      // needed for catching and handling async errors
      next(error)
    }
  });

  musicianRouter.get("/", async (req, res, next) => {
    try {
      const musicians = await Musician.findAll(req.params); 
      if (!musicians) {
        throw new Error("No musician found");
      }
      res.json(musicians);
    } catch (error) {
        next(error)
    }
  })
  musicianRouter.get("/:id", async (req, res, next) => {
    try {
      const musicians = await Musician.findByPk(req.params.id); 
      if (!musicians) {
        throw new Error("No musician found");
      }
      res.json(musicians);
    } catch (error) {
        next(error)
    }
  })
  musicianRouter.put("/:id", async (req, res, next) => {
    try {
      const musicians = await Musician.findByPk(req.params.id); 
      if (!musicians) {
        throw new Error("No musician found");
      }
      const updatedMusician = await musicians.update(req.body)
      res.json(updatedMusician);
    } catch (error) {
        next(error)
    }
  })
  musicianRouter.delete("/:id", async (req, res, next) => {
    try {
      const musicians = await Musician.findByPk(req.params.id); 
      if (!musicians) {
        throw new Error("No musician found");
      }
      const deletedMusician = await musicians.destroy()
      res.json(deletedMusician);
    } catch (error) {
        next(error)
    }
  })

  module.exports = musicianRouter;