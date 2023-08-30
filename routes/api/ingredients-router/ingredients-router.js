import { Router } from "express";
import ingredientsControllers from "../../../controllers/ingredients-controllers/index.js";

const ingredientsRouter = Router();

ingredientsRouter.get("/list", ingredientsControllers.getListOfIngredients);

ingredientsRouter.get("/:ingredient", ingredientsControllers.getRecipeByIngredient);

export default ingredientsRouter;
