import isBodyEmpty from "./isBodyEmpty.js";
import isValidId from "./isValideId.js";
import authenticate from "./authenticate.js";
import upload from "./upload.js";

import { ctrlrWrapper } from "../decorators/index.js";

export default {
  isBodyEmpty,
  isValidId,
  authenticate: ctrlrWrapper(authenticate),
  upload,
};
