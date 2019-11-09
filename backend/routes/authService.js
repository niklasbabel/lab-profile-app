const { Router } = require("express");
const router = Router();

// POST   /auth/login    {username, password} "User logged"
// POST   /auth/signup   {username, password, campus, course} "User created"
// POST   /auth/upload   {file} "User updated"
// POST   /auth/edit     {username, campus, course} "User updated"
// GET    /auth/logout "OK message"
// GET    /auth/loggedin "User logged"

const authenticationControllers = require("./../controllers/authentication");
const routeGuardMiddleware = require("./../middleware/route-guard");

router.post(
  "/auth/login",
  routeGuardMiddleware(false),
  authenticationControllers.signIn
);
router.post(
  "/auth/signup",
  routeGuardMiddleware(false),
  authenticationControllers.signUp
);
router.post(
  "/auth/logout",
  routeGuardMiddleware(true),
  authenticationControllers.signOut
);
router.get(
  "/auth/loggedin",
  routeGuardMiddleware(true),
  authenticationControllers.verify
);
router.post(
  "/auth/upload",
  routeGuardMiddleware(true),
  authenticationControllers.upload
);

module.exports = router;