import passport from "passport";
const GoogleStrategy = require("passport-google-oauth20").Strategy;
import { generateToken } from "../utils/jwt";
import { config } from "../config/environment.config";

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: config.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      const token = await generateToken(
        {
          name: profile.displayName,
        },
        config.JWT_SECRET
      );
      return done(null, token);
    }
  )
);

export default passport;
