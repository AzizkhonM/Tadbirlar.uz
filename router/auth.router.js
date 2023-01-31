const express = require("express")
const AuthController = require("../controller/auth.controller")


let router = express.Router()


router
        .get("/login", AuthController.LOGIN_DATA)
        .post("/check", AuthController.LOGIN)


module.exports = router