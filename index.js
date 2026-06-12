import express from "express";
import { cwd } from "node:process";

import { getAll }       from "./routes/mundiales/getAll.js";
import { getBySlug }    from "./routes/mundiales/getBySlug.js";
import { getByCampeon } from "./routes/mundiales/getByCampeon.js";
import { getRandom }    from "./routes/mundiales/getRandom.js";
import { search }       from "./routes/mundiales/search.js";

const app = express();
app.enable("strict routing");

const HOST = "localhost";
const PORT = 4321;

// Información de la API
app.get("/", (req, res) => {
  res.json({
    nombre:  "API Copa Mundial FIFA",
    version: "1.0.0",
    rutas: [
      { ruta: "/mundiales",         descripcion: "Lista todos los slugs" },
      { ruta: "/mundial/:slug",     descripcion: "Datos de una edicion por slug" },
      { ruta: "/campeon/:pais",     descripcion: "Slugs de ediciones ganadas por ese pais" },
      { ruta: "/random",            descripcion: "Una edicion al azar" },
      { ruta: "/search/:text",      descripcion: "Busqueda por texto (minimo 3 caracteres)" },
      { ruta: "/imagenes/:archivo", descripcion: "Imagen de una edicion" },
    ],
  });
});

// Rutas
app.get("/mundiales",     getAll);
app.get("/mundial/:slug", getBySlug);
app.get("/campeon/:pais", getByCampeon);
app.get("/random",        getRandom);
app.get("/search/:text",  search);

// Archivos estáticos — imágenes
app.use("/imagenes", express.static(`${cwd()}/public/imagenes`));

// Catch-all → 404
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}/`);
});