import { Router } from "express";
import middlewares from "../../../middlewares/index.js";
import ingredientsControllers from "../../../controllers/ingredients-controllers/index.js";

const ingredientsRouter = Router();

ingredientsRouter.use(middlewares.authenticate);

ingredientsRouter.get("/list", ingredientsControllers.getListOfIngredients);

ingredientsRouter.get(
  "/:ingredient",
  ingredientsControllers.getRecipeByIngredient
);

export default ingredientsRouter;
