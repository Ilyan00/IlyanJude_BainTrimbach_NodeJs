//const express = require("express");
//const UsersController = require("../controllers/UsersController");
import express from "express";
import UsersController from "../controllers/UsersController.js";
import PostsController from "../controllers/PostsController.js";
import AuthentificationController from "../controllers/AuthentificationController.js";
import AuthentificationMiddleWare from "../middlewares/AuthentificationMiddleWare.js";

const router = express.Router();

router.get("/users", UsersController.index);
router.post("/users", UsersController.store);
router.get("/users/:id", UsersController.show);
router.put("/users/:id", UsersController.update);
router.delete("/users/:id", UsersController.destroy);
router.get(
  "/getMyProfile",
  AuthentificationMiddleWare.authentification,
  UsersController.getMyProfile
);

router.get("/posts", PostsController.index);
router.post("/posts", PostsController.store);
router.get("/posts/:title", PostsController.show);
router.put("/posts/:id", PostsController.update);
router.delete("/posts/:id", PostsController.destroy);

router.post("/login", AuthentificationController.login);

//module.exports = router;
export default router;
