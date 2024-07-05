const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const Person = require("./modelSchemas/userSchema");

passport.use(
  new localStrategy(async (username, password, done) => {
    try {
      console.log("Received credentials :", username, password);
      const user = await Person.findOne({ username: username });
      if (!user) {
        console.log("User not found");
        return done(null, false, { message: "Incorrect Username" });
      }
      const isValidPassword = user.password === password ? true : false;
      if (isValidPassword) {
        console.log("Password is valid");
        return done(null, user);
      } else {
        console.log("Invalid password");
        return done(null, false, { message: "Incorrect Password" });
      }
    } catch (err) {
      console.log("Error during authentication:", err);
      return done(err);
    }
  })
);

module.exports = passport;
