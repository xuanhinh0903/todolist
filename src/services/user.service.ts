const httpStatus = require("http-status");

interface UserBody {
  email: string;
  [key: string]: any;
}

const createNewUser = async (
  userBody: UserBody
): Promise<any> => {
  if (
    await User.isEmailTaken(
      userBody.email
    )
  ) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Email already taken"
    );
  }
  return User.create(userBody);
};

module.exports = {
  createNewUser,
};
