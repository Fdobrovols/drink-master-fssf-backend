import { Router } from "express";
import { searchByDrinkOrIngredient } from "../../../controllers/search-controllers/index.js";

const searchRouter = Router();

searchRouter.get("/", searchByDrinkOrIngredient);

export default searchRouter;
