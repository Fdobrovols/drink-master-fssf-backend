import { Schema, model } from "mongoose";

import hooks from "../hooks/index.js";
import {
  categoryList,
  glassList,
  alcoholicValues,
} from "../../constants/index.js";

const recipeSchema = new Schema(
  {
    drink: {
      type: String,
      required: [true, "Set coctail`s name"],
    },
    drinkAlternate: { type: String, default: null },
    tags: { type: String, default: null },
    video: { type: String, default: null },
    category: {
      type: String,
      required: [true, "Set coctail`s category"],
      enum: categoryList,
      default: "Other/Unknown",
    },
    IBA: { type: String, default: null },
    alcoholic: {
      type: String,
      enum: alcoholicValues,
    },
    glass: {
      type: String,
      required: [true, "Set type of glass"],
      enum: glassList,
    },
    instructions: {
      type: String,
      required: [true, "Set instruction"],
    },
    instructionsUK: { type: String, default: null },
    instructionsES: { type: String, default: null },
    instructionsDE: { type: String, default: null },
    instructionsFR: { type: String, default: null },
    instructionsIT: { type: String, default: null },
    instructionsPL: { type: String, default: null },
    instructionsRU: { type: String, default: null },
    drinkThumb: { type: String, default: null },
    ingredients: [
      {
        title: {
          type: String,
          required: [true, "Set ingredient`s name"],
        },
        measure: {
          type: String,
          default: null,
        },
        ingredientThumb: { type: String, default: null },
        "thumb-medium": { type: String, default: null },
        "thumb-small": { type: String, default: null },
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    // private: { type: Boolean, default: false },
    favorite: [{ type: Schema.Types.ObjectId, ref: "user" }],
    about: { type: String, default: null },
  },

  { versionKey: false, timestamps: true }
);

recipeSchema.pre("findOneAndUpdate", hooks.handleUpdateValidate);

recipeSchema.post("save", hooks.handleErrorSave);
recipeSchema.post("findOneAndUpdate", hooks.handleErrorSave);

const Recipe = model("coctail", recipeSchema);

export default Recipe;
