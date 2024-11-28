import Post from "../models/post.model.js";

const increaseVisit = async (req, res, next) => {
  const slug = req.params.slug;

  // $inc: es un operador de mongoosedb para incrementar valores
  await Post.findOneAndUpdate({ slug }, { $inc: { visit: 1 } }); //  busca una publicación con el slug en el que se encuentra y aumenta su campo visit en 1

    // luego apsa a express el siguiente controlador en este caso getPost para obtener el slug solicitado..
  next();
};

export default increaseVisit;