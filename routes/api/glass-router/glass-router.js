import { Router } from "express";
import middlewares from "../../../middlewares/index.js";

import glassControllers from "../../../controllers/glass-controllers/index.js";

const glassRouter = Router();

glassRouter.use(middlewares.authenticate);

glassRouter.get("/", glassControllers.getGlassList);

export default glassRouter;
