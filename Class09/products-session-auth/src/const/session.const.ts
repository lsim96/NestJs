import session from "express-session";

export const createSession = session({
  //This is the secret used to sign the cookie to make it encrypted
  secret: "verysecretivesecretthatissecret",
  name: "session_id",
  cookie: {
    httpOnly: true,
    maxAge: 5 * 60 * 60 * 1000,
    secure: false,
  },

  saveUninitialized: true,
  resave: false,
});
