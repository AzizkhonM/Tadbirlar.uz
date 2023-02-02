const express = require("express")
const AuthController = require("../controller/auth.controller")


let router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The user 
 *         password:
 *           type: string
 *           description: passwordinggizni kiriting
 *        example:
 *           email: swagger_example@gmail.com
 *           password: swagger1234
 */


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /login:
 *   get:
 *     summary: Sign in
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Gigned in.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Error
 *
 */
router.get("/login", AuthController.LOGIN_DATA)
      

router.post("/check", AuthController.LOGIN)


module.exports = router