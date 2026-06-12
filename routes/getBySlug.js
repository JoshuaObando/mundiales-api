import * as mundial from "../../data/mundiales.js";

const notFound = (res, message) => {
  return res.status(404).json({ error: message });
};

export const getBySlug = (req, res) => {
  const item = mundial.getBySlug(req.params.slug);
  if (!item) return notFound(res, "Mundial no encontrado");
  res.json(item);
};