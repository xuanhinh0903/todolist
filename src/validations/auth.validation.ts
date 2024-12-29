import Joi from "joi";

export const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const password = (
  value: string,
  helpers: any
) => {
  if (value.length < 8) {
    return helpers.message(
      "password must be at least 8 characters"
    );
  }
  if (
    !value.match(/\d/) ||
    !value.match(/[a-zA-Z]/)
  ) {
    return helpers.message(
      "password must contain at least 1 letter and 1 number"
    );
  }
  return value;
};

export const register = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
  }),
};
