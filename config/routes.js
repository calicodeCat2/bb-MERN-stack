const auth = require("../controllers/auth");

module.exports = (app) => {
  app.get("/hello", auth.hello);

  
  // auth routes
  app.get('/auth/user/:id', auth.getUser);
  app.post("/auth/register", auth.register);
  app.post("/auth/login", auth.login);
};
