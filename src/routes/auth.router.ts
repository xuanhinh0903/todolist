const expressApp = require("express");
const authRouter = expressApp.Router();
const validate = require("../middlewares/validate");
const authValidation = require("../validations/auth.validation");
const authController = require("../controllers/auth.controller");
authRouter.post(
  "/login",
  (req: any, res: any) => {
    res.send("Login endpoint");
  }
);

authRouter.post(
  "/register",
  validate(authValidation.register),
  authController.register
);

module.exports = authRouter;
