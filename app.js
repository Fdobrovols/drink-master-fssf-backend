import express from "express";
import logger from "morgan";
import cors from "cors";
import { authRouter } from "./routes/api/auth-router/index.js";
import { recipesRouter } from "./routes/api/recipes-router/index.js";
import { ingredientsRouter } from "./routes/api/ingredients-router/index.js";
import { searchRouter } from "./routes/api/search-router/index.js";
import { glassRouter } from "./routes/api/glass-router/index.js";
import { ownRouter } from "./routes/api/own-router/index.js";
import { favoriteRouter } from "./routes/api/favorite-router/index.js";
import { popularRecipeRouter } from "./routes/api/popular-recipe-router/index.js";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);
app.use("/api/recipes", recipesRouter);
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/search", searchRouter);
app.use("/api/glass", glassRouter);
app.use("/api/own", ownRouter);
app.use("/api/favorite", favoriteRouter);
app.use("/api/popular-recipe", popularRecipeRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
