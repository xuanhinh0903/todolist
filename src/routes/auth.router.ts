import {Router} from "express";

const router = Router();

router.post(
  "/register",
  validate(authValidation.register),
  authController.register
);

export {router};
