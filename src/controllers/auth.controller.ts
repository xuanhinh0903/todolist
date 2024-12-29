import {
  Request,
  Response,
} from "express";
const {
  userService,
  tokenService,
} = require("../services");

const httpStatus = require("http-status");
/**
 * Handles registeration of user
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 * @returns {Promise<void>}
 */
const register = catchAsync(
  async (
    req: Request,
    res: Response
  ) => {
    const user =
      await userService.createUser(
        req.body
      );

    res
      .status(httpStatus.CREATED)
      .send({user, tokens: "tokens"});
    // const tokens =
    //   await tokenService.generateAuthTokens(
    //     user
    //   );
    // res
    //   .status(httpStatus.CREATED)
    //   .send({user, tokens});
  }
);

module.exports = {
  register,
};
