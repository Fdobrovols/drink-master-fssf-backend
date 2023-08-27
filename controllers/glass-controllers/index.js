import getGlassList from "./getGlassList.js";

import { ctrlrWrapper } from "../../decorators/index.js";

export default { getGlassList: ctrlrWrapper(getGlassList) };
