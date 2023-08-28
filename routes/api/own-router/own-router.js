import { Router } from "express";
import { authenticate } from "../../../middlewares/index.js";
import ownControllers from "../../../controllers/own-controllers/index.js";

const ownRouter = Router();

ownRouter.use(authenticate);

ownRouter.post("/", ownControllers.addOwnRecipe);

ownRouter.delete("/:id", ownControllers.removeOwnRecipe);

ownRouter.get("/", ownControllers.getOwnRecipes);

export default ownRouter;
