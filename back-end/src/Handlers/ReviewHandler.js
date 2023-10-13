
const { Review } = require('../Controllers/Review'); 

const ReviewHandler = async(req, res) => {
  try {
    const newComment = await Review(req);
    res.json({ message: 'Comentario creado con éxito', comment: newComment });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el comentario', message: error.message });
  }
}

module.exports =  ReviewHandler ;

