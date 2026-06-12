# API Copa Mundial FIFA

API REST construida con **Node.js**, **Express**, **SQLite** y **Zod**.

## Requisitos

- Node.js 22 o superior
- pnpm

## Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/JoshuaObando/mundiales-api.git
cd mundiales-api

# 2. Instalar dependencias
pnpm install

# 3. Crear y poblar la base de datos (solo la primera vez)
pnpm run createdb

# 4. Iniciar el servidor
pnpm start
```

## Rutas disponibles

| Ruta | Descripción |
|------|-------------|
| `GET /` | Información general de la API |
| `GET /mundiales` | Lista todos los slugs |
| `GET /mundiales?include=full` | Lista con datos completos |
| `GET /mundial/:slug` | Datos de una edición específica |
| `GET /campeon/:pais` | Slugs de ediciones ganadas por ese país |
| `GET /random` | Una edición al azar |
| `GET /search/:text` | Búsqueda por texto (mínimo 3 caracteres) |
| `GET /imagenes/:archivo` | Imagen de la edición |

## Códigos de respuesta

| Código | Significado |
|--------|-------------|
| `200` | OK — petición exitosa |
| `400` | Bad Request — validación Zod falló |
| `404` | Not Found — recurso o ruta no existe |