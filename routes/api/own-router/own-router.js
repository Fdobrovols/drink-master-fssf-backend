import { Router } from "express";

const ownRouter = Router();

ownRouter.post("/", (req, res, next) => {
  res.json({ message: "its postOwnRecipe route" });
});

ownRouter.delete("/:id", (req, res, next) => {
  res.json({ message: "its deleteOwnRecipe route" });
});

ownRouter.get("/", (req, res, next) => {
  res.json({ message: "its getOwnRecipes route" });
});

export default ownRouter;
