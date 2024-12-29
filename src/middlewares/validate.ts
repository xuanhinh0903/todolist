const ApiError = require("../utils/apiError");
const pick = require("../utils/pick");
const HttpStatus = require("http-status");
const joi = require("joi");

/**
 * Validate express request based on provided schema
 * @param {Object} schema - the Joi schema object
 * @param {Object} req - the express request object
 * @param {Object} res - the express response object
 * @param {function} next - the express next middleware function
 * @return {Promise<void>}'
 */

const validateMiddleware =
  (schema: any) =>
  (req: any, res: any, next: any) => {
    const validSchema = pick(schema, [
      "params",
      "query",
      "body",
    ]);
    const object = pick(
      req,
      Object.keys(validSchema)
    );
    const name = joi.compile(
      validSchema
    );
    console.log(name);
    const {value, error} = joi
      .compile(validSchema)
      .prefs({
        errors: {label: "key"},
        abortEarly: false, //có dừng lại khi gặp lỗi không
      })
      .validate(object);

    if (error) {
      const errorMessage = error.details
        .map(
          (details: any) =>
            details.message
        )
        .join(", ");
      return next(
        new ApiError(
          HttpStatus.BAD_REQUEST,
          errorMessage
        )
      );
    }
    Object.assign(req, value);
    return next();
  };

module.exports = validateMiddleware;
