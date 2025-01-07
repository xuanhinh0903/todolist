const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {timestamps: true}
);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken =
  async function (
    email: any,
    excludeUserId: any
  ) {
    const user = await this.findOne({
      email,
      _id: {$ne: excludeUserId},
    });
    return !!user;
  };

const UserModel =
  mongoose.models.User ||
  mongoose.model("User", userSchema);

module.exports = UserModel;
