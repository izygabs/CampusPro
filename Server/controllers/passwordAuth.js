const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { user } = require("../models/userSchema");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");

require("dotenv").config();

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:6600/auth/google/callback",
        passReqToCallback: true,
      },
      async (request, accessToken, refreshToken, profile, done) => {
        try {
          let existingUser = await user.findOne({ "google.id": profile.id });
          //   <em>// if user exists return the user</em>;
          if (existingUser) {
            return done(null, existingUser);
          }
          //   <em>// if user does not exist create a new user</em>;
          console.log("Creating new user...", profile);
          const newUser = new user({
            method: "google",
            google: {
              id: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
            },
          });
          await newUser.save();
          return done(null, newUser);
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );
  //getting jwt token
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromHeader("authorization"),
        secretOrKey: "secretKey",
      },
      async (jwtPayload, done) => {
        try {
          //   <em>// Extract user</em>;
          const user = jwtPayload.user;
          done(null, user);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );
};
//   Emmanuel opay 9012653642
