const express = require("express");
const router = express.Router();
const UserController = require("./controllers/AuthController");

router.post("/auth/register", UserController.registerUser);
router.post("/auth/authenticate", UserController.registerUser);

module.exports = router;
