import { glassList } from "../../constants/index.js";

const successStatus = 200;

const getGlassList = (_, res) => {
  console.log(glassList);

  res.status(successStatus).json(glassList);
};

export default getGlassList;
