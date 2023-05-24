const express = require("express");
const router = express.Router();
const UserController = require("./controllers/AuthController");
const AdminController = require("./controllers/AdminController");
const authenticateMiddleware = require("./middlewares/authenticate");

router.post("/auth/register", UserController.registerUser);
router.post("/auth/authenticate", UserController.authenticate);
router.get("/admin/users", authenticateMiddleware, AdminController.getAdmin);

module.exports = router;
