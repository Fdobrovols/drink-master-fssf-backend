import { Schema, model } from "mongoose";

import hooks from "../hooks/index.js";

const ingredientSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ingredientThumb: {
    type: String,
    required: true,
  },
  "thumb-medium": {
    type: String,
    required: true,
  },
  "thumb-small": {
    type: String,
    required: true,
  },
});

ingredientSchema.pre("findOneAndUpdate", hooks.handleUpdateValidate);

ingredientSchema.post("save", hooks.handleErrorSave);

ingredientSchema.post("findOneAndUpdate", hooks.handleErrorSave);

const Ingredient = model("ingredient", ingredientSchema);

export default Ingredient;
