import { categoryList } from "../../constants/index.js";

const getCategoryList = (_, res) => {
  res.status(200).json(categoryList.sort());
};

export default getCategoryList;
