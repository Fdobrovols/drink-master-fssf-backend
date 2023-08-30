import { Router } from "express";
import ingredientsControllers from "../../../controllers/ingredients-controllers/index.js";

const ingredientsRouter = Router();

ingredientsRouter.get("/:ingredient", ingredientsControllers.getRecipeByIngredient);

ingredientsRouter.get("/list", ingredientsControllers.getListOfIngredients);

export default ingredientsRouter;
