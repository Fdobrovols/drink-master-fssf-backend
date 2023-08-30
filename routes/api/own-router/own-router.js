import { Router } from "express";
import middlewares from "../../../middlewares/index.js";
import ownControllers from "../../../controllers/own-controllers/index.js";

const ownRouter = Router();

ownRouter.use(middlewares.authenticate);

ownRouter.get("/", ownControllers.getOwnRecipes);

ownRouter.post("/", middlewares.upload.single("drinkThumb"), ownControllers.addOwnRecipe);

ownRouter.delete("/:id", ownControllers.removeOwnRecipe);

export default ownRouter;
