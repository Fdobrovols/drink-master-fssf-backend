import fs from "fs/promises";

import { User } from "../../models/user/index.js";
import { HttpError, cloudinary } from "../../helpers/index.js";

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
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

    const user = await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });

    if (!user) {
      throw HttpError(401);
    }

    res.json({ avatarURL: user.avatarURL });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

export default updateAvatar;
