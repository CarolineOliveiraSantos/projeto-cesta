const { Router } = require ("express");
const routes = Router();
const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const authMiddleware = require("./middlewares/auth");
const IcecreamController = require("./controllers/IcecreamController");
const authorizationMiddleware = require("./middlewares/authorization");

routes.post("/user", UserController.store);
routes.get("/user/:email", UserController.index);
routes.put("/user/:email", UserController.update);
routes.delete("/user/:id", UserController.destroy);

routes.post("/sessions", SessionController.store);

routes.use = (authMiddleware);
routes.post("/users", authorizationMiddleware, UserController.store);
routes.delete("/users/:id", authorizationMiddleware, UserController.destroy);

routes.post("/icecream", IcecreamController.store);
routes.get("/icecream/:id", IcecreamController.index);

module.exports = routes;