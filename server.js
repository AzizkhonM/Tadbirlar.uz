/* require("dotenv").config()
const express = require("express")
const authRouter = require("./router/auth.router")

const app = express()

app.use(express.json())
app.use(authRouter)

const port = process.env.PORT || 9020
app.listen(port, () => {
    console.log(`In ${port}`);
}) */


require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')/* 
const carsRouter = require('./router/cars.router')
const animalsRouter = require("./router/animal.router")
const fruitsRouter = require("./router/fruits.router") */
const authRouter = require("./router/auth.router")
const pagesRouter = require("./router/pages.router")
const session = require("express-session")/* 
const middleware = require("./middleware/variable")
const isLogged = require("./middleware/isLoginMiddleware") */


const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}))

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
/* 
app.use(middleware)
app.use(carsRouter)
app.use(animalsRouter)
app.use(fruitsRouter) */
app.use(authRouter)
app.use(pagesRouter)
/*app.use(isLogged) */


const port = process.env.PORT || 9020
app.listen(port, () =>{
    console.log(port);
})