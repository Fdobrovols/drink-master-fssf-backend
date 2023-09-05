import { Router } from "express";
import middlewares from "../../../middlewares/index.js";
import ownControllers from "../../../controllers/own-controllers/index.js";
import { validateBody } from "../../../decorators/index.js";
import { recipeSchema } from "../../../schemas/recipe-schemas/index.js";

const ownRouter = Router();

ownRouter.use(middlewares.authenticate);

ownRouter.get("/", ownControllers.getOwnRecipes);

ownRouter.post(
  "/",
  middlewares.upload.single("drinkThumb"),
  validateBody(recipeSchema),
  ownControllers.addOwnRecipe
);

ownRouter.delete("/:id", middlewares.isValidId, ownControllers.removeOwnRecipe);

export default ownRouter;
