// load in our env vars and set them inside of process.env
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// express.js is a back end web app framework for Node.js

const express = require('express')
const app = express()

// npm i bcrypt (allows us to hash passwords & compare hashed passwordsto make sure app is secure )
const bcrypt = require ('bcrypt') 

// npm i passport passport-local express-session express-flash
const passport = require('passport')

// express requirments 
const flash = require('express-flash')
const session = require('express-session')

// npm i method-override
// using this for the log out page
const methodOverride = require('method-override')


// passport
const initializePassport = require('./passport-config')
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)
  

// using this for now (IT WILL NEED TO BE DATABASE)
const users = []

// we installed ejs dependency (in package.json)
app.set('view-engine', 'ejs')

// telling app to take forms and we want to access them inside
// of our request var inside of post method
app.use(express.urlencoded({extended:false}))

app.use(flash())
app.use(session({
    // key that we wilkl keep secret that will encrypt all our info
    secret: process.env.SECRET_SESSION,
    // we dont want to resave if nothing has changed
    resave: false,
    // we dont want to save an empty value if there is no value
    saveUninitialized: false
}))

// used for auth of user
app.use(passport.initialize())
app.use(passport.session()) // work w/ app.user(session) above  

// used for logout page 
app.use(methodOverride('_method'))

// setting up our route 
app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name })
})

// LOGIN
// creating route for login.ejs
app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
})

// use the passport auth 
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))
  

// REGISTER
// creating route for register.ejs
app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
})

// async function so we can use try catch 
app.post('/register', checkNotAuthenticated, async (req, res) => {
    try{
        // using 10 as default security value
        // it will return after waiting for it 
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        // now we push to users 
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            password: hashedPassword // safe to store in data base 
        })
        // redirect to login page
        res.redirect('/login') 
    }
    catch{
        // if error occues redirect to register page again 
        res.redirect('/register') 
    }
    // create a log to see if we added any new users 
  console.log(users) // gets reset to empty array when 
})


// logout butten will go back to login page 
app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

// checks to make sure user is authenticated
// used for pages that need auth 
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/login')
}
  
// checks to make sure user is notauthenticated
// used for pages that DONT need auth 
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
}

// app.listen() funt used to bind and listen the connections on the specified host and port 
app.listen(3000)