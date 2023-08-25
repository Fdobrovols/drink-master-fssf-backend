const handleErrorSave = (error, _, next) => {
  const { code, name } = error;

  error.status = code === 11000 && name === "MongoServerError" ? 409 : 400;

  next();
};

export default handleErrorSave;
