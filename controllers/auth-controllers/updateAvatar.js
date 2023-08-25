import path from "path";
import fs from "fs/promises";

import { User } from "../../models/user/index.js";
import { HttpError, avatarHandler } from "../../helpers/index.js";

const avatarsDir = path.resolve("public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  avatarHandler(tempUpload);

  const fileName = `${_id}_${originalname}`;

  const resultUpload = path.join(avatarsDir, fileName);

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", fileName);

  const user = await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });

  if (!user) {
    throw HttpError(401);
  }

  res.json({ avatarURL: user.avatarURL });
};

export default updateAvatar;
