import * as mundial from "../../data/mundiales.js";

export const getRandom = (req, res) => {
  const item = mundial.getRandom();
  res.json(item);
};