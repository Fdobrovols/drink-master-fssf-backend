import express from "express";

import { default as recipesController } from "../../../controllers/recipes-controllers/index.js";

const recipesRouter = express.Router();

recipesRouter.get("/category-list", recipesController.getCategoryList);

recipesRouter.get("/main-page", recipesController.getAllRecipes);

recipesRouter.get("/:category", recipesController.getByCategory);

recipesRouter.get("/:id", recipesController.getById);

export default recipesRouter;
