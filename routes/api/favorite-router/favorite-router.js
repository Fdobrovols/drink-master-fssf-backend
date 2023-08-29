import { Router } from "express";
import middlewares from "../../../middlewares/index.js";
import favoriteControllers from "../../../controllers/favorite-controllers/index.js";

const favoriteRouter = Router();

favoriteRouter.use(middlewares.authenticate);

favoriteRouter.patch(
  "/add/:id",
  middlewares.isValidId,
  favoriteControllers.addToFavorite
);

favoriteRouter.get("/", favoriteControllers.getFavorite);

favoriteRouter.patch(
  "/remove/:id",
  middlewares.isValidId,
  favoriteControllers.removeFromFavorite
);

export default favoriteRouter;
