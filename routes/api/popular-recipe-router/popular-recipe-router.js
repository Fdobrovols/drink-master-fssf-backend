import { Router } from "express";

const popularRecipeRouter = Router();

popularRecipeRouter.get("/", (req, res, next) => {
  res.json({ message: "its getPopular route" });
});

export default popularRecipeRouter;
