const Joi = require("joi");

const objectId = (
  value: any,
  helpers: any
) => {
  if (
    !value.match(/^[0-9a-fA-F]{24}$/)
  ) {
    return helpers.message(
      '"{{#label}}" must be a valid mongo id'
    );
  }
  return value;
};

const password = (
  value: any,
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

const createUser = {
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .required()
      .custom(password),
    name: Joi.string().required(),
    role: Joi.string()
      .required()
      .valid("user", "admin"),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId:
      Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId:
      Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password:
        Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId:
      Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
