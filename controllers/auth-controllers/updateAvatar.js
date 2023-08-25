import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";
import "dotenv/config";

import { User } from "../../models/user/index.js";
import { HttpError } from "../../helpers/index.js";

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_SECRET, CLOURINARY_API_KEY } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOURINARY_API_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const updateAvatar = async (req, res) => {
  // console.log(cloudinary);

  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  // await avatarHandler(tempUpload);

  const fileName = `${_id}_${originalname}`;

  // const resultUpload = path.join(tempUpload, fileName);

  // await fs.rename(tempUpload, resultUpload);

  const { url } = await cloudinary.uploader.upload(
    tempUpload,
    {
      public_id: fileName,
      width: 250,
      height: 250,
    },
    function (error, result) {
      // console.log(result);
      return result;
    }
  );

  await fs.unlink(tempUpload);

  const user = await User.findByIdAndUpdate(_id, { avatarURL: url }, { new: true });

  if (!user) {
    throw HttpError(401);
  }

  res.json({ avatarURL: user.avatarURL });
};

export default updateAvatar;
