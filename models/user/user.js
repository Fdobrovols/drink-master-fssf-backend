import { Schema, model } from "mongoose";

import hooks from "../hooks/index.js";
import { emailRegexp } from "../../constants/index.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for user"],
    },
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
    subscribe: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("findOneAndUpdate", hooks.handleUpdateValidate);

userSchema.post("save", hooks.handleErrorSave);
userSchema.post("findOneAndUpdate", hooks.handleErrorSave);

const User = model("user", userSchema);

export default User;
