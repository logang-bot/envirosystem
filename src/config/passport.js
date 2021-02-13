'use strict';
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const {user} = require("../models");
const {findById} = require("../models/user");

passport.use(new localStrategy({
    usernameField: 'email'
}, async (email,password,done) => {
    const userLoging = await user.findOne({email:email});
    if(!userLoging){
        console.log("Not found!!");
        return done(null, false);
    }
    else{
        const match = await userLoging.matchPass(password);
        if(match){
            console.log("Loged in!!");
            return done(null, userLoging);
        }
        else{
            console.log("Wrong pass...");
            return done(null, false);
        }
    }
}));

passport.serializeUser((userLoging, done) => {
    done(null, userLoging.id);
});

passport.deserializeUser((id, done) => {
    user.findById(id, (err, userLoging) => {
        done(err, userLoging);
    });
});

module.exports = passport;