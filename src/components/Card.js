import React from "react";
import CardItems from "./CardItems";

const Card = ({ results, favs }) => {
	return (
		<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16   mx-8 text-black text-center mb-32'>
			{results.map((item) => (
				<CardItems key={item.id} item={item} removeFav={favs} />
			))}
		</div>
	);
};

export default Card;
