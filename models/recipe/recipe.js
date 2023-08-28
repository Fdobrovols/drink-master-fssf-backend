import { Schema, model } from "mongoose";

import hooks from "../hooks/index.js";

const recipeSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

recipeSchema.pre("findOneAndUpdate", hooks.handleUpdateValidate);

recipeSchema.post("save", hooks.handleErrorSave);
recipeSchema.post("findOneAndUpdate", hooks.handleErrorSave);

const Recipe = model("coctail", recipeSchema);

export default Recipe;
