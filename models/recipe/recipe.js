import { Schema, model } from "mongoose";

import hooks from "../hooks/index.js";
import { categoryList, glassList, alcoholicValues } from "../../constants/index.js";

const recipeSchema = new Schema(
  {
    drink: { type: String, required: [true, "Set coctail`s name"] },
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
      required: [true, "Set 'alcoholic' field"],
      enum: alcoholicValues,
    },
    glass: {
      type: String,
      required: [true, "Set type of glass"],
      enum: glassList,
    },
    instructions: { type: String, required: [true, "Set instruction"] },
    instructionsUK: String,
    instructionsES: String,
    instructionsDE: String,
    instructionsFR: String,
    instructionsIT: String,
    instructionsPL: String,
    instructionsRU: String,
    drinkThumb: { type: String, default: null },
    ingredients: [
      {
        title: { type: String, required: [true, "Set ingredient`s name"] },
        measure: { type: String, required: [true, "Set ingredient`s measure"] },
        ingredientThumb: { type: String, default: null },
        thumbMedium: { type: String, default: null },
        thumbSmall: { type: String, default: null },
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },

  { versionKey: false, timestamps: true }
);

recipeSchema.pre("findOneAndUpdate", hooks.handleUpdateValidate);

recipeSchema.post("save", hooks.handleErrorSave);
recipeSchema.post("findOneAndUpdate", hooks.handleErrorSave);

const Recipe = model("coctail", recipeSchema);

export default Recipe;
