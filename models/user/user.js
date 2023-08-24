import { Schema, model } from "mongoose";

import { handleUpdateValidate, handleErrorSave } from "../hooks";
import { emailRegexp } from "../../constants";

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    match: emailRegexp,
    required: [true, "Email is required"],
    unique: true,
  },
  token: { type: String },
  avatarURL: { type: String },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
  },
});

userSchema.pre("findOneAndUpdate", handleUpdateValidate);

userSchema.post("save", handleErrorSave);
userSchema.post("findOneAndUpdate", handleErrorSave);

const User = model("user", userSchema);

export default User;
