import { HttpError } from "../helpers";

const emptyBodyMsg = "All fields must be filled";

const isBodyEmpty = (errStatus, errMessage = emptyBodyMsg) => {
  return (req, _, next) => {
    const { length } = Object.keys(req.body);

    if (!length) {
      next(HttpError(errStatus, errMessage));
    }

    next();
  };
};

export default isBodyEmpty;
