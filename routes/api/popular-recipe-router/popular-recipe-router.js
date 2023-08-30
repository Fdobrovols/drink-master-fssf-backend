import { Router } from "express";

import popularRecipeController from "../../../controllers/popular-recipe-controllers/index.js";

const popularRecipeRouter = Router();

popularRecipeRouter.get("/", popularRecipeController.getPopularRecipes);

export default popularRecipeRouter;
