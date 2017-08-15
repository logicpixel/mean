module.exports = {
  db: "mongodb://localhost/mean-book",
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: "270461250026707",
    clientSecret: "07ad4804c84af2c1736b07e9a0918a6c",
    callbackURL: "http://localhost:3000/oauth/facebook/callback"
  },
  twitter: {
    clientID: "3822GjgYqOeaJtRmwz0B0ibO5",
    clientSecret: "nIRNza8ml9vKtfelfbnnuzmkqXtRRf3nOExc9Auz7NSN0mNNDq",
    callbackURL: "http://localhost:3000/oauth/twitter/callback"
  },
  google: {
    clientID: "771712324268-p3uvemh9cgtmf2erjjqu5ne2kbig47vl.apps.googleusercontent.com",
    clientSecret: "0NH5ZT7iA5NqSqVTKnAwLsS4",
    callbackURL: "http://localhost:3000/oauth/google/callback"
  }
}
