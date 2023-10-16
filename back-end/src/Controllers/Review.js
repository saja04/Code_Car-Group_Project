const {ReviewModel} = require('../db');

const Review = async(req, res) => {
	const { puntuacion, comentario, user_id, car_id, order_id } = req.body;

	const newComment = await ReviewModel.create({
	  	puntuacion,
	  	comentario,
	 	user_id,
	  	car_id,
	  	order_id,
	});
  
	return newComment;
}


module.exports =  Review ;
