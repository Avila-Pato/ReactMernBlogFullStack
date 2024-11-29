import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  uploadAuth,
  featurePost,
} from "../controllers/post.controller.js";
import increaseVisit from "../middlewares/increaseVisit.js";

// Enrutador para definir rutas y los controladores asociados
const router = express.Router();

// Ruta para autenticar la carga de archivos
router.get("/upload-auth", uploadAuth);

// Ruta para obtener todos los posts
router.get("/", getPosts);

// Ruta para obtener un post específico por su slug. Antes de obtenerlo, se incrementa el contador de visitas.
router.get("/:slug", increaseVisit, getPost); 

// Ruta para crear un nuevo post
router.post("/", createPost); 

// Ruta para borrar un post por su ID
router.delete("/:id", deletePost); 

// Ruta para marcar un post como destacado
router.patch("/feature", featurePost); 

export default router;
