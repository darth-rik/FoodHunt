import React from "react";

const CardItems = ({
	item: {
		title,
		servings,
		readyInMinutes,
		healthScore,
		spoonacularScore,
		image,
	},
}) => {
	return (
		<div className='rounded-xl shadow-xl overflow-hidden mb-8 max-h-screen '>
			<img className='mb-4 min-w-full' src={image} alt='' />
			<h1 className='text-center text-2xl font-semibold mx-4 mb-3'>{title}</h1>
			<div className=' flex justify-between   font-light  mb-4 border-b-2 border-gray-100 p-4'>
				<p>
					Servings: <span className='font-bold text-red-600'>{servings}</span>{" "}
				</p>

				<p>
					Health-Score:{" "}
					<span className='font-bold text-yellow-500'>{healthScore}</span>
				</p>
				<p>
					Time:{" "}
					<span className='font-bold text-blue-500'>{readyInMinutes} mins</span>
				</p>
			</div>
		</div>
	);
};

export default CardItems;
