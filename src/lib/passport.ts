import passport from "passport";
const GoogleStrategy = require("passport-google-oauth20").Strategy;
import { generateToken } from "../utils/jwt";
import appConfig from "../config/environment.config";

passport.use(
  new GoogleStrategy(
    {
      clientID: appConfig.GOOGLE_CLIENT_ID,
      clientSecret: appConfig.GOOGLE_CLIENT_SECRET,
      callbackURL: appConfig.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      const token = await generateToken(
        {
          name: profile.displayName,
        },
        appConfig.JWT_SECRET
      );
      return done(null, token);
    }
  )
);

export default passport;
