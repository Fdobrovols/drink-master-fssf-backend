import { Router } from "express";
import middlewares from "../../../middlewares/index.js";

import popularRecipeController from "../../../controllers/popular-recipe-controllers/index.js";

const popularRecipeRouter = Router();

popularRecipeRouter.use(middlewares.authenticate);

popularRecipeRouter.get("/", popularRecipeController.getPopularRecipes);

export default popularRecipeRouter;
