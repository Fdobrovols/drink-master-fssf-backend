import express from "express";

import recipesController from "../../../controllers/recipes-controllers/index.js";

const recipesRouter = express.Router();

recipesRouter.get("/category-list", recipesController.getCategoryList);

recipesRouter.get("/main-page", recipesController.getAllRecipes);

recipesRouter.get("/category/:category", recipesController.getByCategory);

recipesRouter.get("/:id", recipesController.getById);

export default recipesRouter;
