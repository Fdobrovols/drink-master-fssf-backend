const errStatus = 400;

const conflictErrStatus = 409;
const conflictErrCode = 11000;
const conflictErrName = "MongoServerError";

const handleErrorSave = (error, _, next) => {
  const { code, name } = error;
  console.log(error.message);

  error.status =
    code === conflictErrCode && name === conflictErrName
      ? conflictErrStatus
      : errStatus;

  next();
};

export default handleErrorSave;
