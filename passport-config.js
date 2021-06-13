// passport is authentication middleware for Node.js 
//(this one is the local one since done locally.. we will have to change to a database


const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

// function to initialize passport
function initialize(passport, getUserByEmail, getUserById){
    // call done function when ur done authenticating the user
    const authenticateUser =async(email, password, done) => {

        // calling getUserByEmail
        const user = getUserByEmail(email)

        // if user does not exist 
        if(user == null){
            // no error so return null and false for no user
            return done(null, false, {message: "ERROR: no user with that email"})
        }
        try{

            if(await bcrypt.compare(password, user.password)){
                return done(null, user)
            }
            else{
                // password is incorrect 
                return done(null, false, {message: 'ERROR: password incorrect'})
            }
        }
        // error 
        catch(e){
            return done(e)
        }
    }

    //we get users by email 
    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser))

    // serializeUser determines which data the user object should be stored in the session
    passport.serializeUser((user,done) => done(null,user.id))

    // deserializeUser corresponds to the key of the user of the user object that was given to done function 
    passport.deserializeUser((id,done) => {
        done(null,getUserById(id))
    })
}

// export the funct
module.exports = initialize