import Jimp from "jimp";

const avatarWidth = 250;
const avatarHeight = 250;

const avatarHandler = async (imgPath) => {
  const avaImg = await Jimp.read(imgPath);
  avaImg.resize(avatarWidth, avatarHeight).write(imgPath);
};

export default avatarHandler;
