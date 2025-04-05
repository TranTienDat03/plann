const express = require("express");
const { register, login, checkSession, logout } = require("../controllers/AuthController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check-session", checkSession);
router.post("/logout", logout);

module.exports = router;
