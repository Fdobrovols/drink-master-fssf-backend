import { Router } from "express";

import middlewares from "../../../middlewares/index.js";
import { searchByDrinkOrIngredient } from "../../../controllers/search-controllers/index.js";

const searchRouter = Router();

searchRouter.use(middlewares.authenticate);

searchRouter.get("/", searchByDrinkOrIngredient);

export default searchRouter;
