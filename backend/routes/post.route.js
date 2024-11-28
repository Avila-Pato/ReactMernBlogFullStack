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

//Enrutador para definir rutas y los controladores asociados
const router = express.Router();


// Definiedo las rutas un crud basicamente
router.get("/upload-auth", uploadAuth);

router.get("/", getPosts); // obtiene todos los post 
router.get("/:slug", increaseVisit, getPost); // devuelve los datos de una publicacion basada en su slung pero antes de esto el middleware increaseViSIR INCREMETNA EL CONTADOR DE VISITAS DE LA PUBLICACION
router.post("/", createPost); // crea un post
router.delete("/:id", deletePost); // Borra por su id
router.patch("/feature", featurePost); // trar los destacados

export default router;