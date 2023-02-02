const express = require("express")
const PagesController = require("../controller/pages.controller")


let router = express.Router()


router
        .get("/home", PagesController.HOME)


router
        .get("/add_ad", PagesController.ADD_PAGE)
        .post("/adding_ad",  PagesController.ADDING_PAGE)

router
        .get("/about_us", PagesController.ABOUT_US)

router
        .get("/admin", PagesController.ADMIN)

router
        .get("/cancel/:id", PagesController.CANCEL)

router
        .get("/confirm/:id", PagesController.CONFIRM)


module.exports = router