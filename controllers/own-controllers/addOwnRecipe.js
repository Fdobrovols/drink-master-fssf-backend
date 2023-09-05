import fs from "fs/promises";
import { Recipe } from "../../models/recipe/index.js";
import { cloudinary } from "../../helpers/index.js";

const addOwnRecipe = async (req, res) => {
  const { _id: owner } = req.user;
  if (!req.file) {
    const newRecipe = await Recipe.create({ ...req.body, drinkThumb: null, owner });
    return req.json(newRecipe);
  }

  const { path: tempUpload, originalname } = req.file;

  try {
    const fileName = `${owner}_${originalname}`;

    const { url: drinkThumb } = await cloudinary.uploader.upload(tempUpload, {
      folder: "recipes",
      public_id: fileName,
      quality: 60,
      crop: "fill",
    });

    const newRecipe = await Recipe.create({
      ...req.body,
      drinkThumb,
      owner,
    });

    await fs.unlink(tempUpload);

    res.status(201).json(newRecipe);
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

export default addOwnRecipe;
