import fs from "fs/promises";

import { User } from "../../models/user/index.js";
import { HttpError, cloudinary } from "../../helpers/index.js";

const updateUser = async (req, res) => {
  let user = null;
  const { _id, name: userName } = req.user;
  const { name } = req.body;
  if (!req.file) {
    user = await User.findByIdAndUpdate(_id, { name }, { new: true });
    if (!user) {
      throw HttpError(404);
    }
    return res.json({ name, avatarURL: user.avatarURL });
  }

  const { path: tempUpload, originalname } = req.file;

  try {
    const fileName = `${_id}_${originalname}`;
    const { url: avatarURL } = await cloudinary.uploader.upload(tempUpload, {
      folder: "avatars",
      public_id: fileName,
      aspect_ratio: "1.0",
      gravity: "face",
      height: 200,
      zoom: "0.75",
      crop: "thumb",
      radius: "max",
    });
    await fs.unlink(tempUpload);

    if (name !== userName) {
      console.log("update avatar and name");
      user = await User.findByIdAndUpdate(_id, { avatarURL, name }, { new: true });
    } else {
      console.log("update only avatar");
      user = await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });
    }

    if (!user) {
      throw HttpError(404);
    }

    res.json({ avatarURL: user.avatarURL, name: user.name });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

export default updateUser;
