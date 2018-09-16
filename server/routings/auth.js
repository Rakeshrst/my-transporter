const express = require("express"); 

const UserController = require("../controller/user-controller");

const router = express.Router();

router.post("/login", UserController.loginUser);

module.exports = router;