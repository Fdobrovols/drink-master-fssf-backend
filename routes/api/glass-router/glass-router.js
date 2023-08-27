import { Router } from "express";

import glassControllers from "../../../controllers/glass-controllers/index.js";

const glassRouter = Router();

glassRouter.get("/", glassControllers.getGlassList);

export default glassRouter;
