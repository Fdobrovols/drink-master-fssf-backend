import { Router } from "express";

const favoriteRouter = Router();

favoriteRouter.patch("/add/:id", (req, res, next) => {
  res.json({ message: "its addToFavorite route" });
});

favoriteRouter.get("/", (req, res, next) => {
  res.json({ message: "its getFavorite route" });
});

favoriteRouter.patch("/remove/:id", (req, res, next) => {
  res.json({ message: "its removeFromFavorite route" });
});

export default favoriteRouter;
