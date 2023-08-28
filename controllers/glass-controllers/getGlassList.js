import { glassList } from "../../constants/index.js";

const successStatus = 200;

const getGlassList = (_, res) => {
  res.status(successStatus).json(glassList);
};

export default getGlassList;
